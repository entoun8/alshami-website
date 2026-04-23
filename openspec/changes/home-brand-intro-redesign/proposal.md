## Why

The current brand intro section presents both brands as stacked side-by-side cards with a simple fade-in animation — functional but visually flat, and it undersells the two flagship Syrian brands that anchor the entire homepage. Replacing it with an animated split-panel layout where each brand occupies a full-viewport "slide" creates a more immersive, editorial reveal that feels worthy of 100+ year heritage brands.

## What Changes

- Replace the current `BrandIntro` component (simple image + text flex-row) with a new `BrandIntroSlider` component that renders each brand as a full-height split-panel slide
- Each slide splits the viewport 50/50 — image panel on one side, text + CTA panel on the other — alternating left/right per brand
- Panels animate in from opposite vertical directions (left half slides up from below; right half slides down from above, or vice versa) as the user scrolls into each slide
- The section uses scroll-snap to advance between the two brand slides before releasing normal page scroll
- All styling is strictly Alshami design system: cream canvas, alshami-brown headings, caramel CTA buttons, Inter typography
- `app/page.tsx` updated to swap the old `<section>` + `<BrandIntro>` pattern for the new `<BrandIntroSlider>`
- Old `components/home/brand-intro.tsx` replaced by `components/home/brand-intro-slider.tsx`

## Capabilities

### New Capabilities
- `brand-intro-slider`: A scroll-driven split-panel slider that reveals each brand through opposing-direction panel animations, styled with the Alshami design system

### Modified Capabilities
<!-- None — this is a UI replacement; no existing spec-level requirements change -->

## Impact

- **Files modified:** `app/page.tsx`, `components/home/brand-intro.tsx` (replaced)
- **Files created:** `components/home/brand-intro-slider.tsx`
- **Dependencies:** Existing `framer-motion` (already installed), Next.js `Image`, existing CSS custom properties from `globals.css`
- **No new npm packages required**
- **No API or data changes**
