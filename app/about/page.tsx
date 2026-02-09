export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-void text-text-plasma">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-text-dark mb-4">About</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">AetherPro Technologies</h1>
        <p className="text-lg text-text-muted mb-6 leading-relaxed">
          Cory Gibson is the Systems Architect and CTO behind AetherOS — the Linux for AI. After 15 years
          building mission-critical infrastructure, he is now applying that discipline to sovereign AI systems
          that prioritize data ownership, infrastructure independence, and operational resilience.
        </p>
        <p className="text-lg text-text-muted mb-6 leading-relaxed">
          AetherPro Technologies builds composable AI infrastructure that unifies identity, inference, and
          multimodal intelligence. Every deployment is designed to keep governance, routing, and control in
          the hands of the organizations that operate it.
        </p>
        <div className="bg-bg-orbital border border-border-dim rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3">AetherOS Mission</h2>
          <p className="text-text-muted leading-relaxed">
            Deliver a sovereign operating system for AI that empowers enterprises, governments, and critical
            infrastructure teams to deploy intelligence without surrendering privacy or autonomy.
          </p>
        </div>
      </div>
    </main>
  )
}
