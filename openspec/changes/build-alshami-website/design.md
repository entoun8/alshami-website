## Context

Alshami has no existing codebase. This is a greenfield Next.js website built from provided brand documentation (`ALSHAMI_INFORMATION.md`, `ALSHAMI_DESIGN_SYSTEM.md`) and media assets (`media/`). The site is purely informational — no e-commerce, no authentication, no database. The primary constraints are the Alshami design system (warm cream canvas, four-tier brown palette, pill buttons), Next.js/Tailwind/shadcn stack, and Framer Motion for animations.

## Goals / Non-Goals

**Goals:**
- Scaffold a Next.js (App Router) project with Tailwind CSS, shadcn/ui, and Framer Motion
- Implement the Alshami design system via CSS custom properties in `globals.css`
- Build 5 pages (Home, About, Alshami Coffee, Al-Attar Herbs, Contact) as server components
- Extract interactive elements (mobile nav drawer, animated sections) as `"use client"` components
- Serve all media from the local `media/` folder via Next.js `Image` and native `<video>`
- Full responsive layout following the design system breakpoints (xs/mobile/tablet/desktop/xl)
- SEO metadata on every page via Next.js Metadata API

**Non-Goals:**
- E-commerce, cart, checkout, or payment flows
- CMS integration or content management backend
- User authentication or accounts
- Multi-language support (English only)
- Analytics or tracking integrations (out of scope for this change)

## Decisions

**1. Next.js App Router (not Pages Router)**
The project uses the latest Next.js with App Router. Every `page.tsx` is a React Server Component by default. Client interactivity is isolated in `"use client"` wrapper components imported into pages.

**2. Tailwind CSS with CSS custom properties for design tokens**
All design system colors are defined as CSS custom properties in `globals.css` (e.g., `--color-alshami-brown: #7B4020`). Tailwind's `theme.extend` maps these tokens to utility class names (e.g., `text-alshami-brown`, `bg-dark-espresso`). No hardcoded hex values in components.

**3. Framer Motion for all animations**
Framer Motion is used for scroll-triggered reveals (using `whileInView`), hero text stagger animations, page transition wrappers, card hover effects, and mobile nav drawer animations. Since pages are server components, animated sections are extracted into client components.

**4. shadcn/ui for base UI primitives**
shadcn/ui provides accessible base components (Sheet for mobile nav drawer, etc.) that are restyled to the Alshami design system. This avoids reinventing accessible patterns.

**5. Shared Layout components: Nav + Footer**
`components/nav.tsx` (`"use client"` for hamburger state) and `components/footer.tsx` (server) are imported in the root `layout.tsx`. Every page automatically gets nav + footer.

**6. Shared container + section spacing pattern**
A `<Container>` component wraps content with consistent max-width and horizontal padding that scales across breakpoints (16px → 24px → 40px). All pages use identical `py-10 md:py-16 lg:py-20` section spacing.

**7. Media served locally**
Images from `media/images/` are referenced directly using Next.js `<Image>` with `unoptimized` or via `public/` symlink if needed. The banner video (`media/videos/banner.mp4`) is embedded as a native HTML5 `<video autoPlay muted loop playsInline>`.

**8. No `useEffect` anywhere**
Per requirements, `useEffect` is banned. Framer Motion's `whileInView`, `initial`/`animate` props, and `AnimatePresence` handle all animation state without `useEffect`.

## Risks / Trade-offs

- **Video file path**: `media/` is outside `public/` in a typical Next.js project. The video must be placed in `public/media/videos/banner.mp4` or the `media/` folder must be symlinked/copied. → Mitigation: During scaffolding, reference the correct public path and document the media file placement.

- **Large 2x images**: The provided images are `@2x` PNGs and may be large. → Mitigation: Use Next.js `<Image>` with explicit `width`/`height` and `sizes` prop for responsive serving.

- **Framer Motion bundle size**: Framer Motion adds ~50KB gzipped. For an informational site this is acceptable. → Mitigation: Use `framer-motion/lazy` imports if bundle size becomes a concern.

- **shadcn/ui version compatibility**: shadcn/ui components rely on Tailwind v3/v4 configuration patterns. → Mitigation: Follow shadcn/ui init instructions strictly and keep versions pinned.
