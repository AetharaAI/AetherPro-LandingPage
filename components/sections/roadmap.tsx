import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { TimelineItem } from '@/components/shared/timeline-item'

export function RoadmapSection() {
  const phases = [
    {
      phase: 'PHASE 1',
      title: 'FOUNDATION (AETHER AGENT CHAT)',
      description: 'Serving flagship models (Qwen3-VL) via vLLM and LiteLLM.',
      status: 'active' as const
    },
    {
      phase: 'PHASE 2',
      title: 'DIGITAL HUMAN STACK',
      description: 'Integration of Perceptor (Vision) and BlackBox Audio (Voice).',
      status: 'voltage' as const
    },
    {
      phase: 'PHASE 3',
      title: 'AGENT PLATFORM (AETHER AGENT FORGE)',
      description: 'A marketplace for composable AI agents and standardized skill registries.',
      status: 'thinking' as const
    },
    {
      phase: 'PHASE 4',
      title: 'DISTRIBUTED MESH (MCP FABRIC)',
      description: 'Universal MCP tool registry and cross-site agent orchestration.',
      status: 'pending' as const
    },
    {
      phase: 'PHASE 5',
      title: 'SOVEREIGN DESKTOP (AETHEROS PERCY)',
      description: 'A button-first desktop environment for non-terminal users.',
      status: 'pending' as const
    }
  ]

  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto" id="roadmap">
        <div className="text-center mb-16">
          <SectionLabel variant="voltage">ROADMAP</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
            AetherOS Development Phases
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
