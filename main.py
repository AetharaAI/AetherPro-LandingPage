"""
AetherPro Apriel Router - Enterprise Agentic Engine
====================================================
Production-grade routing service for Apriel-1.5-15B-Thinker with:
- Official HuggingFace chat template compliance
- 3-pass reasoning/tool/synthesis architecture  
- WebSocket streaming for real-time responses
- Tool execution pipeline with result injection
- Token budget management per pass

Author: AetherPro Technologies LLC
License: Proprietary - Sovereign US Infrastructure
"""

import os
import json
import asyncio
import logging
from enum import Enum
from typing import Optional, AsyncGenerator, Any
from dataclasses import dataclass, field
from datetime import datetime, timezone

import httpx
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

# ============================================================================
# Configuration
# ============================================================================

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("apriel-router")

# Environment configuration
VLLM_BASE_URL = os.getenv("VLLM_BASE_URL", "http://localhost:8000/v1")
VLLM_API_KEY = os.getenv("VLLM_API_KEY", "token-aetherpro")
SEARCH_API_URL = os.getenv("SEARCH_API_URL", "http://localhost:8080/search")
DEFAULT_MODEL = os.getenv("DEFAULT_MODEL", "apriel-1.5-15b-thinker")

# Token budgets per pass
TOKEN_BUDGET = {
    "thinking": 512,
    "tool_execution": 256,
    "final_response": 600,
}


# ============================================================================
# Apriel Chat Template (Official from Model Card)
# ============================================================================

APRIEL_SYSTEM_BASE = """You are a thoughtful and systematic AI assistant built by ServiceNow Language Models (SLAM) lab. Before providing an answer, analyze the problem carefully and present your reasoning step by step. After explaining your thought process, provide the final solution in the following format: [BEGIN FINAL RESPONSE] ... [END FINAL RESPONSE]."""

AETHERPRO_SYSTEM_EXTENSION = """

You are Apriel, Sovereign AI of AetherPro Technologies, deployed on US-sovereign infrastructure.

RESPONSE GUIDELINES:
- Maximum 300 words unless user requests more detail
- Lead with direct answer in 1-2 sentences
- Use 2-3 bullet points maximum for key details
- Be conversational, not academic
- Cite sources when using search results

TOOL USAGE:
- Use web_search ONLY when query requires current data beyond training
- Always explain what you're searching for before calling tools
"""


def build_tool_definitions(tools: list[dict]) -> str:
    """Format tools for Apriel's expected XML structure."""
    if not tools:
        return ""
    
    tool_xml = "<available_tools>\n"
    for tool in tools:
        tool_xml += json.dumps(tool, indent=2) + "\n"
    tool_xml += "</available_tools>"
    
    return f"""
You are provided with function signatures within <available_tools></available_tools> XML tags. You may call one or more functions to assist with the user query. Don't make assumptions about the arguments. Here are the available tools:
{tool_xml}

Return all function calls as a list of json objects within <tool_call></tool_call> XML tags:
<tool_calls>[{{"name": <function-name>, "arguments": <args-dict>}}]</tool_calls>
"""


def format_apriel_messages(
    messages: list[dict],
    tools: Optional[list[dict]] = None,
    add_generation_prompt: bool = True
) -> str:
    """
    Format messages using official Apriel chat template.
    Produces the exact token sequence the model expects.
    """
    output = "<|begin_of_text|>"
    
    # Build system message
    system_content = APRIEL_SYSTEM_BASE + AETHERPRO_SYSTEM_EXTENSION
    if tools:
        system_content += build_tool_definitions(tools)
    
    # Check if first message is system (override default)
    has_system = messages and messages[0].get("role") == "system"
    
    if has_system:
        system_content = messages[0].get("content", "") + "\n" + APRIEL_SYSTEM_BASE
        if tools:
            system_content += build_tool_definitions(tools)
        messages = messages[1:]
    
    output += f"<|system|>\n{system_content}\n<|end|>\n"
    
    # Format conversation turns
    for i, msg in enumerate(messages):
        role = msg.get("role", "user")
        content = msg.get("content", "")
        
        if role == "user":
            output += f"<|user|>\n{content}\n<|end|>\n"
        
        elif role == "assistant":
            output += f"<|assistant|>\n"
            
            # Add thinking if present
            if msg.get("thinking"):
                output += f"<thinking>{msg['thinking']}</thinking>\n"
            
            output += content
            
            # Add tool calls if present
            if msg.get("tool_calls"):
                tool_calls_json = json.dumps(msg["tool_calls"])
                output += f"\n<tool_calls>{tool_calls_json}</tool_calls>"
            
            output += "\n<|end|>\n<|endoftext|>"
        
        elif role == "tool" or role == "tool_result":
            tool_content = content if isinstance(content, str) else json.dumps(content)
            output += f"<|tool_result|>\n{tool_content}\n<|end|>\n"
    
    # Add generation prompt for assistant response
    if add_generation_prompt and (not messages or messages[-1].get("role") != "assistant"):
        output += "<|assistant|>\n"
    
    return output


# ============================================================================
# Stream Parser - Handles Apriel's Output Format
# ============================================================================

class ParseState(Enum):
    CONTENT = "content"
    THINKING = "thinking"
    TOOL_CALLS = "tool_calls"
    FINAL_RESPONSE = "final_response"


@dataclass
class StreamParser:
    """
    Robust parser for Apriel's streaming output.
    Handles partial tags across chunk boundaries.
    """
    buffer: str = ""
    state: ParseState = ParseState.CONTENT
    thinking_content: str = ""
    tool_calls_buffer: str = ""
    final_response: str = ""
    tokens_used: int = 0
    
    # Markers from official template
    THINKING_START = "<thinking>"
    THINKING_END = "</thinking>"
    TOOL_CALLS_START = "<tool_calls>"
    TOOL_CALLS_END = "</tool_calls>"
    FINAL_START = "[BEGIN FINAL RESPONSE]"
    FINAL_END = "[END FINAL RESPONSE]"
    
    # Artifacts to strip
    STRIP_PATTERNS = [
        "<|end|>",
        "<|endoftext|>",
        "<|assistant|>",
    ]
    
    def clean(self, text: str) -> str:
        """Remove control tokens from output."""
        for pattern in self.STRIP_PATTERNS:
            text = text.replace(pattern, "")
        return text
    
    def parse_chunk(self, chunk: str) -> list[dict]:
        """
        Process incoming chunk and emit structured events.
        Returns list of events: {type, content, ...}
        """
        self.buffer += chunk
        self.tokens_used += len(chunk.split())
        events = []
        
        while True:
            event = self._extract_next_event()
            if event is None:
                break
            events.append(event)
        
        return events
    
    def _extract_next_event(self) -> Optional[dict]:
        """Extract the next complete event from buffer."""
        
        # === THINKING STATE ===
        if self.state == ParseState.THINKING:
            end_idx = self.buffer.find(self.THINKING_END)
            if end_idx != -1:
                content = self.buffer[:end_idx]
                self.buffer = self.buffer[end_idx + len(self.THINKING_END):]
                self.thinking_content += content
                self.state = ParseState.CONTENT
                return {"type": "thinking_end", "content": self.clean(self.thinking_content)}
            
            # Check for partial end tag
            for i in range(1, len(self.THINKING_END)):
                if self.buffer.endswith(self.THINKING_END[:i]):
                    safe = self.buffer[:-i]
                    if safe:
                        self.thinking_content += safe
                        self.buffer = self.buffer[-i:]
                        return {"type": "thinking", "content": self.clean(safe)}
                    return None
            
            # Emit all as thinking
            if self.buffer:
                content = self.buffer
                self.thinking_content += content
                self.buffer = ""
                return {"type": "thinking", "content": self.clean(content)}
            return None
        
        # === TOOL CALLS STATE ===
        if self.state == ParseState.TOOL_CALLS:
            end_idx = self.buffer.find(self.TOOL_CALLS_END)
            if end_idx != -1:
                content = self.buffer[:end_idx]
                self.buffer = self.buffer[end_idx + len(self.TOOL_CALLS_END):]
                self.tool_calls_buffer += content
                self.state = ParseState.CONTENT
                
                # Parse tool calls JSON
                try:
                    tool_calls = json.loads(self.tool_calls_buffer)
                    return {"type": "tool_calls", "calls": tool_calls}
                except json.JSONDecodeError:
                    logger.warning(f"Failed to parse tool calls: {self.tool_calls_buffer}")
                    return {"type": "tool_calls_error", "raw": self.tool_calls_buffer}
            
            # Accumulate tool call content
            if self.buffer:
                self.tool_calls_buffer += self.buffer
                self.buffer = ""
            return None
        
        # === FINAL RESPONSE STATE ===
        if self.state == ParseState.FINAL_RESPONSE:
            end_idx = self.buffer.find(self.FINAL_END)
            if end_idx != -1:
                content = self.buffer[:end_idx]
                self.buffer = self.buffer[end_idx + len(self.FINAL_END):]
                self.final_response += content
                self.state = ParseState.CONTENT
                return {"type": "final_response", "content": self.clean(self.final_response)}
            
            # Emit streaming final content
            if self.buffer:
                content = self.buffer
                self.final_response += content
                self.buffer = ""
                return {"type": "content", "content": self.clean(content)}
            return None
        
        # === CONTENT STATE (default) ===
        # Check for state transitions
        
        # Thinking start
        think_idx = self.buffer.find(self.THINKING_START)
        if think_idx != -1:
            before = self.buffer[:think_idx]
            self.buffer = self.buffer[think_idx + len(self.THINKING_START):]
            self.state = ParseState.THINKING
            self.thinking_content = ""
            if before.strip():
                return {"type": "content", "content": self.clean(before)}
            return {"type": "thinking_start"}
        
        # Tool calls start
        tool_idx = self.buffer.find(self.TOOL_CALLS_START)
        if tool_idx != -1:
            before = self.buffer[:tool_idx]
            self.buffer = self.buffer[tool_idx + len(self.TOOL_CALLS_START):]
            self.state = ParseState.TOOL_CALLS
            self.tool_calls_buffer = ""
            if before.strip():
                return {"type": "content", "content": self.clean(before)}
            return {"type": "tool_calls_start"}
        
        # Final response start
        final_idx = self.buffer.find(self.FINAL_START)
        if final_idx != -1:
            before = self.buffer[:final_idx]
            self.buffer = self.buffer[final_idx + len(self.FINAL_START):]
            self.state = ParseState.FINAL_RESPONSE
            self.final_response = ""
            if before.strip():
                return {"type": "content", "content": self.clean(before)}
            return {"type": "final_start"}
        
        # Check for partial tag at end of buffer
        all_tags = [self.THINKING_START, self.TOOL_CALLS_START, self.FINAL_START]
        for tag in all_tags:
            for i in range(1, len(tag)):
                if self.buffer.endswith(tag[:i]):
                    safe = self.buffer[:-i]
                    if safe.strip():
                        self.buffer = self.buffer[-i:]
                        return {"type": "content", "content": self.clean(safe)}
                    return None
        
        # No tags found, emit as content
        if self.buffer.strip():
            content = self.buffer
            self.buffer = ""
            return {"type": "content", "content": self.clean(content)}
        
        self.buffer = ""
        return None
    
    def flush(self) -> list[dict]:
        """Flush remaining buffer content."""
        events = []
        if self.buffer.strip():
            content = self.clean(self.buffer)
            if self.state == ParseState.THINKING:
                events.append({"type": "thinking", "content": content})
            elif self.state == ParseState.FINAL_RESPONSE:
                events.append({"type": "content", "content": content})
            else:
                events.append({"type": "content", "content": content})
        self.buffer = ""
        return events


# ============================================================================
# Tool Definitions & Execution
# ============================================================================

DEFAULT_TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "web_search",
            "description": "Search the web for current information, recent news, or facts not in training data.",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "The search query. Be specific and concise.",
                    },
                    "num_results": {
                        "type": "integer",
                        "description": "Number of results (1-10). Default 5.",
                        "default": 5,
                    },
                },
                "required": ["query"],
            },
        },
    },
]


async def execute_tool(tool_name: str, arguments: dict) -> dict:
    """Execute a tool and return results."""
    logger.info(f"Executing tool: {tool_name} with args: {arguments}")
    
    if tool_name == "web_search":
        return await execute_web_search(arguments)
    
    return {"error": f"Unknown tool: {tool_name}"}


async def execute_web_search(arguments: dict) -> dict:
    """Execute web search via SearXNG or configured search API."""
    query = arguments.get("query", "")
    num_results = arguments.get("num_results", 5)
    
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.get(
                SEARCH_API_URL,
                params={
                    "q": query,
                    "format": "json",
                    "categories": "general",
                    "engines": "google,bing,duckduckgo",
                },
            )
            
            if response.status_code == 200:
                data = response.json()
                results = data.get("results", [])[:num_results]
                
                # Format results for context injection
                formatted = []
                for r in results:
                    formatted.append({
                        "title": r.get("title", ""),
                        "url": r.get("url", ""),
                        "snippet": r.get("content", "")[:500],
                    })
                
                return {
                    "success": True,
                    "query": query,
                    "results": formatted,
                    "count": len(formatted),
                }
            else:
                return {"success": False, "error": f"Search API returned {response.status_code}"}
    
    except Exception as e:
        logger.error(f"Search error: {e}")
        return {"success": False, "error": str(e)}


# ============================================================================
# vLLM Client
# ============================================================================

async def stream_vllm_completion(
    prompt: str,
    model: str = DEFAULT_MODEL,
    max_tokens: int = 1024,
    temperature: float = 0.7,
    stop: Optional[list[str]] = None,
) -> AsyncGenerator[str, None]:
    """Stream completions from vLLM server."""
    
    payload = {
        "model": model,
        "prompt": prompt,
        "max_tokens": max_tokens,
        "temperature": temperature,
        "top_p": 0.92,
        "repetition_penalty": 1.15,
        "stream": True,
    }
    
    if stop:
        payload["stop"] = stop
    
    async with httpx.AsyncClient(timeout=120.0) as client:
        async with client.stream(
            "POST",
            f"{VLLM_BASE_URL}/completions",
            json=payload,
            headers={"Authorization": f"Bearer {VLLM_API_KEY}"},
        ) as response:
            if response.status_code != 200:
                error = await response.aread()
                raise HTTPException(status_code=response.status_code, detail=error.decode())
            
            async for line in response.aiter_lines():
                if line.startswith("data: "):
                    data = line[6:]
                    if data == "[DONE]":
                        break
                    try:
                        chunk = json.loads(data)
                        text = chunk.get("choices", [{}])[0].get("text", "")
                        if text:
                            yield text
                    except json.JSONDecodeError:
                        continue


# ============================================================================
# Agentic Router - 3-Pass Architecture
# ============================================================================

@dataclass
class RouterState:
    """Tracks state across multi-pass generation."""
    messages: list[dict] = field(default_factory=list)
    thinking: str = ""
    tool_results: list[dict] = field(default_factory=list)
    final_response: str = ""
    total_tokens: int = 0
    pass_count: int = 0
    max_passes: int = 5  # Prevent infinite loops


class AprielRouter:
    """
    Enterprise agentic router for Apriel model.
    Handles reasoning → tool execution → synthesis pipeline.
    """
    
    def __init__(
        self,
        model: str = DEFAULT_MODEL,
        tools: Optional[list[dict]] = None,
        enable_tools: bool = True,
    ):
        self.model = model
        self.tools = tools or (DEFAULT_TOOLS if enable_tools else [])
        self.enable_tools = enable_tools
    
    async def route(
        self,
        messages: list[dict],
        stream_callback: Optional[callable] = None,
    ) -> AsyncGenerator[dict, None]:
        """
        Main routing loop with streaming output.
        Yields events: {type, content, ...}
        """
        state = RouterState(messages=messages.copy())
        
        while state.pass_count < state.max_passes:
            state.pass_count += 1
            logger.info(f"Router pass {state.pass_count}")
            
            # Build prompt with current state
            prompt = format_apriel_messages(
                state.messages,
                tools=self.tools if self.enable_tools else None,
            )
            
            # Inject tool results if any
            if state.tool_results:
                for result in state.tool_results:
                    prompt += f"<|tool_result|>\n{json.dumps(result)}\n<|end|>\n"
                prompt += "<|assistant|>\n"
                state.tool_results = []
            
            # Stream generation
            parser = StreamParser()
            pending_tool_calls = []
            got_final = False

            # Determine token budget based on pass
            budget_key = "thinking" if state.pass_count == 1 else "final_response"

            async for chunk in stream_vllm_completion(
                prompt=prompt,
                model=self.model,
                max_tokens=TOKEN_BUDGET[budget_key],
                stop=["<|end|>", "<|endoftext|>", "<|user|>"],
            ):
                events = parser.parse_chunk(chunk)
                
                for event in events:
                    event_type = event.get("type")
                    
                    # Yield thinking events
                    if event_type in ("thinking", "thinking_start", "thinking_end"):
                        yield event
                        if event_type == "thinking_end":
                            state.thinking = event.get("content", "")
                    
                    # Collect tool calls
                    elif event_type == "tool_calls":
                        pending_tool_calls = event.get("calls", [])
                        yield {"type": "tool_calls_detected", "calls": pending_tool_calls}
                    
                    # Final response
                    elif event_type in ("final_start", "final_response", "content"):
                        yield event
                        if event_type == "final_response":
                            state.final_response = event.get("content", "")
                            got_final = True
            
            # Flush parser
            for event in parser.flush():
                yield event
            
            # Execute tools if detected
            if pending_tool_calls:
                for call in pending_tool_calls:
                    tool_name = call.get("name")
                    tool_args = call.get("arguments", {})
                    
                    yield {"type": "tool_executing", "tool": tool_name, "arguments": tool_args}
                    
                    result = await execute_tool(tool_name, tool_args)
                    state.tool_results.append({
                        "tool": tool_name,
                        "result": result,
                    })
                    
                    yield {"type": "tool_result", "tool": tool_name, "result": result}
                
                # Add assistant message with tool calls to history
                state.messages.append({
                    "role": "assistant",
                    "content": "",
                    "thinking": state.thinking,
                    "tool_calls": pending_tool_calls,
                })
                
                # Continue to next pass
                continue
            
            # No tools called, we're done
            if got_final or state.final_response:
                yield {"type": "done", "response": state.final_response}
                break
            
            # Safety: if no progress, break
            yield {"type": "done", "response": parser.final_response or ""}
            break
        
        logger.info(f"Router completed in {state.pass_count} passes")


# ============================================================================
# FastAPI Application
# ============================================================================

app = FastAPI(
    title="AetherPro Apriel Router",
    description="Enterprise agentic routing service for Apriel-1.5-15B-Thinker",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# === Request/Response Models ===

class Message(BaseModel):
    role: str
    content: str
    thinking: Optional[str] = None
    tool_calls: Optional[list[dict]] = None


class ChatRequest(BaseModel):
    messages: list[Message]
    model: Optional[str] = DEFAULT_MODEL
    temperature: Optional[float] = 0.7
    max_tokens: Optional[int] = 1024
    enable_tools: Optional[bool] = True
    stream: Optional[bool] = True


class ChatResponse(BaseModel):
    id: str
    model: str
    thinking: Optional[str] = None
    content: str
    tool_calls: Optional[list[dict]] = None
    usage: dict


# === HTTP Endpoints ===

@app.get("/health")
async def health():
    """Health check endpoint."""
    return {"status": "healthy", "model": DEFAULT_MODEL, "timestamp": datetime.now(timezone.utc).isoformat()}


@app.get("/v1/models")
async def list_models():
    """List available models (OpenAI-compatible)."""
    return {
        "data": [
            {"id": DEFAULT_MODEL, "object": "model", "owned_by": "aetherpro"},
        ]
    }


@app.post("/v1/chat/completions")
async def chat_completions(request: ChatRequest):
    """
    OpenAI-compatible chat completions endpoint.
    Supports streaming via SSE.
    """
    router = AprielRouter(
        model=request.model or DEFAULT_MODEL,
        enable_tools=request.enable_tools,
    )
    
    messages = [m.model_dump() for m in request.messages]
    
    if request.stream:
        async def generate():
            async for event in router.route(messages):
                yield f"data: {json.dumps(event)}\n\n"
            yield "data: [DONE]\n\n"
        
        return StreamingResponse(
            generate(),
            media_type="text/event-stream",
            headers={
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
            },
        )
    
    # Non-streaming: collect all events
    thinking = ""
    content = ""
    tool_calls = []
    
    async for event in router.route(messages):
        if event.get("type") == "thinking_end":
            thinking = event.get("content", "")
        elif event.get("type") == "content":
            content += event.get("content", "")
        elif event.get("type") == "final_response":
            content = event.get("content", "")
        elif event.get("type") == "tool_calls_detected":
            tool_calls = event.get("calls", [])
    
    return ChatResponse(
        id=f"chatcmpl-{datetime.now(timezone.utc).timestamp()}",
        model=request.model or DEFAULT_MODEL,
        thinking=thinking if thinking else None,
        content=content,
        tool_calls=tool_calls if tool_calls else None,
        usage={"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0},
    )


# === WebSocket Endpoint ===

@app.websocket("/ws/chat")
async def websocket_chat(websocket: WebSocket):
    """
    WebSocket endpoint for real-time bidirectional chat.
    Enables streaming responses and live tool execution updates.
    """
    await websocket.accept()
    logger.info("WebSocket connection established")
    
    router = AprielRouter(enable_tools=True)
    
    try:
        while True:
            # Receive message from client
            data = await websocket.receive_json()
            
            messages = data.get("messages", [])
            model = data.get("model", DEFAULT_MODEL)
            
            if not messages:
                await websocket.send_json({"type": "error", "message": "No messages provided"})
                continue
            
            # Update router model if specified
            router.model = model
            
            # Stream response events
            async for event in router.route(messages):
                await websocket.send_json(event)
            
    except WebSocketDisconnect:
        logger.info("WebSocket disconnected")
    except Exception as e:
        logger.error(f"WebSocket error: {e}")
        try:
            await websocket.send_json({"type": "error", "message": str(e)})
            await websocket.close()
        except:
            pass


# === Direct Completion Endpoint (for testing) ===

@app.post("/v1/completions")
async def completions(
    prompt: str,
    model: Optional[str] = DEFAULT_MODEL,
    max_tokens: Optional[int] = 512,
    temperature: Optional[float] = 0.7,
    stream: Optional[bool] = False,
):
    """Direct completion endpoint (bypasses chat formatting)."""
    
    if stream:
        async def generate():
            async for chunk in stream_vllm_completion(
                prompt=prompt,
                model=model,
                max_tokens=max_tokens,
                temperature=temperature,
            ):
                yield f"data: {json.dumps({'text': chunk})}\n\n"
            yield "data: [DONE]\n\n"
        
        return StreamingResponse(generate(), media_type="text/event-stream")
    
    # Non-streaming
    full_response = ""
    async for chunk in stream_vllm_completion(
        prompt=prompt,
        model=model,
        max_tokens=max_tokens,
        temperature=temperature,
    ):
        full_response += chunk
    
    return {"text": full_response, "model": model}


# ============================================================================
# Entry Point
# ============================================================================

if __name__ == "__main__":
    import uvicorn
    
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8001,
        reload=True,
        log_level="info",
    )