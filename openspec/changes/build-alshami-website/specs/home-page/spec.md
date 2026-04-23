## ADDED Requirements

### Requirement: Hero section with video background
The Home page SHALL include a full-viewport hero section with `media/videos/banner.mp4` playing as a looping, muted, autoplaying background video. A dark overlay SHALL be applied over the video for text legibility. Hero text SHALL include the Alshami brand name and a short tagline, revealed with Framer Motion stagger animation on page load.

#### Scenario: Video plays on load
- **WHEN** a user loads the Home page
- **THEN** the banner video plays automatically, muted, looping, in the hero background

#### Scenario: Hero text is readable
- **WHEN** the hero section is visible
- **THEN** the headline and tagline text are legible against the video background due to the dark overlay

#### Scenario: Hero text animates in
- **WHEN** the page first loads
- **THEN** hero text elements stagger-animate into view using Framer Motion

### Requirement: Brand introduction sections for both brands
The Home page SHALL include two brand introduction sections below the hero — one for Alshami Coffee and one for Al-Attar Herbs. Each section SHALL include a brand image, a short description, and a CTA button linking to the brand's dedicated page. Sections SHALL animate into view on scroll using Framer Motion `whileInView`.

#### Scenario: Alshami Coffee section visible
- **WHEN** a user scrolls to the Alshami Coffee section on the Home page
- **THEN** the section animates in and displays brand image, description, and a "Explore Alshami Coffee" CTA

#### Scenario: Al-Attar Herbs section visible
- **WHEN** a user scrolls to the Al-Attar Herbs section
- **THEN** the section animates in and displays brand image, description, and an "Explore Al-Attar Herbs" CTA

### Requirement: Home page has SEO metadata
The Home page SHALL export a `metadata` object with a unique title and description using the Next.js Metadata API.

#### Scenario: Metadata is present
- **WHEN** the Home page is rendered
- **THEN** the page `<title>` and meta description reflect the Alshami brand and business purpose

### Requirement: Home page is a server component
The Home page (`app/page.tsx`) SHALL be a React Server Component. Any animated sections SHALL be extracted into `"use client"` components.

#### Scenario: Page renders without client-side JS requirement
- **WHEN** the Home page is requested
- **THEN** the server renders the full page HTML without requiring client-side JavaScript for initial content
