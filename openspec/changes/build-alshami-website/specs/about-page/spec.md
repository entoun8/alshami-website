## ADDED Requirements

### Requirement: About page tells the Alshami business story
The About Us page SHALL present the story of Alshami — an Australian business that imports authentic Syrian brands from Damascus. Content SHALL include: who Alshami is, why it was founded, the Syrian heritage behind the two brands, and the mission of bringing authentic Syrian products to Australia.

#### Scenario: Story content is present
- **WHEN** a user visits the About Us page
- **THEN** they can read about the Alshami business, its Syrian heritage, and its mission

### Requirement: About page uses scroll-reveal animations
Sections on the About page SHALL animate into view as the user scrolls using Framer Motion `whileInView`.

#### Scenario: Sections animate on scroll
- **WHEN** a user scrolls through the About page
- **THEN** each content section fades or slides into view as it enters the viewport

### Requirement: About page has SEO metadata
The About Us page SHALL export a `metadata` object with a unique title and description.

#### Scenario: Metadata is present
- **WHEN** the About page is rendered
- **THEN** the page title and description are unique and descriptive of the Alshami story

### Requirement: About page is a server component
The About page (`app/about/page.tsx`) SHALL be a React Server Component. Animated sections SHALL be extracted into `"use client"` components.

#### Scenario: Page renders as server component
- **WHEN** the About page is requested
- **THEN** the server renders full page HTML; client components handle animation only
