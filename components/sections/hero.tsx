import { Button } from '@/components/ui/button'
import { Phone, Server, ShieldCheck, Workflow } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden" id="top">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Datacenter.png')`,
        }}
      />
      <div className="absolute inset-0 bg-bg-void/85" />

      <div className="relative z-10 px-6 pb-16 pt-20 md:pt-32 lg:px-12 lg:pt-40">
        <div className="grid min-h-[calc(100vh-12rem)] items-start gap-12 lg:grid-cols-2 lg:min-h-[calc(100vh-200px)]">
          <div className="flex max-w-2xl flex-col justify-center lg:pr-12">
            <div className="mb-6 self-start rounded-md border border-accent-voltage/30 bg-accent-voltage-dim px-4 py-2 sm:mb-8">
              <span className="font-mono text-xs uppercase tracking-wider text-accent-voltage">
                SOVEREIGN AI INFRASTRUCTURE
              </span>
            </div>

            <h1 className="mb-6 text-3xl font-bold leading-tight text-text-plasma sm:text-4xl md:text-5xl lg:text-6xl">
              Owned AI Execution for Voice, Agents, Models, and{' '}
              <span className="text-accent-voltage">Secure Automation</span>
            </h1>

            <p className="mb-4 text-base leading-relaxed text-text-muted sm:text-lg md:text-xl">
              AetherPro builds private AI systems for organizations that need control over identity,
              data, model access, workflow execution, and operational evidence.
            </p>

            <p className="mb-8 text-sm leading-relaxed text-text-muted sm:text-base md:text-lg">
              Run cloud tools when they make sense. Own the execution boundary when privacy,
              auditability, capacity, or customer control matters.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="voltage" size="lg" asChild>
                <a href="#request-access">REQUEST ACCESS</a>
              </Button>
              <Button variant="default" size="lg" asChild>
                <a href="#architecture">VIEW ARCHITECTURE</a>
              </Button>
            </div>
          </div>

          <div className="mt-8 lg:mt-24 lg:pl-8">
            <div className="rounded-lg border border-border-dim bg-bg-orbital p-6 shadow-card sm:p-8 lg:p-10">
              <div className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-text-dark sm:text-sm">
                VoiceOps • Identity • Anchor Nodes • Workflow Bridge
              </div>

              <div className="mb-8 space-y-4 border-l border-border-dim pl-6 sm:mb-10 sm:space-y-5">
                <p className="text-sm leading-relaxed text-text-muted sm:text-base">
                  Governed agent infrastructure with predictable owned capacity instead of
                  vendor-imposed rate limits.
                </p>
                <p className="text-sm leading-relaxed text-text-muted sm:text-base">
                  Images are shipped, models are mounted, manifests are governed. Passport Alliance
                  issues and governs APIS identities; Anchor nodes verify and enforce them.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: Phone,
                    label: 'VoiceOps',
                    value:
                      'Inbound call handling, intake, qualification, appointment routing, and customer-response workflows.',
                  },
                  {
                    icon: ShieldCheck,
                    label: 'Passport / APIS',
                    value:
                      'Verifiable agent identity, delegated authority, model-scope mandates, and revocation.',
                  },
                  {
                    icon: Server,
                    label: 'Anchor + PresenceOS',
                    value:
                      'Private AI node appliances running a composed operating environment for models, agents, workflows, and audit.',
                  },
                  {
                    icon: Workflow,
                    label: 'Workflow Bridge',
                    value:
                      'BYOK/BYO-cloud routing for tools like CRM, telephony, webhooks, model APIs, and automation platforms through governed circuits.',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-4 rounded-lg border border-border-dim bg-bg-void/40 p-4"
                  >
                    <item.icon className="h-6 w-6 flex-shrink-0 text-accent-voltage" />
                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider text-text-dark">
                        {item.label}
                      </div>
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