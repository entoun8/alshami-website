## Why

On small screens, the hero banner video is heavy to load and can stutter or drain battery, degrading the first impression on mobile. Replacing the video with a full-screen static image on small screens gives a faster, smoother experience without changing the desktop hero at all.

## What Changes

- The `Hero` component conditionally renders a `<video>` on `md+` breakpoints and a Next.js `<Image>` on screens smaller than `md` (`< 768px`)
- The image fills the full banner area using `object-cover`, identical in sizing to the video
- No layout, copy, or animation changes — only the background media element swaps by breakpoint

## Capabilities

### New Capabilities

- `banner-mobile-image`: Renders a full-screen static image as the hero banner background on small screens (< 768px) instead of the autoplay video

### Modified Capabilities

<!-- No existing spec requirements change — this is purely an additive responsive behaviour on the Hero component -->

## Impact

- **File modified:** `components/home/hero.tsx`
- **Asset used:** one of the existing images from `public/media/images/` (selected for visual fit as a hero background)
- **No new dependencies** — uses Next.js `Image` component already available in the stack
- No other pages or components are affected
