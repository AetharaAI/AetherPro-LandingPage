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
            Mission-Critical Sovereign Voice AI
          </h2>
          <p className="text-lg md:text-xl text-text-muted mb-6 leading-relaxed">
            AetherPro integrates Speechmatics Enterprise Voice AI to deliver high-accuracy, low-latency
            speech-to-text within fully sovereign environments.
          </p>
          <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
            On-premises, containerized deployment keeps all audio data behind your firewall — voice intelligence
            without cloud exposure.
          </p>
          <Button variant="voltage" size="lg" asChild>
            <Link href="/docs">VIEW VOICE ARCHITECTURE</Link>
          </Button>
        </div>
        <div className="bg-bg-void border border-border-dim rounded-lg p-8">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-text-dark mb-4">
            Technical Edge
          </div>
          <ul className="space-y-4 text-text-muted text-sm">
            <li>• Speechmatics on-premise engine for air-gapped deployments</li>
            <li>• Real-time transcription inside sovereign node boundaries</li>
            <li>• Multi-tenant routing with AetherOS policy controls</li>
            <li>• Audio data never leaves your infrastructure</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
