## ADDED Requirements

### Requirement: Al-Attar Herbs page presents brand history and key facts
The Al-Attar Herbs page SHALL include a hero/header section for the brand, followed by brand history content: founded in Damascus in 1990, over 35 years of expertise, pioneering herbal pharmaceutical company in the Arab world, products developed in specialised research laboratories, 100% natural with no artificial colours, preservatives, or chemical stimulants, allergen-free, products in individually wrapped tea bags.

#### Scenario: Brand history is visible
- **WHEN** a user visits the Al-Attar Herbs page
- **THEN** they can read the brand history, founding year, and key differentiators

### Requirement: Al-Attar Herbs page displays all 4 products in a grid
The page SHALL display all 4 Al-Attar products in a responsive product grid: Zhourat Shamia, Chamomile, Aniseed and Fennel, and Cumin and Lemon. Each product card SHALL include the product name, a short description, and a product image from `media/images/`. Grid SHALL be 2-up on mobile, 2–3-up on tablet, and 4-up on desktop.

#### Scenario: All 4 products are shown
- **WHEN** a user views the Al-Attar Herbs page
- **THEN** all 4 product cards are visible in a responsive grid

#### Scenario: Product cards display correct information
- **WHEN** a user views a product card
- **THEN** the card shows the product name, description, and an image

### Requirement: Product grid animates on scroll
Product cards SHALL stagger-animate into view as the grid enters the viewport using Framer Motion `whileInView`.

#### Scenario: Cards stagger on scroll
- **WHEN** the product grid scrolls into view
- **THEN** cards animate in with a staggered delay

### Requirement: Al-Attar Herbs page has SEO metadata
The page SHALL export a `metadata` object with a title and description specific to Al-Attar Herbs.

#### Scenario: Metadata is present
- **WHEN** the Al-Attar Herbs page is rendered
- **THEN** the title and description reference the Al-Attar Herbs brand

### Requirement: Al-Attar Herbs page is a server component
The page (`app/al-attar-herbs/page.tsx`) SHALL be a React Server Component.

#### Scenario: Page renders as server component
- **WHEN** the page is requested
- **THEN** server renders full HTML; client components handle animation only
