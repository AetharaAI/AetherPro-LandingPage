import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { Button } from '@/components/ui/button'
import {
  ClipboardCheck,
  FileCheck2,
  Play,
  Radar,
  Search,
  Users,
} from 'lucide-react'

const stages = [
  {
    step: '01',
    title: 'Detect opportunity',
    description: 'Identify actionable commercial or operational signals.',
    icon: Radar,
  },
  {
    step: '02',
    title: 'Qualify and research',
    description: 'Gather context, evaluate fit, and score the opportunity.',
    icon: Search,
  },
  {
    step: '03',
    title: 'Coordinate specialized agents',
    description: 'Route work through Polymorph, Anchor, VoiceOps, and approved tools.',
    icon: Users,
  },
  {
    step: '04',
    title: 'Request human approval',
    description: 'Stop at consequential trust boundaries before execution.',
    icon: ClipboardCheck,
  },
  {
    step: '05',
    title: 'Execute',
    description: 'Perform the approved call, outreach, workflow, or infrastructure action.',
    icon: Play,
  },
  {
    step: '06',
    title: 'Preserve evidence',
    description: 'Produce RedWatch receipts and an auditable execution record.',
    icon: FileCheck2,
  },
]

export function AgentWorkflowSection() {
  return (
    <SectionWrapper id="agent-workflow" background="orbital">
      <div className="mx-auto max-w-6xl">
        <SectionLabel variant="voltage">AGENT OPERATIONS</SectionLabel>
        <h2 className="mb-6 max-w-3xl text-3xl font-bold leading-tight text-text-plasma md:text-4xl lg:text-5xl">
          Agents that complete work—not merely generate text
        </h2>
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-text-muted md:text-xl">
          PresenceOS coordinates authenticated agents across lead qualification, customer
          operations, voice, approvals, and evidence. Every consequential action can be traced,
          reviewed, and bounded by policy.
        </p>

        <div
          className="mb-10 overflow-hidden rounded-lg border border-border-dim bg-bg-void/60"
          role="list"
          aria-label="Six-stage agent workflow"
        >
          <div className="border-b border-border-dim px-4 py-3 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-text-dark">
                Governed execution circuit
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent-voltage">
                Detect → Approve → Execute → Evidence
              </span>
            </div>
          </div>

          <ol className="grid sm:grid-cols-2 xl:grid-cols-6">
            {stages.map((stage, index) => (
              <li
                key={stage.step}
                role="listitem"
                className={[
                  'relative flex flex-col border-border-dim p-5 sm:p-6',
                  'border-b xl:border-b-0',
                  index === stages.length - 1 ? 'border-b-0' : '',
                  index % 2 === 0 ? 'sm:border-r' : '',
                  index % 2 === 1 ? 'sm:border-r-0' : '',
                  index < stages.length - 1 ? 'xl:border-r' : '',
                  index >= 4 ? 'sm:border-b-0' : '',
                ].join(' ')}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs tracking-widest text-accent-voltage">
                    {stage.step}
                  </span>
                  <stage.icon className="h-5 w-5 flex-none text-signal-beam" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-sm font-semibold leading-snug text-text-plasma sm:text-base">
                  {stage.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">{stage.description}</p>
                {index < stages.length - 1 ? (
                  <span
                    className="pointer-events-none absolute bottom-3 right-3 hidden font-mono text-xs text-border-bright xl:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button variant="default" size="lg" asChild>
            <a href="#architecture">VIEW ARCHITECTURE</a>
          </Button>
          <p className="text-sm text-text-dark">
            Owned execution boundary · authenticated agents · human approval at trust boundaries
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
