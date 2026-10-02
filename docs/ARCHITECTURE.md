# Technical Architecture

## Technology

Inspect the repository first and follow its existing framework, package manager, component patterns, and configuration.

For a new project, use:

- Next.js App Router
- TypeScript with strict mode
- Tailwind CSS using the installed project version
- React Server Components by default
- Client Components only when browser interaction requires them
- `next/image` and `next/font`
- Lucide icons
- Zod for shared form schemas when appropriate

Do not install libraries for behaviour already provided by the framework or existing project utilities.

## Suggested Structure

```text
src/
|-- app/
|   |-- layout.tsx
|   |-- globals.css
|   |-- loading.tsx
|   |-- error.tsx
|   |-- not-found.tsx
|   |-- robots.ts
|   `-- sitemap.ts
|-- components/
|   |-- layout/
|   |-- navigation/
|   |-- sections/
|   |-- forms/
|   |-- feedback/
|   `-- ui/
|-- config/
|   |-- site.ts
|   |-- contact.ts
|   `-- navigation.ts
|-- content/
|-- lib/
|   |-- validation/
|   |-- seo/
|   |-- analytics/
|   `-- utils.ts
`-- types/

public/
|-- images/
|   |-- brand/
|   |-- services/
|   |-- locations/
|   `-- team/
|-- icons/
`-- documents/
```

Adapt this to the existing repository. Do not reorganize working code only to match this example.

## Code Standards

- Centralize company name, domain, email, phone, address, social links, and operating hours.
- Create abstractions only when they remove meaningful duplication.
- Keep components focused on one responsibility.
- Keep feature-specific components close to their owner.
- Separate content, configuration, server logic, and presentation where practical.
- Prefer composition to large components with many conditional branches.
- Use semantic names and descriptive variables.
- Remove unused code and dependencies.
- Add comments only for non-obvious decisions.
- Follow the repository's ESLint and formatting rules.

## Forms

All public forms must include:

- Visible labels and appropriate input types
- Required-field indicators
- Client-side and server-side validation
- Helpful field-level messages
- Loading, success, and error states
- Submission deduplication
- Rate limiting and spam protection
- Accessible focus movement after submission

Never expose credentials or secrets to client code. Collect only necessary information and do not log personal data unnecessarily.

## Accessibility

Target WCAG 2.2 AA:

- Semantic HTML and logical heading order
- Keyboard-accessible controls
- Visible focus indicators
- Form labels and accessible error messages
- Accessible names for icon-only controls
- Meaningful alternative text for informative images
- Empty alternative text for decorative images
- Sufficient colour contrast
- No meaning communicated by colour alone
- Correct focus management for menus and dialogs
- Native HTML before ARIA
- Reduced-motion support

## Performance

- Minimize browser JavaScript.
- Optimize images and define dimensions.
- Prioritize only genuine above-the-fold imagery.
- Lazy-load below-the-fold media.
- Avoid autoplay background video.
- Limit font files, third-party scripts, and heavy dependencies.
- Dynamically import genuinely heavy interactive features.
- Prevent unnecessary re-renders and layout shifts.

Targets: Lighthouse Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+, no major layout shift, and no horizontal overflow.

## SEO

Use verified information to implement unique metadata, canonical URLs, Open Graph data, social images, sitemap, robots configuration, semantic headings, internal links, favicons, and valid Organization or LocalBusiness structured data.

Do not add unverified ratings, prices, locations, operating areas, or services to structured data. Avoid keyword stuffing.

## Security And Privacy

- Keep secrets in environment variables and never commit `.env` files.
- Validate and sanitize untrusted input.
- Rate-limit public endpoints and protect them from automated spam.
- Return safe public errors without exposing internal details.
- Use secure headers where appropriate.
- Keep dependencies reviewed and updated.
- Do not expose applicant, customer, or internal business information.
- Obtain appropriate consent when collecting personal information.

## Testing

Test navigation, forms, validation, loading and error states, keyboard access, focus visibility, images, long content, missing optional data, slow networks, internal and external links, metadata, console output, horizontal overflow, and layout shift.

Use automated tests for validation, utilities, and business-critical flows when the project supports them.
