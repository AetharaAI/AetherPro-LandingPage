import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { TimelineItem } from '@/components/shared/timeline-item'

export function RoadmapSection() {
  const phases = [
    {
      phase: 'LAYER 1',
      title: 'VOICE AGENTS',
      description: 'VoiceOps handles intake, after-hours coverage, lead capture, qualification, and routing for real businesses.',
      status: 'active' as const
    },
    {
      phase: 'LAYER 2',
      title: 'IDENTITY AND AUTHORITY',
      description: 'Passport and APIS give agents verifiable identity, scoped authorization, delegated authority, and revocation.',
      status: 'voltage' as const
    },
    {
      phase: 'LAYER 3',
      title: 'COORDINATION FABRIC',
      description: 'CollabFabric and Anchor Crew coordinate tasks, messages, tools, and agent-to-agent handoff under identity enforcement.',
      status: 'thinking' as const
    },
    {
      phase: 'LAYER 4',
      title: 'READINESS AND EVIDENCE',
      description: 'RedWatch supports security-sensitive workflows with controlled validation, evidence packages, and readiness operations.',
      status: 'pending' as const
    },
    {
      phase: 'LAYER 5',
      title: 'PRIVATE INFRASTRUCTURE',
      description: 'Aether Gateway routes inference, voice, APIs, and automation through managed or customer-controlled deployment paths.',
      status: 'pending' as const
    }
  ]

  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel variant="voltage">ROADMAP</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
            The Path to Accountable Agent Infrastructure
          </h2>
        </div>

        <div className="space-y-0">
          {phases.map((phase, index) => (
            <div key={index}>
              <TimelineItem
                phase={phase.phase}
                title={phase.title}
                description={phase.description}
                status={phase.status}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
