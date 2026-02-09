import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { StatCard } from '@/components/shared/stat-card'

export function SovereignComputeSection() {
  return (
    <SectionWrapper background="orbital">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="lg:col-span-7">
            <SectionLabel>COMPUTE</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
              Your AI. Your Data. Your Sovereignty.
            </h2>
            <p className="text-lg md:text-xl text-text-muted mb-6 leading-relaxed">
              AetherPro delivers cloud-sovereign multi-node deployments that keep data ownership, policy enforcement, and model routing under your control.
              Built for regulated teams that require independence without sacrificing scale.
            </p>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              Every inference runs inside your sovereign boundary with no external dependency required.
            </p>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            <StatCard
              value="0"
              label="EXTERNAL DATA TRANSFERS"
            />
            <StatCard
              value="100%"
              label="SOVEREIGN DATA OWNERSHIP"
            />
            <StatCard
              value="L40S"
              label="ACTIVE INFERENCE NODES"
            />
            <StatCard
              value="vLLM"
              label="ENTERPRISE INFERENCE"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
