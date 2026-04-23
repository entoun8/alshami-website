## ADDED Requirements

### Requirement: Alshami Coffee page presents brand history and key facts
The Alshami Coffee page SHALL include a hero/header section for the brand, followed by brand history content: founded in Damascus in 1924, over 100 years of heritage, specialises in Turkish and Arabic coffee, uses premium Arabica beans with natural green cardamom, traditional and modern roasting techniques.

#### Scenario: Brand history is visible
- **WHEN** a user visits the Alshami Coffee page
- **THEN** they can read the brand history, founding year, and key differentiators

### Requirement: Alshami Coffee page displays all 6 products in a grid
The page SHALL display all 6 Alshami Coffee products in a responsive product grid: Extra Cardamom Blend (Blue), Extra Cardamom Blend (Gold), Plain Turkish Coffee, Mocha Blend, Instant Sachets, and Arabic Coffee Mix. Each product card SHALL include the product name, a short description, and a product image from `media/images/`. Product grid SHALL be 2-up on mobile, 3-up on tablet, and 3–4-up on desktop.

#### Scenario: All 6 products are shown
- **WHEN** a user views the Alshami Coffee page
- **THEN** all 6 product cards are visible in a responsive grid layout

#### Scenario: Product cards display correct information
- **WHEN** a user views a product card
- **THEN** the card shows the product name, description, and an image

### Requirement: Product grid animates on scroll
Product cards SHALL stagger-animate into view as the grid enters the viewport using Framer Motion `whileInView`.

#### Scenario: Cards stagger on scroll
- **WHEN** the product grid scrolls into view
- **THEN** cards animate in with a staggered delay

### Requirement: Alshami Coffee page has SEO metadata
The page SHALL export a `metadata` object with a title and description specific to Alshami Coffee.

#### Scenario: Metadata is present
- **WHEN** the Alshami Coffee page is rendered
- **THEN** the title and description reference the Alshami Coffee brand

### Requirement: Alshami Coffee page is a server component
The page (`app/alshami-coffee/page.tsx`) SHALL be a React Server Component.

#### Scenario: Page renders as server component
- **WHEN** the page is requested
- **THEN** server renders full HTML; client components handle animation only
