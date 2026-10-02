# Brand System

## Brand Character

The interface must feel professional, calm, strong, modern, premium, trustworthy, and well organized. Use the supplied visiting card and approved logo as visual references.

The crest includes royal blue, deep navy, gold, white, a shield, crown, crossed swords, stars, and laurel details. These elements communicate authority and discipline, but the website must remain approachable and service focused.

## Logo Rules

- Store approved logo assets in `public/images/brand/`.
- Use the original logo file; never recreate it with CSS, icons, or AI.
- Do not stretch, crop, recolour, distort, redraw, or add effects to it.
- Preserve its aspect ratio and clear space.
- Prepare approved variants only when source assets are available: navigation, footer, favicon, social preview, light background, and dark background.
- Do not place the detailed crest so small that it becomes unreadable.

## Colour Palette

Use these as CSS variables or framework design tokens. Do not repeatedly hardcode colour values.

```css
:root {
  --navy-950: #07112b;
  --navy-900: #0c1933;
  --navy-800: #12213d;
  --navy-700: #17315c;
  --royal-blue-900: #122362;
  --royal-blue-800: #152667;
  --royal-blue-700: #1a2968;
  --royal-blue-600: #203072;
  --royal-blue-500: #30468f;
  --gold-800: #795622;
  --gold-700: #98702f;
  --gold-600: #b58d5a;
  --gold-500: #c99a3d;
  --gold-400: #ddb35d;
  --gold-300: #e7c77d;
  --gold-200: #dbc9ac;
  --gold-100: #f7efdf;
  --white: #ffffff;
  --surface: #f6f8fb;
  --border: #dce2ea;
  --heading: #0c1933;
  --text: #142033;
  --text-muted: #5d6979;
  --success: #177245;
  --warning: #b77900;
  --error: #b42318;
  --info: #1570ef;
}
```

Use navy for navigation, important backgrounds, and headings. Use gold sparingly for primary actions, selected states, icons, dividers, and emphasis. Use white and light neutral surfaces to prevent the website from becoming excessively dark. Never use gold for long text.

## Typography

- Heading and interface font: `Montserrat`, loaded with `next/font`.
- Body and form font: `Inter`, loaded with `next/font`.
- Fallback: Arial, sans-serif.
- Use only weights that are required: 400, 500, 600, and 700.
- Use zero letter spacing; never use negative tracking.
- Keep body copy between approximately 55 and 75 characters per line.

```text
Display: 64px desktop, 48px tablet, 38px mobile; line-height 1.10
H1:      52px desktop, 40px tablet, 34px mobile; line-height 1.15
H2:      40px desktop, 32px tablet, 28px mobile; line-height 1.20
H3:      28px desktop, 24px tablet, 22px mobile; line-height 1.30
H4:      22px desktop, 20px tablet, 19px mobile; line-height 1.35
Body L:  18px; line-height 1.70
Body:    16px; line-height 1.65
Small:   15px; line-height 1.50
Caption: 14px; line-height 1.50
```

Use explicit breakpoint values or design tokens. Do not use viewport-width font scaling.

## Layout

- Maximum content width: 1200-1280px.
- Desktop horizontal padding: 32-48px.
- Tablet horizontal padding: 24-32px.
- Mobile horizontal padding: 16-20px.
- Use consistent vertical spacing.
- Use CSS Grid for major layouts and Flexbox for small alignments.
- Use full-width background bands where separation is useful.
- Keep border radius around 6-8px unless an existing system says otherwise.
- Use restrained shadows only when they improve hierarchy.
- Avoid nested cards and card-based styling for every section.

## Responsive Behaviour

Build mobile-first and support widths from 320px upward.

Mobile:

- Use compact, accessible navigation.
- Stack multi-column layouts.
- Keep important actions easy to reach.
- Prevent clipping and horizontal scrolling.
- Use full-width primary actions where helpful.

Tablet:

- Design deliberate one-column and two-column layouts.
- Test portrait and landscape orientations.
- Prevent navigation, cards, and actions from overlapping.

Desktop:

- Use width without stretching paragraphs excessively.
- Maintain clear alignment and hierarchy.
- Avoid oversized empty spaces.

## Imagery

- Use real, relevant, high-quality security-service photography.
- Show professional and approachable security personnel, controlled access, residences, workplaces, events, and customer support.
- Avoid weapons-focused, violent, threatening, combat, police, military, cybersecurity, and stock-market imagery.
- Do not repeat one image throughout the site.
- Preserve natural proportions and configure mobile focal points.
- Never place important content only inside a raster image.

## Motion And Visual Restraint

Allowed: subtle hover feedback, short menu transitions, form feedback, and gentle entrance transitions.

Avoid excessive gradients, glow, parallax, flashing effects, large zooms, automatic carousels, decorative blobs, heavy animation, aggressive styling, overcrowding, excessive darkness, and overuse of gold. Respect `prefers-reduced-motion`.
