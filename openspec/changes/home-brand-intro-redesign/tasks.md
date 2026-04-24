## 1. Create BrandIntroSlider component

- [ ] 1.1 Create `components/home/brand-intro-slider.tsx` as a `"use client"` component with the `BrandEntry` interface (`imageSrc`, `imageAlt`, `title`, `description`, `ctaLabel`, `ctaHref`) and a `brands: BrandEntry[]` prop
- [ ] 1.2 Add `useState` for `activeIndex` (default `0`) and a `useRef<boolean>` for the navigation debounce lock (`navigating`)
- [ ] 1.3 Implement `navigateNext` and `navigatePrev` helpers that guard on `activeIndex` bounds and set the new index
- [ ] 1.4 Implement `handleWheel` — check `navigating.current`, set lock, debounce release after 700ms, call `navigateNext`/`navigatePrev` based on `deltaY`, and skip if on first/last slide (release default scroll)
- [ ] 1.5 Implement `handleKeyDown` — same debounce pattern for `ArrowDown` / `ArrowUp`
- [ ] 1.6 Wire `useEffect` to attach `wheel` and `keydown` listeners on mount and clean up on unmount; include `activeIndex` in dependency array so closure captures correct state

## 2. Build slide rendering (desktop)

- [ ] 2.1 Render a `<div>` container with `relative overflow-hidden` and explicit `100vh` height (hidden on `< md`, shown on `md+`)
- [ ] 2.2 Map over `brands` and render each slide as `<div className="absolute inset-0">` containing two `motion.div` panels
- [ ] 2.3 For even-index slides: left panel = image, right panel = text. For odd-index slides: left panel = text, right panel = image
- [ ] 2.4 Left panel: `absolute top-0 left-0 w-1/2 h-full`, animate `y` → `"0%"` when active, `"100%"` when inactive (slides up from below)
- [ ] 2.5 Right panel: `absolute top-0 left-1/2 w-1/2 h-full`, animate `y` → `"0%"` when active, `"-100%"` when inactive (slides down from above)
- [ ] 2.6 Set `framer-motion` `transition={{ duration: 0.7, ease: "easeOut" }}` on both panels
- [ ] 2.7 Image panel: fill the panel with `<Image fill sizes="50vw" className="object-cover" />`
- [ ] 2.8 Text panel: background `bg-alshami-cream`, centered flex column, heading in `text-alshami-brown` Inter bold, description in `text-text-black-soft`, caramel pill CTA button (`rounded-full bg-caramel text-white active:scale-95`)

## 3. Build mobile fallback layout

- [ ] 3.1 Below the desktop slider, render a `<div className="md:hidden flex flex-col gap-[3.2rem]">` that maps over brands and outputs a static stacked card (image top `aspect-[4/3] rounded-[1.2rem]`, text below) for each brand — no scroll capture
- [ ] 3.2 Ensure the desktop slider container has `hidden md:block` (or equivalent) so only one layout is ever visible

## 4. Update home page

- [ ] 4.1 In `app/page.tsx`, remove the `import BrandIntro` statement and the `<section>` block containing the two `<BrandIntro>` usages
- [ ] 4.2 Add `import BrandIntroSlider from "@/components/home/brand-intro-slider"` to `app/page.tsx`
- [ ] 4.3 Add `<BrandIntroSlider brands={[{ imageSrc: "...", imageAlt: "...", title: "Alshami Coffee", description: "...", ctaLabel: "Explore Alshami Coffee", ctaHref: "/alshami-coffee" }, { imageSrc: "...", imageAlt: "...", title: "Al-Attar Herbs", description: "...", ctaLabel: "Explore Al-Attar Herbs", ctaHref: "/al-attar-herbs" }]} />` using the exact same image paths, descriptions, and hrefs currently in `page.tsx`

## 5. Cleanup

- [ ] 5.1 Delete `components/home/brand-intro.tsx` (confirmed no other consumers)
- [ ] 5.2 Run `next build` (or `next dev`) and verify no TypeScript errors and no missing imports
- [ ] 5.3 Manual smoke test: scroll through both brand slides on desktop, verify opposing-direction animation, verify caramel CTA and brand styling, verify mobile stacked fallback at < 768px viewport width
