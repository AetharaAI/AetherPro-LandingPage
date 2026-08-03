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
              Anchor Systems running PresenceOS can deploy through managed private cloud,
              customer-controlled cloud, dedicated infrastructure, and on-premises estates as the
              environment requires.
            </p>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              Cloud tools still fit where they make sense. AetherPro gives customers an owned execution
              layer when data, model access, auditability, predictable capacity, or customer ownership matters.
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
              label="ON-PREMISES ANCHOR SYSTEMS"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
