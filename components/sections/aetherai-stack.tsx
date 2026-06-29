import Link from 'next/link'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { StackComponent } from '@/components/shared/stack-component'
import { Bot, Fingerprint, Network, Radar, Server, Workflow } from 'lucide-react'

export function AetherAIStackSection() {
  return (
    <SectionWrapper id="ecosystem">
      <div className="mx-auto max-w-6xl text-center">
        <SectionLabel variant="voltage">PRODUCTS / ECOSYSTEM</SectionLabel>
        <h2 className="mb-6 text-3xl font-bold leading-tight text-text-plasma md:text-4xl lg:text-5xl">
          Owned AI Execution Infrastructure Across the Full Stack
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-lg leading-relaxed text-text-muted md:text-xl">
          AetherPro is the parent sovereign AI infrastructure company behind Anchor nodes, PresenceOS,
          Passport/APIS, RedWatch, Faraday, VoiceOps, and Workflow Bridge.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StackComponent
            icon={Server}
            name="ANCHOR + PRESENCEOS"
            title="Private Execution Layer"
            description="Hardware-backed node appliances running PresenceOS for models, agents, workflows, voice, and audit."
          />
          <StackComponent
            icon={Bot}
            name="VOICEOPS"
            title="Governed Voice Workload"
            description="Inbound call handling, intake, qualification, appointment routing, and customer-response workflows."
          />
          <StackComponent
            icon={Fingerprint}
            name="PASSPORT / APIS"
            title="Agent Identity"
            description="Verifiable identity, delegated authority, model-scope mandates, and revocation for agents and services."
          />
          <StackComponent
            icon={Workflow}
            name="WORKFLOW BRIDGE"
            title="BYOK / BYO-Cloud Routing"
            description="CRM, telephony, webhooks, model APIs, and automation platforms routed through governed PresenceOS circuits."
          />
          <StackComponent
            icon={Network}
            name="COLLAB"
            title="Agent Coordination"
            description="CollabFabric provides MCP-compatible task handoff, message streams, and agent-to-agent communication with identity enforcement."
          />
          <StackComponent
            icon={Radar}
            name="REDWATCH"
            title="Evidence & Readiness"
            description="Append-only audit trails, operational visibility, and evidence designed to support audit and control objectives."
          />
        </div>

        <div
          id="passport"
          className="mx-auto mt-12 max-w-3xl rounded-lg border border-border-dim bg-bg-orbital p-8 text-left"
        >
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-voltage">
            APIS v2.1 Proof
          </div>
          <p className="text-base leading-relaxed text-text-muted">
            APIS v2.1 extends agent identity with attestation-tier resolution, namespace proof, and
            model-scope mandates. AetherPro has minted and verified Herman, a real APIS agent
            passport anchored by DNS TXT proof and validated against published issuer keys.
          </p>
          <p className="mt-4 text-sm text-text-dark">
            Standard Anchor nodes verify and enforce passports. Issuance remains controlled by
            AetherPro or delegated issuers through{' '}
            <Link
              href="https://passportalliance.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-voltage hover:underline"
            >
              Passport Alliance
            </Link>
            .{' '}
            <Link
              href="https://docs.passportalliance.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-voltage hover:underline"
            >
              View APIS documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}