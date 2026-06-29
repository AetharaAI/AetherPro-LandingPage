import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export function InfrastructureSection() {
  const specifications = [
    'Voice, ASR, TTS, and inference service routing',
    'Scoped API keys and product access through AetherPro Platform',
    'Passport / APIS identity for delegated agent authority',
    'COLLAB task handoff, streams, and MCP-compatible coordination',
    'RedWatch evidence collection and readiness workflows',
    'Managed private cloud and customer-controlled cloud options',
    'Dedicated/private infrastructure paths for qualified deployments',
    'Architecture designed to support audit, evidence, and control objectives',
    'Auditability, access control, and evidence trails without claiming certification',
    'Customer-controlled data, model routing, and policy enforcement'
  ]

  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Text */}
          <div className="lg:col-span-7">
            <SectionLabel variant="voltage">AETHER GATEWAY</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
              Controlled Model Routing Without Losing Operational Control.
            </h2>
            <p className="text-lg md:text-xl text-text-muted mb-6 leading-relaxed">
              The inference layer routes model, voice, ASR, TTS, and automation calls through controlled gateways with identity, policy, and usage enforcement.
            </p>
            <p className="text-lg md:text-xl text-text-muted mb-12 leading-relaxed">
              Private and dedicated infrastructure options are available for organizations that need stronger boundaries, but the public offer stays focused on outcomes: private voice agents and secure business automation.
            </p>

            <Button variant="voltage" size="lg" asChild>
              <a href="mailto:hello@aetherpro.us">REQUEST ACCESS</a>
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
