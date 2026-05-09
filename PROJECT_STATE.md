# PROJECT_STATE.md

## Repo
- Name: AetherPro Landing Page
- Root: `/home/cory/Aether-Admin-Platform/AetherPro-LandingPage`
- Public URL: `https://aetherpro.us`
- Deploy target: Vercel from GitHub `main`, per operator note
- GitHub remote: `git@github.com:AetharaAI/AetherPro-LandingPage.git`

## Production Status
- Source has been updated for the current AetherPro business direction.
- Live production verification is pending until the updated branch is pushed and Vercel redeploys.

## Deploy Reality
- Next.js app using npm scripts.
- `npm run build` is the required local production build check.
- `npm run lint` currently maps to removed `next lint` behavior in Next 15 and is not a usable verification command without script modernization.

## Repo Alignment Status
- Branch: `main`
- Pre-existing dirty state before this update included deleted `A3-MINI-BBox/` files and untracked `TRUTH/` plus `master-logos/`.
- This update moved the local repo from `/home/cory/Documents/Triad-Intelligence-TM/AetherPro-LandingPage` to `/home/cory/Aether-Admin-Platform/AetherPro-LandingPage`.

## Dependencies
- AetherPro Platform: `https://platform.aetherpro.us`
- Public RedWatch site: `https://redwatch.us`
- Public Syndicate domain observed in admin docs: `https://syndicateai.co`
- Passport Alliance public identity surface: `https://passportalliance.org`

## Remaining Gaps
- AetherPro logo refresh is pending operator-provided image generation.
- No SAM.gov/CAGE/UEI values were present in rendered landing page source to preserve or verify.
- Live browser verification of `https://aetherpro.us` is pending after Vercel redeploy.
- Platform redirect fix is outside this repo; see `TRUTH.md` Platform Redirect Note.

## Key Files
- `app/page.tsx`
- `app/layout.tsx`
- `components/sections/hero.tsx`
- `components/sections/difference.tsx`
- `components/sections/sovereign-compute.tsx`
- `components/sections/aetherai-stack.tsx`
- `components/sections/aetherforge.tsx`
- `components/sections/infrastructure.tsx`
- `components/layout/footer.tsx`

## Next Steps
1. Add the refreshed AetherPro logo asset when the operator provides it.
2. Push to GitHub `main` and verify the Vercel deployment at `https://aetherpro.us`.
3. Correct Platform production `PLATFORM_APP_URL` if the live environment still falls back to `http://localhost:3011` for OIDC redirects.
