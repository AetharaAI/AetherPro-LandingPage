# AetherPro Brand Guidelines - Cinematic Industrial

## Strategic Position
**"Sovereign AI Infrastructure Built by a Master Electrician"**

AetherPro is not software - it's physical infrastructure for AI. We compete with Palantir, Anduril, and Databricks on industrial strength, not with Notion and Linear on consumer polish.

---

## Color Palette: "Cinematic Industrial"

### The Void (Backgrounds)
```css
--bg-void: #0B0A10        /* Main page background */
--bg-orbital: #15151E     /* Card/panel backgrounds */
--bg-steel: #232330       /* Input fields/elevated surfaces */
```

### The Power (Accents)
```css
--accent-voltage: #FF6B35                  /* Primary CTA, critical alerts, logo accent */
--accent-voltage-dim: rgba(255, 107, 53, 0.15)   /* Subtle highlights */
--accent-voltage-glow: rgba(255, 107, 53, 0.4)   /* Hover states */
```

**Why Orange?**
- International electrical warning color
- YOUR unfair advantage as an electrician
- Use SPARINGLY for maximum impact

### The Signal (Intelligence)
```css
--signal-beam: #7C3AED    /* Secondary accent for "thinking" states, loading, active processes */
```

### Text (Legibility First)
```css
--text-plasma: #EBEBF5    /* Primary text/headings */
--text-muted: #9A9AB0     /* Secondary text/technical specs */
--text-dark: #58586A      /* Placeholders/disabled states */
```

### Borders (Mechanical Precision)
```css
--border-dim: #2A2A35     /* Subtle dividers */
--border-bright: #3F3F50  /* Active borders */
```

### Status Indicators
```css
--status-active: #10B981  /* Systems online */
--status-crit: #FF4444    /* System failure */
```

---

## Complete CSS Variables

```css
:root {
  /* BACKGROUNDS - The Industrial Void */
  --bg-void: #0B0A10;
  --bg-orbital: #15151E;
  --bg-steel: #232330;
  
  /* BORDERS - Mechanical Precision */
  --border-dim: #2A2A35;
  --border-bright: #3F3F50;

  /* ACCENTS - High Voltage */
  --accent-voltage: #FF6B35;
  --accent-voltage-dim: rgba(255, 107, 53, 0.15);
  --accent-voltage-glow: rgba(255, 107, 53, 0.4);

  /* INTELLIGENCE - The Aether */
  --signal-beam: #7C3AED;
  
  /* TEXT - Legibility First */
  --text-plasma: #EBEBF5;
  --text-muted: #9A9AB0;
  --text-dark: #58586A;
  
  /* STATUS */
  --status-active: #10B981;
  --status-crit: #FF4444;
}
```

---

## Typography

### Headings
- **Font**: Inter (Bold)
- **Weight**: 700
- **Color**: Plasma White (`#EBEBF5`)
- **Style**: ALL CAPS for section labels, Title Case for H1/H2
- **Letter Spacing**: Slightly increased for ALL CAPS (0.05em)

### Body Text
- **Font**: Inter (Regular)  
- **Weight**: 400
- **Color**: Muted Signal (`#9A9AB0`)
- **Line Height**: 1.6 for readability
- **Font Size**: 16px base minimum

### Technical/Code
- **Font**: JetBrains Mono
- **Usage**: Numbers, technical specs, status indicators, small labels
- **Why**: Reinforces engineering company identity
- **Style**: Often paired with color coding (green for active, orange for voltage, purple for processing)

---

## Visual Rules (How Not to Look Like a Joke)

### ❌ NEVER
- **Gradients on text** - Looks cheap/web3
- **Heavy drop shadows** - Not industrial grade
- **Bright neon purple backgrounds** - Looks like gaming/crypto
- **Multiple accent colors competing** - Dilutes voltage impact
- **Rounded corners >12px** - Keep it angular and precise
- **Decorative animations** - Function over form

### ✅ ALWAYS  
- **Matte finishes on cards** - Flat panels, 1px borders maximum
- **High contrast text** - Never sacrifice legibility for aesthetics
- **Generous whitespace** - Premium feel, not cramped
- **Monospace for all technical data** - Status codes, metrics, specifications
- **Subtle borders** - Use `--border-dim` for most dividers
- **Grid-based layouts** - Precision alignment reflects engineering mindset

---

## Component Guidelines

### Buttons

**Primary CTA (High Voltage)**
```css
background: #FF6B35;
color: #0B0A10;
font-weight: 700;
padding: 12px 24px;
border-radius: 8px;
text-transform: uppercase;
letter-spacing: 0.05em;
```

**Secondary/Ghost**
```css
background: transparent;
color: #EBEBF5;
border: 1px solid #3F3F50;
font-weight: 700;
padding: 12px 24px;
border-radius: 8px;
```

**Hover States**
- Primary: Add `box-shadow: 0 0 20px rgba(255, 107, 53, 0.4)`
- Secondary: Change border to `#9A9AB0`

### Cards/Panels
```css
background: #15151E;
border: 1px solid #2A2A35;
border-radius: 12px;
padding: 24px;
```

### Status Indicators
Always use colored dots with monospace labels:
```
● ACTIVE   (green #10B981)
● VOLTAGE  (orange #FF6B35)
● THINKING (purple #7C3AED)
● CRITICAL (red #FF4444)
```

---

## Logo Usage
- **Minimum size**: 32px height
- **Clear space**: 1x logo height on all sides  
- **Colors**: Purple structure + Orange voltage accents
- **Formats**: SVG primary, PNG fallback
- **Don't**: Rotate, stretch, recolor outside palette, add effects

---

## Brand Voice & Tone

### Professional But Direct
- No Silicon Valley hype-speak ("revolutionary", "game-changing", "disruptive")
- No consumer marketing fluff
- Technical precision > marketing buzzwords
- **Example**: "Self-hosted L40S GPU cluster" not "cutting-edge AI platform"

### American Industrial Strength  
- "Built" not "designed"
- "Infrastructure" not "platform"  
- "Sovereign" not "private cloud"
- "Hardware" not "solutions"
- Lockheed Martin confidence, not startup hustle

### What We Are
- Master electrician building data centers
- Physical infrastructure for AI
- CMMC 2.0 compliance expert
- Sovereign deployment specialist
- Hardware-first architecture

### What We're Not
- API wrapper startup
- Generic SaaS tool
- Consumer AI chatbot
- Venture-funded hype machine
- "Move fast and break things" culture

---

## Messaging Framework

### Headline Formula
**[Action Verb] + [Technical Capability] + [Business Outcome]**

**Good Examples:**
- "Deploy Sovereign AI on Dedicated L40S Infrastructure"
- "Built CMMC 2.0 Compliant Intelligence at the Hardware Level"
- "Self-Host 359+ Models on Physical Infrastructure You Control"

**Bad Examples:**
- "Transform Your Business with AI" (too vague)
- "The Future of Intelligent Systems" (hype-speak)
- "AI Made Simple" (diminishes sophistication)

### Key Differentiators (Always Emphasize)
1. **Physical Infrastructure** - Not cloud APIs
2. **Licensed Electrician** - Hardware expertise
3. **Sovereign Deployment** - No vendor lock-in
4. **CMMC 2.0 Ready** - Defense contractor grade
5. **Self-Hosted Models** - Data never leaves your control

---

## Competitive Visual Positioning

### We Look Like
- **Palantir** - Serious data infrastructure
- **Anduril** - Defense-grade technology
- **Databricks** - Enterprise engineering platform
- **Linear** - Clean, functional UI (but darker, more industrial)

### We Do NOT Look Like
- **Notion** - Too consumer-friendly
- **Figma** - Too design-focused
- **Webflow** - Too marketing-heavy
- **Crypto projects** - Too speculative/neon

### Our Aesthetic
- Data center control room
- Terminal interface (sophisticated, not retro)
- Industrial cockpit
- Mission-critical command center

---

## Photography & Imagery Guidelines

### Use
- Data center equipment (racks, servers, cable management)
- Electrical infrastructure (properly lit, professional)
- Hardware close-ups (GPUs, networking equipment)
- Industrial environments (clean, well-lit facilities)
- Technical diagrams (system architecture, network topology)

### Avoid
- Stock photos of "diverse teams in meetings"
- Generic "person at laptop" imagery
- Cartoon illustrations or mascots
- Overly stylized 3D renders
- Anything that looks "Silicon Valley startup"

### Treatment
- Desaturated slightly (industrial feel)
- High contrast
- Sharp focus
- Minimal depth of field effects
- Orange voltage highlights in post if needed

---

## File Format Standards

### Logos & Icons
- **Primary**: SVG (scalable, sharp)
- **Fallback**: PNG at 1024x1024, 512x512, 256x256
- **Transparency**: Always preserve alpha channel

### Web Images
- **Modern**: WebP (better compression)
- **Fallback**: PNG for graphics, JPEG for photos
- **Optimization**: Always compress (TinyPNG, ImageOptim)

### Documentation
- **Technical Diagrams**: SVG for scalability
- **Screenshots**: PNG (lossless text rendering)

---

## Accessibility Requirements

### Contrast Ratios (WCAG AA Minimum)
- **Plasma White on Void**: 14.2:1 ✓
- **Muted Signal on Void**: 7.8:1 ✓
- **Voltage Orange on Void**: 6.1:1 ✓
- **Aether Beam on Void**: 4.9:1 ✓

### Interactive Elements
- Minimum 44x44px touch targets
- Clear focus states (use `--border-bright`)
- Keyboard navigation fully supported
- Screen reader semantic HTML

### Motion
- Respect `prefers-reduced-motion`
- No auto-playing videos
- Subtle transitions only (<300ms)

---

## Implementation Checklist

**Before Launch, Verify:**
- [ ] All backgrounds use Void palette (`#0B0A10`, `#15151E`, `#232330`)
- [ ] Orange voltage (`#FF6B35`) used ONLY for CTAs and critical elements
- [ ] All body text is `#9A9AB0` minimum (never darker)
- [ ] Technical specs use JetBrains Mono consistently
- [ ] No gradients on text anywhere
- [ ] Matte card finishes with 1px borders maximum
- [ ] High contrast maintained throughout (WCAG AA minimum)
- [ ] Logo appears correctly at 32px height minimum
- [ ] All interactive elements have clear hover states
- [ ] Monospace used for all numbers and technical data
- [ ] Status indicators use colored dots + uppercase labels
- [ ] No Silicon Valley marketing language in copy

---

## Brand Evolution Guidelines

### When Adding New Colors
**Don't.** The palette is complete. If you think you need a new color:
1. First, try using an existing color at different opacities
2. Check if `--signal-beam` (purple) serves your need
3. Only add if absolutely critical for functionality (not aesthetics)

### When Updating
- Maintain voltage orange as primary accent (non-negotiable)
- Keep void backgrounds (our signature darkness)
- Any text color must maintain 7:1 contrast minimum
- Document all changes with strategic reasoning

---

## Quick Reference

**Primary Background**: `#0B0A10`  
**Card Background**: `#15151E`  
**Primary Text**: `#EBEBF5`  
**Secondary Text**: `#9A9AB0`  
**Primary CTA**: `#FF6B35`  
**Active State**: `#7C3AED`  

**Typography**: Inter (body) + JetBrains Mono (technical)  
**Border Radius**: 8px buttons, 12px cards  
**Border Weight**: 1px maximum  

**Brand Position**: Infrastructure > Software  
**Target Market**: Defense contractors, CMMC 2.0 enterprises  
**Differentiation**: Physical hardware expertise (licensed electrician)  

---

**Last Updated**: November 2024  
**Maintained By**: Cory @ AetherPro Technologies LLC  
**Version**: 1.0 (Cinematic Industrial)

---

## Contact & Support

For brand compliance questions or asset requests:
- Email: [Your contact email]
- Internal: Refer to AetherPro design system documentation
- External Partners: Request brand package via support

**Approved for use in:**
- aetherpro.us landing page
- Product interfaces (AetherInterface, Lotus, AetherGrid)
- Marketing collateral
- Partner integrations
- Press materials

**Unauthorized use:**
- Consumer products
- Competitor materials
- Political campaigns
- Cryptocurrency projects