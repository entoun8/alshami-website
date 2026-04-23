## ADDED Requirements

### Requirement: HerbsHistory paragraphs reveal with a staggered entrance
The two body paragraphs in the `HerbsHistory` section SHALL each be wrapped in their own `motion.div` with `whileInView` entrance animations. The second paragraph SHALL have a small stagger delay (0.15s) relative to the first. Both SHALL animate `opacity: 0 → 1` and `y: 32 → 0`.

#### Scenario: First paragraph animates on viewport entry
- **WHEN** the HerbsHistory section first scrolls into view
- **THEN** the first paragraph SHALL fade in and slide up from y=32 to y=0

#### Scenario: Second paragraph staggers after the first
- **WHEN** the HerbsHistory section first scrolls into view
- **THEN** the second paragraph SHALL begin its fade-in approximately 0.15s after the first

### Requirement: HerbsHistory fact cards animate individually with stagger
The four stat fact boxes in `HerbsHistory` SHALL animate individually using a Framer Motion stagger container pattern (`variants` with `staggerChildren`), matching the approach used in `CoffeeProducts` and `HerbsProducts`. Each card SHALL animate `opacity: 0 → 1` and `y: 40 → 0` with `once: true` on `viewport`.

#### Scenario: Fact cards stagger in on viewport entry
- **WHEN** the HerbsHistory fact grid scrolls into view for the first time
- **THEN** each of the four stat cards SHALL animate in sequence with a visible stagger delay between them

#### Scenario: Fact card animations do not repeat
- **WHEN** the user scrolls past the fact grid and back
- **THEN** the cards SHALL remain fully visible and SHALL NOT re-animate
