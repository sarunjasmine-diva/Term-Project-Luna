---
name: Heritage Retail & Department Store
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#5d3f3c'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#916f6b'
  outline-variant: '#e6bdb8'
  surface-tint: '#c00017'
  primary: '#b00014'
  on-primary: '#ffffff'
  primary-container: '#d91b24'
  on-primary-container: '#ffefed'
  inverse-primary: '#ffb3ac'
  secondary: '#575e70'
  on-secondary: '#ffffff'
  secondary-container: '#d9dff5'
  on-secondary-container: '#5c6274'
  tertiary: '#4d5765'
  on-tertiary: '#ffffff'
  tertiary-container: '#656f7e'
  on-tertiary-container: '#ecf2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#93000f'
  secondary-fixed: '#dce2f7'
  secondary-fixed-dim: '#c0c6db'
  on-secondary-fixed: '#141b2b'
  on-secondary-fixed-variant: '#404758'
  tertiary-fixed: '#d9e3f4'
  tertiary-fixed-dim: '#bdc7d8'
  on-tertiary-fixed: '#121c28'
  on-tertiary-fixed-variant: '#3e4755'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: '0'
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  nav-utility:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 3rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the understated luxury, hospitality (*omotenashi*), and editorial precision of a prestigious Japanese department store. The brand narrative marries centuries of heritage with modern, frictionless retail accessibility. It is disciplined, dignified, and structured, deliberately resisting hyper-trendy visual noise in favor of lasting prestige.

The style philosophy is **Minimalist Editorial with Architectural Rigor**:
- **Pristine Canvas:** Predominantly white and subtle off-white backgrounds allow photography, merchandise, and card offerings to command full attention.
- **Iconic Vermilion Accent:** The vivid crimson/vermilion serves as a commanding focal signature, reserved strictly for primary actions, active state tabs, and brand highlights.
- **Architectural Borders & Structure:** Subtle slate borders construct a neat, grid-based feeling reminiscent of Japanese shoji partitioning, creating clear categorization and effortless scanning for informational tables and accordions.
- **Emotional Resonance:** Visitors feel calm confidence, trust, and premium hospitality through balanced proportions and uncluttered white space.

## Colors

The palette balances classic department store vermilion against high-contrast charcoal and quiet architectural greys.

- **Primary (`#D91B24` / `#C41230`):** The signature vermilion red. Used purposefully for active navigational tabs, primary buttons, promotional labels, and essential brand identifiers. It carries high contrast against light surfaces.
- **Secondary (`#111827`):** Deep ink charcoal. Used for primary typography, dominant header text, and assertive secondary controls (such as card update buttons).
- **Tertiary (`#4B5563`):** Neutral slate grey for secondary metadata, breadcrumbs, supporting notes, and inactive chevron indicators.
- **Neutral / Canvas:**
  - Base canvas: `#FFFFFF` for primary cards, tables, and modal components.
  - Page surface: `#F9FAFB` to soften large canvas areas without adding chromatic distraction.
  - Border slate: `#E5E7EB` for hairline card boundaries, table cell dividers, and accordion borders.
  - Deep Footer / Grounding Neutral (`#111111`): Grounded charcoal black providing visual weight at the foundation of pages.

## Typography

The type system pairs **Noto Serif** for prestige display touchpoints with **Inter** for clean, legible utility.

- **Editorial Headings:** Page titles, card programme labels, and section anchors employ `Noto Serif`. Its classical proportions evoke traditional print catalogs and editorial grace.
- **Functional Body & Labels:** `Inter` handles complex tables, card terms, FAQ accordions, and global navigation. Letter-spacing is slightly loosened on uppercase category labels and navigation tokens (`nav-utility`, `headline-sm`) to ensure rapid recognition.
- **Hierarchy Rules:** Section headers inside tables and card listings retain crisp weight (`600`/`700`) in smaller point sizes to maximize vertical density without sacrificing legibility.

## Layout & Spacing

The layout operates on a disciplined 12-column grid anchored by a maximum desktop container width of 1280px.

- **Rhythm & Structure:** Horizontal and vertical spacing follow a strict 4px / 8px scale. Generous outer margins on desktop (`3rem`) create a calm, gallery-like framing.
- **Breakpoints:**
  - **Desktop (1024px+):** 12 columns, 24px gutters. Tables and comparison matrix layouts present all products side-by-side with locked alignment.
  - **Tablet (768px – 1023px):** 8 columns, 16px gutters. Comparison tables become horizontally swipeable with sticky left-most header rows.
  - **Mobile (< 768px):** 4 columns, 12px gutters, 16px page margins. Multi-column tabs transform into segmented full-width controls; comparison cards stack into individual accordion-style summaries.
- **Density Philosophy:** High information density within data matrices (card tiers, eligibility rules, bonus point thresholds) balanced by open breathing room between narrative sections.

## Elevation & Depth

Visual hierarchy in this system relies on **structural borders and tonal surfaces** rather than dramatic shadow elevation. This reflects Japanese architectural principles where structural lines delineate boundaries cleanly.

- **Level 0 (Base Canvas):** Background surfaces sit at `#F9FAFB` or crisp `#FFFFFF` with no shadow.
- **Level 1 (Cards & Accordions):** Elevated solely through a `1px solid #E5E7EB` border. Minimal hairline separation maintains crispness across bright department store displays.
- **Level 2 (Sticky Utility Navigation & Overlays):** Sticky top banners and floating navigation bars utilize a subtle ambient shadow: `0 2px 8px rgba(0, 0, 0, 0.06)`, grounding the element against scrolling content.
- **Active State Highlights:** Selected states in tables and tab groups use the vermilion stroke or solid color fill, never drop shadows.

## Shapes

This design system deliberately employs **sharp, 0px border-radii** across cards, tabs, buttons, inputs, and comparison tables.

- **Sharp Geometry (`0`):** Unrounded rectangles project discipline, traditional craftsmanship, and architectural stability.
- **Cohesive Alignment:** Flat edges allow comparison table cells, tab segments, and interactive accordion panels to abut cleanly without awkward gap intersections.
- **Subtle Exceptions:** Tiny navigational badges or circular brand seals (e.g., store mark icons) are 50% circular, providing precise contrast against the pure rectangular grid.

## Components

### Buttons
- **Primary:** Solid vermilion (`#D91B24`) background, `#FFFFFF` text, `0px` radius, uppercase tracking. Hover state shifts to deeper crimson (`#C41230`).
- **Secondary / Action:** Solid charcoal (`#374151` / `#1F2937`) background, `#FFFFFF` text, flat edges. Used for administrative tasks such as "UPDATE".
- **Outline:** Transparent background, `1px solid #111827`, dark charcoal text.

### Segmented Tabs
- Container framed in `1px solid #E5E7EB`.
- Active tab features solid vermilion background (`#D91B24`) with white typography.
- Inactive tabs feature crisp white background with `#111827` typography, separated by vertical `1px #E5E7EB` borders.

### Comparison Table Cards
- Outermost frame outlined in `1px solid #E5E7EB`.
- Header row contains card imagery, card tier nomenclature, and direct CTA buttons stacked vertically within each column.
- Alternating or hairline-divided criteria rows (Eligibility, Department Store Spend, Bonus Points, Redemption) using light grey borders (`#E5E7EB`) and `#1A1A1A` body text for instantaneous side-by-side scanning.

### Accordions (FAQ & Expandable Details)
- Full-width white panels bordered by `1px solid #E5E7EB`.
- Collapsed header: Bold font (`14px`, `600`), charcoal `#1A1A1A`, paired with a thin, refined slate chevron icon (`#9CA3AF`) on the far right.
- Expanded state: Subtle highlight or divider line separating title from expanded explanation text; chevron rotates 180 degrees smoothly.

### Inputs & Form Fields
- Crisp rectangular inputs with `1px solid #D1D5DB` borders, `8px 12px` inner padding.
- Focus state switches border to vermilion `#D91B24` with zero outer glow.

### Sticky Utility Navigation
- Fixed top bar containing department shortcuts (Store Information, Luxury, Beauty, Fashion, Living, Promotions).
- High-contrast white background with `1px solid #E5E7EB` bottom border and high-clarity search/bag icons in `#111827`.

### Deep Charcoal Footer
- Solid `#111111` ground surface spanning 100% viewport width.
- Multi-column link layout: Section headings in `#FFFFFF` (`12px`, uppercase), navigational links in `#9CA3AF` with hover transition to `#FFFFFF`.
- Clean social icons and international app store badges aligned to the bottom grid.