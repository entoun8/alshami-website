## Context

The hero banner in `components/home/hero.tsx` currently renders a full-screen `<video>` element as its background on all screen sizes. On mobile devices this is unnecessary weight — autoplay video consumes bandwidth and battery. The fix is purely at the component level: show the video only on `md+` breakpoints and show a static `<Image>` on smaller screens.

The component is already a `"use client"` component (Framer Motion), so no client/server boundary changes are needed. Tailwind's responsive prefix classes (`hidden`, `block`, `md:hidden`, `md:block`) make the swap zero-JS — both elements exist in the DOM but only one is visible at a given breakpoint.

## Goals / Non-Goals

**Goals:**
- Replace the video with a static full-screen image on screens narrower than `768px` (`md` breakpoint)
- Image covers the full banner area with the same `object-cover` behavior as the video
- No change to layout, text, overlays, or animations

**Non-Goals:**
- Lazy-loading or priority tuning for video on desktop
- Selecting a "best" banner image programmatically — one specific image from `public/media/images/` is chosen manually as the hero background
- Adding a poster frame to the video element

## Decisions

### Tailwind visibility toggle over JS state

**Decision:** Use `hidden md:block` on the `<video>` and `block md:hidden` on the `<Image>` — pure CSS swap, no JS.

**Rationale:** The project bans `useEffect`. A JS-based approach (e.g. reading `window.innerWidth` or a media-query hook) would require either `useEffect` or a SSR hydration shim. Tailwind's responsive utility classes achieve the same result without any runtime JS and without hydration mismatch.

**Alternative considered:** `useMediaQuery` hook — rejected because it needs `useEffect` internally.

### Next.js `<Image>` with `fill` prop

**Decision:** Use `<Image fill objectFit="cover" ... />` wrapped in a positioned container instead of a bare `<img>`.

**Rationale:** Required by REQUIREMENTS.md ("Use Next.js `Image` component for all images"). `fill` matches the video's `absolute inset-0 w-full h-full object-cover` geometry exactly.

### Image selection

**Decision:** Use the first landscape-oriented image from `public/media/images/` that has strong visual impact as a hero background (e.g. `Untitled-20260422-133330-4204-2x.png`).

**Rationale:** No dedicated "banner" image exists in the media folder; the closest hero-quality asset is selected by visual inspection. The filename is hardcoded in the component — no dynamic selection needed.

## Risks / Trade-offs

- **Both elements render in HTML** — the video tag is present in the DOM on mobile (just hidden via CSS). This is a minor overhead but avoids any JS or hydration complexity. The browser should not load the video source on mobile since the element is `display:none`, but behaviour depends on the browser.
- **Image quality** — the existing images were not shot as banner backgrounds; some may have awkward crop points at mobile aspect ratios. Mitigation: use `object-position: center` and choose the image with the most centred subject.
