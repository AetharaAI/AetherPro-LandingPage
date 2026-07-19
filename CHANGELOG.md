# CHANGELOG.md

## 2026-07-19

### Landing Page
- Synced public brand assets to the local AetherPro canon glyph/wordmark pack (metallic A glyph matching Facebook identity).
- Header uses combined `AetherPro-Brand-Icon-Wordmark` lockup; footer/icons use `Metalic-A-AetherPro`.
- Regenerated favicon, apple-touch, PWA icons, and Open Graph preview from the metallic A glyph and Canon wordmark.
- Added Agent Operations outcome section directly below the hero (six-stage governed workflow).
- Added compact System Connection architecture-to-outcome map (PresenceOS, Passport/APIS, Collab Fabric, Polymorph, VoiceOps, RedWatch, Anchor Systems).
- Updated page title, meta description, canonical URL, Open Graph/Twitter cards, and site.webmanifest for sovereign infrastructure + agent operations positioning.
- Refreshed header/footer nav after Azure migration: PresenceOS (`presenceos.us`), Anchor Systems (`anchor.presenceos.us`), Syndicate (`syndicateai.co`); removed Scriber and Platform nav targets.

## 2026-05-24

### Landing Page
- Replaced the hero-only navigation with a persistent glass header modeled on the Scriber landing page.
- Swapped the public brand lockup to the new AetherPro glyph plus wordmark and updated public navigation links to Syndicate Voice, Passport / APIS, COLLAB, RedWatch, Scriber, and the on-page access form.
- Replaced the mailto request access CTA with a public request form that captures name, company, email, service interest, and optional context.
- Refreshed favicon and app icon assets to use the A glyph.

## 2026-05-09

### Landing Page
- Repositioned the public AetherPro landing page around sovereign AI infrastructure for voice agents, secure automation, agent identity, coordination, controlled inference, and private deployment paths.
- Replaced the hardware-first hero with the current voice/agents/automation hero and CTAs.
- Added clear What We Build, Deployment Models, Why AetherPro, Products/Ecosystem, Aether Gateway, and current operating surface copy.
- Updated navigation toward Voice Agents / Syndicate, Passport / APIS, COLLAB, RedWatch, Platform, and Request Access.
- Removed rendered BlackBox Audio references and stale AetherOS/AetherAI hardware-first framing from active page components.
- Updated metadata and footer language for the current public offer.

### Repo
- Moved local repo folder to `/home/cory/Aether-Admin-Platform/AetherPro-LandingPage`.
- Added root canonical docs: `AGENTS.md`, `TRUTH.md`, `PROJECT_STATE.md`, and `CHANGELOG.md`.

### Verification
- Verified `npm run build` locally.
- Verified production server response from standalone build at `http://127.0.0.1:3020`.
- Checked desktop and mobile landing page rendering with Playwright.
