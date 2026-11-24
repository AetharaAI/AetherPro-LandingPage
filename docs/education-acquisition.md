# Own Your AI v1 operations and future reporting

## Source, runtime, and release

The corporate site is [AetharaAI/AetherPro-LandingPage](https://github.com/AetharaAI/AetherPro-LandingPage). Name.com provides authoritative DNS, and Vercel serves the apex redirect and the `www` site. The live homepage matched source at base commit `8ae3c3cdb7dc9583975b2869246e176589946916`, which carries a successful Vercel GitHub check for `cjs-projects-41b19a79/aether-pro-landing-page`. `app/` is the Next.js App Router, `package-lock.json` pins npm dependencies, and `next.config.js` sets standalone output. Vercel project settings live outside the repository. The root Docker Compose file describes a separate inference stack and is unrelated to this release.

The hub uses the approved ice-blue education logo, site-level typography and surface tokens, route-scoped styles, and public HTML. The assessment runs in memory only. Visitor contact is optional and initiates in the visitor’s mail app. The website package uses the address published on the corporate site. The private AI path links to the existing [PresenceOS deployment assessment](https://presenceos.us/deployment/) and offers the same corporate inbox as an alternative. The assessment page and its form were verified as reachable. Form submission, mailbox delivery, and a package checkout were not verified. The starter guide is ungated HTML with a browser print layout. The site serves no prebuilt PDF. Aethara and Aether use text because no approved role-matched character art was confirmed.

### Deployment and rollback

1. On a connected checkout, fetch `codex/own-your-ai`. Run `npm ci`, `npm run lint`, `node --test tests/learn-recommendation.test.mjs`, and `npm run build`. Build-time font fetching requires access to the configured font source.
2. In an authorized Vercel preview, smoke-test the homepage footer link, `/learn`, `/learn/guide`, sitemap, and all fragment links. Confirm route-specific canonical URLs, static output, keyboard focus, 320–412px layouts, reduced motion, and assessment completion with zero data submissions. Open the PresenceOS deployment form without a submission and follow the mail links up to draft creation. If live mailbox delivery is an acceptance criterion, have the mailbox owner run a controlled delivery check.
3. With explicit production approval, confirm Vercel project ownership, production branch, domain assignment, and prior healthy deployment in the dashboard. Merge only this reviewed feature into the configured production branch. Monitor that build and smoke-test the public URLs.
4. For immediate rollback, use Vercel’s rollback to the recorded healthy production deployment. Revert the education merge through the usual review and release path so a later build does not reintroduce it. If the revert also removes the framework security update, prepare a reviewed patch-only release. The change needs no database migration, settings change, or data cleanup.

## Release verification

The release branch pins Next.js 15.5.29 and uses the matching Next.js ESLint rules. Re-run the full lockfile build and nine recommendation cases on the reviewed commit. Verify canonicals, sitemap entries, and the robots sitemap directive use the serving `www.aetherpro.us` hostname. Next.js pins an older PostCSS dependency, so the lockfile overrides it to the patched project version. Run `npm audit` with the full lockfile and revisit the override when the framework no longer needs it. See the [Next.js security release](https://nextjs.org/blog/november-2026-security-release).

## Future BOF ingestion contract

The following is a proposed v1 interface. Education v1 emits no events. Existing BOF and payment owners must approve any implementation.

Required envelope for each event: `event_id` (UUID), `event_name` (enum below), `event_version` (integer, initially 1), `occurred_at` (UTC RFC 3339), `source_system` (registered producer), `source_surface` (allowlisted surface), and `consent_context` (purpose, state, policy version, plus timestamp/reference where applicable). The collector adds `received_at` and resolved organization/site scope. Optional `flow_id` is a short-lived random correlation ID, created and carried only when authorized for that purpose. Do not substitute fingerprinting for absent attribution.

Use allowlisted `campaign`, `channel`, and `referrer_origin` where available and authorized. Store unknown explicitly. Accept bounded normalized campaign identifiers, never raw query strings, full referrer URLs, free-form input, or URL fragments as marketing attribution. Record attribution source and model. Preserve existing commerce records separately from optional analytics joins.

| Event | Required payload | Emit only when |
| --- | --- | --- |
| `education_view` | `route_id`, `content_version` | A consented hub or guide view occurs. |
| `lesson_complete` | `lesson_id`, `content_version` | The visitor explicitly marks a lesson complete. A page view does not qualify. |
| `assessment_complete` | `assessment_version` | All five answers were evaluated and a result was shown. Omit answers and recommendation by default. |
| `guide_download` | `artifact_id`, `artifact_version` | The server delivers an approved, complete downloadable artifact. An HTML guide view does not qualify. |
| `lead_submit` | `lead_ref`, `intake_id` | An owned intake durably accepts an inquiry. An email-link activation does not qualify. |
| `checkout_start` | `checkout_ref`, `offer_id` | The commerce backend creates a valid checkout session. |
| `purchase_verified` | `order_ref`, `offer_id`, `currency`, `amount_minor` | The authorized commerce backend reconciles a successful payment. Browser redirects are not evidence. |
| `rfq_submit` | `rfq_ref`, `intake_id` | The private deployment intake durably accepts the RFQ. |

Analytics collection starts only after applicable consent. Withdrawal stops analytics collection and correlation and triggers the applicable deletion process. Intake and commerce events use their own operational purpose and approved policy basis. Marketing permission is separate and optional. Keep contact details in the owned intake or commerce record. Prohibit payment details, secrets, answer text, and private data from the event stream and error logs.

Collect over HTTPS using a first-party endpoint. Validate size, timestamp, version and schema, normalize attribution and enforce purpose at ingress, and rate-limit by trusted producer. Use scoped server credentials and reject untrusted producers for operational events. A browser collector may accept only consented education events, validate origin, and treat them as untrusted behavioral observations. Acknowledge only after durable acceptance. Deduplicate on producer and event ID, enforce one verified purchase event per order reference, and retry transient failures with the same ID and bounded backoff. Return a permanent error for invalid or unauthorized messages. Restrict replay and investigation access, audit operator actions, and agree on retention and deletion windows before enabling ingestion.

## Future Education & Acquisition in Panel Room

Use a read-only, organization-scoped BOF aggregate API under an existing Panel Room reporting role. Display the consented education funnel by date window, campaign and channel: hub and guide views, explicit lesson completions, and assessment results shown. Display operational totals for accepted leads/RFQs, checkout creation, and verified orders. Count deduplicated events, label unique journeys separately, and compute conversion ratios only across eligible linked journeys with the denominator shown. Omit ratios for empty or incomparable cohorts. Display unattributed and unmatched counts. Keep event arrival delay, rejected version counts, and last successful refresh visible to operators. Use date, route, and campaign filters and suppress small cohorts based on the approved privacy threshold. Show unavailable metrics distinctly from zero until the producing system is enabled. Exclude personal data, assessment answers, and operator-only contact records. No Panel Room implementation is included.
