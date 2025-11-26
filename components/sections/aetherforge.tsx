import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { FeatureCard } from '@/components/shared/feature-card'
import { Bot, Database, Plug, Server, GitBranch, Store } from 'lucide-react'

export function AetherForgeSection() {
  return (
    <SectionWrapper background="orbital">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>AGENTS</SectionLabel>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
          Build Agents Like You Talk. Deploy Them Like You Breathe.
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-16 max-w-3xl leading-relaxed">
          AetherForge is the sovereign agent creation platform. No PhD required. No API keys from Big Tech. Define what you need. AetherForge builds an agent that executes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Bot}
            title="Agent Creation"
            description="Natural language to autonomous agent. Define goals, behaviors, and boundaries."
          />
          <FeatureCard
            icon={Database}
            title="Memory Layer"
            description="Every agent remembers. Context persists across conversations, sessions, and deployments."
          />
          <FeatureCard
            icon={Plug}
            title="Tool Integration"
            description="Connect any API, database, or service. Your agents use the same tools your team uses."
          />
          <FeatureCard
            icon={Server}
            title="Local Deployment"
            description="Run agents on your hardware. On-prem. Air-gapped. Zero external dependencies."
          />
          <FeatureCard
            icon={GitBranch}
            title="Triad Switching"
            description="Strategic planning when needed. Fast execution by default. Critical verification on high-stakes actions."
          />
          <FeatureCard
            icon={Store}
            title="Marketplace"
            description="Deploy pre-built agents or publish your own. A growing ecosystem of specialized intelligence."
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
