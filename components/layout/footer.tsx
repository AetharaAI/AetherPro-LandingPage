'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter signup logic would go here
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 3000)
    setEmail('')
  }

  return (
    <footer className="bg-bg-void border-t border-border-dim py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Metallic A glyph & tagline */}
          <div className="lg:col-span-1">
            <a href="#top" className="inline-block">
              <Image
                src="/brand/aetherpro-glyph-192.png"
                width={72}
                height={72}
                alt="AetherPro"
                className="mb-4 h-16 w-16 object-contain sm:h-[4.5rem] sm:w-[4.5rem]"
              />
            </a>
            <p className="font-heading text-lg font-bold uppercase tracking-[0.15em] text-text-plasma">
              AetherPro
            </p>
            <p className="text-sm text-text-muted mt-2 font-mono uppercase tracking-wider">
              Sovereign AI Infrastructure
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-text-plasma mb-4 uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'PresenceOS', href: 'https://presenceos.us' },
                { label: 'Anchor Systems', href: 'https://anchor.presenceos.us' },
                { label: 'VoiceOps', href: 'https://syndicateai.co' },
                { label: 'Passport / APIS', href: '#passport' },
                { label: 'RedWatch', href: 'https://redwatch.us' },
                { label: 'Research', href: 'https://presenceos.us/research' },
                { label: 'Contact', href: 'mailto:hello@aetherpro.us' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={
                      item.href.startsWith('http') || item.href.startsWith('mailto:')
                        ? item.href.startsWith('http')
                          ? '_blank'
                          : undefined
                        : undefined
                    }
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-text-muted hover:text-text-plasma transition-colors duration-150 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h4 className="font-heading font-semibold text-text-plasma mb-4 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-text-muted hover:text-text-plasma transition-colors duration-150 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-text-muted text-sm">hello@aetherpro.us</p>
              <p className="text-text-muted text-sm">Indiana, USA</p>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-text-plasma mb-4 uppercase tracking-wide">
              Stay Updated
            </h4>
            <p className="text-text-muted text-sm mb-4 leading-relaxed">
              Get updates on controlled intelligence infrastructure, Anchor Systems, PresenceOS,
              and deployment paths.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="voltage" className="w-full">
                SUBSCRIBE
              </Button>
              {subscribed ? (
                <p className="text-status-active text-xs font-mono">Subscribed successfully!</p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="border-t border-border-dim pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <span>
                Deployment ecosystem: on-premises Anchor Systems, customer-controlled cloud,
                dedicated infrastructure, and hybrid sovereign estates.
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-text-muted text-xs font-mono mb-1">
                © 2026 AetherPro Technologies LLC. All rights reserved.
              </p>
              <p className="text-text-muted text-xs font-mono">
                Owned AI execution infrastructure for agents, models, workflows, and voice.
              </p>
              <p className="text-text-muted text-xs font-mono mt-2">
                AetherPro does not publicly disclose customer identities or deployment details. Our
                infrastructure is engineered for environments where discretion, sovereignty, and
                control are paramount.
              </p>
              <p className="text-text-muted text-xs font-mono mt-2">
                SAM.gov Registered • CAGE Code: 174V7 • UEI: HQ89HRQKF9H5
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
