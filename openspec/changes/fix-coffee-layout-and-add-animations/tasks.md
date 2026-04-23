## 1. Fix Coffee History Stat Box Layout

- [x] 1.1 In `components/alshami-coffee/coffee-history.tsx`, update the fact value `span` to add `text-balance` and reduce font size at large breakpoints: change `text-[3.2rem] md:text-[4rem]` to `text-[2.8rem] md:text-[3.2rem] xl:text-[3.6rem] text-balance`
- [x] 1.2 Verify at large viewport (≥1280px) that "Arabica" and "Natural" no longer touch the card border — adjust sizing further if needed

## 2. Create StatCountUp Component

- [x] 2.1 Create `components/stat-count-up.tsx` as a `"use client"` component that accepts `value: number`, `suffix?: string`, and `duration?: number` props
- [x] 2.2 Use Framer Motion's `useMotionValue`, `animate()` (imperative), and `useInView` (with `once: true`) to count from 0 to `value` with an ease-out curve over ~1.3s; render the current integer via `useTransform` formatted with `Math.round`, followed by the suffix in the same `span`

## 3. Integrate StatCountUp into Coffee History

- [x] 3.1 In `components/alshami-coffee/coffee-history.tsx`, update the `facts` array type to distinguish numeric from string values (add a `numeric?: boolean` flag or a union type)
- [x] 3.2 Mark `{ value: 1924, label: "Founded in Damascus" }` and `{ value: 100, suffix: "+", label: "Years of heritage" }` as numeric; keep `"Arabica"` and `"Natural"` as string entries
- [x] 3.3 In the render, conditionally render `<StatCountUp value={...} suffix={...} />` for numeric entries and a plain `<span>` for string entries

## 4. Integrate StatCountUp into Herbs History

- [x] 4.1 In `components/al-attar-herbs/herbs-history.tsx`, update the `facts` array similarly — mark `{ value: 1990 }`, `{ value: 35, suffix: "+" }`, `{ value: 100, suffix: "%" }`, and `{ value: 0 }` as numeric
- [x] 4.2 Render `<StatCountUp>` for each numeric entry in `HerbsHistory`

## 5. Add Staggered Motion to Herbs History

- [x] 5.1 In `components/al-attar-herbs/herbs-history.tsx`, remove the single `motion.div` wrapper around the entire content block
- [x] 5.2 Wrap the section heading in its own `motion.div` with `whileInView={{ opacity: 1, y: 0 }}` initial `{ opacity: 0, y: 32 }`, `viewport={{ once: true }}`
- [x] 5.3 Wrap each of the two paragraphs in individual `motion.div`s with the same enter animation; give the second paragraph `transition={{ delay: 0.15 }}`
- [x] 5.4 Define `containerVariants` (stagger 0.1s) and `cardVariants` (opacity 0→1, y 40→0, duration 0.6s) in the file
- [x] 5.5 Replace the plain `div` wrapping the fact grid with a `motion.div` using `containerVariants`, `initial="hidden"`, `whileInView="visible"`, `viewport={{ once: true }}`
- [x] 5.6 Wrap each fact box `div` in a `motion.div` using `cardVariants`

## 6. Add Image Entrance Animation to Herbs Hero

- [x] 6.1 In `components/al-attar-herbs/herbs-hero.tsx`, change the image wrapper `motion.div` (currently missing animate props on the image side) — add `initial={{ opacity: 0, scale: 0.96 }}`, `animate={{ opacity: 1, scale: 1 }}`, `transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}` to match the Coffee hero pattern exactly
