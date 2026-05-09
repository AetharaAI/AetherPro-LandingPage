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
    default: 'AetherPro | Sovereign AI Infrastructure for Voice and Agents',
    template: '%s | AetherPro'
  },
  description: 'AetherPro builds private AI voice agents, agent identity, secure orchestration, and controlled inference for organizations that need privacy, auditability, and operational reliability.',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aetherpro.us',
    siteName: 'AetherPro',
    title: 'AetherPro | Sovereign AI Infrastructure for Voice and Agents',
    description: 'Private AI voice agents, agent identity, secure orchestration, and controlled inference.',
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
    title: 'AetherPro | Sovereign AI Infrastructure for Voice and Agents',
    description: 'Private AI voice agents, agent identity, secure orchestration, and controlled inference.',
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
