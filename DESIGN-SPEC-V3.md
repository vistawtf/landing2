# Vista Website Design Specification V3
**Lead Designer Deliverable** | 2026-02-15  
**Status:** Ready for PO Review

---

## 1. Design Philosophy

This spec draws from three wells:
- **Stripe**: Scroll animations, card interactions, stats presentation, color blocking
- **Are.na**: Radical whitespace, typography-first hierarchy, visible philosophy
- **Works in Progress**: Bordered article grids, tags, editorial layout

Every decision below was made from a blank canvas. No reference to prior Vista code.

---

## 2. Typography Scale

**Font:** Geist Sans (all weights), Geist Mono (code/stats only)

| Token         | Size            | Weight | Line-Height | Letter-Spacing | Usage                     |
|---------------|-----------------|--------|-------------|----------------|---------------------------|
| `display`     | 4.5rem (72px)   | 600    | 1.08        | -0.025em       | Hero headline             |
| `h1`          | 3rem (48px)     | 600    | 1.12        | -0.02em        | Section titles            |
| `h2`          | 2rem (32px)     | 500    | 1.2         | -0.015em       | Card titles (featured)    |
| `h3`          | 1.375rem (22px) | 500    | 1.3         | -0.01em        | Card titles (grid)        |
| `body-lg`     | 1.25rem (20px)  | 400    | 1.7         | 0              | Hero tagline, intros      |
| `body`        | 1.125rem (18px) | 400    | 1.7         | 0              | Body text, descriptions   |
| `caption`     | 0.875rem (14px) | 500    | 1.5         | 0.02em         | Tags, badges, dates       |
| `overline`    | 0.75rem (12px)  | 600    | 1.4         | 0.08em         | Section labels, uppercase |

**Mobile overrides (<640px):**
- `display` → 2.75rem (44px)
- `h1` → 2.25rem (36px)
- `h2` → 1.5rem (24px)
- `body-lg` → 1.125rem (18px)

---

## 3. Color System

### Core Palette

| Token               | Value                         | Usage                                          |
|----------------------|-------------------------------|-------------------------------------------------|
| `--accent`           | `#FF5233`                     | CTAs, logo stars, hover borders, links          |
| `--accent-hover`     | `#E8452B`                     | Button hover (8% darker)                        |
| `--accent-muted`     | `rgba(255, 82, 51, 0.08)`    | Tag backgrounds, subtle highlights              |
| `--bg`               | `#FAFAFA` / dark: `#0A0A0A`  | Page background                                 |
| `--bg-elevated`      | `#FFFFFF` / dark: `#141414`  | Card surfaces                                   |
| `--bg-invert`        | `#111111` / dark: `#F5F5F5`  | Newsletter section background                   |
| `--fg`               | `#111111` / dark: `#EDEDED`  | Primary text                                    |
| `--fg-muted`         | `#666666` / dark: `#999999`  | Secondary text, excerpts                        |
| `--fg-invert`        | `#EDEDED` / dark: `#111111`  | Text on inverted backgrounds                    |
| `--border`           | `rgba(0,0,0,0.08)` / dark: `rgba(255,255,255,0.08)` | Card borders, dividers |
| `--border-hover`     | `#FF5233`                     | Card hover state border                         |

### Usage Rules
- `#FF5233` is reserved for: primary buttons, logo stars ₊˚⊹, hover borders, text links, the Subscribe CTA
- Never use `#FF5233` as large background fills (except newsletter CTA button)
- Dark mode transitions: `transition: background-color 200ms ease, color 200ms ease`

---

## 4. Spacing System

**Base unit:** 8px

| Token   | Value    | Usage                                    |
|---------|----------|------------------------------------------|
| `xs`    | 4px      | Star spacing from "vista" text           |
| `sm`    | 8px      | Tight internal gaps                      |
| `md`    | 16px     | Grid gaps, card internal padding-x       |
| `lg`    | 24px     | Card padding, component gaps             |
| `xl`    | 32px     | Between related components               |
| `2xl`   | 48px     | Between subsections                      |
| `3xl`   | 80px     | Between major sections (mobile)          |
| `4xl`   | 120px    | Between major sections (desktop)         |

**Container:**
- Max-width: `1200px`
- Padding: `24px` (mobile), `48px` (tablet), `64px` (desktop)
- Centered with `margin: 0 auto`

---

## 5. Component Specifications

### 5.1 Buttons

**Primary Button**
```
Background: #FF5233
Color: #FFFFFF
Font: 1rem (16px), weight 500
Padding: 14px 28px
Border-radius: 8px
Border: none
Cursor: pointer

Hover: background #E8452B, transform scale(1.02), box-shadow 0 4px 12px rgba(255,82,51,0.25)
Active: transform scale(0.98)
Focus: outline 2px solid #FF5233, outline-offset 2px
Transition: all 200ms ease
```

**Secondary Button (Ghost)**
```
Background: transparent
Color: var(--fg)
Font: 1rem (16px), weight 500
Padding: 14px 28px
Border-radius: 8px
Border: 1px solid var(--border)

Hover: border-color #FF5233, color #FF5233
Active: transform scale(0.98)
Focus: outline 2px solid #FF5233, outline-offset 2px
Transition: all 200ms ease
```

**Text Link Button**
```
Background: none
Color: var(--fg)
Font: 1rem (16px), weight 500
Padding: 0
Border: none
Display: inline-flex, align-items center, gap 6px

Hover: color #FF5233, gap 10px (arrow slides right)
Transition: all 200ms ease
Append: → character (arrow)
```

### 5.2 Cards

**Featured Article Card**
```
Layout: Flex column
Width: 100% of its container (50% of grid parent on desktop)
Min-height: 480px
Background: var(--bg-elevated)
Border: 1px solid var(--border)
Border-radius: 12px
Overflow: hidden
Position: relative

Image/Gradient area:
  Height: 55% of card
  Background: linear-gradient(135deg, #FF5233 0%, #FF7A5C 100%) [fallback]
  If image: object-fit cover

Content area:
  Padding: 28px
  Display: flex, flex-direction column, gap 12px

Badge "FEATURED":
  Position: absolute, top 20px, left 20px
  Background: #FF5233
  Color: white
  Font: caption (14px), weight 600, uppercase
  Padding: 4px 12px
  Border-radius: 4px

Category tag:
  Font: caption (14px), weight 500
  Color: var(--fg-muted)
  Text-transform: uppercase
  Letter-spacing: 0.05em

Title:
  Font: h2 (32px), weight 500
  Color: var(--fg)
  Max lines: 3 (clamp)

Excerpt:
  Font: body (18px), weight 400
  Color: var(--fg-muted)
  Max lines: 2 (clamp)

CTA: "READ MORE →" using Text Link Button style

Hover:
  transform: translateY(-3px)
  box-shadow: 0 8px 24px rgba(0,0,0,0.08)
  border-color: #FF5233
  Transition: all 300ms ease
```

**Grid Article Card**
```
Layout: Flex column
Width: 100% of grid cell
Min-height: 220px
Background: var(--bg-elevated)
Border: 1px solid var(--border)
Border-radius: 10px
Overflow: hidden

Image/Gradient area:
  Height: 120px
  Background: assorted gradients per category:
    AI → linear-gradient(135deg, #334155 0%, #1e293b 100%)
    DeFi → linear-gradient(135deg, #FF5233 0%, #FF7A5C 100%)
    L2/Infra → linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)
    General → linear-gradient(135deg, #6b7280 0%, #374151 100%)

Content area:
  Padding: 20px
  Display: flex, flex-direction column, gap 8px

Category tag: same as featured card
Title: h3 (22px), weight 500, max 2 lines
Date: caption (14px), var(--fg-muted)

Hover:
  transform: translateY(-2px)
  box-shadow: 0 4px 16px rgba(0,0,0,0.06)
  border-color: #FF5233
  Transition: all 300ms ease
```

**Service Card**
```
Layout: Flex column
Padding: 32px
Background: var(--bg-elevated)
Border: 1px solid var(--border)
Border-radius: 12px
Gap: 16px

Number:
  Font: Geist Mono, 3rem (48px), weight 600
  Color: rgba(var(--fg), 0.08) — very faint, watermark feel
  Line-height: 1

Title:
  Font: h2 (32px), weight 500
  Color: var(--fg)

Description:
  Font: body (18px), weight 400
  Color: var(--fg-muted)
  Line-height: 1.7
  Max lines: 3

CTA: "Learn more →" using Text Link Button style

Hover:
  transform: translateY(-3px)
  box-shadow: 0 8px 24px rgba(0,0,0,0.06)
  border-color: var(--border-hover)
  Transition: all 300ms ease
```

### 5.3 Navigation

**Desktop Nav Bar**
```
Position: fixed, top 0, full width, z-index 50
Height: 64px
Padding: 0 64px
Display: flex, justify-content space-between, align-items center

Default state (top of page):
  Background: transparent
  Border-bottom: none

Scrolled state (scrollY > 40px):
  Background: rgba(var(--bg), 0.8)
  Backdrop-filter: blur(12px) saturate(180%)
  Border-bottom: 1px solid var(--border)
  Transition: all 300ms ease

Left: Logo "vista ₊˚⊹"
  "vista" — Geist Sans, 1.25rem (20px), weight 600
  "₊˚⊹" — #FF5233, same size, margin-left 4px, NO rotation ever

Right group: flex, align-items center, gap 32px
  Nav links: "Services", "Research", "About"
    Font: body (16px but use 0.9375rem/15px for nav), weight 400
    Color: var(--fg-muted)
    Hover: color var(--fg), transition 150ms
  Dark mode toggle: 20×20 icon, var(--fg-muted), hover var(--fg)
  Subscribe button: Primary Button (compact: padding 10px 20px)
```

**Mobile Nav — Bottom Sheet (CHOSEN PATTERN)**

**Justification:** Isaac shows the website at conferences on his phone. A bottom sheet is:
1. **Thumb-reachable** — unlike hamburger menus at the top
2. **Immediately discoverable** — persistent trigger visible at bottom
3. **One-handed friendly** — swipe up or tap, no reaching
4. **Modern** — used by Apple Maps, Uber, Twitter/X for contextual menus
5. **Non-blocking** — can show key actions (Subscribe) without opening full menu

```
Trigger: Fixed bottom bar, height 56px
  Background: var(--bg-elevated)
  Border-top: 1px solid var(--border)
  Backdrop-filter: blur(12px)
  Display: flex, 3 items equally spaced
  
  Items:
    1. "vista ₊˚⊹" (home link, tapping scrolls to top)
    2. "Subscribe" (orange text, opens newsletter modal or scrolls to section)
    3. Hamburger icon ☰ (opens bottom sheet)
  
  Each item: flex column, align center
    Icon/text: caption size (14px)
    Touch target: 56px × full third width (minimum 44px)

Bottom Sheet (on ☰ tap):
  Slides up from bottom, height auto (max 60vh)
  Background: var(--bg-elevated)
  Border-radius: 16px 16px 0 0
  Padding: 24px 24px 40px
  
  Handle: 36px × 4px rounded bar, centered, var(--border), margin-bottom 24px
  
  Links stacked vertically, gap 8px:
    Each link: full width, padding 16px, border-radius 10px
    Font: 1.125rem (18px), weight 500
    Hover/tap: background var(--accent-muted)
    Items: "Services", "Research", "About", "Dark Mode Toggle"
  
  Backdrop: rgba(0,0,0,0.4), tap to dismiss
  Animation: transform translateY(100%) → translateY(0), 300ms cubic-bezier(0.32, 0.72, 0, 1)
  Dismiss: swipe down or tap backdrop
```

### 5.4 Newsletter Form

```
Container: flex (desktop inline, mobile stacked)
Gap: 0 (connected inputs)

Email Input:
  Height: 52px
  Padding: 0 20px
  Font: body (18px), weight 400
  Background: rgba(255,255,255,0.08) [on dark bg]
  Border: 1px solid rgba(255,255,255,0.15)
  Border-radius: 8px 0 0 8px (desktop) / 8px (mobile, full width)
  Color: var(--fg-invert)
  Placeholder: "your@email.com", color rgba(255,255,255,0.4)
  Focus: border-color #FF5233, outline none, box-shadow 0 0 0 3px rgba(255,82,51,0.2)
  Width: flex 1 (desktop) / 100% (mobile)

Subscribe Button:
  Height: 52px
  Padding: 0 28px
  Font: 1rem (16px), weight 600, uppercase, letter-spacing 0.05em
  Background: #FF5233
  Color: #FFFFFF
  Border: none
  Border-radius: 0 8px 8px 0 (desktop) / 8px (mobile, full width)
  Hover: background #E8452B
  Width: auto (desktop) / 100% (mobile)
  Text: "SUBSCRIBE →"

Mobile:
  Stack vertically, gap 12px
  Both inputs get full border-radius (8px)
```

---

## 6. Layout Specifications

### 6.1 Hero Section

```
Height: 100dvh (dynamic viewport height)
Display: flex, flex-direction column, justify-content center, align-items center
Text-align: center
Padding: 0 24px
Position: relative

Logo: "vista ₊˚⊹"
  Font: 1.5rem (24px), weight 600
  Stars: #FF5233, margin-left 4px
  Margin-bottom: 48px
  Opacity: 0 → 1 on load (fade-in, 600ms delay)

Headline: "vista investigates the future of the internet"
  Font: display (72px desktop / 44px mobile)
  Max-width: 800px
  Margin-bottom: 24px
  Lowercase

Tagline:
  Font: body-lg (20px)
  Color: var(--fg-muted)
  Max-width: 560px
  Margin-bottom: 40px

CTAs: flex, gap 16px (desktop row, mobile column)
  Primary: "Subscribe" → scrolls to newsletter section
  Secondary: "Explore →" → scrolls to articles section

Scroll indicator:
  Position: absolute, bottom 32px, center
  "↓" character or chevron SVG
  Font: 1.25rem, var(--fg-muted)
  Animation: translateY(0) → translateY(8px), 1.5s ease-in-out, infinite
  Opacity: 0.5

Background:
  Subtle radial gradient at top-right: rgba(255,82,51,0.03), 400px radius
  Subtle radial gradient at bottom-left: rgba(59,130,246,0.02), 300px radius
  Decorative SVGs (ring, grid, plus):
    Position absolute, z-index 0
    Opacity: 0.04–0.06
    Ring: top-right, 200×200px
    Plus: bottom-left, 160×160px
    Grid: center-right, 120×120px
    Rotation: 0deg ALWAYS
```

### 6.2 The Latest — Article Grid

```
Section padding: 120px 0 (desktop), 80px 0 (mobile)

Section title: "the latest"
  Font: h1 (48px), weight 600, lowercase
  Margin-bottom: 48px

Grid container:
  Display: grid
  Desktop (>1024px):
    grid-template-columns: 1fr 1fr (two equal halves)
    grid-template-rows: 1fr 1fr
    gap: 20px
    
    Featured card: grid-row 1 / 3 (spans both rows, left column)
    Grid cards: 2×2 in right column
      Card 2: row 1, col 2 — BUT split col 2 into sub-grid:
      
    ACTUALLY — cleaner approach:
    grid-template-columns: 1fr 1fr
    gap: 20px
    
    Left (featured): single card, grid-row span 2
    Right: nested grid, 2 columns × 2 rows, gap 20px

  Tablet (640–1024px):
    Featured: full width
    Grid: 2×2 below, gap 16px

  Mobile (<640px):
    Featured: full width
    Grid: single column stack, gap 16px
    Show 4 grid cards vertically (no carousel — simpler, more accessible)
```

**Exact Desktop Implementation:**
```css
.article-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.featured-card {
  grid-row: 1 / 3; /* spans 2 rows */
}

.small-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
}
```

### 6.3 Newsletter Section

```
Section: full-width bleed (breaks out of container)
Background: var(--bg-invert) (#111111 light mode / #F5F5F5 dark mode)
Padding: 96px 0 (desktop), 64px 24px (mobile)

Inner container: max-width 640px, centered
Text-align: center

Headline: "GET VISTA IN YOUR INBOX"
  Font: h1 (48px desktop / 36px mobile), weight 600, uppercase
  Color: var(--fg-invert)
  Letter-spacing: 0.02em
  Margin-bottom: 20px

Tagline:
  Font: body-lg (20px)
  Color: rgba(var(--fg-invert), 0.7)
  Margin-bottom: 40px

Form: as specified in 5.4

Footnote: "Co-published with Arco"
  Font: caption (14px)
  Color: rgba(var(--fg-invert), 0.4)
  Margin-top: 20px
```

### 6.4 Services Preview

```
Section padding: 120px 0 (desktop), 80px 0 (mobile)

Section title: "what we do"
  Font: h1 (48px), weight 600, lowercase
  Margin-bottom: 16px

Intro text:
  Font: body-lg (20px)
  Color: var(--fg-muted)
  Max-width: 560px
  Margin-bottom: 48px

Cards grid:
  Display: grid
  Desktop: grid-template-columns repeat(3, 1fr), gap 24px
  Tablet: grid-template-columns repeat(2, 1fr), gap 20px (third wraps below)
  Mobile: single column, gap 20px

Bottom CTA: "View all services →"
  Text Link Button style
  Margin-top: 48px
```

### 6.5 About / Philosophy Section

```
Section padding: 120px 0 (desktop), 80px 0 (mobile)

Section title: "who we are"
  Font: h1 (48px), weight 600, lowercase
  Margin-bottom: 32px

Content: max-width 640px (tight, editorial feel)

Paragraphs:
  Font: body-lg (20px), weight 400
  Line-height: 1.8
  Color: var(--fg)
  Margin-bottom: 24px between paragraphs

Values list:
  Margin-top: 40px
  Each value: flex row
    Bullet: "·" in #FF5233, margin-right 12px
    Text: body (18px), weight 500
    Gap between items: 12px

Trusted by:
  Margin-top: 56px
  Label: "Trusted by" in overline style (12px, uppercase, var(--fg-muted))
  Logos: flex row, gap 32px, align-items center
    Each logo: grayscale, opacity 0.5
    Hover: grayscale(0), opacity 1, transition 300ms
  Height: 24–32px per logo
```

### 6.6 Footer

```
Border-top: 1px solid var(--border)
Padding: 64px 0 48px
Text-align: center
Display: flex, flex-direction column, align-items center, gap 24px

Logo: "vista ₊˚⊹" — same as nav treatment

Nav links: flex, gap 24px
  "Home · Services · Research · About"
  Font: caption (14px), weight 400
  Color: var(--fg-muted)
  Separator: " · " literal middot
  Hover: color var(--fg)

Social links: flex, gap 24px
  "Twitter · Telegram · Substack"
  Same styling as nav links
  Open in new tab

Copyright: "© 2025 Vista"
  Font: caption (14px)
  Color: rgba(var(--fg-muted), 0.5)
```

---

## 7. Interaction Specifications

### 7.1 Scroll Animations (IntersectionObserver-based)

```
Every section and major element uses reveal animation:

Initial state:
  opacity: 0
  transform: translateY(24px)

Revealed state:
  opacity: 1
  transform: translateY(0)

Transition: opacity 600ms ease-out, transform 600ms ease-out

IntersectionObserver config:
  threshold: 0.15
  rootMargin: "0px 0px -60px 0px"
  triggerOnce: true (no re-animation)

Stagger for child elements (cards, list items):
  Each child delays by 80ms
  Child 1: delay 0ms
  Child 2: delay 80ms
  Child 3: delay 160ms
  Child 4: delay 240ms
  Max stagger: 320ms (cap at 5th element)

Mobile (<640px):
  translateY reduced to 16px (subtler motion)
  Respect prefers-reduced-motion: skip all animations
```

### 7.2 Hover States (Summary)

| Element          | Transform                | Box-Shadow                                    | Border                        | Duration |
|------------------|--------------------------|-----------------------------------------------|-------------------------------|----------|
| Featured card    | `translateY(-3px)`       | `0 8px 24px rgba(0,0,0,0.08)`               | `border-color: #FF5233`       | 300ms    |
| Grid card        | `translateY(-2px)`       | `0 4px 16px rgba(0,0,0,0.06)`               | `border-color: #FF5233`       | 300ms    |
| Service card     | `translateY(-3px)`       | `0 8px 24px rgba(0,0,0,0.06)`               | `border-color: #FF5233`       | 300ms    |
| Primary button   | `scale(1.02)`            | `0 4px 12px rgba(255,82,51,0.25)`            | —                             | 200ms    |
| Secondary button | —                        | —                                             | `border-color: #FF5233`       | 200ms    |
| Text link        | —                        | —                                             | —                             | 200ms    |
| Partner logo     | —                        | —                                             | —                             | 300ms    |

All easing: `ease` (CSS default cubic-bezier)

### 7.3 Special Animations

**Hero load sequence:**
1. Logo fades in: 0ms delay, 600ms duration
2. Headline fades in + translateY: 200ms delay, 600ms
3. Tagline fades in + translateY: 400ms delay, 600ms
4. CTAs fade in + translateY: 600ms delay, 600ms
5. Scroll indicator fades in: 1200ms delay, 600ms

**Nav scroll transition:**
- `transition: background-color 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease`

**Bottom sheet (mobile):**
- Open: `transform: translateY(100%) → translateY(0)`, 300ms, `cubic-bezier(0.32, 0.72, 0, 1)`
- Close: `transform: translateY(0) → translateY(100%)`, 250ms, `cubic-bezier(0.32, 0.72, 0, 1)`
- Backdrop: `opacity 0 → 0.4`, 300ms

---

## 8. Responsive Breakpoints

### Mobile: < 640px
- Container padding: 24px
- Section gaps: 80px
- Display headline: 44px
- H1: 36px
- Nav: bottom bar + bottom sheet
- Article grid: single column stack
- Service cards: single column
- Newsletter form: stacked (input then button, full width each)
- CTAs: full width, stacked vertically, gap 12px
- Touch targets: minimum 44×44px

### Tablet: 640px – 1024px
- Container padding: 48px
- Section gaps: 96px
- Display headline: 56px
- Nav: still bottom bar + sheet (better UX for tablets held in hand)
- Article grid: featured full-width, then 2×2 grid below
- Service cards: 2-column grid (third card wraps)
- Newsletter form: inline (input + button side by side)

### Desktop: > 1024px
- Container padding: 64px (max-width 1200px centered)
- Section gaps: 120px
- Display headline: 72px
- Nav: top fixed bar with links
- Article grid: featured 50% left + 2×2 right
- Service cards: 3-column grid
- Newsletter form: inline

### Breakpoint for nav switch: 1024px
- ≤ 1024px: bottom bar + bottom sheet
- \> 1024px: top fixed nav bar

---

## 9. Dark Mode

All color tokens have dark variants (defined in Section 3). Implementation:

```css
@media (prefers-color-scheme: dark) { :root { /* dark values */ } }
[data-theme="dark"] { /* dark values — manual toggle override */ }
```

- Toggle component: existing DarkModeToggle, placed in desktop nav and mobile bottom sheet
- Transition: `background-color 200ms ease, color 200ms ease` on `*, *::before, *::after`
- Newsletter section inverts: dark bg in light mode becomes light bg in dark mode
- Partner logos: invert filter in dark mode OR use white versions
- Decorative SVGs: same opacity works in both modes (they're already very subtle)

---

## 10. Decorative SVG Placement

```
Ring SVG:
  Hero section: top-right, offset -60px right, 40px top
  Size: 200×200px
  Opacity: 0.04
  Rotation: 0deg (SACRED — never rotate)

Plus SVG:
  Hero section: bottom-left, offset 80px left, -40px bottom
  Size: 160×160px
  Opacity: 0.05
  Rotation: 0deg

Grid/Cross SVG:
  About section: right side, vertically centered
  Size: 120×120px
  Opacity: 0.04
  Rotation: 0deg
  
All SVGs:
  Color: var(--fg), inherits theme
  Position: absolute, z-index: 0
  Pointer-events: none
  Hidden on mobile (<640px) to reduce clutter
```

---

## 11. Accessibility & Performance

### Accessibility
- All interactive elements: visible focus ring (`outline: 2px solid #FF5233, offset 2px`)
- Skip-to-content link: visually hidden, appears on focus
- All images: descriptive alt text
- Color contrast: minimum 4.5:1 for body text, 3:1 for large text (verified against both themes)
- Reduced motion: `@media (prefers-reduced-motion: reduce)` — disable all transforms, use opacity-only fades

### Performance
- Target: Lighthouse 90+ performance
- Fonts: preload Geist woff2
- Images: `loading="lazy"`, Next.js Image component with blur placeholder
- Animations: CSS transforms only (GPU-composited), no layout triggers
- Bundle: no heavy animation libraries — pure CSS transitions + IntersectionObserver

---

## Pre-Delivery Checklist

- [x] Started from scratch — no reference to existing code or component names
- [x] Sacred elements preserved — stars ₊˚⊹ right of "vista", 4px spacing, #FF5233, 0deg rotation, Geist fonts
- [x] Stripe principles applied — scroll animations (fade+translateY), card hover (lift+shadow), staggered timing
- [x] Are.na principles applied — radical whitespace (120px section gaps), typography-first, philosophy visible on homepage
- [x] Works in Progress principles applied — bordered cards, category tags, editorial grid
- [x] Article layout matches Vista sketch — 1 featured (50% left, row-span 2) + 2×2 grid (50% right)
- [x] All measurements specific — px/rem values, exact hex codes, timing in ms
- [x] Mobile nav chosen and justified — bottom sheet (thumb reach, conference demos, one-handed)
- [x] Dark mode specified — token pairs, transitions, newsletter inversion
- [x] Responsive breakpoints defined — 640px, 1024px with exact layout changes per breakpoint
