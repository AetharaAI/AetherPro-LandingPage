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
          Most Companies Rent Cloud AI. We Architect It.
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-16 max-w-3xl leading-relaxed">
          AetherPro Technologies engineers sovereign infrastructure that keeps data, routing, and policy enforcement under your control while scaling across multi-node deployments.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Server}
            title="Cloud-Sovereign Infrastructure"
            description="Multi-node deployments with data ownership, residency controls, and infrastructure independence. Built to scale without surrendering sovereignty."
          />
          <FeatureCard
            icon={Brain}
            title="AetherOS Intelligence Layer"
            description="Composable AI services for vision, speech, voice, and reasoning unified under AetherOS. Sovereign model routing with operational guardrails."
          />
          <FeatureCard
            icon={Bot}
            title="Agent Operating System"
            description="Aether Agent Forge delivers composable agents, skill registries, and deployment workflows that turn models into operational systems."
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
