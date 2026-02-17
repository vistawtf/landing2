# Vista Website V3 - Implementation Plan (Final)
**Date:** 2026-02-15  
**Status:** Awaiting Isaac approval  
**Scope:** Complete redesign based on feedback sessions

---

## 🎯 Design Philosophy (Global)

**Core principles:**
1. **Square everything** — Border-radius 0 or minimal (2-4px max) across entire site
2. **Grid lines** — Subtle vertical guides visible on all sections (Chaos Labs style)
3. **Light mode ONLY** — Page background #E4E2D8 always. Newsletter section is dark (#111111). NO dark mode toggle.
4. **Stripe-inspired spacing** — Generous whitespace, ~70vh sections for peek effect
5. **Chaos Labs precision** — Clean grids, bold typography, minimal icons

**References:**
- Chaos Labs: Grid system, squared design, dark footer
- Stripe: Hero gradients, spacing, peek content
- V1 Vista: Sacred brand elements (stars ₊˚⊹, color #FF5233, decorative shapes)

---

## 📐 Section-by-Section Changes

### 1. HERO / HEADER

**Navbar (Desktop):**
- **Initial state (top of page):**
  - Logo: Only `₊˚⊹` stars (color #FF5233)
  - Links: Services, Research, About (right side)
  - Subscribe button (primary orange) — NO dark mode toggle
  - Background: transparent
  
- **Scrolled state:**
  - Logo animates: `₊˚⊹` → `vista ₊˚⊹` (expand left, 300ms ease)
  - Background: `rgba(250, 250, 250, 0.8)` + backdrop-blur
  - Border-bottom: 1px solid border color

- **Newsletter section intersection:**
  - Entire navbar inverts colors (light navbar → dark navbar)
  - Background: `rgba(17, 17, 17, 0.8)` + backdrop-blur
  - Text: white (#E4E2D8)
  - Subscribe button: maintains orange #FF5233
  - Transition: 300ms smooth
  - **Note:** This is automatic inversion, NOT a user toggle

**Hero Content:**
- **Height:** ~70vh (NOT 100vh) → shows peek of content below
- **Headline:** "**vista** investigates the future of the internet" (lowercase, "vista" has orange underline decoration)
  - Underline: 2px solid #FF5233, offset 0.18em below text
- **Tagline:** "A research hub for builders, investors, and explorers in blockchain and AI."
- **CTAs:** 
  - Primary: "Subscribe" (orange solid #FF5233)
  - Secondary: "See what we do →" (ghost, square, scrolls to Services section)
- **Social proof logos:** ApeChain + Obol + Arco (grayscale, below tagline)
- **NO scroll indicator** (peek of content below is sufficient)

**Decorative elements (V1 sacred):**
- **Círculo naranja** (top-right): ~200×200px, #FF5233, opacity 0.04-0.06, rotation 0deg ALWAYS
- **Cruz naranja** (bottom-left/center): ~160×160px, #FF5233, opacity 0.05, rotation 0deg
- **Rectángulos laterales** (optional): Right side scattered, various sizes, #FF5233, opacity 0.04

**Grid lines:**
- Vertical guides at container edges (1200px max-width)
- Color: `rgba(0,0,0,0.06)` light mode / `rgba(255,255,255,0.06)` dark
- Always visible, subtle

**Gradients (Stripe-inspired):**
- Top-right: radial `rgba(255,82,51,0.03)` 400px
- Bottom-left: radial `rgba(59,130,246,0.02)` 300px

---

### 2. THE LATEST (Articles)

**Section title:** "the latest" (lowercase, h1 48px)

**Layout:**
- **Desktop:** 5 cards total
  - Left: 1 large card (aspect 1:1, ~660×591px equivalent)
  - Right: 2×2 grid (4 cards, each aspect 1:1)
  - Gap: 20px between all cards
  
- **Mobile:** Single column stack, all cards ~1:1 aspect

**Card design:**
- **Border-radius:** 0 or 2px max (square philosophy)
- **Border:** 1px solid `rgba(0,0,0,0.08)`
- **Image area:** 
  - Source: Substack RSS feed
  - Fallback: Category-based gradients (AI = gray-blue, DeFi = orange, etc.)
  - Height: ~50-55% of card
  
- **Content area:**
  - Padding: 24px
  - Category tag: uppercase, 12px, muted color
  - Title: 22px weight 500 (grid cards) / 32px (large card)
  - Excerpt: 18px muted (2 lines clamp)
  - "READ MORE →" link: 16px, color orange on hover
  
- **Badge on large card:**
  - Text: "LATEST" (not "FEATURED")
  - Position: absolute top-left 20px
  - Background: #FF5233, white text, 4px border-radius
  - Padding: 6px 14px, uppercase 12px

**Hover state:**
- box-shadow: 0 8px 24px rgba(0,0,0,0.08)
- border-color: #FF5233
- transition: 300ms ease
- NO transform (keep card static)

**Alignment:**
- All "READ MORE →" buttons vertically aligned across cards
- Internal padding consistent
- Grid baseline alignment

---

### 3. NEWSLETTER

**Section specs:**
- **Height:** 100vh (full-screen)
- **Background:** #111111 (dark mode)
- **Scroll behavior:** `scroll-snap-align: center` + `scroll-snap-type: y proximity`
- **Text color:** White (#EDEDED)

**Navbar behavior:**
- When section enters viewport: navbar switches to dark theme
- When section exits: navbar returns to light theme
- Transition: 300ms smooth, triggered by IntersectionObserver

**Content layout (from main branch reference):**
```
┌─────────────────────────────────────────┐
│  EMERGENT STACK BY ETH LATAM            │
│  [10K+ SUBSCRIBERS badge]               │
│                                         │
│  Less scrolling & more insights:        │
│  The blockchain + AI newsletter for     │
│  builders shaping the future            │
│                                         │
│  › Curated signals, without the noise.  │
│  › Built for operators shipping across  │
│    LatAm.                               │
│  › Read in minutes, relevant all week.  │
│                                         │
│  [email input] [SUBSCRIBE button]       │
│                                         │
│  authored by vista in collab with       │
│  arco.lat                               │
│                                         │
│  [ETH LATAM logo]  [ARCO logo]          │
└─────────────────────────────────────────┘
```

**Styling:**
- Headline: h1 48px, white, center-aligned
- Bullets: 20px, white opacity 0.9, › character (not dots)
- Email input: 
  - Background: rgba(255,255,255,0.08)
  - Border: 1px solid rgba(255,255,255,0.15)
  - Border-radius: 8px 0 0 8px (desktop) / 8px (mobile)
  - Height: 52px
- Subscribe button:
  - Background: #FF5233
  - Border-radius: 0 8px 8px 0 (desktop) / 8px (mobile)
  - Text: "SUBSCRIBE →" uppercase
  - Height: 52px
- Logos: ETH LATAM + ARCO, white versions, opacity 0.8, 32px height

**Background decoration:**
- Use `/public/frame-110.svg` (orange curved lines)
- Position: right side, cover mode
- Opacity: 0.15-0.2

---

### 4. SERVICES ("What We Do")

**Section title:** "what we do" (lowercase, h1 48px)

**Layout:**
- **Desktop:** 3 columns, equal width
- **Tablet:** 2 columns (third wraps)
- **Mobile:** Single column

**Card structure:**
- **Border-radius:** 0 or 2px max
- **Border:** 1px solid border color
- **Padding:** 32px
- **Background:** white (light mode) / #141414 (dark mode if applicable)
- **Gap:** 24px between cards

**Card content:**
- **Icon:** Minimalista outline style, 48×48px, color #FF5233, top-aligned
- **Number:** "01", "02", "03" in Geist Mono, 48px, opacity 0.08 (watermark feel)
- **Title:** h2 32px weight 500, margin-top 16px
  - AI Training
  - Marketing Campaigns
  - Protocol Growth
- **Description:** body 18px muted, 3-4 lines max
- **CTA:** "Learn more →" text link, 16px, orange hover

**Hover state:**
- transform: translateY(-3px)
- box-shadow: 0 8px 24px rgba(0,0,0,0.06)
- border-color: #FF5233
- transition: 300ms ease

**Bottom CTA:**
- "View all services →" text link
- Margin-top: 48px
- Links to `/landing2/services`

**Icons (outline style):**
- AI Training: Brain or chip icon
- Marketing Campaigns: Megaphone or broadcast icon
- Protocol Growth: Graph trending up or network nodes icon
- Source: Lucide icons or similar (consistent stroke width)

---

### 5. WHO WE ARE (Preview only)

**Section title:** "who we are" (lowercase, h1 48px)

**Content:**
- **One paragraph** (max 3 sentences):
  > "Vista is a research collective exploring blockchain and AI. We're at the frontier, finding signal in the noise. We help teams move faster with research-backed insights and execution."

- **CTA:** "Learn more about Vista →" text link, links to `/landing2/about`

**Layout:**
- Max-width: 640px
- Left-aligned (or centered, TBD)
- Margin-bottom: 48px

**Full About page (`/landing2/about`):**
- Will contain extended copy (to be written in strategy session)
- Layout: text left 50%, visual/image right 50% (optional)
- For now: create route structure, placeholder content

---

### 6. FOOTER

**Background:** Dark (#111111 or #0A0A0A)  
**Text color:** White / muted white  
**Grid lines:** Visible vertical guides

**Structure:**

```
┌────────────────────────────────────────────────┐
│  CTA SECTION (optional)                        │
│  "Ready to work together?"                     │
│  [Start a conversation →] button               │
├────────────────────────────────────────────────┤
│  FOOTER LINKS (3-4 columns)                    │
│                                                │
│  vista ₊˚⊹        PAGES          CONNECT       │
│                   Home            Substack     │
│  Research         Services        Telegram     │
│  collective       About           Twitter      │
│  exploring                                     │
│  blockchain                                    │
│  and AI.                                       │
│                                                │
├────────────────────────────────────────────────┤
│  © 2026 Vista    |    vista.wtf                │
│  [X] [LinkedIn] [YouTube icons]                │
└────────────────────────────────────────────────┘
```

**Column 1 (Logo + tagline):**
- `vista ₊˚⊹` logo
- Tagline: "Research collective exploring blockchain and AI." (14px muted)

**Column 2 (PAGES):**
- Home
- Services
- About
- (optional: Research link if separate page)

**Column 3 (CONNECT):**
- Substack → https://vistasubstack.substack.com
- Telegram → https://t.me/vistaDAO
- Twitter → https://twitter.com/viaboratorio
- (optional: Email → info@vista.wtf)

**Bottom row:**
- Copyright: "© 2026 Vista"
- Site: "vista.wtf" (right-aligned or centered)
- Social icons: X, LinkedIn, YouTube (24×24px, muted, hover white)

**CTA section (top of footer, optional):**
- Headline: "Ready to work together?" (h2 32px)
- Button: "Start a conversation →" (primary orange or ghost white)
- Links to contact form or calendar booking

---

## 🎨 Global Design Tokens

### Colors (Vista Official Palette)
```css
/* Primary */
--ultra-orange: #FF5233
--medium-orange: #FF7043
--light-orange: #FF8A65

/* Neutrals */
--vista-light: #E4E2D8  /* Page background (light mode) */
--vista-black: #111111  /* Text, dark sections */
--ultra-gray: #191919
--idle-gray: #2D2D2D
--medium-gray: #575757
--light-gray: #999999

/* Functional tokens */
--accent: #FF5233
--accent-hover: #FF7043
--accent-muted: rgba(255, 82, 51, 0.08)

--bg: #E4E2D8  /* Light mode only - NO dark mode toggle */
--bg-elevated: #FFFFFF
--bg-newsletter: #111111  /* Newsletter section only */

--fg: #111111
--fg-muted: #575757
--fg-newsletter: #E4E2D8  /* Text on dark newsletter background */

--border: rgba(0, 0, 0, 0.08)
--border-hover: #FF5233
```

### Typography (Geist Sans + Geist Mono)
```
Display: 72px (desktop) / 44px (mobile), weight 600
H1: 48px (desktop) / 36px (mobile), weight 600
H2: 32px, weight 500
H3: 22px, weight 500
Body-lg: 20px, weight 400
Body: 18px, weight 400
Caption: 14px, weight 500
Overline: 12px, weight 600, uppercase, letter-spacing 0.08em
```

### Spacing
```
Container max-width: 1200px
Container padding: 24px (mobile), 48px (tablet), 64px (desktop)
Section gaps: 80px (mobile), 120px (desktop)
Component gaps: 16px, 24px, 32px, 48px
```

### Border-radius (SQUARE PHILOSOPHY)
```
Buttons: 0 or 2px max
Cards: 0 or 2px max
Inputs: 8px (exception for newsletter input, can reduce to 4px if too round)
Badges: 4px
```

### Transitions
```
Default: 300ms ease
Hover states: 200ms ease
Navbar theme switch: 300ms ease
Scroll snap: cubic-bezier(0.32, 0.72, 0, 1)
```

---

## 🛠️ Technical Implementation Notes

### Grid Lines System
- CSS Grid overlay with vertical guides at breakpoints
- Position: fixed or absolute depending on section
- z-index: 0 (behind content)
- Color: `rgba(0,0,0,0.06)` adjustable opacity
- Implementation: pseudo-elements or SVG pattern

### Navbar Auto-Inversion (Newsletter Section)
- IntersectionObserver watching newsletter section
- State: `isNewsletterVisible` boolean
- Triggers CSS class toggle: `navbar--inverted`
- When true: navbar background dark, text light
- When false: navbar background light, text dark
- Smooth transition of all navbar elements (300ms)
- **NOT a user toggle** — automatic based on scroll position

### Scroll Snap (Newsletter only)
```css
html {
  scroll-behavior: smooth;
}

#newsletter {
  scroll-snap-align: center;
  scroll-snap-stop: normal; /* proximity, not mandatory */
}

main {
  scroll-snap-type: y proximity;
}
```

### RSS Feed Integration
- Endpoint: `https://vistasubstack.substack.com/feed`
- Parse: title, excerpt, image (if available), category, date
- Fallback gradients by category if no image
- Update frequency: client-side fetch on mount, cache 1 hour

### Sacred Elements Preservation
- Stars `₊˚⊹` ALWAYS 0deg rotation, 4px margin-left from "vista"
- Color #FF5233 exact (no variations)
- Decorative SVGs from V1 (circle, cross, rectangles) preserved exactly

### Mobile Considerations
- Bottom sheet nav (already implemented) OR refactor to match desktop pattern
- Newsletter: stack email input + button vertically on mobile
- Grid lines: reduce opacity or hide on <640px if too busy
- Touch targets: minimum 44×44px

---

## 📋 Pre-Implementation Checklist

**Before spawning subagents:**
- [x] All feedback consolidated
- [x] Design philosophy defined (square, grid lines, Chaos+Stripe refs)
- [x] Section specs detailed
- [x] Technical notes included
- [ ] **Isaac approval** ← WAITING

**Designer subagent will:**
1. Create detailed component specs (buttons, cards, inputs)
2. Define exact spacing/sizing for each section
3. Specify animations and interactions
4. Validate against references (Chaos Labs, Stripe, V1 Vista)
5. Deliver: `DESIGN-SPEC-V3-REVISED.md`

**Developer subagent will:**
1. **DELETE** all `/src/app/landing2/` and `/src/components/landing2/` code FIRST
2. Implement from scratch based on approved Design Spec
3. Sacred elements checks (stars, colors, rotation)
4. RSS integration + fallback gradients
5. Navbar theme switcher with IntersectionObserver
6. Grid lines system
7. Test: `npm run build`, localhost preview, screenshots
8. Deliver: Working code + screenshots + completion report

**Validation (Jarvis):**
1. Spot-check for recycled code (must be 0%)
2. Sacred elements preserved exactly
3. Square philosophy applied globally
4. Grid lines visible and subtle
5. Navbar theme switch working
6. Newsletter scroll snap functional
7. RSS articles displaying (or fallback gradients)

---

## 🚀 Next Steps

1. **Isaac reviews this plan** ✋ CURRENT STEP
2. Isaac approves or requests changes
3. Jarvis spawns Designer (Opus 4.6) + Copywriter (Sonnet) in parallel
4. Designer delivers revised DESIGN-SPEC, Jarvis validates
5. Copywriter refines copy (if needed), Jarvis validates
6. Isaac approves both specs
7. Jarvis spawns Developer (Codex) with delete-first mandate
8. Developer implements, reports to Jarvis
9. Jarvis validates implementation
10. Show to Isaac for final review
11. Deploy to vista.wtf (separate task)

---

**END OF PLAN**

**Estimated timeline:** 
- Design Spec: 30-45 min
- Copy revisions (if needed): 15-30 min
- Development (full implementation): 60-90 min
- Validation: 15-20 min
**Total:** ~2-3 hours end-to-end

**Questions or changes needed?** Reply before proceeding to design phase.
