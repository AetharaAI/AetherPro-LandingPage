import Link from 'next/link'

const sections = [
  {
    id: 'aetheros',
    title: 'AetherOS',
    description: 'Sovereign AI operating system for orchestrated agents, routing, and policy control.',
  },
  {
    id: 'passport',
    title: 'PassPort IAM',
    description: 'Identity and mandate layer extending Keycloak with AI agency primitives and delegation.',
  },
  {
    id: 'mcp-fabric',
    title: 'MCP Fabric',
    description: 'Agent-to-Agent communication protocol powered by asynchronous Redis Streams.',
  },
]

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-bg-void text-text-plasma">
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[260px_1fr] gap-12">
        <aside className="space-y-6 border border-border-dim rounded-lg p-6 bg-bg-orbital">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-text-dark mb-2">Docs Hub</p>
            <h1 className="text-2xl font-bold">AetherPro Documentation</h1>
          </div>
          <nav className="space-y-3 text-sm">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="block text-text-muted hover:text-text-plasma transition-colors"
              >
                {section.title}
              </Link>
            ))}
            <Link
              href="/"
              className="block text-text-muted hover:text-text-plasma transition-colors"
            >
              Back to Home
            </Link>
          </nav>
        </aside>

        <section className="space-y-12">
          <header>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-text-dark mb-4">
              Central Repository
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sovereign Stack Documentation</h2>
            <p className="text-text-muted text-lg max-w-2xl">
              Technical specs, deployment guides, and architecture notes for the AetherPro ecosystem.
              Use this hub to navigate platform documentation and core infrastructure capabilities.
            </p>
          </header>

          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="bg-bg-orbital border border-border-dim rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3">{section.title}</h3>
                <p className="text-text-muted mb-4">{section.description}</p>
                <ul className="text-sm text-text-muted space-y-2">
                  <li>• Architecture overview and deployment topology</li>
                  <li>• Compliance posture and sovereignty controls</li>
                  <li>• Integration points, APIs, and reference workflows</li>
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
