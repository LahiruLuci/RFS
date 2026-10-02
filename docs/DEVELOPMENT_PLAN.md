# Development Plan

## Working Method

Complete one controlled phase at a time. Each phase must be reviewed and verified before the next phase begins. Do not build the entire website in one task.

## Phase 0 - Discovery

- Confirm business details and domain.
- Collect approved logo files and photography.
- Confirm required functionality and content.
- Inspect the repository and deployment environment.

Exit criteria: unresolved information is listed clearly and no content has been invented.

## Phase 1 - Foundation

- Verify framework, TypeScript, Tailwind, linting, and formatting.
- Add fonts, design tokens, global styles, and base metadata.
- Establish the agreed folder structure and centralized configuration.
- Create only essential shared UI foundations.

Exit criteria: lint, typecheck, and build pass; tokens work; no full page implementation is included.

## Phase 2 - Shared Experience

- Implement shared layout, navigation, footer, buttons, forms, and feedback patterns.
- Verify keyboard access and responsive behaviour.

Exit criteria: shared components are reusable, accessible, responsive, and visually consistent.

## Phase 3 - Page Implementation

- Implement one approved page or route per task.
- Reuse shared patterns without forcing every area into cards.
- Review content, responsive layouts, images, metadata, and accessibility after each route.

Exit criteria: each completed route meets its own acceptance criteria before another begins.

## Phase 4 - Integrations

- Add validated enquiry or recruitment workflows when approved.
- Configure email, spam protection, rate limiting, analytics, and maps only when required.
- Keep credentials in environment variables.

Exit criteria: successful, failed, repeated, and invalid submissions are tested safely.

## Phase 5 - Quality Review

- Run responsive visual checks.
- Test keyboard navigation, focus, forms, links, images, and error states.
- Review Core Web Vitals, accessibility, SEO, and security.
- Remove placeholders that are not approved for production.

Exit criteria: required commands pass and known limitations are documented.

## Phase 6 - Deployment

- Configure the production environment and domain.
- Verify environment variables, email delivery, analytics consent, metadata, sitemap, robots, redirects, and HTTPS.
- Perform a post-deployment smoke test.

Exit criteria: production matches the reviewed build and critical contact flows work.

## Progress Log

Update this table after each completed task.

| Phase | Status | Last verified | Notes |
|---|---|---|---|
| Discovery | Not started | - | - |
| Foundation | Not started | - | - |
| Shared experience | In progress | 2026-06-22 | Responsive desktop, tablet, and mobile navigation plus premium site footer implemented and verified; remaining shared patterns require separate approval. |
| Page implementation | In progress | 2026-06-27 | Homepage hero, Security Solutions overview, Why Choose Royal Force Security, How It Works, About Royal Force preview, final Request a Quote CTA, homepage polish pass, Services page, premium About Us page redesign, Request Quote page, Contact page, Industries page, and Careers page with client-side application-interest validation implemented and verified; remaining destination pages are not yet built. |
| Integrations | Not started | - | - |
| Quality review | Not started | - | - |
| Deployment | Not started | - | - |

## Task Prompt Checklist

Every implementation prompt should state:

- The single requested outcome
- Files or features in scope
- Features explicitly out of scope
- Relevant documentation to read
- Acceptance criteria
- Required verification commands
- Expected completion report
