import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { FeatureCard } from '@/components/shared/feature-card'
import { Bot, Fingerprint, Network, Server } from 'lucide-react'

export function DifferenceSection() {
  return (
    <SectionWrapper id="voice-agents">
      <div className="max-w-6xl mx-auto">
        <SectionLabel variant="voltage">WHAT WE BUILD</SectionLabel>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
          Private AI Systems for Real Business Operations
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-16 max-w-3xl leading-relaxed">
          AetherPro connects voice automation, agent identity, secure coordination, and controlled inference into one operational infrastructure layer.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={Bot}
            title="Voice AI Agents"
            description="Inbound call coverage, after-hours intake, lead capture, qualification, appointment routing, and customer response workflows."
          />
          <FeatureCard
            icon={Fingerprint}
            title="Agent Identity / Passport"
            description="Verifiable agent identity, scoped authorization, delegated authority, and revocation using APIS."
          />
          <FeatureCard
            icon={Network}
            title="Secure Coordination / COLLAB"
            description="MCP-compatible coordination, task handoff, streams, and agent-to-agent communication with identity enforcement."
          />
          <FeatureCard
            icon={Server}
            title="Private AI Infrastructure"
            description="Self-hosted inference, controlled model routing, API gateways, deployment playbooks, and private operational environments."
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
