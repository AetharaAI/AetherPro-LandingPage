import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { StackComponent } from '@/components/shared/stack-component'
import { Bot, Fingerprint, KeyRound, Network, Radar, Workflow } from 'lucide-react'

export function AetherAIStackSection() {
  return (
    <SectionWrapper id="ecosystem">
      <div className="max-w-6xl mx-auto text-center">
        <SectionLabel variant="voltage">PRODUCTS / ECOSYSTEM</SectionLabel>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
          One Company Layer Across Voice, Identity, and Agent Operations.
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-16 max-w-3xl mx-auto leading-relaxed">
          AetherPro is the parent infrastructure company behind the surfaces that make private AI usable, accountable, and deployable.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StackComponent
            icon={Bot}
            name="SYNDICATE"
            title="Syndicate AI Voice"
            description="Voice agents for intake, after-hours coverage, qualification, routing, and customer follow-up."
          />
          <StackComponent
            icon={Fingerprint}
            name="PASSPORT / APIS"
            title="Agent Identity"
            description="Verifiable identity, scoped authorization, delegated authority, revocation, and accountability for agents."
          />
          <StackComponent
            icon={Network}
            name="COLLAB"
            title="Agent Coordination"
            description="MCP-compatible task handoff, message streams, and agent-to-agent communication with identity enforcement."
          />
          <StackComponent
            icon={Radar}
            name="REDWATCH"
            title="Security Readiness"
            description="Evidence packages, controlled validation, readiness workflows, and regulated-environment support."
          />
          <StackComponent
            icon={KeyRound}
            name="PLATFORM"
            title="AetherPro Platform"
            description="Authenticated control plane for access, scoped API keys, product launch surfaces, usage, and billing."
          />
          <StackComponent
            icon={Workflow}
            name="ECHO FLEET"
            title="Agent Orchestration"
            description="Fleet-level orchestration for routing work across specialized agents, tools, gateways, and model services."
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
