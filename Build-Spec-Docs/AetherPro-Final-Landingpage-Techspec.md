# AETHERPRO LANDING PAGE — TECHNICAL SPECIFICATION DOCUMENT
## Cinematic Industrial Brand System
## For Claude Code + MiniMax M2 Implementation

**Document Version:** 2.0  
**Brand System:** Cinematic Industrial  
**Target Output:** Production-Ready Next.js 15 Landing Page  
**Execution Agents:** Claude Code, MiniMax-M2  
**Human Oversight:** None required during generation  

---

# SECTION 1: PROJECT INITIALIZATION

## 1.1 Technology Stack (Mandatory)

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| Framework | Next.js | 15.x (App Router) | Core application framework |
| React | React | 19.x | UI library |
| Rendering | React Server Components | Default | Performance optimization |
| Styling | TailwindCSS | 4.x | Utility-first CSS |
| Components | ShadCN/UI | Latest | Pre-built accessible components |
| Accessibility | Radix UI | Latest | Primitive accessibility layer |
| Animation | Framer Motion | 11.x | Micro-interactions and transitions |
| Icons | Lucide React | Latest | Icon system |
| Fonts | Next/Font | Built-in | Font optimization (Inter + JetBrains Mono) |
| Deployment | Vercel-ready | N/A | Zero-config deployment |

## 1.2 Project Structure

Generate the following directory structure exactly:

```
aetherpro-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   └── api/
│       └── newsletter/
│           └── route.ts
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   └── status-indicator.tsx
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── section-wrapper.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── difference.tsx
│   │   ├── sovereign-compute.tsx
│   │   ├── aetherai-stack.tsx
│   │   ├── aetherforge.tsx
│   │   ├── infrastructure.tsx
│   │   ├── roadmap.tsx
│   │   ├── founder.tsx
│   │   └── final-cta.tsx
│   ├── brand/
│   │   ├── shield-logo.tsx
│   │   ├── wordmark.tsx
│   │   └── sub-brand-logos.tsx
│   └── shared/
│       ├── section-label.tsx
│       ├── animated-section.tsx
│       ├── stat-card.tsx
│       ├── feature-card.tsx
│       ├── timeline-item.tsx
│       └── stack-component.tsx
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── animations.ts
├── public/
│   ├── og-image.png
│   ├── favicon.ico
│   ├── logos/
│   │   ├── shield-logo.svg
│   │   ├── aetherinterface-logo.svg
│   │   └── blackbox-logo.svg
│   └── images/
│       └── (placeholder directory)
├── styles/
│   └── fonts.ts
├── types/
│   └── index.ts
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 1.3 Package Dependencies

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "@radix-ui/react-slot": "^1.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.0.0",
    "autoprefixer": "^10.0.0",
    "@fontsource/inter": "^5.0.0",
    "@fontsource/jetbrains-mono": "^5.0.0"
  }
}
```

---

# SECTION 2: CINEMATIC INDUSTRIAL DESIGN SYSTEM

## 2.1 Color Palette — CSS Custom Properties

Define exactly these variables in `globals.css`:

```css
:root {
  /* BACKGROUNDS - The Industrial Void */
  --bg-void: #0B0A10;
  --bg-orbital: #15151E;
  --bg-steel: #232330;
  
  /* BORDERS - Mechanical Precision */
  --border-dim: #2A2A35;
  --border-bright: #3F3F50;

  /* ACCENTS - High Voltage (Primary) */
  --accent-voltage: #FF6B35;
  --accent-voltage-dim: rgba(255, 107, 53, 0.15);
  --accent-voltage-glow: rgba(255, 107, 53, 0.4);

  /* INTELLIGENCE - The Aether (Secondary) */
  --signal-beam: #7C3AED;
  --signal-beam-dim: rgba(124, 58, 237, 0.15);
  --signal-beam-glow: rgba(124, 58, 237, 0.4);
  
  /* TEXT - Legibility First */
  --text-plasma: #EBEBF5;
  --text-muted: #9A9AB0;
  --text-dark: #58586A;
  
  /* STATUS INDICATORS */
  --status-active: #10B981;
  --status-voltage: #FF6B35;
  --status-thinking: #7C3AED;
  --status-crit: #FF4444;
}
```

## 2.2 Color Usage Rules (CRITICAL)

### Voltage Orange (`#FF6B35`)
**USE SPARINGLY FOR MAXIMUM IMPACT**

Approved uses:
- Primary CTA buttons
- Critical alerts and status
- Logo accent elements
- Section numbers/badges
- Active state indicators
- Key metrics emphasis

Forbidden uses:
- Large background areas
- Body text
- Decorative elements
- Multiple competing instances

### Signal Beam Purple (`#7C3AED`)
Secondary accent for:
- "Thinking" or processing states
- Loading indicators
- Active/selected UI elements
- Intelligence-related content
- Logo structural elements

### Background Hierarchy
```
Page Background: --bg-void (#0B0A10)
    ↓
Card/Panel Background: --bg-orbital (#15151E)
    ↓
Elevated/Input Background: --bg-steel (#232330)
```

## 2.3 Typography System

### Font Stack
```css
--font-heading: 'Inter', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Typography Scale

| Element | Font | Weight | Size (Desktop) | Size (Mobile) | Transform | Spacing |
|---------|------|--------|----------------|---------------|-----------|---------|
| Section Label | JetBrains Mono | 500 | 12px | 12px | uppercase | 0.1em |
| H1 (Hero) | Inter | 700 | 72px | 40px | none | -0.02em |
| H2 (Section) | Inter | 700 | 48px | 32px | none | -0.01em |
| H3 (Subsection) | Inter | 700 | 32px | 24px | none | 0 |
| H4 (Card Title) | Inter | 600 | 20px | 18px | uppercase | 0.02em |
| Body Large | Inter | 400 | 20px | 18px | none | 0 |
| Body | Inter | 400 | 16px | 16px | none | 0 |
| Body Small | Inter | 400 | 14px | 14px | none | 0 |
| Technical | JetBrains Mono | 400 | 14px | 13px | none | 0 |

### Typography Color Assignment
- H1, H2, H3: `--text-plasma`
- H4, Section Labels: `--text-plasma` or `--accent-voltage` for emphasis
- Body text: `--text-muted`
- Technical specs/numbers: `--text-plasma` in JetBrains Mono
- Placeholders/disabled: `--text-dark`

## 2.4 Spacing Scale

```css
--space-section: 120px;      /* Section vertical padding (desktop) */
--space-section-mobile: 80px;
--space-component: 64px;     /* Between major components */
--space-component-mobile: 48px;
--space-element: 32px;       /* Between elements */
--space-element-mobile: 24px;
--space-tight: 16px;         /* Tight groupings */
--space-micro: 8px;          /* Minimal spacing */
```

## 2.5 Border & Radius System

```css
/* BORDERS - Always 1px maximum */
--border-default: 1px solid var(--border-dim);
--border-active: 1px solid var(--border-bright);
--border-voltage: 1px solid var(--accent-voltage);

/* RADIUS - Angular, precise */
--radius-sm: 4px;
--radius-md: 8px;    /* Buttons */
--radius-lg: 12px;   /* Cards - MAXIMUM */
```

**CRITICAL: Never use border-radius greater than 12px. Keep it angular and precise.**

## 2.6 Shadow System

```css
/* Matte finishes - no heavy shadows */
--shadow-card: 0 4px 24px rgba(0, 0, 0, 0.4);
--shadow-voltage-glow: 0 0 20px var(--accent-voltage-glow);
--shadow-beam-glow: 0 0 20px var(--signal-beam-glow);
```

**CRITICAL: No decorative shadows. Matte finishes only.**

---

# SECTION 3: LOGO & BRAND ASSET SPECIFICATIONS

## 3.1 Shield Logo (Primary)

**The triple-node shield logo is the primary brand mark for aetherpro.us**

### Visual Description
- Three interconnected hexagonal nodes in shield formation
- Purple structural elements (`#7C3AED` range)
- Orange voltage accents at node intersection points
- Central void creating depth
- "AETHERAI" wordmark below with orange "AI" suffix

### Usage on Landing Page

**Hero Section:**
```
[SHIELD LOGO - Large, 120px height minimum]
AETHERPRO (wordmark)
Sovereign AI Infrastructure (tagline)
```

**Header (Fixed Navigation):**
```
[SHIELD LOGO - 40px height] AETHERPRO
```

**Footer:**
```
[SHIELD LOGO - 64px height]
AETHERPRO
Sovereign AI Infrastructure

Powered by:
[Sub-brand logos - 24px height each]
```

### Logo Component Implementation

Create `components/brand/shield-logo.tsx`:
- Accept `size` prop: 'sm' (40px) | 'md' (64px) | 'lg' (120px)
- Render as inline SVG for crisp scaling
- Maintain aspect ratio
- Include proper `aria-label`

### Logo Colors (Extracted from Asset)
```css
--logo-structure: #8B5CF6;      /* Purple hexagon structure */
--logo-structure-dark: #6D28D9; /* Darker purple details */
--logo-voltage: #FF6B35;        /* Orange accent points */
--logo-void: #0B0A10;           /* Internal void */
```

## 3.2 Wordmark

**Typography for "AETHERPRO" and "AETHERAI"**

```css
font-family: Inter;
font-weight: 700;
letter-spacing: 0.1em;
text-transform: uppercase;
```

When displaying "AETHERAI":
- "AETHER" in `--text-plasma`
- "AI" in `--accent-voltage`

When displaying "AETHERPRO":
- Full word in `--text-plasma`
- Optional: "PRO" in `--accent-voltage` for emphasis

## 3.3 Sub-brand Logos

For footer "Powered by" section:
- AetherInterface logo (24px height)
- BlackBox Audio logo (24px height)
- Display in muted state (`opacity: 0.6`)
- Hover: full opacity

---

# SECTION 4: COMPONENT SPECIFICATIONS

## 4.1 Status Indicator Component

**Critical brand element — use throughout**

```typescript
interface StatusIndicatorProps {
  status: 'active' | 'voltage' | 'thinking' | 'critical' | 'pending';
  label: string;
}
```

**Visual:**
- Colored dot: 8px circle
- Label: JetBrains Mono, uppercase, 12px
- 8px gap between dot and label

**Colors:**
```css
active: #10B981 (green)
voltage: #FF6B35 (orange)
thinking: #7C3AED (purple)
critical: #FF4444 (red)
pending: #58586A (muted)
```

**Animation:**
- `thinking` status: pulse animation (opacity 0.5 to 1, 1.5s loop)
- `voltage` status: subtle glow pulse

## 4.2 Section Label Component

**Every section has an uppercase monospace label**

```typescript
interface SectionLabelProps {
  children: string;
  variant?: 'default' | 'voltage';
}
```

**Styling:**
```css
font-family: 'JetBrains Mono';
font-size: 12px;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.1em;
color: var(--text-muted); /* default */
color: var(--accent-voltage); /* voltage variant */
margin-bottom: 16px;
```

## 4.3 Button Components

### Primary Button (High Voltage)

```css
background: var(--accent-voltage);
color: var(--bg-void);
font-family: 'Inter';
font-weight: 700;
font-size: 14px;
text-transform: uppercase;
letter-spacing: 0.05em;
padding: 12px 24px;
border-radius: 8px;
border: none;
cursor: pointer;
transition: box-shadow 0.2s ease;
```

**Hover:**
```css
box-shadow: 0 0 20px var(--accent-voltage-glow);
```

### Secondary Button (Ghost)

```css
background: transparent;
color: var(--text-plasma);
font-family: 'Inter';
font-weight: 700;
font-size: 14px;
text-transform: uppercase;
letter-spacing: 0.05em;
padding: 12px 24px;
border-radius: 8px;
border: 1px solid var(--border-bright);
cursor: pointer;
transition: border-color 0.2s ease;
```

**Hover:**
```css
border-color: var(--text-muted);
```

## 4.4 Card Component

**Matte industrial panel**

```css
background: var(--bg-orbital);
border: 1px solid var(--border-dim);
border-radius: 12px;
padding: 24px;
```

**Hover (if interactive):**
```css
border-color: var(--border-bright);
transform: translateY(-2px);
transition: all 0.2s ease;
```

**CRITICAL: No heavy shadows. Flat, matte finish.**

## 4.5 Stat Card Component

```typescript
interface StatCardProps {
  value: string;
  label: string;
}
```

**Layout:**
- Value: JetBrains Mono, 32px, `--text-plasma`, bold
- Label: JetBrains Mono, 12px, `--text-muted`, uppercase
- Background: `--bg-orbital`
- Border: 1px `--border-dim`
- Padding: 24px

## 4.6 Feature Card Component

```typescript
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlighted?: boolean;
}
```

**Styling:**
- Background: `--bg-orbital`
- Border: 1px `--border-dim` (default) or `--accent-voltage` (highlighted)
- Padding: 32px
- Icon: 40px, `--accent-voltage`
- Title: Inter 600, 20px, uppercase, `--text-plasma`
- Description: Inter 400, 16px, `--text-muted`

## 4.7 Timeline Item Component

```typescript
interface TimelineItemProps {
  phase: string;
  title: string;
  description: string;
  status: 'active' | 'voltage' | 'thinking' | 'pending';
}
```

**Visual Structure:**
- Vertical connector line: 2px, `--border-dim`
- Phase indicator circle: 16px
  - Uses StatusIndicator colors based on status
  - `thinking` status gets pulse animation
- Phase label: JetBrains Mono, 12px, uppercase
- Title: Inter 700, 24px
- Description: Inter 400, 16px, `--text-muted`

## 4.8 Stack Component (AetherAI Section)

```typescript
interface StackComponentProps {
  icon: LucideIcon;
  name: string;
  title: string;
  description: string;
}
```

**Visual:**
- Background: `--bg-orbital`
- Left border accent: 3px `--signal-beam`
- Padding: 24px
- Icon: 32px, `--signal-beam`
- Name: JetBrains Mono, 12px, uppercase, `--accent-voltage`
- Title: Inter 600, 18px, `--text-plasma`
- Description: Inter 400, 14px, `--text-muted`

**Hover:**
- Background shifts to `--bg-steel`
- Subtle transition

---

# SECTION 5: SECTION SPECIFICATIONS

## 5.1 Hero Section

**Layout:**
- Full viewport height (100vh)
- Content centered vertically and horizontally
- Background: `--bg-void` with subtle radial gradient to `--bg-orbital` at edges

**Content Stack (centered):**
1. Shield Logo: 120px height
2. Gap: 32px
3. Badge: "SOVEREIGN AI INFRASTRUCTURE"
   - Background: `--accent-voltage-dim`
   - Text: `--accent-voltage`
   - Font: JetBrains Mono, 12px, uppercase
   - Padding: 8px 16px
   - Border-radius: 4px
4. Gap: 24px
5. H1: "Sovereign AI Infrastructure for America."
   - Max-width: 900px
   - Text-align: center
6. Gap: 16px
7. Subtitle: Body Large, `--text-muted`, max-width: 600px
8. Gap: 32px
9. CTA Button Group: 16px gap between buttons

**Background Decoration:**
- Subtle grid pattern (CSS) at 0.03 opacity
- No heavy animations
- Optional: very subtle circuit lines radiating from logo

**Animation:**
- Stagger children: 0.1s each
- Fade up from 30px
- Duration: 0.5s

## 5.2 Difference Section

**Layout:**
- Section padding: `--space-section`
- Max-width: 1200px centered

**Content:**
1. Section Label: "INFRASTRUCTURE"
2. H2: "Most Companies Rent Cloud AI. We Build It."
3. Body paragraph
4. Gap: `--space-component`
5. Three-column grid (desktop), stack on mobile
   - Three Feature Cards with icons:
     - Server icon → Physical Infrastructure
     - Brain icon → Intelligence Layer
     - Bot icon → Agent Operating System

## 5.3 Sovereign Compute Section

**Layout:**
- Section padding: `--space-section`
- Background: `--bg-orbital` (full-bleed)
- Content: max-width 1200px

**Desktop Layout:**
- Left side (55%): Text content
- Right side (45%): Stats grid 2x2

**Content Left:**
1. Section Label: "COMPUTE"
2. H2: "Your AI. Your Hardware. Your Soil."
3. Body paragraphs

**Content Right:**
- Four Stat Cards in 2x2 grid:
  - "0" / "EXTERNAL API DEPENDENCIES"
  - "100%" / "U.S. SOIL INFERENCE"
  - "<50ms" / "RESPONSE LATENCY"
  - "∞" / "UPTIME SLAs"

## 5.4 AetherAI Stack Section

**Layout:**
- Section padding: `--space-section`
- Background: `--bg-void`

**Content:**
1. Section Label: "INTELLIGENCE" (centered)
2. H2: "Intelligence That Sees, Hears, Speaks, and Acts." (centered)
3. Body paragraph (centered, max-width 700px)
4. Gap: `--space-component`
5. 2x3 Grid of Stack Components:
   - Eye icon → EYES
   - Ear icon → EARS
   - Volume2 icon → VOICE
   - Hand icon → HANDS
   - Brain icon → BRAIN
   - Database icon → MEMORY

**Interaction:**
- Hover on component: others reduce to 50% opacity
- Hovered component: left border animates to `--accent-voltage`

## 5.5 AetherForge Section

**Layout:**
- Section padding: `--space-section`
- Background: `--bg-orbital`

**Content:**
1. Section Label: "AGENTS"
2. H2
3. Body paragraph
4. Gap: `--space-component`
5. 3x2 Grid of capability blocks (Feature Cards):
   - Agent Creation
   - Memory Layer
   - Tool Integration
   - Local Deployment
   - Triad Switching
   - Marketplace

## 5.6 Infrastructure Section

**Layout:**
- Section padding: `--space-section`
- Two-column on desktop

**Left Column (55%):**
1. Section Label: "HARDWARE"
2. H2
3. Body paragraphs
4. CTA Button: "REQUEST HARDWARE CONSULTATION"

**Right Column (45%):**
- Specification list with checkmark icons
- Each item: Lucide Check icon (green) + text
- 8 specification items
- JetBrains Mono for technical terms

## 5.7 Roadmap Section

**Layout:**
- Section padding: `--space-section`
- Centered vertical timeline

**Content:**
1. Section Label: "ROADMAP" (centered)
2. H2 (centered)
3. Gap: `--space-component`
4. Timeline with 5 phases:
   - Phase 1: status="active"
   - Phase 2: status="voltage"
   - Phase 3: status="thinking"
   - Phase 4: status="pending"
   - Phase 5: status="pending"

**Animation:**
- Timeline items animate in sequence on scroll
- Stagger: 0.15s

## 5.8 Founder Section

**Layout:**
- Section padding: `--space-section`
- Background: subtle gradient from `--bg-void` to `--bg-orbital`

**Content:**
1. Section Label: "FOUNDER"
2. H2: "Built by CJ"
3. Body paragraphs (max-width 700px)
4. Gap: `--space-component`
5. Velocity Timeline:
   - Horizontal on desktop
   - Vertical on mobile
   - 6 milestone items
   - JetBrains Mono for dates

## 5.9 Final CTA Section

**Layout:**
- Full-width
- Background: gradient from `--bg-orbital` to `--bg-void`
- Padding: 160px vertical (desktop), 80px (mobile)

**Content (centered):**
1. H2: "The Future Runs Local."
2. Body paragraph
3. Gap: 32px
4. Two CTA buttons

## 5.10 Footer

**Layout:**
- Background: `--bg-void`
- Border-top: 1px `--border-dim`
- Padding: 64px vertical

**Content (4-column grid on desktop):**

**Column 1:**
- Shield Logo (64px)
- "AETHERPRO" wordmark
- Tagline

**Column 2:**
- Navigation links
- Link style: `--text-muted`, hover `--text-plasma`

**Column 3:**
- Legal links
- Same link style

**Column 4:**
- Newsletter signup
- Input + button inline
- Success/error states

**Bottom Row:**
- "Powered by:" + sub-brand logos
- Copyright text

---

# SECTION 6: ANIMATION SPECIFICATIONS

## 6.1 Global Animation Rules

**From brand guidelines:**
- Respect `prefers-reduced-motion`
- No auto-playing videos
- Subtle transitions only (<300ms)
- No decorative animations

## 6.2 Animation Tokens

```typescript
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.15,
    normal: 0.25,
    slow: 0.4
  },
  easing: {
    default: [0.25, 0.1, 0.25, 1],
    smooth: [0.4, 0, 0.2, 1]
  },
  stagger: {
    fast: 0.05,
    normal: 0.1
  }
}
```

## 6.3 Scroll Animations

- Trigger: 15% of element visible
- Animation: fade in + translateY(30px)
- Duration: 0.4s
- Easing: smooth

## 6.4 Hover Animations

- Cards: translateY(-2px), duration 0.2s
- Buttons: box-shadow glow, duration 0.2s
- Links: color transition, duration 0.15s

## 6.5 Status Indicator Animations

```css
@keyframes pulse-thinking {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes glow-voltage {
  0%, 100% { box-shadow: 0 0 4px var(--accent-voltage-glow); }
  50% { box-shadow: 0 0 12px var(--accent-voltage-glow); }
}
```

---

# SECTION 7: RESPONSIVE BREAKPOINTS

## 7.1 Breakpoint Definitions

| Name | Min Width | Max Width |
|------|-----------|-----------|
| mobile | 0px | 639px |
| tablet | 640px | 1023px |
| desktop | 1024px | 1279px |
| wide | 1280px | ∞ |

## 7.2 Layout Adaptations

**Mobile (0-639px):**
- Single column layouts
- Navigation: hamburger menu (optional: always show key CTAs)
- Section padding: 80px vertical, 24px horizontal
- Logo in header: 32px height
- Hero logo: 80px height
- Typography: mobile scale
- Footer: single column stack

**Tablet (640-1023px):**
- Two column grids where applicable
- Section padding: 100px vertical, 48px horizontal
- Hero logo: 100px height

**Desktop (1024px+):**
- Full layouts as specified
- Section padding: 120px vertical
- Container max-width: 1200px
- Hero logo: 120px height

---

# SECTION 8: SEO & METADATA

## 8.1 Metadata Configuration

```typescript
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
```

## 8.2 Sitemap & Robots

Generate standard sitemap.ts and robots.ts per Next.js 15 conventions.

---

# SECTION 9: API ROUTES

## 9.1 Newsletter Endpoint

**Path:** `/api/newsletter/route.ts`
**Method:** POST
**Body:** `{ email: string }`

Generate as placeholder with console logging. Include comments for future integration with Resend/SendGrid.

---

# SECTION 10: PERFORMANCE & ACCESSIBILITY

## 10.1 Core Web Vitals Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |

## 10.2 Accessibility (WCAG AA)

**Contrast Ratios (verified in brand doc):**
- Plasma White on Void: 14.2:1 ✓
- Muted Signal on Void: 7.8:1 ✓
- Voltage Orange on Void: 6.1:1 ✓

**Requirements:**
- All interactive elements: 44x44px minimum touch targets
- Visible focus states using `--border-bright`
- Semantic HTML structure
- Skip-to-content link
- Alt text on all images
- Respect `prefers-reduced-motion`

---

# SECTION 11: VISUAL RULES CHECKLIST

**From brand guidelines — verify before deployment:**

- [ ] All backgrounds use Void palette (#0B0A10, #15151E, #232330)
- [ ] Orange voltage (#FF6B35) used ONLY for CTAs and critical elements
- [ ] All body text is #9A9AB0 minimum (never darker)
- [ ] Technical specs use JetBrains Mono consistently
- [ ] No gradients on text anywhere
- [ ] Matte card finishes with 1px borders maximum
- [ ] Border radius never exceeds 12px
- [ ] No heavy drop shadows
- [ ] High contrast maintained throughout
- [ ] Shield logo minimum 32px height
- [ ] Status indicators use colored dots + uppercase labels
- [ ] No Silicon Valley marketing language in copy
- [ ] Monospace for all numbers and technical data

---

# SECTION 12: EXECUTION INSTRUCTIONS

## For Claude Code:

1. Initialize Next.js 15 project with App Router
2. Install all dependencies from Section 1.3
3. Generate directory structure from Section 1.2
4. Implement Cinematic Industrial design system in globals.css (Section 2)
5. Create Shield Logo component from provided asset
6. Create all shared components per Section 4
7. Create all section components per Section 5
8. Implement animations per Section 6
9. Configure responsive breakpoints per Section 7
10. Set up SEO metadata per Section 8
11. Create API placeholder per Section 9
12. Run visual rules checklist (Section 11)
13. Build and fix errors
14. Lighthouse audit > 90 all categories

## For MiniMax-M2:

1. Receive project from Claude Code
2. Verify all copy matches `AetherPro-Landing-Copy-v2.md` exactly
3. Verify brand colors are correctly implemented
4. Test all interactive elements
5. Verify responsive behavior at all breakpoints
6. Run accessibility audit
7. Generate production build
8. Prepare deployment package

---

# SECTION 13: ASSET REFERENCES

## Required Assets

**Logo Files (to be placed in /public/logos/):**
- shield-logo.svg — Primary shield logo (provided in uploads)
- Convert PNG to SVG for production use
- Generate sub-brand placeholder logos

**OG Image:**
- 1200x630px
- Dark background (#0B0A10)
- Shield logo centered
- "AetherPro" wordmark
- Tagline

**Favicon:**
- Generate from shield logo
- ICO format with multiple sizes

---

# SECTION 14: COPY REFERENCE

All section copy sourced from:
`AetherPro-Landing-Copy-v2.md`

Implement exactly as specified. No modifications.

---

**END OF SPECIFICATION**

*This document provides complete instructions for autonomous implementation using the Cinematic Industrial brand system.*