## ADDED Requirements

### Requirement: Contact page displays all business contact details
The Contact page SHALL display the Alshami business contact information including: phone number, email address, WhatsApp contact link, and social media profile links. All contact methods SHALL be clearly labeled and presented in an accessible, easy-to-scan layout.

#### Scenario: All contact methods are visible
- **WHEN** a user visits the Contact page
- **THEN** they can see phone, email, WhatsApp, and social media links

### Requirement: Contact links are interactive
Phone numbers SHALL use `tel:` links, email addresses SHALL use `mailto:` links, and WhatsApp SHALL use the `https://wa.me/` deep link format. Social media links SHALL open in a new tab.

#### Scenario: Phone link opens dialer
- **WHEN** a user taps the phone number link on a mobile device
- **THEN** the device's phone dialer opens with the number pre-filled

#### Scenario: Email link opens mail client
- **WHEN** a user clicks the email link
- **THEN** the default mail client opens with the address pre-filled

#### Scenario: WhatsApp link opens WhatsApp
- **WHEN** a user clicks the WhatsApp link
- **THEN** WhatsApp opens (or the web version) with the Alshami contact pre-loaded

### Requirement: Contact page has SEO metadata
The Contact page SHALL export a `metadata` object with a unique title and description.

#### Scenario: Metadata is present
- **WHEN** the Contact page is rendered
- **THEN** the title and description are unique and indicate contact/reach information

### Requirement: Contact page is a server component
The Contact page (`app/contact/page.tsx`) SHALL be a React Server Component.

#### Scenario: Page renders as server component
- **WHEN** the Contact page is requested
- **THEN** the server renders the full page HTML
