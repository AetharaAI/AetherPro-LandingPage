'use client'

import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Platform', href: '#platform', external: false },
  { label: 'VoiceOps', href: '#voiceops', external: false },
  { label: 'Passport / APIS', href: '#passport', external: false },
  { label: 'RedWatch', href: 'https://redwatch.us', external: true },
  { label: 'Scriber', href: 'https://scriber.aetherpro.us', external: true },
  { label: 'Request Access', href: '#request-access', external: false, accent: true },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:top-4 sm:px-4 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[18px] border border-white/10 bg-[rgba(10,18,29,0.9)] px-3 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:rounded-[22px] sm:px-5 sm:py-3 md:flex md:items-center md:justify-between md:px-6">
        <div className="flex items-center justify-between gap-3">
          <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={closeMenu}>
            <Image
              src="/brand/aetherpro-glyph-96.png"
              width={40}
              height={40}
              alt="AetherPro glyph"
              className="h-8 w-8 flex-none object-contain sm:h-10 sm:w-10"
              priority
            />
            <div className="min-w-0">
              <Image
                src="/brand/aetherpro-wordmark-512.png"
                width={260}
                height={57}
                alt="AetherPro"
                className="h-5 w-auto max-w-[9.5rem] object-contain sm:h-7 sm:max-w-full"
                priority
              />
              <span className="mt-0.5 hidden text-[0.7rem] text-[#8ba0b8] sm:block sm:text-[0.74rem]">
                sovereign AI infrastructure
              </span>
            </div>
          </a>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 text-text-plasma transition-colors hover:border-white/20 hover:bg-white/[0.04] md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <nav className="hidden items-center gap-2 text-sm text-[#c8d7e6] md:flex lg:gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={[
                'rounded-xl border px-3 py-2 transition-all lg:px-4',
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

      {menuOpen ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-[18px] border border-white/10 bg-[rgba(10,18,29,0.96)] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl md:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onClick={closeMenu}
                className={[
                  'rounded-xl border px-4 py-3 text-sm transition-all',
                  item.accent
                    ? 'border-white/15 bg-white/5 text-text-plasma'
                    : 'border-transparent text-[#c8d7e6] hover:border-white/12 hover:bg-white/[0.03] hover:text-text-plasma',
                ].join(' ')}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}