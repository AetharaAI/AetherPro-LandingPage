import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'

export function FounderSection() {
  const milestones = [
    { date: 'April 2024', milestone: 'Discovered LLMs' },
    { date: 'May 2024', milestone: 'Founded AetherPro Technologies' },
    { date: 'Month 3', milestone: 'First self-hosted inference cluster' },
    { date: 'Month 5', milestone: 'First fine-tuned model deployed' },
    { date: 'Month 8', milestone: 'Complete digital-human stack operational' },
    { date: 'Today', milestone: 'Building America\'s sovereign AI infrastructure' }
  ]

  return (
    <SectionWrapper background="gradient">
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel>FOUNDER</SectionLabel>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-8 leading-tight">
          Built by CJ
        </h2>

        <div className="space-y-6 mb-16">
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            Master Electrician. AI Architect. Solo founder who shipped more in eight months than most funded teams do in two years.
          </p>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            AetherPro didn't start with venture capital. It started with wire strippers, a GPU, and the realization that the future of AI infrastructure shouldn't depend on permission from Big Tech or foreign clouds.
          </p>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            Fifteen years of commercial electrical work taught one thing: infrastructure matters. The companies that control the physical layer control everything above it.
          </p>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            Now that same discipline applies to AI. Real hardware. Real ownership. Real sovereignty.
          </p>
        </div>

        {/* Velocity Timeline */}
        <div className="border-t border-border-dim pt-8">
          <h3 className="font-heading font-semibold text-xl text-text-plasma mb-8 uppercase tracking-wide">
            Velocity Timeline
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
