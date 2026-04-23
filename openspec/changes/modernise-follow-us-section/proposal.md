## Why

The current "Follow Us" section on the Contact page is minimal — two plain pill buttons on a pale background. It doesn't reflect the richness of the Alshami brand and feels disconnected from the rest of the site's warm, layered design language.

## What Changes

- Replace the existing "Follow Us" section with a visually elevated social-connect band
- Use the Dark Espresso feature band pattern (consistent with other high-impact sections site-wide)
- Introduce individual social platform cards with SVG icons, platform names, and a short CTA line
- Add Framer Motion entrance animations (staggered card reveals)
- Remove inline styles (currently violates the hard rule against `style={{...}}`)
- Keep the section as part of `contact-details.tsx` (no new files needed)

## Capabilities

### New Capabilities

- `social-connect-band`: A redesigned social media section rendered as a Dark Espresso feature band with staggered social platform cards, inline SVG icons, platform labels, and animated entrance — replaces the plain "Follow Us" pill-button row

### Modified Capabilities

<!-- none — no existing spec files exist -->

## Impact

- `components/contact/contact-details.tsx`: Replace the social media `<section>` block (lines 109–137) with the new social-connect band component logic
- No new npm packages required — SVG icons inlined, Framer Motion already installed
- No breaking changes — purely visual/UX improvement
