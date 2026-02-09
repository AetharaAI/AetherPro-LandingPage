const products = [
  {
    name: 'AetherOS',
    description: 'Sovereign AI operating system for orchestrated agents, routing, and policy control.',
    link: 'https://aetherpro.tech',
  },
  {
    name: 'AgentForge Marketplace',
    description: 'Marketplace for composable AI agents and standardized skill registries.',
    link: 'https://aetheragentforge.org',
  },
  {
    name: 'MCP Fabric',
    description: 'Open-source A2A communication protocol using asynchronous Redis Streams.',
    link: 'https://mcpfabric.space',
  },
  {
    name: 'Perceptor',
    description: 'Multimodal sensing platform for sovereign perception and grounding.',
    link: 'https://perceptor.us',
  },
  {
    name: 'BlackBox Audio',
    description: 'Dedicated audio AI platform running specialized reasoning models for voice-first interactions.',
    link: 'https://blackboxaudio.tech',
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
              target="_blank"
              rel="noopener noreferrer"
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
