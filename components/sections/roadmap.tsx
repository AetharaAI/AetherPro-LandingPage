import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { TimelineItem } from '@/components/shared/timeline-item'

export function RoadmapSection() {
  const phases = [
    {
      phase: 'PHASE 1',
      title: 'FOUNDATION',
      description: 'Core orchestration engine. Event-driven architecture. First fine-tuned models. L40S cluster deployment.',
      status: 'active' as const
    },
    {
      phase: 'PHASE 2',
      title: 'DIGITAL HUMAN STACK',
      description: 'Full AetherAI sensory integration. Vision, speech, voice, and grounding models unified under single control layer.',
      status: 'voltage' as const
    },
    {
      phase: 'PHASE 3',
      title: 'AGENT PLATFORM',
      description: 'AetherForge public release. Agent marketplace. Multi-agent cooperation protocols.',
      status: 'thinking' as const
    },
    {
      phase: 'PHASE 4',
      title: 'DISTRIBUTED MESH',
      description: 'AetherNet deployment. Multi-node communication. Cross-site agent orchestration.',
      status: 'pending' as const
    },
    {
      phase: 'PHASE 5',
      title: 'HARDWARE SCALE',
      description: 'Indiana micro data center network. AMD-optimized inference. Enterprise sovereign deployments.',
      status: 'pending' as const
    }
  ]

  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel variant="voltage">ROADMAP</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
            The Path to Sovereign Intelligence
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
