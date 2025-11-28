# AetherPro Apriel Router

**Enterprise Agentic Engine for Apriel-1.5-15B-Thinker**

Production-grade routing service with WebSocket streaming, tool execution, and multi-pass reasoning architecture. Built for AetherAgentForge deployment.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
│   React/Next.js ←→ WebSocket/SSE ←→ TypeScript SDK              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    APRIEL ROUTER (Port 8001)                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │   Stream    │  │   3-Pass    │  │    Tool     │              │
│  │   Parser    │──│   Router    │──│  Executor   │              │
│  │             │  │             │  │             │              │
│  │ <thinking>  │  │ Pass 1: Think│ │ web_search  │              │
│  │ <tool_calls>│  │ Pass 2: Tool │ │ (SearXNG)   │              │
│  │ [FINAL]     │  │ Pass 3: Synth│ │             │              │
│  └─────────────┘  └─────────────┘  └─────────────┘              │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┴───────────────┐
              ▼                               ▼
┌─────────────────────────┐     ┌─────────────────────────┐
│   vLLM (Port 8000)      │     │   SearXNG (Port 8080)   │
│   Apriel-1.5-15B-Thinker│     │   Privacy Search API    │
│   + Custom Chat Template│     │                         │
└─────────────────────────┘     └─────────────────────────┘
```

---

## Quick Start

### 1. Prerequisites

- Docker & Docker Compose
- NVIDIA GPU with 24GB+ VRAM (for 15B model)
- NVIDIA Container Toolkit

### 2. Environment Setup

```bash
# Clone/create the directory
mkdir apriel-router && cd apriel-router

# Create .env file
cat > .env << EOF
VLLM_API_KEY=token-aetherpro
HF_TOKEN=your_huggingface_token
DEFAULT_MODEL=apriel-1.5-15b-thinker
TENSOR_PARALLEL=1
SEARXNG_SECRET=$(openssl rand -hex 32)
EOF
```

### 3. Deploy Stack

```bash
# Start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f apriel-router
```

### 4. Verify Deployment

```bash
# Health check
curl http://localhost:8001/health

# Test completion
curl -X POST http://localhost:8001/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [{"role": "user", "content": "What GPU do I need for inference?"}],
    "stream": false
  }'
```

---

## API Reference

### HTTP Endpoints

#### `POST /v1/chat/completions`

OpenAI-compatible chat completions with streaming support.

**Request:**
```json
{
  "messages": [
    {"role": "user", "content": "Your question here"}
  ],
  "model": "apriel-1.5-15b-thinker",
  "stream": true,
  "enable_tools": true
}
```

**Stream Events:**
```
data: {"type": "thinking_start"}
data: {"type": "thinking", "content": "Let me analyze..."}
data: {"type": "thinking_end", "content": "Full thinking content"}
data: {"type": "tool_calls_detected", "calls": [{"name": "web_search", "arguments": {"query": "..."}}]}
data: {"type": "tool_executing", "tool": "web_search", "arguments": {"query": "..."}}
data: {"type": "tool_result", "tool": "web_search", "result": {...}}
data: {"type": "content", "content": "Response chunk..."}
data: {"type": "done", "response": "Full response"}
data: [DONE]
```

#### `GET /health`

Health check endpoint.

#### `GET /v1/models`

List available models (OpenAI-compatible).

---

### WebSocket Endpoint

#### `ws://localhost:8001/ws/chat`

Real-time bidirectional chat with streaming responses.

**Send:**
```json
{
  "messages": [{"role": "user", "content": "Hello"}],
  "model": "apriel-1.5-15b-thinker"
}
```

**Receive:** Same event format as HTTP streaming.

---

## Frontend Integration

### React Hook (Recommended)

```tsx
import { useApriel } from './apriel-client';

function ChatComponent() {
  const {
    messages,
    isStreaming,
    thinking,
    currentToolUse,
    sendMessage,
    clearMessages,
    error,
  } = useApriel({
    baseUrl: 'http://localhost:8001',
    model: 'apriel-1.5-15b-thinker',
    enableTools: true,
  });

  return (
    <div>
      {messages.map((msg, i) => (
        <div key={i}>
          <strong>{msg.role}:</strong> {msg.content}
          {msg.thinking && (
            <details>
              <summary>Thinking</summary>
              <pre>{msg.thinking}</pre>
            </details>
          )}
        </div>
      ))}
      
      {currentToolUse && (
        <div>Searching: {currentToolUse.query}...</div>
      )}
      
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !isStreaming) {
            sendMessage(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        }}
        disabled={isStreaming}
      />
    </div>
  );
}
```

### Direct Client Usage

```typescript
import { AprielClient } from './apriel-client';

const client = new AprielClient({
  baseUrl: 'http://localhost:8001',
});

// Streaming
await client.chat(messages, {
  onThinking: (content) => updateThinkingUI(content),
  onContent: (content) => appendToResponse(content),
  onToolExecuting: (tool, args) => showToolSpinner(tool),
  onDone: (response) => finalize(response),
});

// Non-streaming
const response = await client.chatSync(messages);
console.log(response.content);
```

---

## Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `VLLM_BASE_URL` | `http://localhost:8000/v1` | vLLM server URL |
| `VLLM_API_KEY` | `token-aetherpro` | vLLM API key |
| `SEARCH_API_URL` | `http://localhost:8080/search` | SearXNG search endpoint |
| `DEFAULT_MODEL` | `apriel-1.5-15b-thinker` | Default model name |

### Token Budgets

Configured in `main.py`:

```python
TOKEN_BUDGET = {
    "thinking": 512,      # Max tokens for reasoning
    "tool_execution": 256, # Max tokens for tool responses
    "final_response": 600, # Max tokens for final answer
}
```

---

## Deployment Patterns

### Single GPU (Development)

```bash
docker-compose up -d
```

### Multi-GPU (Production)

```bash
# Set tensor parallel in .env
TENSOR_PARALLEL=2

# Scale router instances
docker-compose up -d --scale apriel-router=3
```

### Kubernetes

```yaml
# See k8s/ directory for Helm charts
helm install apriel ./k8s/apriel-router
```

---

## Troubleshooting

### vLLM not starting

```bash
# Check GPU availability
nvidia-smi

# Check vLLM logs
docker-compose logs vllm
```

### Search not working

```bash
# Verify SearXNG is running
curl http://localhost:8080/search?q=test&format=json

# Check network connectivity
docker-compose exec apriel-router curl http://searxng:8080/search?q=test&format=json
```

### Malformed responses

The router handles Apriel's official output format:
- `<thinking>...</thinking>` - Reasoning (hidden by default)
- `<tool_calls>[...]</tool_calls>` - Tool invocations
- `[BEGIN FINAL RESPONSE]...[END FINAL RESPONSE]` - User-facing output

If you see raw markers in output, ensure you're using the provided `chat_template.jinja`.

---

## License

Proprietary - AetherPro Technologies LLC

Sovereign US Infrastructure • CONUS Data Residency