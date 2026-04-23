## ADDED Requirements

### Requirement: Stat box layout does not overflow on large screens
The Coffee History and Herbs History stat boxes SHALL constrain their value text so it never visually touches or overflows the card border at any viewport size. Font size SHALL scale down at large breakpoints and `text-wrap: balance` SHALL be applied to allow graceful wrapping.

#### Scenario: Value text fits within card padding at xl viewport
- **WHEN** the viewport is ≥ 1280px wide
- **THEN** the "Arabica" and "Natural" stat values SHALL be fully contained within the card's padding with visible whitespace between the text and the card border

#### Scenario: Value text does not overflow card at md viewport
- **WHEN** the viewport is between 768px and 1279px wide
- **THEN** all stat value text SHALL remain within the card boundary without overflow

### Requirement: StatCountUp component animates numeric values on viewport entry
The system SHALL provide a `StatCountUp` client component that counts from 0 to a given numeric target value when the element first enters the viewport. The animation SHALL trigger once and SHALL NOT repeat on subsequent scroll events. Non-numeric stat values SHALL render as plain text using a standard `span` and SHALL NOT use `StatCountUp`.

#### Scenario: Numeric stat counts up on first scroll-into-view
- **WHEN** a stat box with a numeric value scrolls into the viewport for the first time
- **THEN** the displayed number SHALL animate from 0 to the target value over approximately 1.2–1.5 seconds with an ease-out curve

#### Scenario: Count-up does not repeat
- **WHEN** the user scrolls the stat section out of view and back in
- **THEN** the stat value SHALL remain at its final value and SHALL NOT restart the count

#### Scenario: Suffix is preserved during animation
- **WHEN** a stat value has a suffix such as "+" or "%"
- **THEN** the suffix SHALL be visible throughout the entire animation (e.g. "47+" not "47" then "+")

#### Scenario: String values render as plain text
- **WHEN** a stat entry has a non-numeric value such as "Arabica" or "Natural"
- **THEN** the value SHALL render as a static `span` with no animation
