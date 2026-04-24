## Context

The Alshami Next.js site currently has basic `metadata` exports (title and description) but no Open Graph or Twitter Card fields. When a URL is shared on WhatsApp, iMessage, Telegram, Twitter/X, or LinkedIn, these platforms fetch the page and look for `<meta property="og:image">` tags. Without them, they fall back to Vercel's platform-level default — resulting in the Vercel logo appearing in the link preview instead of Alshami branding.

Next.js 14+ App Router provides a first-class `metadata` API that handles generating all required meta tags server-side, including OG and Twitter Card tags, with zero client JS.

## Goals / Non-Goals

**Goals:**
- Display the Alshami brand identity (logo + brand colors) in WhatsApp, iMessage, Twitter/X, LinkedIn link previews.
- Set a correct `og:title`, `og:description`, and `og:image` for the root layout so every page inherits them automatically.
- Allow individual pages to override title and description via their own `metadata` export.

**Non-Goals:**
- Dynamic per-page OG images (no `ImageResponse` / `opengraph-image.tsx` route) — a single shared static image is sufficient for this informational site.
- Per-product OG images.
- Changes to any visible UI.

## Decisions

**Decision 1: Static image file (`/public/og-image.png`) over a dynamic `opengraph-image.tsx` route.**

A static 1200×630 PNG is the simplest, fastest, and most universally supported approach. The site has no dynamic content that would require a generated image. Vercel caches static assets on its CDN automatically, so there is no cold-start latency.

Alternative: `app/opengraph-image.tsx` using `ImageResponse` — adds complexity with Satori/canvas rendering and an edge function just to display a logo. Not justified here.

**Decision 2: Root-level metadata in `app/layout.tsx` with per-page title/description overrides.**

Next.js `metadata` cascade means the root layout sets the fallback for all pages. Individual pages can export their own `metadata` to override just the `title` and `description`, while the OG image remains shared. This is the recommended Next.js pattern and avoids duplication.

**Decision 3: Brand the OG image using Alshami visual identity.**
- Background: Alshami Brown (`#7B4020`) or Dark Espresso (`#2C1A0F`)
- Logo: the existing Alshami logo from `public/` or `media/`
- Tagline: "Authentic Syrian flavours, delivered across Australia."
- Dimensions: 1200×630px (standard OG spec, also used by Twitter/X summary-large-image card)

The image will be created as a static PNG and placed at `public/og-image.png`.

## Risks / Trade-offs

- **WhatsApp caches previews aggressively** → After deploying, existing shared links may still show the old preview for hours. No mitigation needed — this is expected platform behaviour.
- **Image must be publicly reachable at an absolute URL** → The `metadataBase` URL must be set in layout metadata so Next.js can resolve the relative `/og-image.png` path to an absolute URL. Use the production Vercel URL as `metadataBase`.

## Migration Plan

1. Add `public/og-image.png` (1200×630 branded image).
2. Update `app/layout.tsx` `metadata` export to add `metadataBase`, `openGraph`, and `twitter` fields.
3. Optionally update per-page `metadata` exports to pass `openGraph.title` and `openGraph.description`.
4. Deploy to Vercel. Test with WhatsApp Web link preview and [opengraph.xyz](https://www.opengraph.xyz) or Facebook Sharing Debugger.

Rollback: revert the `metadata` fields in `layout.tsx` — the image file is additive and harmless if left in place.
