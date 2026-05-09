export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-void text-text-plasma">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-text-dark mb-4">About</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">AetherPro Technologies</h1>
        <p className="text-lg text-text-muted mb-6 leading-relaxed">
          Cory Gibson is the founder/operator behind AetherPro Technologies. After 15 years building
          mission-critical infrastructure, he is applying that discipline to private AI voice agents,
          agent identity, controlled inference, and secure automation systems.
        </p>
        <p className="text-lg text-text-muted mb-6 leading-relaxed">
          AetherPro Technologies builds sovereign AI infrastructure that unifies identity, inference,
          voice workflows, and multi-agent coordination. Every deployment path is designed to keep
          governance, routing, and control in the hands of the organizations that operate it.
        </p>
        <div className="bg-bg-orbital border border-border-dim rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3">AetherPro Mission</h2>
          <p className="text-text-muted leading-relaxed">
            Deliver private AI voice agents and secure automation for organizations that need privacy,
            auditability, reliability, and clear control over identity, data, routing, and inference.
          </p>
        </div>
      </div>
    </main>
  )
}
