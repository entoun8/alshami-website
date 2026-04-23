## Why

On large screens the "Arabica" and "Natural" text values inside the Coffee History stat boxes overflow their padding, making the layout feel cramped and unprofessional. Additionally, both the Coffee and Al-Attar Herbs pages are missing motion polish — the numeric stat boxes have no counting animation and several sections of the Al-Attar page lack scroll-triggered motion that the Coffee page already partially has.

## What Changes

- Fix the Coffee History stat box layout so "Arabica" and "Natural" values never touch or overflow the card border at any screen size
- Add a count-up animation to every numeric stat value in `CoffeeHistory` and `HerbsHistory` (e.g. 1924, 100, 35, 100, 0) that triggers once when the section scrolls into view
- Add scroll-triggered `whileInView` animations to the `HerbsHistory` section — stagger the two paragraphs and individually animate each fact box card as it enters the viewport
- Add a subtle entrance animation to the `HerbsHero` image that mirrors the one already on the `CoffeeHero` image

## Capabilities

### New Capabilities
- `stat-count-up`: Reusable animated counter component that counts from 0 to a target numeric value with a configurable suffix (e.g. "+", "%") and triggers once on viewport entry
- `herbs-hero-motion`: Scroll-aware entrance animation on the Al-Attar hero image
- `herbs-history-motion`: Staggered paragraph reveals and individually animated fact box cards in `HerbsHistory`

### Modified Capabilities
- None

## Impact

- `components/alshami-coffee/coffee-history.tsx` — stat box text sizing and layout fix; integrate `StatCountUp`
- `components/al-attar-herbs/herbs-history.tsx` — paragraph stagger + individual card animations; integrate `StatCountUp`
- `components/al-attar-herbs/herbs-hero.tsx` — add image entrance animation
- New shared component `components/stat-count-up.tsx` — animated counter, client component
