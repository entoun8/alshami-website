## ADDED Requirements

### Requirement: Social connect band replaces plain follow-us row
The social section in `contact-details.tsx` SHALL render as a full-width Dark Espresso (`bg-dark-espresso`) feature band. It MUST NOT use the warm-ivory background or plain pill buttons from the previous implementation.

#### Scenario: Band renders with dark background
- **WHEN** the Contact page loads
- **THEN** the social section has a `bg-dark-espresso` background that spans the full container width

### Requirement: Each social platform renders as a card
Each social platform (Instagram, Facebook) SHALL be rendered as a card inside the dark band. Each card MUST contain:
1. An inline SVG icon for the platform
2. The platform name as a heading
3. A short CTA label (e.g. "Follow on Instagram")
4. A visible hover interaction (scale or opacity transition)

#### Scenario: Instagram card renders correctly
- **WHEN** the social connect band is visible
- **THEN** an Instagram card is present with an Instagram SVG icon, the text "Instagram", and a CTA label

#### Scenario: Facebook card renders correctly
- **WHEN** the social connect band is visible
- **THEN** a Facebook card is present with a Facebook SVG icon, the text "Facebook", and a CTA label

#### Scenario: Card links open in a new tab
- **WHEN** a user clicks any social card
- **THEN** the corresponding social profile URL opens in a new browser tab with `rel="noopener noreferrer"`

### Requirement: Staggered entrance animation
The social cards SHALL animate in using Framer Motion's `whileInView` with a staggered delay so each card reveals sequentially.

#### Scenario: Cards animate on scroll into view
- **WHEN** the user scrolls the social connect band into the viewport
- **THEN** each card fades up from below (`opacity: 0, y: 32` → `opacity: 1, y: 0`) with a 0.1s stagger between cards, triggering only once

### Requirement: No inline styles
The entire `contact-details.tsx` file SHALL use only Tailwind utility classes for styling. The `style={{...}}` prop MUST NOT appear anywhere in the file.

#### Scenario: Contact methods shadow uses Tailwind
- **WHEN** the contact methods grid renders
- **THEN** card shadows are applied via a Tailwind utility class or arbitrary value, not a `style` prop

### Requirement: Section heading in white on dark band
The social section heading SHALL be white text on the dark band, consistent with the site's feature band pattern.

#### Scenario: Heading color on dark band
- **WHEN** the social connect band renders
- **THEN** the section heading uses `text-text-white` (or `text-white`) on the `bg-dark-espresso` background
