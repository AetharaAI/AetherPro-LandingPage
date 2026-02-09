import Image from 'next/image'

export function PartnersSection() {
  return (
    <div className="bg-bg-void border-t border-b border-border-dim py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-text-dark mb-6">
          Sovereign Infrastructure Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/partners/ovhcloud.svg"
              alt="OVHcloud logo"
              width={160}
              height={48}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/partners/speechmatics.svg"
              alt="Speechmatics logo"
              width={190}
              height={48}
              className="h-10 w-auto"
            />
          </div>
        </div>
        <p className="text-xs text-text-muted mt-6">
          Architected with world-class sovereign infrastructure partners.
        </p>
      </div>
    </div>
  )
}
