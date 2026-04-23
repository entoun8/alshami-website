# Design System — Alshami
## Adapted from the Starbucks Design System Structure

---

## 1. Visual Theme & Atmosphere

Alshami's design system is a **warm, authentic Middle Eastern brand** wearing the rich browns and creams of traditional Syrian coffee culture across every surface. The canvas alternates between a warm cream (`#EDE0C4`) and a soft ivory (`#E8D8B8`) — colors that reference actual brand materials: the coffee packaging, the burlap sacks, the ceramic cups, the linen cloth — while the signature **Alshami Brown** (`#7B4020`) anchors the brand moment on hero bands, CTAs, and key feature sections. The browns come in four calibrated shades (Alshami Brown, Warm Brown, Dark Espresso, Deep Umber) each mapped to a specific surface role, and Caramel (`#B8763A`) appears as the primary CTA and accent color.

Typography carries most of the brand voice. A clean, confident sans-serif sits across nearly every surface with a tight `-0.16px` letter-spacing — it reads warm and trustworthy rather than cold or corporate. The surfaces breathe through rounded geometry. Every button is a 50px full-pill. Cards take a 12px rounded-rectangle. Elevations are restrained — card shadows stay at a whispered `0.14/0.24` alpha. The whole system feels like warm café signage: legible, rich, and inviting.

**Key Characteristics:**
- Four-tier brown brand system (Alshami Brown / Warm Brown / Dark Espresso / Deep Umber) each mapped to a distinct surface role
- Warm-cream canvas (`#EDE0C4` / `#E8D8B8`) instead of cold white — references Syrian café and coffee shop materials
- Full-pill buttons (`50px` radius) universal, `scale(0.95)` active press the signature micro-interaction
- 12px card radius + whisper-soft shadows keep content cards flat-plus-hint-of-lift
- Rem-based spacing scale anchored at 1.6rem (~16px) = `--space-3`, stepping to 6.4rem (~64px)

**Color-block page rhythm:** Cream hero → White content sections → Dark Espresso (`#2C1A0F`) feature band with white text → Cream utility zone → Dark Espresso (`#2C1A0F`) footer with caramel / white text — a rich dark bookend around the bright body.

---

## 2. Color Palette & Roles

### Primary

- **Alshami Brown** (`#7B4020`): The historic brand brown. Used on h1 headings, primary section headers, and as the main brand signal wherever a single dominant color is needed.
- **Warm Brown / Caramel** (`#B8763A`): A slightly brighter, more luminous brown. The primary filled-CTA color and the accent throughout the interface.
- **Dark Espresso** (`#2C1A0F`): The deep near-black brand brown. Footer surface, feature-band backgrounds, and dark hero sections.
- **Deep Umber** (`#4A2010`): A secondary mid-dark brown used sparingly on decorative accents and dark-gradient moments.
- **Cream Blush** (`#F5EDD8`): A pale warm wash used for form-valid-state tints and light utility surfaces.

### Secondary & Accent

- **Caramel** (`#B8763A`): The primary accent color — used for CTAs, active states, links, and highlighted elements.
- **Light Caramel** (`#D4AA7D`): Softer caramel for background washes on accent sections.
- **Ivory Wash** (`#F9F3E8`): Cream-warm page-surface wash used under partnership or special sections — ties the accent back into the warm neutral system.

### Surface & Background

- **White** (`#FFFFFF`): Primary card and modal surface.
- **Neutral Cool** (`#F9F9F9`): Subtle cool-gray surface used on dropdown menus, form-card wraps, and quiet utility containers.
- **Alshami Cream** (`#EDE0C4`): The warm cream **primary page canvas** — the signature background of the brand.
- **Warm Ivory** (`#E8D8B8`): A slightly warmer/darker cream for zone separators, soft page-section washes.
- **Dark Espresso** (`#2C1A0F`): Deep ink reserved for the dark top-of-page CTA strip and high-contrast moments.

### Text

- **Text Black** (`rgba(0, 0, 0, 0.87)`): Primary heading and body text color on light surfaces. Not pure black — an 87%-opacity black that reads warmer.
- **Text Black Soft** (`rgba(0, 0, 0, 0.58)`): Secondary/metadata text on light surfaces.
- **Text White** (`rgba(255, 255, 255, 1)`): Primary heading/body text on dark brown surfaces.
- **Text White Soft** (`rgba(255, 255, 255, 0.70)`): Secondary text on dark-brown surfaces — footer link descriptions, caption text.
- **Alshami Mocha** (`#5C3A1E`): A dedicated muted warm-brown used on special text blocks — a slightly "dustier" reading color than Text Black that signals "brand surface" without using full Alshami Brown.

### Semantic & Accent

- **Red** (`#C82014`): Error and destructive state (form invalid, destructive actions).
- **Yellow** (`#FBBC05`): Warning state.
- **Cream Blush Tint** (`#F5EDD8` at 33% opacity): Form valid-field tint background.
- **Red Tint** (`hsl(4 82% 43% / 5%)`): Invalid-field tint on forms.

### Black / White Alpha Ladders

Two parallel translucent scales for overlay and secondary-text use:
- `rgba(0,0,0,0.06)` through `rgba(0,0,0,0.90)` in 10% steps — for dark overlays on light surfaces
- `rgba(255,255,255,0.10)` through `rgba(255,255,255,0.90)` in 10% steps — for light overlays on dark surfaces

### Gradient System

No structural gradient tokens. Surface hierarchy is solid-color-block throughout — the system relies on its five-tier cream/brown surface palette rather than gradients.

---

## 3. Typography Rules

### Font Family

- **Primary:** `Inter, "Helvetica Neue", Helvetica, Arial, sans-serif` — a clean, confident humanist sans-serif used across nearly every surface.
- **Loading Fallback:** `"Helvetica Neue", Helvetica, Arial, sans-serif`
- **Editorial Serif (special sections):** `"Lora", "Iowan Old Style", Georgia, serif` — used on specific heritage or story headline moments for a warm editorial feel.

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display | 5.0rem / 80px | 400–600 | 1.2 | -0.16px | Largest hero display |
| Jumbo | 3.6rem / 58px | 400–600 | 1.2 | -0.16px | Secondary hero headings |
| Hero Large | 2.8rem / 45px | 400–600 | 1.2–1.5 | -0.16px | Landing section headlines |
| H1 | 24px | 600 | 36px | -0.16px | Alshami Brown primary heading |
| H2 | 24px | 400 | 36px | -0.16px | Regular-weight section title in Text Black |
| Body Large | 19px | 400–600 | 33.25px (~1.75) | -0.16px | Hero intro copy, feature-band body |
| Body | 1.6rem / 16px | 400 | 1.5 (24px) | -0.01em | Default body copy |
| Small | 1.4rem / ~14px | 400–600 | 1.5 | -0.01em | Button label, metadata, form labels |
| Micro | 1.3rem / ~13px | 400 | 1.5 | -0.01em | Active float-label state, caption micro-copy |
| Button Label | 14–16px | 400–600 | 1.2 | -0.01em | All pill-button labels |

**Letter-spacing tokens:**
- `letterSpacingNormal`: `-0.01em` (default — tight, characteristic)
- `letterSpacingLoose`: `0.1em` (emphasized caps)
- `letterSpacingLooser`: `0.15em` (uppercase-style labels, extreme emphasis)

**Line-height tokens:**
- `lineHeightNormal`: `1.5` (body)
- `lineHeightCompact`: `1.2` (display/buttons)

### Principles

- **Tight negative tracking (`-0.01em`)** is applied almost universally.
- **Weight shifts carry hierarchy, not size shifts.** H1 and H2 share the same 24px/36px size; only weight (600 vs 400) and color (Alshami Brown vs Text Black) separate them.
- **Size tokens use rem, anchored to `1rem = 10px`** (via a `font-size: 62.5%` root trick). So `1.6rem` = 16px, `2.4rem` = 24px, etc.
- **Body text never goes pure black** — it sits at `rgba(0,0,0,0.87)` to match the warm-cream canvas temperature.

---

## 4. Component Stylings

### Buttons

**1. Primary Filled — main CTA**
- Background: `#B8763A` (Warm Brown / Caramel)
- Text: `#FFFFFF`
- Border: `1px solid #B8763A`
- Radius: `50px` (full pill)
- Padding: `7px 16px`
- Font: Inter, 16px, weight 600, letter-spacing `-0.01em`
- Active state: `transform: scale(0.95)` via `--buttonActiveScale`
- Transition: `all 0.2s ease`

**2. Primary Outlined**
- Background: transparent
- Text: `#B8763A` (Warm Brown)
- Border: `1px solid #B8763A`
- Same radius / padding / active / transition as Primary Filled

**3. Dark Filled — high-contrast strip**
- Background: `#2C1A0F` (Dark Espresso)
- Text: `#FFFFFF`
- Border: `1px solid #2C1A0F`
- Radius: `50px`, Padding: `7px 16px`
- Font: 14px, weight 600

**4. Dark Outlined — secondary on light surface**
- Background: transparent
- Text: `rgba(0, 0, 0, 0.87)` (Text Black)
- Border: `1px solid rgba(0, 0, 0, 0.87)`
- Radius: `50px`, Padding: `7px 16px`
- Font: 14px, weight 600

**5. Inverted on Dark Band — primary action on dark surface**
- Background: `#FFFFFF`
- Text: `#B8763A`
- Border: `1px solid #FFFFFF`
- Used when the surface behind the button is Dark Espresso (`#2C1A0F`)

**6. Outlined on Dark — secondary action on dark band**
- Background: transparent
- Text: `#FFFFFF`
- Border: `1px solid #FFFFFF`
- Used on dark-brown feature bands for secondary action paired with a white filled CTA

**7. Floating Circular CTA**
- Background: `#B8763A` (Warm Brown)
- Icon: `#FFFFFF`
- Size: `5.6rem / 56px` (standard), `4rem / 40px` (mini variant)
- Radius: `50%` (full circle)
- Fixed bottom-right, `-0.8rem` touch offset for extra tap comfort
- Shadow stack: base `0 0 6px rgba(0,0,0,0.24)` + ambient `0 8px 12px rgba(0,0,0,0.14)`
- Active state: ambient shadow fades to `0 8px 12px rgba(0,0,0,0)`

**8. Full-width Feedback Tab**
- Background: `#B8763A`
- Text: `#FFFFFF`
- Radius: `12px 12px 0px 0px` (top-rounded only)
- Padding: `8px 16px`
- Font: 14px, weight 400
- Positioned fixed bottom-right, attached to the viewport edge

### Cards & Containers

**Content Card (default)**
- Background: `#FFFFFF`
- Radius: `12px`
- Shadow: `0px 0px .5px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.24)`
- Used for: feature cards, product tiles, info panels

**Product Image Tile**
- Background: product photography fills the card
- Radius: `12px`
- Shadow: lighter than default card — treated like a physical product card on the cream canvas

**Feature Section Cards**
- Three-column grid of Dark Espresso (`#2C1A0F`) panels, each with:
  - Colored accent header stripe
  - Title in large Inter weight 600 in white
  - Description list in white/translucent-white text
  - Bottom caption in Text White Soft

**Partnership / Info Card**
- Background: `#F9F3E8` (Ivory Wash)
- Radius and shadow follow default card spec

**Dropdown Menu**
- Background: `#F9F9F9` (Neutral Cool)
- Menu items at `24px / weight 400` in Text Black
- No border — just background surface shift against white nav

**Modal**
- Padding: `2.4rem`
- Top padding: `8.8rem`
- Radius inherits from card spec (`12px`)

### Inputs & Forms

**Floating Label Input**
- Label floats above the input border when focused/filled
- Desktop label font size: `1.9rem` default, animates to `1.4rem` when active
- Mobile label font size: `1.6rem` default, animates to `1.3rem` active
- Label horizontal offset: `12px` from left
- Active label translate: up to `-12px` with `-50%` Y translation
- Field padding: `12px`
- Form horizontal padding: `1.6rem`
- Validation: valid-field gets `#F5EDD8` (Cream Blush) tint; invalid-field gets `rgba(red, 0.05)` tint
- Transition: `0.3s cubic-bezier(0.32, 2.32, 0.61, 0.27)` on checked-input

**Option Icon (checkbox/radio)**
- Padding: `3px` inner
- Uses the checked-input cubic-bezier animation above

### Navigation

**Global Nav (top bar)**
- Fixed position with progressive heights: `64px` xs → `72px` mobile → `83px` tablet → `99px` desktop
- Background: `#FFFFFF`
- Shadow stack: `0 1px 3px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)`
- Left: Alshami logo
- Primary links inline in Inter weight 400–600
- Right: navigation links + outlined button + dark filled button

**Sub-nav (second bar)**
- Height: `53px` (global subnav) / `48px` (internal subnav)
- Horizontal tab group beneath the global nav

**Mobile Nav**
- Collapses to a hamburger drawer below tablet breakpoint

### Image Treatment

- **Hero photography**: Product photos occupy ~40vw of a split-hero layout; text occupies the other 60vw
- **Product images**: Square or 4:3 product photography with clean cream/white backdrops, slight soft drop-shadow
- **Image fade-in**: `opacity 0.3s ease-in` transition on image load

### Feature Band (dark-brown hero strip)

Full-width `#2C1A0F` (Dark Espresso) band with:
- Left: white headline + subhead + CTA row
- Right: product photography or illustration
- Split ratio ~40/60 or 50/50 depending on section
- White text throughout with `rgba(255,255,255,0.70)` for secondary copy
- CTAs follow Inverted (white filled with caramel text) + Outlined on Dark (white outline) pairing

### Expander / Accordion

- Duration: `300ms`
- Timing curve: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — a measured ease-out
- Used for FAQ sections

### Product Detail Components

**Size / Variant Options Selector**
- Horizontal row of option buttons
- Each item: icon on top, name below in Alshami Brown (`#7B4020`), descriptor caption in Text Black Soft
- Active state: a caramel circular ring outline (`2px solid #B8763A`) around the selected option
- Inactive: no ring, same typography
- Full-width row, equal spacing
- Radius of container: `12px`
- Padding: `16px 24px` internal

**Select Input (outlined rectangle)**
- Background: `#FFFFFF`
- Border: `1px solid #d6dbde`
- Radius: `4px`
- Full-width in its column
- Floating label above top border: 13/700 Text Black, uppercase, `0.325px` letter-spacing
- Value displayed centered: 16/400 Text Black
- Chevron-down icon right side in Text Black Soft
- Focus: border shifts to Warm Brown (`#B8763A`)

**Numeric Stepper**
- `−` minus button + count number + `+` plus button, all inline
- Buttons: circular `32×32px` with `1px solid #d6dbde` border
- Count number: 16/700 Text Black centered

**Product Description Band**
- Full-width Dark Espresso band (`#2C1A0F`)
- Contains:
  1. Product description body copy in white (16/400/1.5)
  2. Summary inline info with info-icon tooltip — 14/700 white
  3. Outlined-white-on-dark pill button for further details
- Padding: `32px` vertical

**Breadcrumb**
- Separator: `/` slash character in Text Black Soft
- Current page is unlinked, prior pages are underlined caramel links (`#B8763A`)
- Font: 14/400 Inter

---

## 5. Layout Principles

### Spacing System

Rem-based semantic scale (anchored `1rem = 10px`):

| Token | Rem | Pixels | Typical Use |
|-------|-----|--------|-------------|
| `--space-1` | `0.4rem` | 4px | Tightest inline padding |
| `--space-2` | `0.8rem` | 8px | Small gap, button vertical padding |
| `--space-3` | `1.6rem` | 16px | Default — card padding, outer gutter xs |
| `--space-4` | `2.4rem` | 24px | Section inner spacing, outer gutter md |
| `--space-5` | `3.2rem` | 32px | Major between-section spacing |
| `--space-6` | `4.0rem` | 40px | Large gaps, outer gutter lg |
| `--space-7` | `4.8rem` | 48px | Section-to-section spacing |
| `--space-8` | `5.6rem` | 56px | Very large breathing |
| `--space-9` | `6.4rem` | 64px | Widest section padding |

**Gutter tokens:**
- `--outerGutter: 1.6rem` (16px, default / mobile)
- `--outerGutterMedium: 2.4rem` (24px, tablet)
- `--outerGutterLarge: 4.0rem` (40px, desktop)

### Grid & Container

- Column width scale: `--columnWidthSmall: 343px` / `Medium: 500px` / `Large: 720px` / `XLarge: 1440px`
- Product grid: 3–5-up responsive grid of `~343px` tiles
- Feature section: 3-up dark-brown panels at `lg+` breakpoints
- Hero: asymmetric split 40% (image) / 60% (content)

### Whitespace Philosophy

Section padding leans generous (40–64px). Content blocks are separated by whitespace rather than dividers. The cream canvas (`#EDE0C4`) is itself a visual breath between white cards and dark brown feature bands.

### Border Radius Scale

| Value | Use |
|-------|-----|
| `12px` | Cards, modals, product tiles |
| `12px 12px 0 0` | Full-width feedback tab (top-rounded only) |
| `50px` | All buttons — full-pill radius |
| `50%` | Circular icons, floating button, avatar thumbnails |

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Card | `0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)` | Default content cards |
| Global Nav | `0 1px 3px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)` | Fixed top bar |
| Floating CTA Base | `0 0 6px rgba(0,0,0,0.24)` | Base halo around floating circular CTA |
| Floating CTA Ambient | `0 8px 12px rgba(0,0,0,0.14)` | Stacked directional ambient — floats button forward |
| Product Card | Light drop shadow around photograph | Physical-card feel for product tiles |

**Shadow philosophy:** Whisper-soft, layered — never a single heavy drop shadow. Stack 2–3 low-alpha shadows with different offsets to simulate real-world ambient and direct lighting.

### Decorative Depth

- **No gradient system** — surfaces are solid color-block
- **Color-block banding** carries perceived depth (dark-brown bands read as "feature zones" between cream/white body sections)

---

## 7. Do's and Don'ts

### Do
- Use Alshami Cream (`#EDE0C4`) or Warm Ivory (`#E8D8B8`) as page canvas instead of pure white — the warm cream is the signature
- Map the brown tiers to their intended surface role — Alshami Brown for headings, Warm Brown for CTAs, Dark Espresso for deep bands
- Keep tracking tight at `-0.01em` / `-0.16px` across the whole system
- Use `50px` full-pill radius on every button without exception
- Apply `transform: scale(0.95)` as the universal button active state
- Layer 2–3 low-alpha shadows instead of one heavier drop shadow for elevation
- Let the cream canvas breathe between content cards — use whitespace, not dividers

### Don't
- Don't use pure white as the page canvas — the warm cream temperature is load-bearing
- Don't pick just "one brand brown" — the four-brown system is intentional; using only `#7B4020` everywhere flattens the brand
- Don't square the corners on buttons — the `50px` pill is universal
- Don't introduce gradient fills — the system is color-block throughout
- Don't weight-contrast h1 and h2 by size — the hierarchy comes from weight and color (600 Alshami Brown vs 400 Text Black)
- Don't use pure black for body text — `rgba(0,0,0,0.87)` matches the warm canvas
- Don't skip the `scale(0.95)` active feedback on buttons — it's a signature micro-interaction
- Don't stack single heavy shadows — always layer 2–3 low-alpha ones

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| xs | < 480px | Global nav 64px; hamburger menu; single-column layouts; pill buttons full-width |
| Mobile | 480–767px | Global nav 72px; product grid 2-up; card padding tightens |
| Tablet | 768–1023px | Global nav 83px; product grid 3-up; hero split begins to appear |
| Desktop | 1024–1439px | Global nav 99px; product grid 4-up; full asymmetric hero 40/60 |
| XLarge | 1440px+ | Content caps at max width; product grid 5-up; extra cream margin |

### Touch Targets

- Pill buttons at `7px 16px` padding — on mobile, button padding may be visually expanded to meet 44px WCAG minimum
- Floating circular button at `56px` is well above minimum
- Floating CTA uses `-0.8rem` touch offset to extend tap area 8px beyond visual edge

### Collapsing Strategy

- **Global nav height scales progressively**: 64 → 72 → 83 → 99px across breakpoints
- **Hero split collapses**: 40/60 asymmetric split → stacked (image top, content below) at mobile
- **Product grid**: 5-up → 4-up → 3-up → 2-up → 1-up across breakpoints
- **Feature bands**: Stay full-width but text and imagery stack vertically on mobile
- **Outer gutter scales**: 16px → 24px → 40px as viewport grows
- **3-column feature panels**: Stack to single column on mobile

---

## 9. Quick Reference for Claude Code

### Color Reference

| Element | Hex |
|---|---|
| Primary CTA background | `#B8763A` |
| Primary CTA text | `#FFFFFF` |
| Brand heading colour | `#7B4020` |
| Feature band / footer background | `#2C1A0F` |
| Page canvas | `#EDE0C4` |
| Card background | `#FFFFFF` |
| Section separator | `#E8D8B8` |
| Decorative dark accent | `#4A2010` |
| Form tint / light surface | `#F5EDD8` |
| Special body text | `#5C3A1E` |
| Dropdown / utility surface | `#F9F9F9` |
| Ivory accent wash | `#F9F3E8` |
| Light caramel | `#D4AA7D` |
| Primary heading text (light bg) | `rgba(0,0,0,0.87)` |
| Secondary text (light bg) | `rgba(0,0,0,0.58)` |
| Primary text (dark bg) | `rgba(255,255,255,1)` |
| Secondary text (dark bg) | `rgba(255,255,255,0.70)` |
| Error / destructive | `#C82014` |

### Example Component Prompts

1. **Primary CTA Button:** "Create a primary Alshami CTA pill button with Warm Brown (`#B8763A`) background, white text, Inter font at 16px weight 600 with `-0.01em` letter-spacing, `50px` border-radius (full pill), `7px 16px` padding. Apply `transform: scale(0.95)` as the active state with a `0.2s ease` transition."

2. **Content Card:** "Design a content card with White (`#FFFFFF`) background at `12px` border-radius, layered shadow `0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)`. Pad contents `16–24px`. Place on an Alshami Cream (`#EDE0C4`) page canvas with `16px` gap to siblings."

3. **Feature Band:** "Build a dark-brown feature band — full-width section with Dark Espresso (`#2C1A0F`) background. Left column: white Inter h2 at 24px weight 600, followed by a Text White Soft (`rgba(255,255,255,0.70)`) body paragraph and a CTA row with two buttons (White-filled with Warm Brown text for primary, Outlined-on-Dark white border for secondary). Right column: product photography. Split ratio 40/60, stacked vertically below 768px."

4. **Product Card:** "Design a product tile — `12px` border-radius, product photography fills the top 60% of the card, product name in Inter 16/600 Alshami Brown (`#7B4020`) below, short description in 14/400 Text Black Soft, and an outlined caramel pill button at the bottom. Card background White (`#FFFFFF`), placed on Alshami Cream (`#EDE0C4`) canvas. Layered shadow `0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)`."

5. **Dark Feature Panel (3-up grid):** "Create a feature panel — Dark Espresso (`#2C1A0F`) panel with `12px` border-radius, caramel (`#B8763A`) accent top stripe. Title in Inter 24px weight 600 in white. Description list in white with `rgba(255,255,255,0.70)` secondary captions. Stack 3 panels in a grid at `lg+`, single column on mobile."

6. **Page Section:** "Build a full page section on Alshami Cream (`#EDE0C4`) canvas. Section heading in Alshami Brown (`#7B4020`) Inter 24px weight 600. Body paragraph in Text Black (`rgba(0,0,0,0.87)`) 16px/400/1.5. Below, a 3-up grid of White (`#FFFFFF`) content cards at `12px` radius with layered whisper shadows. `40px` vertical padding above and below the section."

### Iteration Guide

When refining screens built with this design system:
1. Focus on ONE component at a time
2. Reference specific color names and hex codes from this document
3. Preserve the `50px` pill + `scale(0.95)` active state universally
4. Check that browns are mapped to their correct role (Warm Brown for CTAs, Alshami Brown for headings, Dark Espresso for bands)
5. Never introduce gradients — the system is color-block
6. Keep Inter tracking at `-0.01em` / `-0.16px` across the board
7. Always use Alshami Cream (`#EDE0C4`) as the page canvas, never pure white
