import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { FeatureCard } from '@/components/shared/feature-card'
import { BadgeCheck, Database, KeyRound, LockKeyhole, Server, Workflow } from 'lucide-react'

export function AetherForgeSection() {
  return (
    <SectionWrapper background="orbital">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>WHY AETHERPRO</SectionLabel>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
          Automation Is Only Useful When You Can Trust the Boundary.
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-16 max-w-3xl leading-relaxed">
          The AetherPro stack is built around control: who the agent is, what it can touch, where inference runs, and how each action can be reviewed.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={LockKeyhole}
            title="Privacy and Ownership"
            description="Customer-controlled data, routing, policy enforcement, and deployment boundaries for sensitive workflows."
          />
          <FeatureCard
            icon={KeyRound}
            title="Identity and Authorization"
            description="Agents operate with scoped authority, explicit delegation, and revocation paths through Passport and APIS."
          />
          <FeatureCard
            icon={Workflow}
            title="Business Outcomes"
            description="Voice agents handle intake, triage, routing, lead capture, and follow-up where missed calls become missed revenue."
          />
          <FeatureCard
            icon={Server}
            title="Controlled Inference"
            description="Model routing, API gateways, voice services, ASR, TTS, and inference can run in controlled operational environments."
          />
          <FeatureCard
            icon={Database}
            title="Auditability"
            description="Readiness workflows, evidence collection, scoped key usage, and event trails support operational review."
          />
          <FeatureCard
            icon={BadgeCheck}
            title="Operator Credibility"
            description="Built by a founder/operator with infrastructure discipline, software velocity, and real deployment ownership."
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
