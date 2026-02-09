import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export function InfrastructureSection() {
  const specifications = [
    'Cloud-sovereign multi-node deployment architecture',
    'Active vLLM inference on L40S-90 and L40S-180 nodes',
    'LiteLLM routing for sovereign model governance',
    'Participation in the OVHcloud AI Accelerator Program',
    'Secure tenant isolation and data ownership controls',
    '24/7/365 operational monitoring and telemetry',
    'CMMC 2.0 / NIST SP 800-171 aligned design',
    'Zero external data transfers in fully sovereign mode',
    'Deployment playbooks and SSP-ready documentation',
    'Composable infrastructure for regulated environments'
  ]

  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Text */}
          <div className="lg:col-span-7">
            <SectionLabel variant="voltage">INFRASTRUCTURE</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
              Cloud-Sovereign Multi-Node Deployments.
            </h2>
            <p className="text-lg md:text-xl text-text-muted mb-6 leading-relaxed">
              AetherPro delivers sovereign infrastructure that keeps control of data, routing, and model execution in your hands.
              AetherOS deployments combine hardened AI orchestration with enterprise-grade inference.
            </p>
            <p className="text-lg md:text-xl text-text-muted mb-12 leading-relaxed">
              Backed by the OVHcloud AI Accelerator Program and proven vLLM deployments, we help teams scale without surrendering sovereignty.
            </p>

            <Button variant="voltage" size="lg">
              REQUEST DEPLOYMENT BRIEF
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
