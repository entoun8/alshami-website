## Context

The Coffee History section uses a 4-column fact grid with values like "Arabica" and "Natural" rendered at `text-[3.2rem] md:text-[4rem]`. Inside a `max-w-[80rem]` container with `gap-[3.2rem]`, each box is ~176px wide at large viewports. After subtracting `p-[2.4rem]` (48px total), the usable content width is ~128px — too narrow for a 7-character word at 40px font size, causing the text to visually crowd the card edge.

Both `CoffeeHistory` and `HerbsHistory` render plain static text for stat values. The Framer Motion library is already in the project and used elsewhere; it can drive a count-up via `useMotionValue` + `useTransform` triggered by `useInView`.

The Al-Attar Herbs page has lighter animation coverage than the Coffee page: `HerbsHero` is missing the image entrance, and `HerbsHistory` animates as a single block rather than staggering its child elements.

## Goals / Non-Goals

**Goals:**
- Fix stat box text overflow/border crowding on large screens
- Animate numeric stats from 0 to their target value on first scroll-into-view
- Stagger paragraph and fact-card entrance in `HerbsHistory`
- Add image entrance animation to `HerbsHero` matching the coffee hero pattern

**Non-Goals:**
- Redesigning stat cards visually (colour, shape, shadow)
- Adding animations to any page or section not listed above
- Supporting non-numeric stat values (like "Arabica") in the count-up — those render as plain text

## Decisions

### 1 — Stat layout fix: `text-wrap: balance` + reduce large-breakpoint font size

Use Tailwind `text-balance` (wraps to `text-wrap: balance`) plus scale font size to `xl:text-[3.6rem]` so that at large viewports the value text wraps gracefully and stays within card padding rather than crowding the border. This is simpler than restructuring the grid and preserves the existing responsive column layout.

**Alternative considered**: increase card padding at large breakpoints. Rejected — would make the card feel too sparse without addressing the root font-size issue.

### 2 — Count-up: shared `StatCountUp` client component using Framer Motion `animate`

Create `components/stat-count-up.tsx` as a `"use client"` component. It accepts `value` (number), `suffix` (string, e.g. "+", "%"), and `decimals` (for "0" to render as "0" not "0.00"). On intersection (via Framer Motion's `useInView` with `once: true`), use `motion.span` with `animate` controlling a numeric display state via `useState` + `requestAnimationFrame` easing, or use Framer Motion's `useMotionValue` + `animate()` function.

Implementation approach: use Framer's `animate()` function (imperative) targeting a `useMotionValue`, then read it with `useTransform` formatted as an integer. Trigger once on `useInView`.

**Alternative considered**: CSS counter animation (no JS). Rejected — CSS counters are not animatable for arbitrary values without a plugin and can't format suffixes cleanly.

**Alternative considered**: external `react-countup` library. Rejected — project rule requires no new npm packages without approval; Framer Motion already covers this.

### 3 — Al-Attar history: individual `motion.div` per paragraph + staggered fact cards

Replace the single `motion.div` wrapper in `HerbsHistory` with:
- Two separate `motion.div`s for paragraphs with staggered `delay` (0s and 0.15s)
- A `variants`-based stagger container for the fact grid, with individual card variants matching the existing `CoffeeHistory` pattern

This mirrors how `CoffeeProducts` / `HerbsProducts` already handle card stagger.

### 4 — Al-Attar hero image: copy the coffee hero image animation exactly

`CoffeeHero` already has `initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}` on the image container. Apply the identical pattern to `HerbsHero` — no new API needed.

## Risks / Trade-offs

- [Count-up and non-numeric values] "Arabica" and "Natural" in CoffeeHistory facts are strings, not numbers. `StatCountUp` must only be used for numeric fact entries; string entries continue to render plain. The fact arrays need to be typed to distinguish numeric from string values. → Mitigation: add a `type` discriminator or use a type-guard on the value before rendering `StatCountUp` vs a plain `span`.

- [Reduced motion preference] Users with `prefers-reduced-motion` will still see the count-up animation since Framer Motion respects this only via `useReducedMotion` hook if wired in. → Accepted trade-off for now; non-critical informational animation.

- [Count-up for large numbers like 1924] Counting from 0 to 1924 in 1.5s is fast enough to feel punchy without being distracting. → Use a short duration (1.2–1.5s) with `easeOut`.
