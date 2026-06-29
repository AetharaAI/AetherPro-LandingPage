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
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Mobile: compact 64px bar + attached dropdown */}
      <div className="relative md:hidden">
        <div className="flex h-16 max-h-16 items-center justify-between border-b border-white/10 bg-[rgba(10,18,29,0.96)] px-4 backdrop-blur-md">
          <a href="#top" className="flex min-w-0 items-center gap-2.5" onClick={closeMenu}>
            <Image
              src="/brand/aetherpro-glyph-96.png"
              width={28}
              height={28}
              alt="AetherPro glyph"
              className="h-7 w-7 flex-none object-contain"
              priority
            />
            <Image
              src="/brand/aetherpro-wordmark-512.png"
              width={200}
              height={44}
              alt="AetherPro"
              className="h-4 w-auto max-w-[7.75rem] object-contain"
              priority
            />
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-white/12 text-text-plasma transition-colors active:bg-white/[0.04]"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <>
            <button
              type="button"
              className="fixed inset-0 top-16 z-40 bg-bg-void/50"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            />
            <nav
              id="mobile-nav-menu"
              className="absolute left-0 right-0 top-full z-50 border-b border-white/10 bg-[rgba(10,18,29,0.98)] px-2 py-1 backdrop-blur-md"
              aria-label="Mobile navigation"
            >
              <ul className="divide-y divide-white/8">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      onClick={closeMenu}
                      className={[
                        'block w-full px-3 py-2.5 text-sm transition-colors active:bg-white/[0.04]',
                        item.accent
                          ? 'font-medium text-accent-voltage'
                          : 'text-[#c8d7e6]',
                      ].join(' ')}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        ) : null}
      </div>

      {/* Desktop: pill header */}
      <div className="hidden px-4 pt-4 sm:px-6 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-[22px] border border-white/10 bg-[rgba(10,18,29,0.84)] px-6 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl">
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

          <nav className="flex items-center gap-2 text-sm text-[#c8d7e6] lg:gap-3">
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
      </div>
    </header>
  )
}