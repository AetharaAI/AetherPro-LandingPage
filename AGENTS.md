# AGENTS.md

## Role
- This repo is the production public AetherPro corporate landing page for `https://aetherpro.us`.
- Treat it as a deployed site, not a greenfield rebuild.
- Public positioning must reflect AetherPro Technologies as sovereign AI infrastructure for private voice agents, secure automation, agent identity, multi-agent coordination, controlled inference, and private deployment paths.

## Operating Rules
- Work from observed repo and runtime truth.
- Keep public claims careful: do not claim CMMC certification, compliance, approval, authorization, or audit completion without proof.
- Use "CMMC/NIST-aligned architecture" or similar careful readiness language when compliance is relevant.
- Do not publicly headline hardware boxes, racks, or private nodes. Mention managed private cloud, customer-controlled cloud, dedicated infrastructure, and future on-prem options only at an outcome level.
- Do not link to private admin panels, localhost routes, internal dashboards, Passport admin URLs, or operational endpoints.
- Public links should only target public websites, public docs, anchor links, or `mailto:hello@aetherpro.us`.
- Remove stale BlackBox Audio, Speechmatics, AetherOS, and old cloud-sovereign framing from rendered production surfaces.
- Preserve Vercel compatibility.

## Canonical Docs
- `TRUTH.md`
- `PROJECT_STATE.md`
- `CHANGELOG.md`
- `AGENTS.md`
- Template/reference docs live under `TRUTH/`.

## Verification
- Package manager: npm, with `package-lock.json`.
- Build command: `npm run build`.
- Lint command exists as `npm run lint`, but this project uses Next 15 where `next lint` is no longer available.
- Verify stale public copy with `rg` before shipping material copy changes.

## Repo Location
- Current local repo root: `/home/cory/Aether-Admin-Platform/AetherPro-LandingPage`.
- Git remote: `git@github.com:AetharaAI/AetherPro-LandingPage.git`.
