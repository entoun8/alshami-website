## Why

When a URL for the Alshami website is shared via WhatsApp, iMessage, or social platforms, the link preview shows the Vercel logo instead of the Alshami brand identity. This happens because the site is missing Open Graph and Twitter Card meta tags with a custom preview image, so platforms fall back to Vercel's default OG image.

## What Changes

- Add a static Open Graph preview image (`/public/og-image.png`) branded with the Alshami logo and identity.
- Add site-wide `openGraph` and `twitter` metadata in the root `app/layout.tsx` using the Next.js Metadata API.
- Override per-page OG metadata where useful (title/description per page, same image).

## Capabilities

### New Capabilities

- `og-social-preview`: Defines the Open Graph and Twitter Card metadata requirements — image asset, title, description, and per-page overrides — so that link previews on WhatsApp, iMessage, Twitter/X, and other platforms display the correct Alshami branding.

### Modified Capabilities

## Impact

- `app/layout.tsx` — add root-level `openGraph` and `twitter` fields to the existing `metadata` export.
- `public/og-image.png` — new static asset (1200×630px) using Alshami brand colors and logo.
- Per-page `metadata` exports optionally updated to pass page-specific titles and descriptions into OG fields.
- No new npm packages required.
