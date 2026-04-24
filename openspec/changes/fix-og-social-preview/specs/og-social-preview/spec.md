## ADDED Requirements

### Requirement: OG image asset exists
A static PNG image for Open Graph previews SHALL exist at `public/og-image.png` with dimensions 1200×630px. It SHALL use Alshami brand colors (Dark Espresso `#2C1A0F` background, Alshami logo, and a short tagline in white Inter text).

#### Scenario: Image file present
- **WHEN** the browser or a crawling bot requests `/og-image.png`
- **THEN** the server returns a PNG image with a 200 status and `Content-Type: image/png`

### Requirement: Root layout sets metadataBase
The root `app/layout.tsx` `metadata` export SHALL include a `metadataBase` field set to the production deployment URL so that all relative image paths resolve to absolute URLs.

#### Scenario: OG image URL is absolute
- **WHEN** a social platform fetches any page and reads the `og:image` meta tag
- **THEN** the value is a fully-qualified URL (e.g., `https://alshami.com.au/og-image.png`)

### Requirement: Root layout includes openGraph fields
The root `app/layout.tsx` `metadata` export SHALL include an `openGraph` block with at minimum: `title`, `description`, `url`, `siteName`, `images` (pointing to `/og-image.png`), `locale: "en_AU"`, and `type: "website"`.

#### Scenario: OG meta tags rendered on home page
- **WHEN** any page is fetched by a bot or browser
- **THEN** the HTML `<head>` contains `<meta property="og:image">`, `<meta property="og:title">`, and `<meta property="og:description">` with correct Alshami values

### Requirement: Root layout includes Twitter Card fields
The root `app/layout.tsx` `metadata` export SHALL include a `twitter` block with `card: "summary_large_image"`, `title`, `description`, and `images` pointing to `/og-image.png`.

#### Scenario: Twitter Card meta tags rendered
- **WHEN** any page is fetched
- **THEN** the HTML `<head>` contains `<meta name="twitter:card" content="summary_large_image">` and `<meta name="twitter:image">`

### Requirement: Per-page metadata overrides title and description
Each page that has a unique `metadata` export SHALL set `openGraph.title` and `openGraph.description` matching the page's own title and description, while inheriting the shared OG image from the root layout.

#### Scenario: Page-specific OG title
- **WHEN** a social platform previews the Alshami Coffee page URL
- **THEN** `og:title` reflects the Coffee page title (not the generic site title)
