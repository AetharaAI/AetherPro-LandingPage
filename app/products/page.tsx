const products = [
  {
    name: 'Syndicate AI Voice',
    description: 'Private voice agents for intake, routing, qualification, appointment workflows, and after-hours coverage.',
    link: 'https://syndicateai.co',
  },
  {
    name: 'Passport / APIS',
    description: 'Agent identity, scoped authorization, delegated authority, revocation, and verifiable accountability.',
    link: 'https://passportalliance.org',
  },
  {
    name: 'COLLAB',
    description: 'CollabFabric provides MCP-compatible coordination, task handoff, streams, and agent-to-agent communication with identity enforcement.',
    link: '/docs#collab',
  },
  {
    name: 'RedWatch',
    description: 'Security readiness, evidence packages, controlled validation, and compliance-readiness workflows.',
    link: 'https://redwatch.us',
  },
  {
    name: 'PresenceOS',
    description: 'Composed operator environment for identity, agents, workflows, models, and automation under customer control.',
    link: 'https://presenceos.us',
  },
  {
    name: 'Anchor Systems',
    description: 'Dual-domain governed AI infrastructure that runs PresenceOS across edge, on-premises, private-cloud, and hybrid deployments.',
    link: 'https://anchor.presenceos.us',
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-bg-void text-text-plasma">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-text-dark mb-4">Products</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-10">AetherPro Platform Portfolio</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.link}
              target={product.link.startsWith('http') ? '_blank' : undefined}
              rel={product.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-bg-orbital border border-border-dim rounded-lg p-6 hover:border-border-bright transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-3">{product.name}</h2>
              <p className="text-text-muted mb-4">{product.description}</p>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent-voltage">
                Visit Platform
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
