import Image from 'next/image'

const navItems = [
  { label: 'Voice Agents', href: 'https://syndicateai.co/voice-agents', external: true },
  { label: 'Passport / APIS', href: 'https://passportalliance.org', external: true },
  { label: 'COLLAB', href: '#ecosystem', external: false },
  { label: 'RedWatch', href: 'https://redwatch.us', external: true },
  { label: 'Scriber', href: 'https://scriber.aetherpro.us', external: true },
  { label: 'Request Access', href: '#request-access', external: false, accent: true },
]

export function SiteHeader() {
  return (
    <div className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-[22px] border border-white/10 bg-[rgba(10,18,29,0.84)] px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <Image
            src="/brand/aetherpro-glyph-96.png"
            width={40}
            height={40}
            alt="AetherPro glyph"
            className="h-10 w-10 flex-none object-contain"
            priority
          />
          <div className="min-w-0">
            <Image
              src="/brand/aetherpro-wordmark-512.png"
              width={260}
              height={57}
              alt="AetherPro"
              className="h-7 w-auto max-w-full object-contain"
              priority
            />
            <span className="mt-1 block text-[0.74rem] text-[#8ba0b8]">
              sovereign AI infrastructure
            </span>
          </div>
        </a>

        <nav className="flex flex-wrap items-center gap-3 text-sm text-[#c8d7e6]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={[
                'rounded-xl border px-4 py-2 transition-all',
                item.accent
                  ? 'border-white/15 bg-white/5 text-text-plasma hover:border-accent-voltage/60 hover:text-text-plasma'
                  : 'border-transparent text-[#c8d7e6] hover:border-white/12 hover:bg-white/[0.03] hover:text-text-plasma',
              ].join(' ')}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
