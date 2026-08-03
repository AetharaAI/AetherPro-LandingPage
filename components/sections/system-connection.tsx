import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'

const systems = [
  {
    name: 'PresenceOS',
    role: 'Composed operator environment',
    detail:
      'Unifies models, agents, voice, workflows, and operator control into one deployable execution layer.',
  },
  {
    name: 'Passport / APIS',
    role: 'Agent identity and delegated authority',
    detail:
      'Issues verifiable identities, scopes mandates, and supports revocation for agents and services.',
  },
  {
    name: 'Collab Fabric',
    role: 'Authenticated agent coordination',
    detail:
      'Routes task handoff and agent-to-agent communication with identity enforcement at each step.',
  },
  {
    name: 'Polymorph',
    role: 'Research and operational orchestration',
    detail:
      'Coordinates specialized agents across qualification, research, and multi-step operational work.',
  },
  {
    name: 'VoiceOps',
    role: 'Inbound and outbound voice execution',
    detail:
      'Runs call handling, intake, qualification, appointment routing, and customer-response workflows.',
  },
  {
    name: 'RedWatch',
    role: 'Evidence and receipts',
    detail:
      'Captures auditable execution records so consequential actions can be reviewed after the fact.',
  },
  {
    name: 'Anchor Systems',
    role: 'Governed execution infrastructure',
    detail:
      'Controlled infrastructure with distinct authority and execution domains for organizations that need an owned operational boundary.',
  },
]

export function SystemConnectionSection() {
  return (
    <SectionWrapper id="system-map" background="void">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>SYSTEM CONNECTION</SectionLabel>
        <h2 className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-text-plasma md:text-4xl">
          Architecture that maps directly to business outcomes
        </h2>
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-text-muted md:text-lg">
          Each component exists to complete work with identity, policy, and evidence—not to
          generate unbounded text. Serious buyers can read the stack in under thirty seconds.
        </p>

        <div className="overflow-hidden rounded-lg border border-border-dim bg-bg-orbital">
          <ul className="divide-y divide-border-dim">
            {systems.map((system) => (
              <li
                key={system.name}
                className="grid gap-2 px-5 py-5 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-6 lg:py-4"
              >
                <div className="lg:col-span-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-voltage">
                    {system.name}
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="text-sm font-semibold text-text-plasma">{system.role}</div>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-sm leading-relaxed text-text-muted">{system.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-text-dark">
          Controlled deployment, governed model execution, and auditable outcomes where ownership
          matters. Cloud tools remain available when they make sense.
        </p>
      </div>
    </SectionWrapper>
  )
}
