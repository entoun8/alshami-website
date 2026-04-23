## 1. Update Hero Component

- [x] 1.1 Add `hidden md:block` to the existing `<video>` element so it is hidden on small screens
- [x] 1.2 Import `Image` from `next/image` at the top of `components/home/hero.tsx`
- [x] 1.3 Add a `<div className="block md:hidden absolute inset-0">` wrapper beneath the video element (still inside the section)
- [x] 1.4 Inside that wrapper, render `<Image src="/media/images/Untitled-20260422-133330-4204-2x.png" alt="Alshami hero" fill className="object-cover" priority />` — the `fill` prop requires the parent to be `position: relative/absolute/fixed`
- [x] 1.5 Confirm the parent `<section>` already has `relative` (it does via `className="relative ..."`) so the `fill` image has a valid containing block

## 2. Verify Responsive Behaviour

- [x] 2.1 Open the home page in the browser and resize to mobile width (< 768px) — confirm the image fills the banner with no gaps and no video plays
- [x] 2.2 Resize to desktop width (≥ 768px) — confirm the video autoplays as before and the image is not visible
- [x] 2.3 Check that the dark overlay and headline text are visible over the image on mobile
