## 1. Create the OG Image Asset

- [x] 1.1 Design and export a 1200×630px PNG branded with the Alshami identity (Dark Espresso `#2C1A0F` background, Alshami logo centered, short tagline "Authentic Syrian flavours, delivered across Australia." in white Inter text) and save it as `public/og-image.png`

## 2. Update Root Layout Metadata

- [x] 2.1 In `app/layout.tsx`, add `metadataBase: new URL("https://alshami.com.au")` to the existing `metadata` export (use the actual production Vercel URL)
- [x] 2.2 Add an `openGraph` block to the `metadata` export with `title`, `description`, `url`, `siteName: "Alshami"`, `images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Alshami — Authentic Syrian Coffee and Herbs" }]`, `locale: "en_AU"`, and `type: "website"`
- [x] 2.3 Add a `twitter` block to the `metadata` export with `card: "summary_large_image"`, `title`, `description`, and `images: ["/og-image.png"]`

## 3. Update Per-Page Metadata

- [x] 3.1 In `app/page.tsx`, add `openGraph: { title, description }` to the existing `metadata` export (inherit image from root)
- [x] 3.2 In `app/about/page.tsx`, add `openGraph: { title, description }` to the existing `metadata` export
- [x] 3.3 In `app/alshami-coffee/page.tsx`, add `openGraph: { title, description }` to the existing `metadata` export
- [x] 3.4 In `app/al-attar-herbs/page.tsx`, add `openGraph: { title, description }` to the existing `metadata` export
- [x] 3.5 In `app/contact/page.tsx`, add `openGraph: { title, description }` to the existing `metadata` export

## 4. Verify

- [x] 4.1 Run `npm run build` locally and confirm no TypeScript or metadata errors
- [x] 4.2 Deploy to Vercel and test the link preview using WhatsApp Web or a tool like opengraph.xyz to confirm the Alshami branded image appears
