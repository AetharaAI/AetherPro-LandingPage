# AetherPro Landing Page — Build Prompt

You are building the production landing page for aetherpro.us.

## Context

In the `Build-Spec-Docs/` directory you have:

1. **AetherPro-Landing-Copy-v2.md** — All written content for the page. Use this verbatim.
2. **AetherPro-TechSpec-v2.md** — Complete technical specification including design system, component specs, layout rules, and implementation requirements.
3. **Shield logo asset** — The primary brand logo (convert to SVG if needed).

## Your Task

Build a production-ready Next.js 15 landing page following the technical specification exactly.

**Framework:** Next.js 15 with App Router, React Server Components, TailwindCSS, Framer Motion.

**Brand System:** Cinematic Industrial — dark void backgrounds (#0B0A10), voltage orange (#FF6B35) for CTAs only, signal purple (#7C3AED) for intelligence states, JetBrains Mono for technical elements.

## Build Order

1. Initialize Next.js 15 project with TypeScript
2. Install dependencies per spec Section 1.3
3. Set up Tailwind config with brand color tokens from spec Section 2.1
4. Create globals.css with full CSS custom properties
5. Set up fonts (Inter + JetBrains Mono)
6. Build shared components first (buttons, cards, status indicators, section labels)
7. Build section components in page order (hero → difference → compute → stack → forge → infrastructure → roadmap → founder → cta → footer)
8. Assemble page.tsx
9. Configure metadata and SEO
10. Test responsive breakpoints
11. Run build, fix any errors
12. Lighthouse audit — target 90+ all categories

## Critical Rules

- Voltage orange (#FF6B35) on CTAs and critical elements ONLY — do not overuse
- All body text uses --text-muted (#9A9AB0), never darker
- JetBrains Mono for all technical data, numbers, and section labels
- Maximum border-radius: 12px
- No gradients on text
- No heavy shadows — matte finishes only
- 1px borders maximum
- Respect prefers-reduced-motion

## Output

A complete, deployable Next.js application ready for Vercel deployment.

Begin.