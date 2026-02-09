import { ShieldLogo } from '@/components/brand/shield-logo'
import { Wordmark } from '@/components/brand/wordmark'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-bg-void" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-orbital/70 via-bg-void/85 to-bg-void" />

      {/* Navigation */}
      <div className="relative z-20 flex items-center justify-between px-6 lg:px-12 pt-8 pb-4">
        {/* Left: AetherPro American Infrastructure */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <Wordmark text="AETHERPRO" size="md" />
            <span className="text-xs font-mono text-text-dark tracking-wider mt-1">
              CLOUD-SOVEREIGN INFRASTRUCTURE
            </span>
          </div>
          {/* Bigger shield, slightly offset to the right by gap */}
          <ShieldLogo size="md" />
        </div>

        {/* Right: Nav */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-3">
            {[
              { label: 'AgentForge Marketplace', href: 'https://aetheragentforge.org' },
              { label: 'MCPFabric', href: 'https://mcpfabric.space' },
              { label: 'Perceptor', href: 'https://perceptor.us' },
              { label: 'BlackBox Audio', href: 'https://blackboxaudio.tech' },
              { label: 'AetherOS', href: 'https://aetherpro.tech' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-bg-orbital/80 border border-border-bright rounded-md text-xs font-medium text-text-muted hover:text-text-plasma hover:border-border-bright/80 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content - Cinematic Layout */}
      <div className="relative z-10 px-6 lg:px-12 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start min-h-[calc(100vh-200px)]">
          {/* Left Side: Main Content */}
          <div className="flex flex-col justify-center lg:pr-12 max-w-2xl">
            {/* Badge */}
            <div className="bg-accent-voltage-dim border border-accent-voltage/30 rounded-md px-4 py-2 mb-8 self-start">
              <span className="font-mono text-xs text-accent-voltage uppercase tracking-wider">
                SOVEREIGN AI INFRASTRUCTURE
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-plasma mb-6 leading-tight">
              Enterprise-Grade AI
              <br />
              Built on Cloud-Sovereign
              <br />
              <span className="text-accent-voltage">Infrastructure</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
              Designed for organizations operating under strict security, privacy, and regulatory requirements.
              AetherPro delivers AetherOS deployments with total data ownership and infrastructure independence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="voltage" size="lg" asChild>
                <a href="#request-access">REQUEST ACCESS</a>
              </Button>
              <Button variant="default" size="lg" asChild>
                <Link href="/docs">VIEW ARCHITECTURE</Link>
              </Button>
            </div>
          </div>

          {/* Right Side: Infrastructure proof column */}
          <div className="lg:pl-8 mt-16 lg:mt-24">
            {/* Dark background block for text readability */}
            <div className="bg-bg-orbital border border-border-dim rounded-lg p-8 lg:p-10 shadow-card">
              <div className="font-mono text-sm tracking-[0.35em] uppercase text-text-dark mb-6">
                Sovereign AI • Multi-Node Deployments
              </div>

              <div className="border-l border-border-dim pl-6 space-y-5 mb-10">
                <p className="text-base text-text-muted leading-relaxed">
                  Purpose-built for regulated industries, critical infrastructure, and teams that require full control of their compute environment.
                </p>
                <p className="text-base text-text-muted leading-relaxed">
                  You control data residency, model routing, and policy enforcement across sovereign nodes.
                  AetherPro provides the hardened AI stack, secure deployment patterns, and operational playbooks.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm uppercase tracking-wide">
                <div>
                  <div className="text-text-dark font-mono text-xs">Location</div>
                  <div className="text-text-plasma mt-2 font-mono">Cloud-sovereign regions</div>
                </div>
                <div>
                  <div className="text-text-dark font-mono text-xs">Control</div>
                  <div className="text-text-plasma mt-2 font-mono">Customer-owned data + routing</div>
                </div>
                <div>
                  <div className="text-text-dark font-mono text-xs">Compliance Alignment</div>
                  <div className="text-text-plasma mt-2 font-mono">CMMC 2.0 / NIST SP 800-171</div>
                </div>
                <div>
                  <div className="text-text-dark font-mono text-xs">Deployment</div>
                  <div className="text-text-plasma mt-2 font-mono">Multi-node sovereign clusters</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
