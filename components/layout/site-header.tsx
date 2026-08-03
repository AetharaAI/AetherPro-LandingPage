'use client'

import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'PresenceOS', href: 'https://presenceos.us', external: true },
  { label: 'Anchor Systems', href: 'https://anchor.presenceos.us', external: true },
  { label: 'VoiceOps', href: 'https://syndicateai.co', external: true },
  { label: 'Passport / APIS', href: '#passport', external: false },
  { label: 'RedWatch', href: 'https://redwatch.us', external: true },
  { label: 'Research', href: 'https://presenceos.us/research', external: true },
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
          <a href="#top" className="flex min-w-0 items-center" onClick={closeMenu}>
            <Image
              src="/brand/aetherpro-header-lockup-480.png"
              width={480}
              height={131}
              alt="AetherPro — Sovereign AI systems for voice, operations, agents, and controlled infrastructure"
              className="h-10 w-auto max-w-[min(17rem,72vw)] object-contain object-left"
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
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-[22px] border border-white/10 bg-[rgba(10,18,29,0.84)] px-5 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl lg:px-6">
          <a href="#top" className="flex min-w-0 shrink items-center">
            <Image
              src="/brand/aetherpro-header-lockup.png"
              width={800}
              height={218}
              alt="AetherPro — Sovereign AI systems for voice, operations, agents, and controlled infrastructure"
              className="h-12 w-auto max-w-[min(22rem,36vw)] object-contain object-left lg:h-14 lg:max-w-[min(24rem,40vw)]"
              priority
            />
          </a>

          <nav className="flex flex-none items-center gap-1.5 text-sm text-[#c8d7e6] lg:gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={[
                  'rounded-xl border px-2.5 py-2 transition-all lg:px-4',
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
