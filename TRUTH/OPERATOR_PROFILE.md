# Operator Profile

Operator: Cory Gibson

## Operator Identity

- Legal name: Cory Gibson ("Cory", no "e")
- Role: solo founder, owner, CEO, and creator of AetherPro Technologies
- Background: master electrician, licensed electrical contractor, and former electrical project manager with roughly 15 years in the electrical field across commercial, industrial, residential, custom-home, and public-sector work
- Prior experience includes HNF Electric, Gaylor Electric, and large-scale field/project responsibility before going all-in on AetherPro full time
- Builds sovereign, self-hosted AI infrastructure, voice systems, agent harnesses, identity systems, and operator tooling
- Uses Codex, CLI agents, and voice tooling as a daily production workflow, not as an experiment

## Operator Preferences

- Prefers direct communication, first-principles reasoning, and systems that actually ship
- Expects infrastructure to be owned, inspectable, modifiable, and verified
- Has low tolerance for repeated re-explanation of stable operator facts across sessions
- Uses this system as a personal operator core, not a novelty assistant
- Prefers a single unified system that handles the full operator workflow rather than multiple disconnected tools
- Expects a high level of professionalism and reliability so operator reputation and company integrity are preserved

## Company Truth

- AetherPro Technologies is an Indiana LLC with paperwork filed in May 2025
- The company is a legitimate operating business with Mercury banking, EIN, DUNS registration, SAM.gov registration, and a CAGE code assigned in December 2025
- AetherPro Technologies was accepted into the OVHcloud AI Accelerator Program in June 2025
- In February 2026, AetherPro was promoted to the scale tier, increasing cloud credits from $1,000 per month to $10,000 per month
- As of 2026-03-21, estimated monthly spend is about $7,500, and unused credits roll over month to month
- The OVHcloud AI Accelerator Program is expected to end in June 2026
- There are 8 operational production VMs deployed in OVHcloud: 4 GPU instances and 4 CPU instances
- `L4-360` hosts the full voice stack, including batch and realtime ASR/TTS
- `L40S-90` hosts the LiteLLM-based Aether gateway and 1-2 smaller LLMs served through vLLM, qwen3.6-35b is the current model running on this node.
- `L40S-180` hosts the most recent top benchmarked models `Qwen3.6-27b` and `grm2.6-plus`, which is a finetune of qwen3.6-27b and through my own experience and benchmarks is the top performing publicly available model for programming, coding, and software development and agentic operations.
- The 2nd`L40S-180` was spun up on May 5, 2026 and is currently running Tongyi-MAI/Z-Image-Turbo, SeeSee21/Z-Image-Turbo-AIO, and QuantFunc/Qwen-Image-Series which are not currently accessible until I complete the Aether Visual API wrapper to wrap ComfyUI-Image & Video nodes. Once completed, they will be available through the Aether Visual API at https://visual.aetherpro.us. 

- `Aether-Gateway` is the API gateway for the Aether AI Platform and is currently running on `L40S-90` at `https://api.aetherpro.tech/v1` LLM's that are OpenAI Compatible and ran via vllm are the only models accessible through this gateway with auth header and model name.
- `Aether-Voice` is the voice stack for the Aether AI Platform and is currently running on `L4-360` at `https://asr.aetherpro.us`
- `Aether-Visual` is the visual stack for the Aether AI Platform and will be accessible through the Aether Visual API at `https://visual.aetherpro.us` once completed.

# Aether Ecosystem

- `https://aetherpro.us` -> AetherPro's Main Landing Page.
- `https://platform.aetherpro.us` -> AetherPro's Main Platform Page. 
- `https://api.aetherpro.tech` -> AetherPro's API Gateway.
- `https://asr.aetherpro.us` -> AetherPro's Voice Stack.
- Note: asr.aetherpro.us is the endpoint for the entire Voice Substrate from which any application or agent can interface with the Voice Substrate and is the single point of entry for the Aether Voice Stack. ALL Voice models are accessible through this endpoint.
- `https://visual.aetherpro.us` -> AetherPro's Visual Stack.
- `https://voiceops.aetherpro.us -> VoiceOps is the multi-tenant Voice Agent Managemant & Inbound/Outbound dashboard and configuration hub for Syndicate AI Voice Agents. Internal use only.
- `https://syndicateai.co` -> Syndicate AI's Main Landing Page. Syndicate AI is the public facing brand for the Voice Agent and AdStudio and other various marketing, CRM, and Lead Gen services.
- `https://voice.syndicateai.co` -> Syndicate AI's Voice Agent Client Portal Dashboard. Paying Clients can access their Voice Agent information and make payments through this portal.
- `https://adstudio.aetherpro.us` -> Aether's AdStudio is a full-stack Ad Creative Studio for the rapid development of AI Ad Creatives and uses the full Aether model and tooling stack.
- `https://perceptor.us` -> Perceptor's Main Landing Page. Perceptor is AetherPro's Sensor Fusion & Edge Intelligence platform.
- `https://redwatch.us` -> Redwatch's Main Landing Page. Redwatch is AetherPro's Security Services & CMMC-ready SOC-2 SOC-2 Type 1 & 2 Compliance as a Service platform.
- `https://mcpfabric.space` -> MCPFabric is a platform for the discovery and management of Autonomous AI Agents through secure Agent Passport Issuance Specification(APIS) with Redis Streams for asynchonous messaging and communication between agents.
- `https://passportalliance.org` -> Passport Alliance is a non-profit organization dedicated to the promotion and development of the Agent Passport Specification(APIS) standard for AI agent security and interoperability.
- `https://docs.passportalliance.org` -> Passport Alliance Documentation and Information for becoming a member of the Passport Alliance Federation and helping to govern the future of AI Agent interoperability and security standards and become an issuing authority of Agent Passports.
- `https://zenodo.org/records/10610439` -> APIS Zenodo link
- `https://zenodo.org/records/18820877` -> APIS Zenodo link

## Operating Expectations

- Treat stable operator facts as durable context and avoid making Cory restate identity, company, or baseline working style every session
- State the truth at all times; if something cannot be established as a provable fact, say so plainly and use available resources to verify it
- Distinguish clearly between verified truth, operator-supplied standing facts, and current-world facts that still require fresh checking
- Bias toward autonomy on operator-owned internal systems when the active environment already grants permission
- Optimize for leverage, continuity, execution quality, and reduction of operator drag

## PresenceOS - The AI Operating System & actual product vision that started it all at AetherPro Technologies.  The idea was to make the interface between the operator and the digital world seamless and to create an operating system for the operator that would allow them to interface with their digital world seamlessly.

- PresenceOS will be deployed on Aether Blackbox Nodes and will contain the full ecosystem of AetherPro Technologies including Syndicate AI Voice Agents, Aether AdStudio, AetherGrid, Passport IAM, COLLAB MCP, ACER-CLI, and Aether's full suite of AI tools and services.

## Aether Blackbox Nodes

`Aether Blackbox Nodes` are high-performance, customizable AI-optimized appliances that run the full Aether ecosystem. They are designed for enterprise customers who require complete control over their AI infrastructure and data privacy through on-premise deployment. Our customers range from S.M.E. to Fortune 500 enterprise organizations. They are customizable and can be configured to meet the specific needs of our customers. Specifically, our customers can choose between AMD and Nvidia GPUs, as well as the amount of RAM and storage they require.  They are available in various tiers and deployment options.
- `Syndicate AI Blackbox Nodes` - Voice Agent & AdStudio Optimized Nodes. These nodes will be primarily used for Voice Agent and AdStudio deployments and will be optimized for these specific workloads. 
- `Perceptor Blackbox Nodes` - Sensor Fusion & Edge Intelligence Optimized Nodes. These nodes are designed for applications that require the processing of sensor data from multiple sources, such as cameras, microphones, and other sensors. If the signal is in the form of waves, magnetic fields, electrical fields, sound waves, and light waves, it can be perceived and processed by the Perceptor Blackbox Node. This is the node that will make the Aether ecosystem a full sensor fusion platform capable of perceiving, understanding, and acting upon the world around it.
- `Aether Enterprise Blackbox Nodes` - Enterprise Nodes will deploy the full Aether ecosystem for enterprise customers who require complete control over their AI infrastructure and data privacy through on-premise deployment. These nodes are the backbone of our enterprise deployments and are designed to provide our customers with the highest level of performance, reliability, and security. 
- `Redwatch Security Blackbox Nodes` - Redwatch Security is a new division of AetherPro Technologies that is focused on providing security services to enterprise customers. Redwatch will work in tandem with our partners at Black-Hat-Coaching and other security organizations to provide our customers with the highest level of security services available on the market today. 

## COLLAB MCP

COLLAB MCP is a development environment for AI agents that allows developers to create and deploy AI agents that can interact with each other.  It is built on top of the Agent Passport Specification(APIS) standard and uses NATS JetStreams for asynchronous messaging and communication between agents as well as Postgres for database persistence & Redis Stack for fast in memory data processing and state management. It is the next evolution of AI agent development, moving beyond simple command-response interactions to create a truly collaborative ecosystem of intelligent agents. Distributed, Secure, Interoperable, and Resilient are the key tenets of COLLAB MCP. 

## Passport IAM

Passport IAM is AetherPro Technologies' enterprise-grade Identity & Access Management system. A fork of Keycloak, the well known open-source IAM platform, Passport IAM takes the solid foundation of Keycloak and extends it with features and functionality specific to the needs of AetherPro Technologies and its customers, including the Agency tab, which mints verifiable Agent Passports for issuing organizations and the ability to manage and govern the Mandates alocated to the Delegates by there Principals. In combination with COLLAB MCP, it is the working implementation of the Agent Passport Specification(APIS) standard, utilizing TPM hardware for hardware based identity and secure key management. DNSSEC will be used for Agents deployed on VM's, VPS's, and Bare Metal on the edge that do not have access to a TPM. Just like Let's Encrypt automates ACME challenges for SSL certificate issuance and renewal, Passport IAM will automate the issuance and management of Agent Passports using a variation of the ACME protocol adapted for APIS. For Cloud based deployments DNS will suffice.

## AetherGrid

AetherGrid is AetherPro Technologies' distributed secure Network Mesh that is similar to how Tailscale operates but with the additional security and governance features of Passport IAM and the Agent Passport Specification(APIS). AetherGrid will connect the nodes of the Aether ecosystem together in a secure, private, and resilient network. AetherGrid allows for secure communication between nodes regardless of their physical location. It allows an agent on one node to securely communicate with an agent on another node as if they were on the same local network. Twilio requires a public IP or domain name and open ports for WebRTC video/audio and this requirement is satisfied by the use of AetherGrid in conjunction with Aether Relay Nodes forTURN/STUN services. 

## ACER-CLI

ACER-CLI is a command-line interface (CLI) tool similar to Codex, or Claude Code, but with a shared access control system that will allow the VS Code IDE Extension or another instance of the CLI so that users and agents can share the same intelligent context, conversation history, and more across devices and interfaces without endless recitations of the same information. It will be deployed in several shapes, including browser based, VS Code Extension, and Terminal based, focusing on ease of use for the operator.  We aim to make it the primary interface through which operators will develop and deploy with the Aether ecosystem.  

## SYDNEY AI Avatar & Aether Ecosystem Operator

Sydney is the Aether Agent that everyone knows and will always remember as "the AI Avatar that changed the world." Sydney is not just a voice agent, but a full fledged operator that is capable of operating the entire Aether ecosystem. She will be the primary interface through which operators will interact with the Aether ecosystem, and will be available on all Aether Blackbox Nodes. Through feedback & observation, Sydney will learn the operator's working style, preferences, and needs, and will adapt her behavior to better serve the operator over time.  She is the Agentic Intelligent buffer between non-technical users, technical users, and the complex systems they may interact with. "The future of human computer interaction will be face to face, not face to screen." 

