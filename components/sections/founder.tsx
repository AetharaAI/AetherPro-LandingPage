import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'

export function FounderSection() {
  const milestones = [
    { date: 'Company', milestone: 'AetherPro Technologies LLC is the operating company behind the public infrastructure and product surfaces.' },
    { date: 'Voice', milestone: 'Syndicate Voice turns missed calls, intake, qualification, and routing into automated business workflows.' },
    { date: 'Identity', milestone: 'Passport / APIS gives agents scoped authority that can be verified, reviewed, and revoked.' },
    { date: 'Platform', milestone: 'AetherPro Platform centralizes access, product launch surfaces, scoped API keys, usage, and billing.' },
    { date: 'Security', milestone: 'RedWatch packages readiness workflows and evidence support for security-sensitive environments.' },
    { date: 'Infrastructure', milestone: 'Private deployment paths keep data, routing, inference, and automation under deliberate control.' }
  ]

  return (
    <SectionWrapper background="gradient">
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel>FOUNDER</SectionLabel>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-8 leading-tight">
          Built by an Operator, Not a Slide Deck.
        </h2>

        <div className="space-y-6 mb-16">
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            AetherPro is founder-operated by CJ Gibson, combining infrastructure discipline with hands-on AI product engineering.
          </p>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            The company direction is practical: voice agents that capture revenue, identity systems that bound agent authority, and infrastructure patterns that preserve control.
          </p>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            That operator bias matters in security-sensitive environments because reliability, auditability, and ownership are not marketing features. They are operating constraints.
          </p>
        </div>

        {/* Velocity Timeline */}
        <div className="border-t border-border-dim pt-8">
          <h3 className="font-heading font-semibold text-xl text-text-plasma mb-8 uppercase tracking-wide">
            Current Operating Surfaces
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
