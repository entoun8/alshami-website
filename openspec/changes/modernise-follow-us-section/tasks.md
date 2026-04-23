## 1. Fix Inline Style Violation

- [x] 1.1 In `components/contact/contact-details.tsx`, locate the `style={{ boxShadow: ... }}` prop on the contact method `<a>` elements and replace it with a Tailwind arbitrary value class (e.g. `shadow-[0_0_0.5px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.06)]`) so no `style` prop remains in the file

## 2. Replace Follow Us Section with Social Connect Band

- [x] 2.1 Remove the existing social media `<section>` (lines 109–137 of `contact-details.tsx`) including its `bg-warm-ivory` background, plain heading, and pill-button row
- [x] 2.2 Add inline SVG icon data for Instagram and Facebook to the `socialLinks` array (or as separate constants) within `contact-details.tsx`
- [x] 2.3 Build the new social connect band as a `<section className="bg-dark-espresso py-[6.4rem] md:py-[9.6rem]">` block with a white section heading ("Connect With Us" or similar) using `text-text-white`
- [x] 2.4 Render each social platform as a card inside the band — each card contains: SVG icon, platform name (Inter, white, weight 600), and a CTA label (e.g. "Follow on Instagram") in `text-text-white-soft`; cards use `bg-white/10` or a subtle translucent fill, `rounded-[1.2rem]`, and a `hover:bg-white/20 transition` hover state
- [x] 2.5 Wrap the card grid in a Framer Motion `motion.div` with staggered `whileInView` animations: each card gets `initial={{ opacity: 0, y: 32 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`, and a `transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}`
- [x] 2.6 Ensure each card `<a>` has `target="_blank" rel="noopener noreferrer"` and the correct `href` from the `socialLinks` array

## 3. Verify

- [x] 3.1 Confirm no `style={{...}}` props remain anywhere in `contact-details.tsx`
- [x] 3.2 Confirm the contact page renders correctly at mobile (single column), tablet, and desktop breakpoints
- [x] 3.3 Confirm the social band's dark background visually separates it from the cream contact methods section above
- [x] 3.4 Confirm Framer Motion animations trigger on scroll and play only once
