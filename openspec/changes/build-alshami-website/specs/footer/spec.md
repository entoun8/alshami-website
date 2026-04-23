## ADDED Requirements

### Requirement: Footer renders on every page with Dark Espresso background
The site SHALL include a shared footer component on every page with a Dark Espresso (`#2C1A0F`) background, white primary text, and `rgba(255,255,255,0.70)` secondary text. The footer SHALL be included in the root layout.

#### Scenario: Footer appears on all pages
- **WHEN** a user visits any page
- **THEN** a footer with the correct dark background and white text appears at the bottom

### Requirement: Footer includes navigation links
The footer SHALL include links to all 5 pages (Home, About Us, Alshami Coffee, Al-Attar Herbs, Contact) using Next.js `<Link>` component.

#### Scenario: Footer links work
- **WHEN** a user clicks a footer link
- **THEN** the browser navigates to the corresponding page

### Requirement: Footer includes brand information
The footer SHALL display the Alshami brand name and a short tagline or copyright notice.

#### Scenario: Brand info is present
- **WHEN** a user views the footer
- **THEN** the Alshami name and copyright/tagline are visible

### Requirement: Footer is a server component
The footer component SHALL be a React Server Component with no client-side interactivity.

#### Scenario: Footer renders server-side
- **WHEN** any page is requested
- **THEN** the footer HTML is included in the server-rendered response
