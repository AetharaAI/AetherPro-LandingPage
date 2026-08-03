import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { FeatureCard } from '@/components/shared/feature-card'
import { Bot, Fingerprint, LayoutDashboard, Radar, Terminal } from 'lucide-react'

export function PresenceOSSection() {
  return (
    <SectionWrapper id="presenceos">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>PRESENCEOS</SectionLabel>
        <h2 className="mb-6 text-3xl font-bold leading-tight text-text-plasma md:text-4xl lg:text-5xl">
          PresenceOS: Governed on the outside. Alive on the inside.
        </h2>
        <p className="mb-16 max-w-3xl text-lg leading-relaxed text-text-muted md:text-xl">
          PresenceOS places a continuously inspectable and adaptable operational environment inside
          a hardened authority boundary so authorized humans and agents can evolve workflows,
          models, tools, and services through typed, validated, and reversible changes.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={LayoutDashboard}
            title="Panel Room"
            description="Visual operator cockpit for monitoring workloads, circuits, and governed automation inside PresenceOS."
          />
          <FeatureCard
            icon={Terminal}
            title="Faraday"
            description="Operator CLI and secure agent tunnel for scripted workflows, diagnostics, and controlled remote access."
          />
          <FeatureCard
            icon={Bot}
            title="Anchor Crew"
            description="Passport-issued onboard agents operating inside governed PresenceOS circuits with scoped mandates."
          />
          <FeatureCard
            icon={Radar}
            title="RedWatch"
            description="Evidence and audit layer for model loads, agent actions, egress decisions, and operational review."
          />
          <FeatureCard
            icon={Fingerprint}
            title="Passport / APIS"
            description="Identity and mandate enforcement for humans, agents, services, and delegated authority on every node."
            highlighted
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
