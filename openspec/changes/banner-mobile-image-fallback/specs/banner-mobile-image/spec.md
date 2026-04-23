## ADDED Requirements

### Requirement: Static image replaces video on small screens
On viewports narrower than the `md` breakpoint (< 768px), the hero banner background SHALL render a Next.js `<Image>` component instead of the autoplay video. The image SHALL cover the full banner area using `object-cover` and SHALL be positioned identically to the video (`absolute inset-0 w-full h-full`).

#### Scenario: Mobile visitor sees image not video
- **WHEN** a user views the home page on a screen narrower than 768px
- **THEN** the hero background displays a static full-screen image with no video element playing

#### Scenario: Desktop visitor sees video not image
- **WHEN** a user views the home page on a screen 768px wide or wider
- **THEN** the hero background displays the autoplay looping video and the image is not visible

### Requirement: Image covers the full banner area
The banner image SHALL fill the entire height and width of the hero section, matching the same dimensions and crop behaviour as the video it replaces.

#### Scenario: Image fills banner on portrait mobile
- **WHEN** the banner image is rendered on a tall narrow mobile viewport
- **THEN** the image covers the full section with no letterboxing or white gaps, cropping as needed via `object-cover`

### Requirement: Overlay and content are unaffected
The dark overlay (`bg-black/55`) and the animated headline/subtitle content SHALL remain visible and unchanged on both breakpoints.

#### Scenario: Text and overlay visible over image
- **WHEN** the hero renders on mobile with the image background
- **THEN** the dark overlay and Framer Motion text animations are displayed on top of the image, same as on desktop
