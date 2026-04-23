## Context

The home page currently renders two `<BrandIntro>` cards inside a `<section>` on an Alshami Cream canvas. Each card is a 50/50 flex-row (image left or right, text panel opposite) with a simple `framer-motion` fade+slide-up on viewport entry. The layout is straightforward but scroll-passive — the user scrolls past both brands in one continuous motion without either brand commanding full attention.

The reference pattern (21st.dev) demonstrates a split-panel architecture where the screen is divided into two 50% columns and each brand occupies a full-viewport "page." The left column slides in from the bottom while the right column slides in from the top (opposing directions), creating a dramatic interlocking reveal. A scroll-debounce lock prevents partial transitions.

The implementation must use only existing dependencies (`framer-motion`, Next.js `Image`) and Alshami design-system tokens from `globals.css`.

## Goals / Non-Goals

**Goals:**
- Build `BrandIntroSlider` — a client component that renders N brand entries as full-viewport split-panel slides
- Implement scroll (wheel) and keyboard (ArrowUp/ArrowDown) navigation between slides with a debounce lock to prevent partial transitions
- Animate left and right panels in opposing vertical directions using `framer-motion` `animate` driven by the active slide index
- Alternate the image/content panel positions per slide (brand 1: image left, text right; brand 2: text left, image right)
- Apply Alshami design-system exclusively: cream canvas for text panels, caramel CTAs, alshami-brown headings, Inter typography, pill buttons
- After the last slide, release scroll control so the rest of the page scrolls normally
- Replace `app/page.tsx` brand section with the new component

**Non-Goals:**
- Touch/swipe support on mobile (out of scope for v1; mobile collapses to a stacked layout)
- Dot/progress navigation indicators (can be added in a follow-up)
- Any change to the Hero section above or sections below
- Server-side rendering of slide state (client-only interaction)

## Decisions

### Decision 1 — Framer Motion `animate` prop vs CSS `transform` inline style

**Choice:** Use `framer-motion` `motion.div` with the `animate` prop (`y: "0%"` / `y: "100%"` / `y: "-100%"`) driven by the active slide index rather than raw CSS transitions via `style={{ transform }}`.

**Rationale:** The project already uses `framer-motion` everywhere. Using `motion.div` keeps animation syntax consistent, gives access to `transition` config (duration, ease), and avoids a parallel CSS animation system. The reference used raw CSS `transition-transform` with inline style — acceptable there but inconsistent here.

**Alternative considered:** CSS `@keyframes` / `transition` on a custom class. Rejected — harder to synchronise with React state and requires extra CSS outside the component.

### Decision 2 — Scroll capture strategy

**Choice:** Attach `wheel` and `keydown` listeners in a `useEffect` at component mount. When the slider is not at the first or last slide, `e.preventDefault()` on wheel events to capture scroll. When past the last slide, detach the capture so the page scrolls freely.

**Rationale:** The reference used a similar `scrolling.current` ref lock with `setTimeout` to debounce. We adopt the same pattern: a `navigating` ref prevents re-triggering during the animation window (`700ms`). This is the simplest approach with no additional library.

**Alternative considered:** Intersection Observer + scroll-snap CSS. Rejected — scroll-snap CSS fights with the full-page override model and makes it harder to control "exit" behaviour (releasing scroll after the last slide).

### Decision 3 — Mobile layout

**Choice:** Below `md` (768px), the slider collapses to a static stacked layout (image top, text below) for each brand, displayed sequentially without scroll capture. The scroll-capture effect only activates at `md+`.

**Rationale:** Full-viewport scroll-hijacking is poor UX on touch devices. A stacked layout preserves content access and matches the existing responsive pattern already used by the old `BrandIntro`.

**Alternative considered:** Keeping scroll-hijack on mobile but using swipe detection. Rejected — adds complexity and risks trapping mobile users.

### Decision 4 — Component file structure

**Choice:** Create `components/home/brand-intro-slider.tsx` as a `"use client"` component. Remove `components/home/brand-intro.tsx`. Update `app/page.tsx` to import the new component.

**Rationale:** Clean replacement — no dead code. The old component had no usage outside `app/page.tsx`.

## Risks / Trade-offs

- **Scroll capture UX risk** — users may feel "trapped" in the slider if they don't realise they need to scroll through both brands before the page continues. → Mitigation: limit slides to exactly 2 (the two brands), keep transition fast (700ms), ensure a visible visual affordance (e.g., subtle downward chevron or slide counter) so users understand there's a next slide.

- **Accessibility** — `wheel`/`keydown` scroll capture can break keyboard and screen-reader navigation. → Mitigation: `ArrowUp`/`ArrowDown` support added; add `aria-label` on the section and `role="region"` so assistive tech identifies the slider correctly.

- **Performance on low-end devices** — animating two 50vw × 100vh panels simultaneously. → Mitigation: `framer-motion` uses `transform` (GPU-composited), not layout-triggering properties. Risk is low.

- **Replacing old component** — any future page that imported `brand-intro.tsx` would break. → Currently only `app/page.tsx` uses it (confirmed). Safe to remove.

## Migration Plan

1. Create `components/home/brand-intro-slider.tsx`
2. Update `app/page.tsx` — replace the `<section>` + two `<BrandIntro>` blocks with `<BrandIntroSlider brands={[...]} />`
3. Delete `components/home/brand-intro.tsx`
4. Manual test: verify scroll capture works, both brands display correctly, mobile collapses to stacked layout
5. No build flags, feature flags, or database changes needed — ship directly

## Open Questions

- Should a slide progress indicator (dots or "1/2") be shown? → Deferred to follow-up; not required for v1.
- Does the section need a `ref` forwarded so an anchor link (`#brands`) can deep-link to it? → Nice-to-have; can be added without redesign.
