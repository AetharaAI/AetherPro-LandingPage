import Link from 'next/link'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { Button } from '@/components/ui/button'

export function SovereignVoiceSection() {
  return (
    <SectionWrapper background="orbital">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel variant="voltage">SOVEREIGN VOICE</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
            Voice Agents Built Around Business Outcomes
          </h2>
          <p className="text-lg md:text-xl text-text-muted mb-6 leading-relaxed">
            Syndicate Voice gives businesses private intake, routing, qualification, and follow-up workflows
            without forcing every call path through a generic chatbot or public admin surface.
          </p>
          <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
            Voice, ASR, TTS, model routing, and workflow execution can be deployed through managed private
            cloud, customer-controlled cloud, dedicated infrastructure, and future on-prem paths.
          </p>
          <Button variant="voltage" size="lg" asChild>
            <Link href="/docs#voice-agents">VIEW VOICE ARCHITECTURE</Link>
          </Button>
        </div>
        <div className="bg-bg-void border border-border-dim rounded-lg p-8">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-text-dark mb-4">
            Technical Edge
          </div>
          <ul className="space-y-4 text-text-muted text-sm">
            <li>• Inbound and after-hours call coverage</li>
            <li>• Lead capture, qualification, and routing</li>
            <li>• Scoped agent authority through Passport / APIS</li>
            <li>• Customer-controlled data, routing, and policy enforcement</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
