## 1. Project Scaffolding

- [x] 1.1 Initialise a new Next.js (App Router) project with TypeScript in the workspace root
- [x] 1.2 Install and configure Tailwind CSS
- [x] 1.3 Initialise shadcn/ui
- [x] 1.4 Install Framer Motion
- [x] 1.5 Copy media assets: place `media/videos/banner.mp4` and all `media/images/` files into `public/media/` so Next.js can serve them

## 2. Design System Setup

- [x] 2.1 Define all Alshami design system colour tokens as CSS custom properties in `globals.css` (Alshami Brown, Warm Brown/Caramel, Dark Espresso, Deep Umber, Cream Blush, Alshami Cream, Warm Ivory, Ivory Wash, Light Caramel, text tokens, semantic colours)
- [x] 2.2 Extend `tailwind.config.ts` to map all colour tokens to Tailwind utility class names
- [x] 2.3 Set the root `font-size: 62.5%` trick so `1rem = 10px`, apply `font-family: Inter` globally
- [x] 2.4 Add the Inter font via `next/font/google` and wire it into the root layout

## 3. Shared Layout Components

- [x] 3.1 Build `components/nav.tsx` as a `"use client"` component: fixed top bar with Alshami logo, desktop nav links, and mobile hamburger icon; use Framer Motion for the mobile drawer open/close animation; active link highlight using `usePathname`
- [x] 3.2 Build `components/footer.tsx` as a server component: Dark Espresso background, nav links, brand name, and copyright text
- [x] 3.3 Build `components/container.tsx` — a shared wrapper with max-width and responsive horizontal padding (16px → 24px → 40px)
- [x] 3.4 Wire Nav and Footer into `app/layout.tsx` so they appear on every page; set `<html lang="en">`

## 4. Home Page

- [x] 4.1 Build the video hero section as a `"use client"` component: `banner.mp4` as `<video autoPlay muted loop playsInline>` background, dark overlay, and Framer Motion stagger animation on headline + tagline
- [x] 4.2 Build the Alshami Coffee brand introduction section with brand image, short description, and CTA linking to `/alshami-coffee`; add `whileInView` scroll-reveal animation
- [x] 4.3 Build the Al-Attar Herbs brand introduction section with brand image, short description, and CTA linking to `/al-attar-herbs`; add `whileInView` scroll-reveal animation
- [x] 4.4 Assemble `app/page.tsx` as a server component importing the above client components
- [x] 4.5 Add `metadata` export to `app/page.tsx` with Home page title and description

## 5. About Us Page

- [x] 5.1 Build the About page content sections (business story, Syrian heritage, mission) as a `"use client"` component with Framer Motion `whileInView` scroll-reveal animations
- [x] 5.2 Assemble `app/about/page.tsx` as a server component
- [x] 5.3 Add `metadata` export to `app/about/page.tsx`

## 6. Alshami Coffee Page

- [x] 6.1 Build the brand hero/header section for Alshami Coffee with brand imagery and headline
- [x] 6.2 Build the brand history + key facts section (founded 1924, 100+ years, Arabica beans, cardamom, etc.)
- [x] 6.3 Build the product card component: image (top 60%), product name in Alshami Brown, short description in Text Black Soft, `12px` border-radius, layered shadow
- [x] 6.4 Build the product grid client component with all 6 Alshami Coffee products; stagger-animate cards in on scroll with Framer Motion `whileInView`
- [x] 6.5 Assemble `app/alshami-coffee/page.tsx` as a server component
- [x] 6.6 Add `metadata` export to `app/alshami-coffee/page.tsx`

## 7. Al-Attar Herbs Page

- [x] 7.1 Build the brand hero/header section for Al-Attar Herbs with brand imagery and headline
- [x] 7.2 Build the brand history + key facts section (founded 1990, 35+ years, 100% natural, allergen-free, tea bags, etc.)
- [x] 7.3 Build the product grid client component with all 4 Al-Attar products; stagger-animate cards in on scroll with Framer Motion `whileInView`
- [x] 7.4 Assemble `app/al-attar-herbs/page.tsx` as a server component
- [x] 7.5 Add `metadata` export to `app/al-attar-herbs/page.tsx`

## 8. Contact Page

- [x] 8.1 Build the contact details section: phone (`tel:` link), email (`mailto:` link), WhatsApp (`https://wa.me/` link), and social media links (open in new tab)
- [x] 8.2 Assemble `app/contact/page.tsx` as a server component
- [x] 8.3 Add `metadata` export to `app/contact/page.tsx`

## 9. Polish & Quality

- [x] 9.1 Ensure all images use Next.js `<Image>` component with descriptive `alt` text, explicit `width`/`height`, and appropriate `sizes` prop
- [x] 9.2 Verify all internal navigation uses Next.js `<Link>` component
- [x] 9.3 Verify no hardcoded colour hex values exist in components — all colours reference CSS custom properties
- [x] 9.4 Verify no `useEffect` is used anywhere in the codebase
- [x] 9.5 Verify all pages are server components and only interactive sections are client components
- [x] 9.6 Test full responsiveness across xs, mobile, tablet, desktop, and xl breakpoints
- [x] 9.7 Verify all 5 pages have unique `metadata` exports with title and description
