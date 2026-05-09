import { ShieldLogo } from '@/components/brand/shield-logo'
import { Wordmark } from '@/components/brand/wordmark'
import { Button } from '@/components/ui/button'
import { Network, ShieldCheck, Workflow } from 'lucide-react'

export function HeroSection() {
  const navItems = [
    { label: 'Voice Agents', href: '#voice-agents' },
    { label: 'Passport / APIS', href: '#ecosystem' },
    { label: 'COLLAB', href: '#ecosystem' },
    { label: 'RedWatch', href: 'https://redwatch.us' },
    { label: 'Platform', href: 'https://platform.aetherpro.us' },
    { label: 'Request Access', href: 'mailto:hello@aetherpro.us' },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden" id="top">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Datacenter.png')`,
        }}
      />
      <div className="absolute inset-0 bg-bg-void/85" />

      {/* Navigation */}
      <div className="relative z-20 flex flex-col gap-6 px-6 pt-8 pb-4 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        {/* Left: AetherPro American Infrastructure */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <Wordmark text="AETHERPRO" size="md" />
            <span className="text-xs font-mono text-text-dark tracking-wider mt-1">
              SOVEREIGN AI INFRASTRUCTURE
            </span>
          </div>
          <ShieldLogo size="md" />
        </div>

        {/* Right: Nav */}
        <nav className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:flex-wrap sm:items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="min-w-0 px-3 py-2 text-center bg-bg-orbital/80 border border-border-bright rounded-md text-xs font-medium text-text-muted hover:text-text-plasma hover:border-accent-voltage/70 transition-all md:px-4 md:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content - Cinematic Layout */}
      <div className="relative z-10 px-6 pt-20 lg:px-12 lg:pt-24">
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
              Sovereign AI Infrastructure
              <br />
              for Voice, Agents,
              <br />
              and <span className="text-accent-voltage">Secure Automation</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
              AetherPro builds private AI systems for organizations that need control over identity, data, routing, inference, and automation. Deploy voice agents, secure workflows, and agent infrastructure without surrendering operational control.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="voltage" size="lg" asChild>
                <a href="mailto:hello@aetherpro.us">REQUEST ACCESS</a>
              </Button>
              <Button variant="default" size="lg" asChild>
                <a href="#architecture">VIEW ARCHITECTURE</a>
              </Button>
            </div>
          </div>

          {/* Right Side: Infrastructure proof column */}
          <div className="lg:pl-8 mt-16 lg:mt-24">
            {/* Dark background block for text readability */}
            <div className="bg-bg-orbital border border-border-dim rounded-lg p-8 lg:p-10 shadow-card">
              <div className="font-mono text-sm tracking-[0.35em] uppercase text-text-dark mb-6">
                Voice AI • Identity • Controlled Inference
              </div>

              <div className="border-l border-border-dim pl-6 space-y-5 mb-10">
                <p className="text-base text-text-muted leading-relaxed">
                  Purpose-built for teams that need private intake, reliable routing, scoped agent authority, and clean evidence of what automation did.
                </p>
                <p className="text-base text-text-muted leading-relaxed">
                  Run through managed private cloud, customer-controlled cloud, dedicated infrastructure, or future on-prem deployment paths as the environment requires.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  { icon: Workflow, label: 'Syndicate Voice', value: 'Business intake, routing, and revenue capture' },
                  { icon: ShieldCheck, label: 'Passport / APIS', value: 'Scoped agent identity and delegated authority' },
                  { icon: Network, label: 'COLLAB + Echo Fleet', value: 'Secure multi-agent handoff and orchestration' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 border border-border-dim bg-bg-void/40 rounded-lg p-4">
                    <item.icon className="h-6 w-6 flex-shrink-0 text-accent-voltage" />
                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider text-text-dark">{item.label}</div>
                      <div className="mt-1 text-sm text-text-plasma">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
