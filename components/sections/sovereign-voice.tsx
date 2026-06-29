import Link from 'next/link'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { Button } from '@/components/ui/button'

export function SovereignVoiceSection() {
  return (
    <SectionWrapper background="orbital" id="voiceops">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionLabel variant="voltage">VOICEOPS</SectionLabel>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-text-plasma md:text-4xl lg:text-5xl">
            VoiceOps: First Commercial Workload on Owned Infrastructure
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-text-muted md:text-xl">
            VoiceOps is AetherPro&apos;s governed voice automation workload — inbound call handling,
            intake, qualification, appointment routing, and customer-response workflows running on
            Anchor nodes through PresenceOS circuits.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-text-muted md:text-xl">
            Voice is the first commercial path, not the whole company. Cloud telephony and CRM tools
            can still connect through Workflow Bridge when they make sense; VoiceOps owns the
            execution boundary when privacy, auditability, or customer control matters.
          </p>
          <Button variant="voltage" size="lg" asChild>
            <Link href="#architecture">VIEW PLATFORM ARCHITECTURE</Link>
          </Button>
        </div>
        <div className="rounded-lg border border-border-dim bg-bg-void p-8">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-text-dark">
            VoiceOps Capabilities
          </div>
          <ul className="space-y-4 text-sm text-text-muted">
            <li>• Inbound and after-hours call coverage</li>
            <li>• Lead capture, qualification, and routing</li>
            <li>• Scoped agent authority through Passport / APIS</li>
            <li>• BYOK/BYO-cloud routing through Workflow Bridge</li>
            <li>• RedWatch evidence for call-path and agent actions</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}