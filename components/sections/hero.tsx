import { ShieldLogo } from '@/components/brand/shield-logo'
import { Wordmark } from '@/components/brand/wordmark'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function HeroSection() {
  const [infrastructureOpen, setInfrastructureOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Datacenter.png')`,
        }}
      />
      <div className="absolute inset-0 bg-bg-void/85" />

      {/* Navigation */}
      <div className="relative z-20 flex items-center justify-between px-6 lg:px-12 pt-8 pb-4">
        {/* Left: AetherPro American Infrastructure */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <Wordmark text="AETHERPRO" size="md" />
            <span className="text-xs font-mono text-text-dark tracking-wider mt-1">
              AMERICAN INFRASTRUCTURE
            </span>
          </div>
          {/* Bigger shield, slightly offset to the right by gap */}
          <ShieldLogo size="md" />
        </div>

        {/* Right: Nav */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4">
            <a
              href="https://platform.aetherpro.us"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent-voltage text-bg-void border border-accent-voltage rounded-md text-sm font-medium hover:shadow-voltage-glow transition-all"
            >
              Platform
            </a>

            <div className="relative">
              <button
                onMouseEnter={() => setInfrastructureOpen(true)}
                onMouseLeave={() => setInfrastructureOpen(false)}
                className="flex items-center gap-1 px-4 py-2 bg-bg-orbital/80 border border-border-bright rounded-md text-sm font-medium text-text-muted hover:text-text-plasma hover:border-border-bright/80 transition-all"
              >
                Infrastructure
                <ChevronDown className="w-3 h-3" />
              </button>
              {infrastructureOpen && (
                <div
                  onMouseEnter={() => setInfrastructureOpen(true)}
                  onMouseLeave={() => setInfrastructureOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-bg-orbital border border-border-dim rounded-lg p-4 shadow-card"
                >
                  <h3 className="font-heading font-semibold text-sm text-text-plasma mb-4 uppercase tracking-wide">
                    Data Center Specifications
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="font-mono text-xs text-accent-voltage uppercase mb-1">
                        GPU Compute
                      </div>
                      <div className="font-mono text-sm text-text-plasma font-bold">
                        NVIDIA L40S
                      </div>
                      <div className="font-mono text-xs text-text-muted">
                        AMD MI-series compatible
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-accent-voltage uppercase mb-1">
                        Power Systems
                      </div>
                      <div className="font-mono text-sm text-text-plasma font-bold">
                        240V / 208V Three-Phase
                      </div>
                      <div className="font-mono text-xs text-text-muted">
                        Master electrician designed
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-accent-voltage uppercase mb-1">
                        Cooling
                      </div>
                      <div className="font-mono text-sm text-text-plasma font-bold">
                        Hot/Cold Aisle
                      </div>
                      <div className="font-mono text-xs text-text-muted">
                        Industrial grade systems
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-accent-voltage uppercase mb-1">
                        Compliance
                      </div>
                      <div className="font-mono text-sm text-text-plasma font-bold">
                        CMMC 2.0
                      </div>
                      <div className="font-mono text-xs text-text-muted">
                        Electrical code compliant
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-signal-beam uppercase mb-1">
                        Deployment
                      </div>
                      <div className="font-mono text-sm text-text-plasma font-bold">
                        On-Premise Indiana
                      </div>
                      <div className="font-mono text-xs text-text-muted">
                        Air-gapped facilities
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border-dim">
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <div className="font-mono text-lg font-bold text-text-plasma">
                            99.97%
                          </div>
                          <div className="font-mono text-xs text-text-muted">
                            Uptime
                          </div>
                        </div>
                        <div>
                          <div className="font-mono text-lg font-bold text-text-plasma">
                            &lt;45ms
                          </div>
                          <div className="font-mono text-xs text-text-muted">
                            Latency
                          </div>
                        </div>
                        <div>
                          <div className="font-mono text-lg font-bold text-text-plasma">
                            359+
                          </div>
                          <div className="font-mono text-xs text-text-muted">
                            Models
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="https://blackboxaudio.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent-voltage text-bg-void border border-accent-voltage rounded-md text-sm font-medium hover:shadow-voltage-glow transition-all"
            >
              BlackBox Audio
            </a>
            <a
              href="https://aetherpro.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent-voltage text-bg-void border border-accent-voltage rounded-md text-sm font-medium hover:shadow-voltage-glow transition-all"
            >
              AetherAI
            </a>
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
              Built on Physical
              <br />
              <span className="text-accent-voltage">Infrastructure</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
              CMMC 2.0 compliant sovereign AI for defense contractors. Self-hosted
              intelligence on dedicated hardware you control.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="voltage" size="lg">
                REQUEST ACCESS
              </Button>
              <Button variant="default" size="lg">
                VIEW ARCHITECTURE
              </Button>
            </div>
          </div>

          {/* Right Side: Infrastructure proof column */}
          <div className="lg:pl-8 mt-16 lg:mt-24">
            {/* Dark background block for text readability */}
            <div className="bg-bg-orbital border border-border-dim rounded-lg p-8 lg:p-10 shadow-card">
              <div className="font-mono text-sm tracking-[0.35em] uppercase text-text-dark mb-6">
                Sovereign AI • Physical Racks
              </div>

              <div className="border-l border-border-dim pl-6 space-y-5 mb-10">
                <p className="text-base text-text-muted leading-relaxed">
                  Purpose-built for defense contractors, critical infrastructure, and
                  high-assurance workloads running on U.S. soil.
                </p>
                <p className="text-base text-text-muted leading-relaxed">
                  You own the hardware. You control the power, cooling, and access.
                  We provide the AI stack and operational playbooks.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm uppercase tracking-wide">
                <div>
                  <div className="text-text-dark font-mono text-xs">Location</div>
                  <div className="text-text-plasma mt-2 font-mono">Indiana, United States</div>
                </div>
                <div>
                  <div className="text-text-dark font-mono text-xs">Control</div>
                  <div className="text-text-plasma mt-2 font-mono">Self-hosted racks</div>
                </div>
                <div>
                  <div className="text-text-dark font-mono text-xs">Compliance Focus</div>
                  <div className="text-text-plasma mt-2 font-mono">CMMC 2.0 / NIST</div>
                </div>
                <div>
                  <div className="text-text-dark font-mono text-xs">Deployment</div>
                  <div className="text-text-plasma mt-2 font-mono">Air-gapped options</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
