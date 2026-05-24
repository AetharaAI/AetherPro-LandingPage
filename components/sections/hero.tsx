import { Button } from '@/components/ui/button'
import { Network, ShieldCheck, Workflow } from 'lucide-react'

export function HeroSection() {
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

      {/* Main Content - Cinematic Layout */}
      <div className="relative z-10 px-6 pb-16 pt-36 lg:px-12 lg:pt-40">
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
                <a href="#request-access">REQUEST ACCESS</a>
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
