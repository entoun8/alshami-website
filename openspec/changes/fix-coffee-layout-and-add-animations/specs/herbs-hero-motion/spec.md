## ADDED Requirements

### Requirement: HerbsHero image has a scroll-aware entrance animation
The `HerbsHero` image container SHALL animate from a slightly scaled-down, transparent state to full opacity and scale when the page loads, matching the entrance animation pattern already used on the `CoffeeHero` image. The animation SHALL use Framer Motion's `animate` prop (page-load, not whileInView) with `opacity: 0 → 1` and `scale: 0.96 → 1`, with a short delay after the text animation.

#### Scenario: Image fades and scales in on page load
- **WHEN** the Al-Attar Herbs page loads
- **THEN** the hero image SHALL start at opacity 0 and scale 0.96 and animate to opacity 1 and scale 1 over ~0.8s with a 0.15s delay

#### Scenario: Animation plays only once
- **WHEN** the user navigates away and back to the Al-Attar Herbs page
- **THEN** the hero image entrance animation SHALL play again on each page load (consistent with the Coffee page behaviour)
