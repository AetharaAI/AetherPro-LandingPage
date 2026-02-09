import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'

export function FounderSection() {
  const milestones = [
    { date: 'May 2025', milestone: 'AetherPro Technologies established' },
    { date: 'Phase 1', milestone: 'AetherOS architecture and agent chat foundation' },
    { date: 'Phase 2', milestone: 'PassPort IAM and MCP Fabric live' },
    { date: 'Phase 3', milestone: 'Perceptor + BlackBox Audio integrated' },
    { date: 'Today', milestone: 'Scaling cloud-sovereign deployments' }
  ]

  return (
    <SectionWrapper background="gradient">
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel>ABOUT</SectionLabel>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-8 leading-tight">
          AetherPro Technologies
        </h2>

        <div className="space-y-6 mb-16">
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            AetherPro Technologies (Est. May 2025) is the architect of AetherOS — a sovereign, composable AI operating system designed for total data ownership and infrastructure independence.
          </p>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            Cory Gibson is the systems thinker and CTO behind the stack, advancing from Master Electrician to AI Systems Architect to build operational-grade AI infrastructure.
          </p>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            Today the focus is on sovereign deployments that deliver AetherOS, agent orchestration, and multimodal intelligence without surrendering control to external clouds.
          </p>
        </div>

        {/* Velocity Timeline */}
        <div className="border-t border-border-dim pt-8">
          <h3 className="font-heading font-semibold text-xl text-text-plasma mb-8 uppercase tracking-wide">
            Company Milestones
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-left">
                <div className="font-mono text-sm text-accent-voltage mb-2">
                  {milestone.date}
                </div>
                <div className="text-text-muted text-sm leading-relaxed">
                  {milestone.milestone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
