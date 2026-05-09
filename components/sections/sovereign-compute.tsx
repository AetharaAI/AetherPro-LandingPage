import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { StatCard } from '@/components/shared/stat-card'

export function SovereignComputeSection() {
  return (
    <SectionWrapper background="orbital" id="architecture">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="lg:col-span-7">
            <SectionLabel>DEPLOYMENT MODELS</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
              Choose the Control Boundary That Fits the Work.
            </h2>
            <p className="text-lg md:text-xl text-text-muted mb-6 leading-relaxed">
              AetherPro is designed for managed private cloud, customer-controlled cloud, dedicated private infrastructure, and future on-prem deployment paths.
            </p>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              The public offer is simple: private AI voice agents and secure automation that preserve data ownership, routing control, and policy enforcement.
            </p>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            <StatCard
              value="01"
              label="MANAGED PRIVATE CLOUD"
            />
            <StatCard
              value="02"
              label="CUSTOMER-CONTROLLED CLOUD"
            />
            <StatCard
              value="03"
              label="DEDICATED INFRASTRUCTURE"
            />
            <StatCard
              value="04"
              label="FUTURE ON-PREM OPTIONS"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
