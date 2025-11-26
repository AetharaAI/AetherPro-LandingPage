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
              Your AI. Your Hardware. Your Soil.
            </h2>
            <p className="text-lg md:text-xl text-text-muted mb-6 leading-relaxed">
              AetherPro is building GPU-powered micro data centers across Indiana. Real compute infrastructure owned and operated on American soil. No external API calls. No cloud dependencies. No data leaving your control.
            </p>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              When you run on AetherPro infrastructure, you own every electron and every inference.
            </p>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            <StatCard
              value="0"
              label="EXTERNAL API DEPENDENCIES"
            />
            <StatCard
              value="100%"
              label="U.S. SOIL INFERENCE"
            />
            <StatCard
              value="<50ms"
              label="RESPONSE LATENCY"
            />
            <StatCard
              value="∞"
              label="UPTIME SLAs"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
