import type { Metadata, Viewport } from 'next'
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

export const viewport: Viewport = {
  themeColor: '#0B0A10',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://aetherpro.us'),
  title: {
    default: 'AetherPro Technologies | Sovereign AI Infrastructure and Agent Operations',
    template: '%s | AetherPro Technologies',
  },
  description:
    'AetherPro builds controlled AI systems for voice, business operations, authenticated agents, private compute, and evidence-backed automation.',
  keywords: [
    'sovereign AI',
    'AI infrastructure',
    'voice AI agents',
    'private AI automation',
    'agent identity',
    'APIS',
    'Passport Alliance',
    'authenticated agents',
    'owned execution',
    'self-hosted AI',
    'controlled inference',
    'data sovereignty',
    'secure automation',
    'evidence-backed automation',
  ],
  authors: [{ name: 'AetherPro Technologies LLC' }],
  creator: 'AetherPro Technologies LLC',
  publisher: 'AetherPro Technologies LLC',
  applicationName: 'AetherPro',
  alternates: {
    canonical: 'https://aetherpro.us',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aetherpro.us',
    siteName: 'AetherPro Technologies',
    title: 'AetherPro Technologies | Sovereign AI Infrastructure and Agent Operations',
    description:
      'AetherPro builds controlled AI systems for voice, business operations, authenticated agents, private compute, and evidence-backed automation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AetherPro — Sovereign AI systems for voice, operations, agents, and controlled infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AetherPro Technologies | Sovereign AI Infrastructure and Agent Operations',
    description:
      'AetherPro builds controlled AI systems for voice, business operations, authenticated agents, private compute, and evidence-backed automation.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
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
