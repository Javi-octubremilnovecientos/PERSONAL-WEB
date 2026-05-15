---
name: Core-Kernel Brutalist
colors:
  surface: '#fbf9f2'
  surface-dim: '#dbdad3'
  surface-bright: '#fbf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ed'
  surface-container: '#efeee7'
  surface-container-high: '#e9e8e1'
  surface-container-highest: '#e3e3dc'
  on-surface: '#1b1c18'
  on-surface-variant: '#4c4546'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f2f1ea'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#a73a00'
  on-secondary: '#ffffff'
  secondary-container: '#fd651e'
  on-secondary-container: '#571a00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb599'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#7f2b00'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#fbf9f2'
  on-background: '#1b1c18'
  surface-variant: '#e3e3dc'
  terminal-black: '#000000'
  infrastructure-orange: '#EA580C'
  paper-off-white: '#F2F1EA'
  grid-line: '#D1D0C8'
typography:
  display-lg:
    fontFamily: JetBrains Mono
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 80px
---

## Brand & Style
This design system embodies a **High-Tech Brutalist** aesthetic, tailored for high-performance infrastructure and developer-centric tooling. The brand personality is raw, transparent, and unapologetically technical. It avoids decorative fluff in favor of structural integrity and data density.

The visual language is inspired by terminal interfaces, mainframe readouts, and architectural blueprints. It uses heavy borders, monospaced typography, and a "system-first" hierarchy to evoke feelings of absolute control, low-latency performance, and industrial-grade reliability. The emotional response should be one of professional competence and technical depth.

## Colors
The palette is strictly monochromatic with a single high-visibility functional accent. 

- **Primary (Terminal Black):** Used for all structural borders, primary text, and high-contrast containers. It represents the "ink" on the page.
- **Secondary (Infrastructure Orange):** Reserved for critical actions, status indicators, and highlights. It acts as a visual "alert" or "active" state.
- **Neutral (Paper Off-White):** The base surface color. It provides a non-clinical, hardware-manual feel that reduces eye strain compared to pure white.
- **Background Dots:** Use `#D1D0C8` for the global background grid pattern to maintain the "blueprint" feel without distracting from content.

## Typography
The system uses **JetBrains Mono** exclusively to maintain a cohesive "IDE" feel. 

- **Display & Headlines:** Use uppercase for major section headings to reinforce the brutalist tone. High-impact numbers and metrics should be set in `display-lg` to emphasize data.
- **Body Text:** Keep line lengths controlled. Use `body-md` for technical descriptions.
- **Labels:** Meta-information (like timestamps, file paths, or coordinates) should use `label-caps` in all-caps with generous letter spacing to distinguish from prose.
- **Technicality:** Where possible, include "fake" system metadata (e.g., `REF_ID: 008`) in labels to enhance the high-tech atmosphere.

## Layout & Spacing
The layout is governed by a strict **12-column fixed-width grid** on desktop and a **single-column fluid grid** on mobile.

- **Grid Alignment:** All elements must snap to a 4px baseline grid. Borders of adjacent components should often overlap to create a "connected circuitry" look.
- **Margins & Gutters:** Use a 16px gutter. Desktop margins are generous (48px+) to allow the content to breathe against the background dot-grid.
- **Borders as Spacing:** Vertical and horizontal lines are used to separate sections rather than whitespace alone. Use `1px solid #000000` for these dividers.
- **The "Terminal" Block:** Large containers should feel like discrete modules, often utilizing a header bar for title/metadata.

## Elevation & Depth
This system rejects shadows in favor of **Layered Flatness** and **High-Contrast Outlines**.

- **Tonal Layers:** Depth is created by switching background colors (e.g., a Black container on a Paper background).
- **Outlines:** Every component (cards, inputs, buttons) is defined by a 1px or 2px solid black border. 
- **Inversion:** Use color inversion for "elevated" or "active" states. For example, a "Recommended" card might have a black background with white/orange text, while standard cards are paper-colored with black text.
- **Dithering:** For imagery or complex visual depth, use bitmapped/dithered effects instead of blurs or gradients to maintain the technical hardware aesthetic.

## Shapes
The shape language is strictly **Sharp (0px)**. 

No rounded corners are permitted. All containers, buttons, and inputs must have 90-degree angles. This reinforces the industrial, uncompromising nature of the brand. Small "notches" or "chamfered" corners can be used sparingly for specialized UI elements like status badges or tabs to suggest machined parts.

## Components
- **Buttons:** Rectangular with 2px borders. Primary buttons use a small orange square prefix followed by a black background with white/orange text. Hover states should simply invert colors or shift the orange accent.
- **Cards/Modules:** Must include a "Header" strip containing a title (e.g., `TERMINAL.SYS`) and often a version number or coordinate in the top right.
- **Input Fields:** 1px black border. The cursor should be a solid orange block, mimicking a terminal prompt.
- **Status Indicators:** Small solid orange squares (`#EA580C`) for "Active" and empty squares for "Inactive."
- **Data Tables:** Minimalist with horizontal dividers only. Column headers in `label-caps`.
- **Dashed Lines:** Use dashed 1px lines for "secondary" connections or optional data paths to distinguish from primary structural borders.