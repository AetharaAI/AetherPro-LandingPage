import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export function InfrastructureSection() {
  const specifications = [
    'AMD MI-series and NVIDIA L40S compatible',
    '240V / 208V three-phase power systems',
    'Hot/cold aisle cooling architecture',
    'Real-time rack telemetry and monitoring',
    'On-premises or hosted deployment options',
    'Full electrical code compliance',
    'Designed for 24/7/365 operation',
    'CMMC 2.0 compliance ready'
  ]

  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Text */}
          <div className="lg:col-span-7">
            <SectionLabel variant="voltage">HARDWARE</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
              Designed by a Master Electrician. Built to Industrial Code.
            </h2>
            <p className="text-lg md:text-xl text-text-muted mb-6 leading-relaxed">
              AetherAI Infrastructure delivers turnkey sovereign GPU racks. We don't recommend hardware — we design, wire, power, and commission complete AI compute installations.
            </p>
            <p className="text-lg md:text-xl text-text-muted mb-12 leading-relaxed">
              This is what happens when someone who's pulled wire for 15 years decides to build AI infrastructure instead of buying cloud credits.
            </p>

            <Button variant="voltage" size="lg">
              REQUEST HARDWARE CONSULTATION
            </Button>
          </div>

          {/* Right Column - Specifications */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-status-active flex-shrink-0 mt-0.5" />
                  <span className="text-text-muted font-mono text-sm leading-relaxed">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
