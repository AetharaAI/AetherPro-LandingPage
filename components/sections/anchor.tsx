import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { Check } from 'lucide-react'

const capabilities = [
  'Local/private model slots',
  'Approved model bundle flow',
  'Governed agent circuits',
  'Passport verification',
  'RedWatch evidence',
  'Panel Room cockpit',
  'Faraday operator CLI',
  'Optional VoiceOps workload',
]

export function AnchorSection() {
  return (
    <SectionWrapper background="orbital" id="platform">
      <div className="mx-auto max-w-6xl">
        <SectionLabel variant="voltage">ANCHOR NODES</SectionLabel>
        <h2 className="mb-6 text-3xl font-bold leading-tight text-text-plasma md:text-4xl lg:text-5xl">
          Anchor Nodes: Owned AI Capacity You Can Deploy
        </h2>
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-text-muted md:text-xl">
          Anchor is the hardware-backed AetherPro node appliance. PresenceOS runs on Anchor and turns
          the box into a private AI operating environment for model serving, agents, identity, audit,
          voice, and workflow automation.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-lg border border-border-dim bg-bg-void/40 p-4"
            >
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-status-active" />
              <span className="font-mono text-sm leading-relaxed text-text-muted">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}