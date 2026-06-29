import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aetherpro.us'),
  title: {
    default: 'AetherPro | Owned AI Execution Infrastructure',
    template: '%s | AetherPro'
  },
  description: 'AetherPro builds owned AI execution infrastructure — Anchor nodes, PresenceOS, Passport/APIS, RedWatch, VoiceOps, and governed agent systems for organizations that need privacy, auditability, and operational control.',
  keywords: [
    'sovereign AI',
    'AI infrastructure',
    'voice AI agents',
    'private AI automation',
    'agent identity',
    'APIS',
    'Passport Alliance',
    'MCP orchestration',
    'self-hosted AI',
    'AI agents',
    'controlled inference',
    'data sovereignty',
    'secure automation'
  ],
  authors: [{ name: 'AetherPro Technologies LLC' }],
  creator: 'AetherPro Technologies LLC',
  publisher: 'AetherPro Technologies LLC',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/brand/aetherpro-glyph-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/brand/aetherpro-glyph-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aetherpro.us',
    siteName: 'AetherPro',
    title: 'AetherPro | Owned AI Execution Infrastructure',
    description: 'Owned AI execution infrastructure for agents, models, workflows, and voice on Anchor nodes running PresenceOS.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AetherPro - Sovereign AI Infrastructure'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AetherPro | Owned AI Execution Infrastructure',
    description: 'Owned AI execution infrastructure for agents, models, workflows, and voice on Anchor nodes running PresenceOS.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
