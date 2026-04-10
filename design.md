```markdown
# Design System Specification: Editorial Clinical Excellence

## 1. Overview & Creative North Star

### The Creative North Star: "Recally"

In the saturated market of healthcare SaaS, most platforms feel either overly sterile (utilitarian) or distractingly "tech-heavy." This design system adopts the persona of **Recally**. It is a system that prioritizes mental clarity, professional authority, and rhythmic whitespace.

We break the "template" look by moving away from rigid 1px borders and boxy containers. Instead, we use **Intentional Asymmetry** and **Tonal Depth**. By overlapping high-end device mockups with oversized, editorial typography and nested surfaces, we create a digital environment that feels more like a premium medical journal or a high-end fintech dashboard than a standard administrative tool.

---

## 2. Colors & Surface Philosophy

The palette is rooted in deep, authoritative tones contrasted against "air" (high-brightness neutrals).

### The "No-Line" Rule

**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or layout containment. Structural boundaries must be defined exclusively through:

1.  **Background Color Shifts:** Placing a `surface-container-low` element against a `surface` background.
2.  **Tonal Transitions:** Using whitespace and subtle shifts in value to imply edges.

### Surface Hierarchy & Nesting

Treat the UI as physical layers of fine stationery or frosted glass.

- **Base Layer:** `surface` (#f7f9fb) – The canvas.
- **Mid Layer:** `surface-container-low` (#f2f4f6) – For secondary groupings or sidebar backgrounds.
- **Highlight Layer:** `surface-container-lowest` (#ffffff) – Reserved for primary cards and interaction zones to create a "lifted" feel.
- **The Signature Gradient:** For primary CTAs and hero-level highlights, use a linear gradient: `primary` (#0058be) to `primary-container` (#2170e4) at a 135° angle. This adds "soul" and dimension to an otherwise flat digital space.

### Glassmorphism

Floating elements (modals, popovers, navigation bars) should utilize **Glassmorphism**. Apply the `surface` color at 80% opacity with a `20px` backdrop-blur. This ensures the UI feels integrated and high-end, allowing the "growth" colors to bleed through softly.

---

## 3. Typography

The typography system uses a dual-font approach to balance "High-End Editorial" with "Functional Precision."

- **Display & Headlines (Plus Jakarta Sans):** These are your "Brand Moments." Use `display-lg` and `headline-lg` with tight letter-spacing (-0.02em) to create an authoritative, cinematic feel. This font communicates growth and modernity.
- **UI & Body (Inter):** Inter is used for data density and operational clarity. Its high x-height ensures legibility in complex practice management views.
- **Labeling:** `label-sm` should be used sparingly for "Overline" text (all caps, +0.05em tracking) to categorize content without adding visual weight.

---

## 4. Elevation & Depth

We reject the "drop shadow" of 2015. Elevation is achieved through **Tonal Layering**.

- **The Layering Principle:** To lift a card, do not reach for a shadow first. Place a `surface-container-lowest` (#ffffff) card on a `surface-container` (#eceef0) background. The contrast provides the elevation.
- **Ambient Shadows:** When a float is required (e.g., a "Growth Metric" tooltip), use a "Long-Soft" shadow:
  - `Y: 20px, Blur: 40px, Color: on-surface (Alpha: 4%)`.
  - This mimics natural gallery lighting rather than digital "glow."
- **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., in a high-density data grid), use `outline-variant` at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Cards

- **Radius:** Minimum `xl` (1.5rem / 24px) for main containers; `lg` (1rem / 16px) for nested elements.
- **Styling:** No borders. Use `surface-container-lowest` for the card body.

### Buttons

- **Primary:** Gradient fill (`primary` to `primary-container`), white text, `full` (pill) radius.
- **Secondary:** `surface-container-high` background with `on-secondary-container` text.
- **Interaction:** On hover, increase the gradient saturation—never add a stroke.

### Input Fields

- **Style:** Minimalist. Use a `surface-container-low` fill.
- **Focus State:** Transition the background to `surface-container-lowest` and add a 2px `primary` bottom-bar transition. Avoid the "blue halo" default.

### Growth Metrics (Specialized Component)

- **The Recovery Sparkline:** Use `tertiary` (#006947) with a soft 10% opacity fill underneath the line to visualize growth.
- **Chips:** Use `tertiary-fixed` with `on-tertiary-fixed` text for "Positive/Growth" states.

### Lists & Data

- **Rule:** Forbid divider lines. Use `16px` of vertical whitespace to separate list items. For zebra-striping, use `surface-container-low` on even rows only.

---

## 6. Do's and Don'ts

### Do

- **Do** use expansive margins (minimum 48px between major sections).
- **Do** overlap elements. Let a device mockup partially bleed into the section above it to break the "grid-block" feel.
- **Do** use `headline-sm` for sub-headers to maintain a strong hierarchy.
- **Do** use "Optical Centering" for icons within circles—don't just trust the software's math.

### Don'ts

- **Don't** use pure black (#000000). Use `on-background` (#191c1e) for text to maintain a premium "ink on paper" feel.
- **Don't** use standard 4px or 8px border-radii. Anything under 12px feels "legacy" in this system.
- **Don't** use high-contrast dividers. If you can see the line from 5 feet away, it’s too dark.
- **Don't** crowd the data. If a practice manager is overwhelmed, the design has failed the "Recally" ethos.
```
