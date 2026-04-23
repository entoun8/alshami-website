## ADDED Requirements

### Requirement: Global navigation bar renders on every page
The system SHALL render a fixed top navigation bar on every page with the Alshami logo on the left, page links in the center/right, and a height that scales progressively: 64px (xs) → 72px (mobile) → 83px (tablet) → 99px (desktop). Background SHALL be `#FFFFFF` with a layered shadow stack.

#### Scenario: Nav appears on all pages
- **WHEN** a user visits any page on the site
- **THEN** the navigation bar is visible at the top with logo and links

#### Scenario: Nav is fixed on scroll
- **WHEN** a user scrolls down the page
- **THEN** the navigation bar remains fixed at the top of the viewport

### Requirement: Navigation links to all 5 pages
The navigation SHALL include links to: Home, About Us, Alshami Coffee, Al-Attar Herbs, and Contact. All links SHALL use Next.js `<Link>` component.

#### Scenario: Links navigate to correct pages
- **WHEN** a user clicks any navigation link
- **THEN** the browser navigates to the corresponding page without a full page reload

### Requirement: Active link state
The navigation SHALL visually indicate the currently active page link using Alshami Brown (`#7B4020`) or Caramel (`#B8763A`) styling.

#### Scenario: Active page is highlighted
- **WHEN** a user is on a given page
- **THEN** the corresponding nav link is visually distinguished from inactive links

### Requirement: Responsive hamburger menu on mobile
Below the tablet breakpoint (768px), the navigation SHALL collapse to a hamburger icon. Clicking the icon SHALL open a drawer/overlay menu with all navigation links. The drawer SHALL use Framer Motion for open/close animation.

#### Scenario: Hamburger visible on mobile
- **WHEN** the viewport width is below 768px
- **THEN** the full nav links are hidden and a hamburger icon is shown

#### Scenario: Drawer opens on hamburger click
- **WHEN** a user taps the hamburger icon
- **THEN** a nav drawer slides in with all page links visible

#### Scenario: Drawer closes on link click
- **WHEN** a user taps a link inside the open drawer
- **THEN** the drawer closes and the browser navigates to the selected page
