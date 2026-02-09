'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'
import { ShieldLogo } from '@/components/brand/shield-logo'
import { Wordmark } from '@/components/brand/wordmark'
import { SubBrandLogos } from '@/components/brand/sub-brand-logos'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')

    fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then(async (response) => {
        const data = await response.json()
        if (!response.ok) {
          throw new Error(data?.error ?? 'Unable to subscribe')
        }
        setSubscribed(true)
        setStatusMessage('Welcome to AetherPro. Confirmation sent.')
        setEmail('')
        setTimeout(() => setSubscribed(false), 3000)
      })
      .catch((error) => {
        setStatusMessage(error instanceof Error ? error.message : 'Unable to subscribe')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
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
              {[
                { label: 'About', href: '/about' },
                { label: 'Products', href: '/products' },
                { label: 'Roadmap', href: '/#roadmap' },
                { label: 'Whitepaper', href: '/docs' },
                { label: 'Contact', href: '/#request-access' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
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
              <p className="text-text-muted text-sm">United States</p>
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
              <Button type="submit" variant="voltage" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'SUBMITTING...' : 'SUBSCRIBE'}
              </Button>
              {subscribed && (
                <p className="text-status-active text-xs font-mono">
                  {statusMessage || 'Subscribed successfully!'}
                </p>
              )}
              {!subscribed && statusMessage && (
                <p className="text-status-critical text-xs font-mono">{statusMessage}</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-border-dim pt-8 mb-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-text-dark mb-4">
            Sovereign Infrastructure Partners
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <Image
              src="/partners/ovhcloud.svg"
              alt="OVHcloud logo"
              width={160}
              height={48}
              className="h-8 w-auto"
            />
            <Image
              src="/partners/speechmatics.svg"
              alt="Speechmatics logo"
              width={180}
              height={48}
              className="h-8 w-auto"
            />
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
                Sovereign AI infrastructure for total data ownership and independence.
              </p>
              <p className="text-text-muted text-xs font-mono mt-2">
                AetherPro does not publicly disclose customer identities or deployment details.
                Our infrastructure is engineered for environments where discretion, sovereignty, and control are paramount.
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
