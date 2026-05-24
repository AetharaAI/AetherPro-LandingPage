# TRUTH.md

## Identity
- Project name: AetherPro Landing Page
- Purpose: production public corporate website for AetherPro Technologies LLC
- Frontend repo: `git@github.com:AetharaAI/AetherPro-LandingPage.git`
- Backend repo: no separate backend for the landing page; newsletter route is present in this Next app

## Runtime
- Public URL: `https://aetherpro.us`
- API URL: same origin for any local app routes
- Repo root: `/home/cory/Aether-Admin-Platform/AetherPro-LandingPage`
- Deploy path: Vercel from GitHub `main` is the expected deployment path per operator note

## Infra
- Provider: Vercel for the public landing page, per operator note
- Region: unknown
- Instance type: not applicable/unknown for Vercel
- Tailscale IP: unknown

## Current Production Truth
- The repo is a Next.js app with App Router under `app/`.
- The current public positioning in source now centers AetherPro on sovereign AI infrastructure for private voice agents, agent identity, secure orchestration, controlled inference, and private deployment paths.
- Rendered production copy no longer links to BlackBox Audio or frames AetherPro as AetherOS/AetherAI hardware-first.
- Public product surfaces represented in copy: Syndicate Voice, Passport / APIS, COLLAB, RedWatch, AetherPro Platform, Echo Fleet, and Aether Gateway.
- Source now includes a Scriber-style persistent glass header, updated AetherPro glyph-plus-wordmark branding, and an on-page request-access form instead of a mailto-only CTA.
- The repo contains untracked operator-provided folders `TRUTH/` and `master-logos/`.
- The worktree had pre-existing local deletions under `A3-MINI-BBox/` before this landing page update.

## Operator Mechanics
- Package manager: npm
- Build command: `npm run build`
- Deploy command: push to GitHub `main`; Vercel redeploys automatically per operator note
- Verification command/path: `npm run build`, plus browser inspection of the public landing page
- Active working branch: `main`
- Main branch policy: main is stable, clean, and deployable
- Checkpoint merge rule: merge to main only at validated checkpoint stages
- Checkpoint tag convention: unknown
- Post-checkpoint rule: return to working branch after merge/tag when using separate work branches
- Reference: `TRUTH/GIT-WORKFLOW-DISCIPLINE.md`

## Platform Redirect Note
- This landing page repo does not own Platform auth.
- Observed Platform repo: `/home/cory/Aether-Admin-Platform/Platform`.
- Platform OIDC code derives callback URLs from request/forwarded headers and falls back to `PLATFORM_APP_URL`.
- Observed local Platform `.env` sets `PLATFORM_APP_URL="http://localhost:3011"`, which is a likely source of localhost callback fallback if production requests lack correct forwarded host/proto headers or if production env mirrors that value.
- `127.0.0.1:3011` is also the documented live nginx upstream for Platform and is valid as an internal reverse-proxy target.

## Operator Profile Reference
- Reference: `TRUTH/OPERATOR_PROFILE.md`
- Use when operator identity, preferences, or standing company facts materially affect execution.

## Ownership
- Responsible operator/agent: Cory Gibson and collaborating Codex agents
