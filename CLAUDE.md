# Alshami Website — Claude Instructions

## Project Context

Informational Next.js website for Alshami, an Australian business that imports two authentic Syrian brands — Alshami Coffee and Al-Attar Herbs — from Damascus to Australia. Not an e-commerce store.

**Full project context files (read before writing any code):**
- `STARTER.md` — project overview and page structure
- `REQUIREMENTS.md` — technical stack and hard coding rules
- `ALSHAMI_DESIGN_SYSTEM.md` — colour tokens, typography, component specs
- `ALSHAMI_INFORMATION.md` — brand and product content

---

## Hard Rules (Non-Negotiable)

### React & Next.js
- **Never use `useEffect`** — use React synthetic event handlers (`onWheel`, `onKeyDown`, `onClick`) directly on elements instead
- **Never make a page a client component** — pages must be server components; extract interactive parts into separate `"use client"` components
- **Never use inline styles** (`style={{...}}`) — use Tailwind utility classes only

### Styling
- All colours come from CSS custom properties defined in `app/globals.css` — reference them via Tailwind utilities (`bg-alshami-cream`, `text-caramel`, `bg-dark-espresso`, etc.)
- Never hardcode hex values in components
- Use the rem scale anchored at `1rem = 10px` (e.g. `1.6rem` = 16px, `3.2rem` = 32px)

---

## Design System Quick Reference

| Token | Class | Use |
|---|---|---|
| Alshami Brown `#7B4020` | `text-alshami-brown` / `bg-alshami-brown` | Headings |
| Caramel `#B8763A` | `bg-caramel` / `text-caramel` | CTAs, active states, accents |
| Dark Espresso `#2C1A0F` | `bg-dark-espresso` | Footer, feature bands |
| Alshami Cream `#EDE0C4` | `bg-alshami-cream` | Primary page canvas |
| Text Black Soft | `text-text-black-soft` | Secondary / body text |

- Buttons: always `rounded-full` (50px pill), `active:scale-95`, caramel fill for primary CTA
- Cards: `rounded-[1.2rem]` radius, layered whisper shadows
- Letter spacing: `-0.01em` universally (already set on `body` in `globals.css` — no need to repeat)
- Font: Inter throughout (set globally)

---

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (config via `@theme inline` in `globals.css`, no `tailwind.config.ts`)
- shadcn/ui
- Framer Motion — use for all animations (`whileInView`, `animate`, `motion.div`)
- No new npm packages without asking first
