export function PartnersSection() {
  return (
    <div className="bg-bg-void border-t border-b border-border-dim py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-text-dark mb-6">
          Deployment Ecosystem
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {['Managed private cloud', 'Customer-controlled cloud', 'Dedicated infrastructure', 'Future on-prem options'].map((item) => (
            <span key={item} className="rounded-md border border-border-dim bg-bg-orbital px-4 py-2 text-sm text-text-muted">
              {item}
            </span>
          ))}
        </div>
        <p className="text-xs text-text-muted mt-6">
          Infrastructure ecosystem language only. Formal partner claims are not implied unless confirmed.
        </p>
      </div>
    </div>
  )
}
