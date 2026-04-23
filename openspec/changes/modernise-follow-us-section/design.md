## Context

The Contact page has a "Follow Us" section (lines 109–137 of `components/contact/contact-details.tsx`) that renders two plain pill buttons (Instagram, Facebook) on a `bg-warm-ivory` background. It also violates the hard rule against inline `style={{...}}` in the contact methods grid above it.

The rest of the site uses the Dark Espresso feature band pattern for high-impact sections — this section should follow that same visual rhythm.

## Goals / Non-Goals

**Goals:**
- Replace the plain pill-button social row with a dark feature band that matches the site's design language
- Render each social platform as a card with an SVG icon, platform name, and short CTA label inside the band
- Animate cards in with a staggered Framer Motion reveal (`whileInView`, `once: true`)
- Remove the inline `style={{...}}` from the contact methods grid (also in this file)
- Stay entirely within `components/contact/contact-details.tsx` — no new files

**Non-Goals:**
- Adding a real follower count or live feed embed
- Supporting more than two social platforms (Instagram + Facebook)
- Extracting a generic reusable `SocialBand` component

## Decisions

**1. Dark Espresso band instead of warm-ivory background**
Rationale: The site already uses Dark Espresso (`bg-dark-espresso`) for high-signal zones (footer, feature bands). Using it for the social section gives it visual weight and separates it clearly from the contact methods section above. The alternative — keeping warm-ivory — makes the section feel like an afterthought.

**2. Inline SVG icons, no icon library**
Rationale: Only two icons are needed. An icon package would be a new npm dependency, which is prohibited without explicit approval. Simple `<svg>` markup keeps the bundle clean.

**3. Cards inside the band, not standalone pills**
Rationale: Cards with icon + name + label give each platform a moment of presence. Pill buttons on their own carry no brand identity. The card pattern matches how the rest of the site treats feature content on dark bands.

**4. Staggered `whileInView` animation via Framer Motion**
Rationale: Already used throughout the site. Each card staggers in with a small delay offset (0.1s per card) for a polished sequential reveal.

**5. Fix inline styles in the same pass**
Rationale: The contact methods grid uses `style={{ boxShadow: ... }}` — a hard rule violation. Since we're already editing this file, fixing it in the same change is low-risk and keeps the file compliant. The shadow values map to Tailwind's `shadow-sm` utility or a custom shadow class defined in `globals.css`.

## Risks / Trade-offs

- [Shadow utility] The exact whisper shadow (`0 0 0.5px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)`) may not have a named Tailwind class. → Use a CSS custom property or a `shadow-card` utility if already defined in `globals.css`; otherwise apply the shadow via a Tailwind `[shadow-...]` arbitrary value to avoid inline styles.
- [Icon maintenance] Inlined SVG paths are harder to update than an icon library. → Acceptable trade-off given the prohibition on new packages and the small number of icons.
