# Royal Force Security - Agent Guidance

## Purpose

Build and maintain a production-ready website for **Royal Force Security Service (Pvt) Ltd**. The product must communicate trust, protection, discipline, professionalism, reliability, and premium service quality.

## Required Reading

Before planning or editing code, read the files relevant to the task:

- `docs/PRODUCT_REQUIREMENTS.md` for product goals and functional boundaries.
- `docs/BRAND_SYSTEM.md` for logo, colour, typography, imagery, layout, and responsive rules.
- `docs/ARCHITECTURE.md` for stack, folders, components, forms, security, SEO, and performance.
- `docs/CONTENT.md` for approved business details and content restrictions.
- `docs/DEVELOPMENT_PLAN.md` for the current phase, completed work, and acceptance criteria.

If documentation conflicts with working code, report the conflict before making a broad change. The user's latest explicit instruction has priority.

## Working Rules

Before editing:

1. Inspect the repository, package manager, scripts, and relevant files.
2. Check for existing components, utilities, tokens, and local conventions.
3. Define the smallest set of files required for the task.
4. Preserve existing functionality and user changes.

During implementation:

1. Work only on the requested task.
2. Follow the existing architecture unless a change is technically necessary.
3. Use strict TypeScript and typed props. Do not use `any` without a documented reason.
4. Reuse established components and utilities before adding new ones.
5. Keep components focused and avoid duplicated business information.
6. Prefer React Server Components; use Client Components only for browser interaction.
7. Build mobile-first and follow `docs/BRAND_SYSTEM.md`.
8. Do not invent company details, claims, reviews, licences, statistics, or locations.
9. Do not install dependencies unless the task genuinely requires them.
10. Do not refactor or reformat unrelated files.
11. Do not leave debug logs, dead code, commented-out code, or placeholder implementations.

## Required Verification

Use the repository's package manager and run the available equivalents of:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

For user-interface changes, also verify:

- 320px mobile
- 768px tablet portrait
- 1024px tablet or small laptop
- 1440px desktop
- Keyboard navigation and visible focus
- No clipping, overlap, layout shift, console error, or horizontal overflow

If a command does not exist or cannot run, report that clearly. Do not claim verification that was not performed.

## Completion Report

At the end of each task, report:

- What changed
- Important files changed
- Verification commands and results
- Assumptions, placeholders, or remaining limitations

## Definition Of Done

A task is complete only when the requested behaviour works, brand and responsive rules are followed, accessibility is preserved, business information is verified or marked as a placeholder, required checks pass, and no unrelated changes were introduced.
