'use client'

import { useState } from 'react'
import { ShieldLogo } from '@/components/brand/shield-logo'
import { Wordmark } from '@/components/brand/wordmark'
import { SubBrandLogos } from '@/components/brand/sub-brand-logos'
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
          {/* Column 1 - Logo & Tagline */}
          <div className="lg:col-span-1">
            <ShieldLogo size="md" className="mb-4" />
            <Wordmark text="AETHERPRO" size="md" />
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
              {['About', 'Products', 'Roadmap', 'Whitepaper', 'Contact'].map((item) => (
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
              Stay sovereign. Get updates on AetherPro infrastructure, models, and deployments.
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
              {subscribed && (
                <p className="text-status-active text-xs font-mono">
                  Subscribed successfully!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-border-dim pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <span>Powered by:</span>
              <SubBrandLogos />
            </div>
            <div className="text-center md:text-right">
              <p className="text-text-muted text-xs font-mono mb-1">
                © 2024 AetherPro Technologies LLC. All rights reserved.
              </p>
              <p className="text-text-muted text-xs font-mono">
                Sovereign AI infrastructure built entirely on American soil.
              </p>
              <p className="text-text-muted text-xs font-mono mt-2">
                AetherPro does not publicly disclose customer identities or deployment details.
                Our infrastructure is engineered for environments where discretion, sovereignty, and control are paramount.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
