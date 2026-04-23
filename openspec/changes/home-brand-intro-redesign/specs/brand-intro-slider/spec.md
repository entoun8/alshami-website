## ADDED Requirements

### Requirement: Split-panel brand slides
The `BrandIntroSlider` component SHALL render each brand as a full-viewport-height slide composed of two equal-width (50%) panels side by side. The left panel and right panel SHALL animate in from opposing vertical directions when the slide becomes active: the left panel SHALL enter from below (`translateY(100%)` → `translateY(0%)`) and the right panel SHALL enter from above (`translateY(-100%)` → `translateY(0%)`). When the slide is inactive, panels SHALL return to their respective off-screen positions. Each slide SHALL alternate which side holds the image versus the text panel (brand 1: image left / text right; brand 2: text left / image right).

#### Scenario: First brand slide activates
- **WHEN** the slider mounts and the active index is 0
- **THEN** the left image panel SHALL be at `translateY(0%)` and the right text panel SHALL be at `translateY(0%)`, both fully visible

#### Scenario: Transitioning to next slide
- **WHEN** the user scrolls down or presses ArrowDown while on slide 0
- **THEN** slide 0 panels SHALL animate to their off-screen positions and slide 1 panels SHALL animate in from their respective opposing-direction off-screen positions over 700ms

#### Scenario: Alternating panel sides
- **WHEN** slide index is even (0, 2, …)
- **THEN** the image panel SHALL occupy the left half and the text panel SHALL occupy the right half

#### Scenario: Alternating panel sides — odd slides
- **WHEN** slide index is odd (1, 3, …)
- **THEN** the text panel SHALL occupy the left half and the image panel SHALL occupy the right half

---

### Requirement: Scroll capture and release
The component SHALL intercept `wheel` events while the user is between the first and last slide, preventing default page scroll and advancing the active slide index. Once the user reaches the last slide and scrolls down, the component SHALL release scroll control so the rest of the page scrolls normally. Scrolling up from the first slide SHALL also release control upward.

#### Scenario: Wheel scroll advances slide
- **WHEN** user scrolls down (positive `deltaY`) while the active slide is not the last
- **THEN** the active slide SHALL increment by 1 and the wheel event SHALL be prevented from scrolling the page

#### Scenario: Scroll exits at last slide
- **WHEN** user scrolls down while the active slide is already the last slide
- **THEN** the component SHALL NOT intercept the event and the page SHALL scroll normally downward

#### Scenario: Scroll exits at first slide
- **WHEN** user scrolls up while the active slide is already the first slide
- **THEN** the component SHALL NOT intercept the event and the page SHALL scroll normally upward

#### Scenario: Navigation debounce
- **WHEN** a slide transition has started
- **THEN** subsequent scroll or key events SHALL be ignored until the transition completes (700ms lock)

---

### Requirement: Keyboard navigation
The component SHALL listen for `ArrowDown` and `ArrowUp` keyboard events and advance or retreat the active slide with the same 700ms debounce used for wheel navigation.

#### Scenario: ArrowDown advances slide
- **WHEN** user presses ArrowDown and the active slide is not the last
- **THEN** the active slide SHALL increment by 1

#### Scenario: ArrowUp retreats slide
- **WHEN** user presses ArrowUp and the active slide is not the first
- **THEN** the active slide SHALL decrement by 1

---

### Requirement: Alshami design system styling
All visual styling in `BrandIntroSlider` SHALL use exclusively the Alshami design-system tokens defined in `globals.css`. No inline hex values or external color references are permitted.

#### Scenario: Text panel background
- **WHEN** the text panel renders
- **THEN** its background SHALL be `var(--alshami-cream)` (`#EDE0C4`)

#### Scenario: Heading color
- **WHEN** a brand heading renders in the text panel
- **THEN** it SHALL use `text-alshami-brown` (`#7B4020`)

#### Scenario: CTA button
- **WHEN** the CTA button renders
- **THEN** it SHALL be a full-pill (`border-radius: 50px`) caramel-filled (`bg-caramel`) white-text button with `transform: scale(0.95)` active state

#### Scenario: Typography
- **WHEN** any text renders in the slider
- **THEN** the font family SHALL be Inter with letter-spacing `-0.01em`

---

### Requirement: Responsive mobile collapse
Below the `md` breakpoint (768px), the component SHALL render all brands as a standard stacked layout (image above, text below per brand) without scroll capture, matching the visual hierarchy of the existing `BrandIntro` cards.

#### Scenario: Mobile layout
- **WHEN** viewport width is below 768px
- **THEN** each brand SHALL display as a vertically stacked block (image top, text bottom) and the scroll-capture listeners SHALL NOT be attached

#### Scenario: Desktop layout
- **WHEN** viewport width is 768px or above
- **THEN** the full split-panel slider SHALL render with scroll capture active
