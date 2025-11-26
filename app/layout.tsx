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
    default: 'AetherPro | Sovereign AI Infrastructure for America',
    template: '%s | AetherPro'
  },
  description: 'AetherPro builds sovereign AI infrastructure on U.S. soil — from GPU racks to autonomous agents. No external dependencies. Built by a Master Electrician.',
  keywords: [
    'sovereign AI',
    'AI infrastructure',
    'self-hosted AI',
    'GPU hosting',
    'American AI',
    'AI agents',
    'local AI',
    'CMMC 2.0',
    'data sovereignty',
    'on-premises AI'
  ],
  authors: [{ name: 'AetherPro Technologies LLC' }],
  creator: 'AetherPro Technologies LLC',
  publisher: 'AetherPro Technologies LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aetherpro.us',
    siteName: 'AetherPro',
    title: 'AetherPro | Sovereign AI Infrastructure for America',
    description: 'From GPUs to intelligence — sovereign AI infrastructure built entirely on U.S. soil.',
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
    title: 'AetherPro | Sovereign AI Infrastructure for America',
    description: 'From GPUs to intelligence — sovereign AI infrastructure built entirely on U.S. soil.',
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
