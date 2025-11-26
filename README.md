# AetherPro Landing Page

A production-ready Next.js 15 landing page for AetherPro's sovereign AI infrastructure, built with the Cinematic Industrial brand system.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📋 Project Overview

This landing page implements the complete AetherPro brand experience following the Cinematic Industrial design system:

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS v3 with custom CSS variables
- **Components**: Custom component library with TypeScript
- **Animations**: Framer Motion for micro-interactions
- **Fonts**: Inter (body) + JetBrains Mono (technical)
- **Deployment**: Vercel-ready with zero-config

## 🎨 Design System

### Color Palette

The site uses a carefully curated industrial color system:

- **Backgrounds**:
  - Void (#0B0A10) - Primary background
  - Orbital (#15151E) - Card backgrounds
  - Steel (#232330) - Elevated surfaces

- **Accents**:
  - Voltage Orange (#FF6B35) - CTAs and critical elements ONLY
  - Signal Beam Purple (#7C3AED) - Intelligence states

- **Text**:
  - Plasma (#EBEBF5) - Headings
  - Muted (#9A9AB0) - Body text (never darker)
  - Dark (#58586A) - Placeholders

### Typography

- **Headings**: Inter, 700 weight, Cinemmatic Industrial spacing
- **Body**: Inter, 400 weight, optimized for readability
- **Technical**: JetBrains Mono, all numbers/specs

### Critical Design Rules

✓ Voltage orange used ONLY for CTAs and critical elements
✓ All body text uses muted color (#9A9AB0) minimum
✓ Technical specs use JetBrains Mono
✓ Maximum border-radius: 12px (angular, precise)
✓ Matte finishes only (no heavy shadows)
✓ 1px borders maximum
✓ Respect `prefers-reduced-motion`

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Global styles & CSS variables
│   ├── sitemap.ts          # SEO sitemap
│   ├── robots.ts           # SEO robots.txt
│   └── api/newsletter/     # Newsletter API endpoint
├── components/
│   ├── ui/                 # Base UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── section-label.tsx
│   │   └── status-indicator.tsx
│   ├── layout/             # Layout components
│   │   ├── footer.tsx
│   │   └── section-wrapper.tsx
│   ├── brand/              # Brand assets
│   │   ├── shield-logo.tsx
│   │   └── wordmark.tsx
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── difference.tsx
│   │   ├── sovereign-compute.tsx
│   │   ├── aetherai-stack.tsx
│   │   ├── aetherforge.tsx
│   │   ├── infrastructure.tsx
│   │   ├── roadmap.tsx
│   │   ├── founder.tsx
│   │   └── final-cta.tsx
│   └── shared/             # Shared section components
│       ├── stat-card.tsx
│       ├── feature-card.tsx
│       ├── timeline-item.tsx
│       └── stack-component.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎯 Sections Implemented

1. **Hero** - Full viewport with shield logo, badge, headline, and dual CTAs
2. **The AetherPro Difference** - Three pillars with feature cards
3. **Sovereign Compute** - Stats grid showcasing zero external dependencies
4. **AetherAI Stack** - Six-component digital human stack
5. **AetherForge** - Agent creation platform capabilities
6. **Infrastructure** - Hardware specs from Master Electrician
7. **Roadmap** - Five-phase timeline with status indicators
8. **Founder** - CJ's story with velocity timeline
9. **Final CTA** - Call-to-action with dual buttons
10. **Footer** - Navigation, legal, newsletter signup

## 🔧 Key Components

### Status Indicator
Critical brand element showing system states:
- Active (green)
- Voltage (orange)
- Thinking (purple, pulsing)
- Critical (red)
- Pending (muted)

### Shield Logo
SVG-based shield with three interconnected nodes:
- Purple structural elements
- Orange voltage accents
- Scalable to any size

### Stack Component
Used in AetherAI section with:
- Left border accent (purple → orange on hover)
- Hover interaction (background shift)
- Technical typography for component names

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

```bash
# Vercel CLI
npm i -g vercel
vercel
```

### Other Platforms

The project builds to a `.next` output directory. Deploy to:
- Netlify
- Railway
- AWS Amplify
- Self-hosted with Node.js

### Environment Variables

No environment variables required for basic functionality. For newsletter integration:

```
RESEND_API_KEY=your_resend_key
```

## 📊 Build Output

```
Route (app)                    Size     First Load JS
○ /                           16.7 kB  119 kB
ƒ /api/newsletter             131 B    102 kB
○ /robots.txt                 131 B    102 kB
○ /sitemap.xml                131 B    102 kB

First Load JS: 102 kB (shared)
```

## 🎨 Brand Compliance Checklist

- [x] All backgrounds use Void palette (#0B0A10, #15151E, #232330)
- [x] Orange voltage (#FF6B35) used ONLY for CTAs and critical elements
- [x] All body text is #9A9AB0 minimum (never darker)
- [x] Technical specs use JetBrains Mono consistently
- [x] No gradients on text anywhere
- [x] Matte card finishes with 1px borders maximum
- [x] Border radius never exceeds 12px
- [x] No heavy drop shadows
- [x] High contrast maintained throughout
- [x] Shield logo minimum 32px height
- [x] Status indicators use colored dots + uppercase labels
- [x] Monospace for all numbers and technical data

## 🔍 Performance

The site is optimized for:
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Lighthouse Target**: 90+ all categories

## 🎭 Brand Voice

The copy maintains the Cinematic Industrial brand voice:
- Technical precision
- No Silicon Valley marketing fluff
- Emphasis on sovereignty and ownership
- Master Electrician credibility
- Industrial strength and reliability

## 📝 License

© 2024 AetherPro Technologies LLC. All rights reserved.

Sovereign AI infrastructure built entirely on American soil.

---

Built with precision. Built with sovereignty. Built by AetherPro.
