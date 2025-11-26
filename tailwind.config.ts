import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Backgrounds - The Industrial Void
        'bg-void': 'var(--bg-void)',
        'bg-orbital': 'var(--bg-orbital)',
        'bg-steel': 'var(--bg-steel)',

        // Borders - Mechanical Precision
        'border-dim': 'var(--border-dim)',
        'border-bright': 'var(--border-bright)',

        // Accents - High Voltage (Primary)
        'accent-voltage': 'var(--accent-voltage)',
        'accent-voltage-dim': 'var(--accent-voltage-dim)',
        'accent-voltage-glow': 'var(--accent-voltage-glow)',

        // Intelligence - The Aether (Secondary)
        'signal-beam': 'var(--signal-beam)',
        'signal-beam-dim': 'var(--signal-beam-dim)',
        'signal-beam-glow': 'var(--signal-beam-glow)',

        // Text - Legibility First
        'text-plasma': 'var(--text-plasma)',
        'text-muted': 'var(--text-muted)',
        'text-dark': 'var(--text-dark)',

        // Status Indicators
        'status-active': 'var(--status-active)',
        'status-voltage': 'var(--status-voltage)',
        'status-thinking': 'var(--status-thinking)',
        'status-crit': 'var(--status-crit)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },
      fontSize: {
        'section-label': ['12px', { lineHeight: '1', letterSpacing: '0.1em' }],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'voltage-glow': 'var(--shadow-voltage-glow)',
        'beam-glow': 'var(--shadow-beam-glow)',
      },
    },
  },
  plugins: [],
}
export default config
