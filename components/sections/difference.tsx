import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { FeatureCard } from '@/components/shared/feature-card'
import { Server, Brain, Bot } from 'lucide-react'

export function DifferenceSection() {
  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionLabel variant="voltage">INFRASTRUCTURE</SectionLabel>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
          Most Companies Rent Cloud AI. We Build It.
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-16 max-w-3xl leading-relaxed">
          AetherPro fuses electrical engineering and AI engineering into a sovereign system stack. Physical hardware. Real compute. Full ownership.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Server}
            title="Physical Infrastructure"
            description="Real hardware. Real power. Real control. GPU racks designed, wired, and commissioned by a licensed Master Electrician. Industrial-grade cooling. 240V/208V power systems built to code. Your compute, your rules."
          />
          <FeatureCard
            icon={Brain}
            title="Intelligence Layer"
            description="A complete digital-human stack. Vision. Speech. Voice. Reasoning. Memory. Every sense an AI needs to understand and act — running locally, responding in milliseconds."
          />
          <FeatureCard
            icon={Bot}
            title="Agent Operating System"
            description="Deploy autonomous agents like you deploy containers. AetherForge lets you build, train, and launch AI agents that actually execute. Not chatbots. Workers."
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
