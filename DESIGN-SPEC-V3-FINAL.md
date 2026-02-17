# Vista Website V3 — Design Specification (Final)
**Date:** 2026-02-15  
**Author:** Lead Designer (subagent)  
**Status:** Ready for Jarvis validation  
**For:** Developer implementation — all values are production-ready

---

## 1. Design Philosophy Summary

- **Square philosophy:** `border-radius: 0` everywhere, `2px` max exception for cards/buttons, `4px` for badges only
- **Grid lines:** Persistent subtle vertical guides across all sections (Chaos Labs reference)
- **Light mode ONLY:** Background `#E4E2D8`. Newsletter section dark `#111111`. NO dark mode toggle
- **Stripe spacing:** Generous whitespace, `~70vh` hero for peek effect, `120px` section gaps on desktop
- **Sacred elements:** Stars `₊˚⊹` always at `0deg`, `#FF5233` exact, `4px` margin-left from "vista"

---

## 2. Global Design Tokens

### 2.1 Colors

```css
:root {
  /* Primary accent */
  --color-accent: #FF5233;
  --color-accent-hover: #FF7043;
  --color-accent-light: #FF8A65;
  --color-accent-muted: rgba(255, 82, 51, 0.08);

  /* Backgrounds */
  --color-bg: #E4E2D8;
  --color-bg-elevated: #FFFFFF;
  --color-bg-dark: #111111;
  --color-bg-dark-elevated: #141414;
  --color-bg-ultra-dark: #0A0A0A;

  /* Foreground */
  --color-fg: #111111;
  --color-fg-muted: #575757;
  --color-fg-faint: #999999;
  --color-fg-on-dark: #EDEDED;
  --color-fg-on-dark-muted: rgba(237, 237, 237, 0.7);

  /* Borders */
  --color-border: rgba(0, 0, 0, 0.08);
  --color-border-hover: #FF5233;
  --color-border-dark: rgba(255, 255, 255, 0.08);

  /* Grid lines */
  --color-grid-light: rgba(0, 0, 0, 0.06);
  --color-grid-dark: rgba(255, 255, 255, 0.06);

  /* Gradients (hero decorative) */
  --gradient-top-right: radial-gradient(circle at 80% 20%, rgba(255, 82, 51, 0.03) 0%, transparent 60%);
  --gradient-bottom-left: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.02) 0%, transparent 50%);
}
```

### 2.2 Typography

Font stack: `'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`  
Mono stack: `'Geist Mono', 'SF Mono', 'Fira Code', monospace`

| Token | Size (desktop) | Size (mobile) | Weight | Line-height | Letter-spacing |
|-------|---------------|--------------|--------|-------------|---------------|
| `display` | `72px` / `4.5rem` | `44px` / `2.75rem` | `600` | `1.05` | `-0.02em` |
| `h1` | `48px` / `3rem` | `36px` / `2.25rem` | `600` | `1.15` | `-0.01em` |
| `h2` | `32px` / `2rem` | `28px` / `1.75rem` | `500` | `1.25` | `0` |
| `h3` | `22px` / `1.375rem` | `20px` / `1.25rem` | `500` | `1.35` | `0` |
| `body-lg` | `20px` / `1.25rem` | `18px` / `1.125rem` | `400` | `1.6` | `0` |
| `body` | `18px` / `1.125rem` | `16px` / `1rem` | `400` | `1.6` | `0` |
| `caption` | `14px` / `0.875rem` | `14px` | `500` | `1.4` | `0.01em` |
| `overline` | `12px` / `0.75rem` | `12px` | `600` | `1.4` | `0.08em` |

Overline is always `text-transform: uppercase`.

### 2.3 Spacing Scale

```css
:root {
  --space-1: 4px;    /* 0.25rem */
  --space-2: 8px;    /* 0.5rem */
  --space-3: 12px;   /* 0.75rem */
  --space-4: 16px;   /* 1rem */
  --space-5: 20px;   /* 1.25rem */
  --space-6: 24px;   /* 1.5rem */
  --space-7: 32px;   /* 2rem */
  --space-8: 48px;   /* 3rem */
  --space-9: 64px;   /* 4rem */
  --space-10: 80px;  /* 5rem */
  --space-11: 120px; /* 7.5rem */
}
```

**Layout tokens:**
```css
:root {
  --container-max: 1200px;
  --container-pad-mobile: 24px;
  --container-pad-tablet: 48px;
  --container-pad-desktop: 64px;
  --section-gap-mobile: 80px;
  --section-gap-desktop: 120px;
}
```

### 2.4 Transitions

```css
:root {
  --transition-default: 300ms ease;
  --transition-fast: 200ms ease;
  --transition-navbar: 300ms ease;
  --transition-snap: cubic-bezier(0.32, 0.72, 0, 1);
}
```

### 2.5 Breakpoints

| Name | Range | Container padding |
|------|-------|-------------------|
| Mobile | `< 640px` | `24px` |
| Tablet | `640px – 1024px` | `48px` |
| Desktop | `> 1024px` | `64px` |

```css
@media (min-width: 640px) { /* tablet */ }
@media (min-width: 1024px) { /* desktop */ }
```

### 2.6 Border-radius

```css
:root {
  --radius-none: 0;
  --radius-sm: 2px;
  --radius-badge: 4px;
  --radius-input: 8px; /* newsletter input exception */
}
```

---

## 3. Grid Lines System

Persistent vertical guide lines behind all content.

**Implementation:** Fixed-position overlay using CSS `repeating-linear-gradient` or pseudo-elements on `<main>`.

```css
.grid-lines {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  max-width: var(--container-max);
  margin: 0 auto;
  left: 0;
  right: 0;
  padding: 0 var(--container-pad-desktop);
}

.grid-lines::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to right,
    var(--color-grid-light) 0px,
    var(--color-grid-light) 1px,
    transparent 1px,
    transparent calc((100%) / 12)
  );
}
```

- **Desktop:** 12-column grid, lines at each column boundary
- **Tablet:** 8-column grid
- **Mobile (`< 640px`):** Hidden (`display: none` or `opacity: 0`)
- **Dark sections (newsletter):** Switch to `var(--color-grid-dark)`
- **z-index:** `0` — all content sections use `z-index: 1` or higher

---

## 4. Component Specifications

### 4.1 Navbar

**Container:**
- `position: fixed; top: 0; left: 0; right: 0;`
- `z-index: 50`
- `height: 64px`
- `padding: 0 var(--container-pad-desktop)`
- `display: flex; align-items: center; justify-content: space-between;`

**Logo area (left):**
- Initial (top): Only `₊˚⊹` rendered in `#FF5233`, `font-size: 20px`, `font-weight: 600`
- Scrolled: `vista` text fades/slides in from right, `margin-right: 4px` before stars
  - `vista`: `color: var(--color-fg)`, `font-size: 20px`, `font-weight: 600`, `letter-spacing: -0.01em`
  - `₊˚⊹`: `color: #FF5233`, same size
  - Animation: `width` from `0` to auto, `opacity` 0→1, `300ms ease`

**Nav links (right):**
- `display: flex; align-items: center; gap: 32px;`
- Links: `font-size: 16px`, `font-weight: 400`, `color: var(--color-fg)`, `text-decoration: none`
- Hover: `color: var(--color-accent)`, `transition: var(--transition-fast)`
- Items: Services, Research, About

**Subscribe button (far right):**
- See §4.8 Button Primary spec
- `margin-left: 16px`

**States:**

| Property | Initial (transparent) | Scrolled | Newsletter-inverted |
|----------|----------------------|----------|---------------------|
| `background` | `transparent` | `rgba(228, 226, 216, 0.85)` | `rgba(17, 17, 17, 0.85)` |
| `backdrop-filter` | `none` | `blur(12px)` | `blur(12px)` |
| `border-bottom` | `none` | `1px solid var(--color-border)` | `1px solid var(--color-border-dark)` |
| Link color | `#111111` | `#111111` | `#EDEDED` |
| Logo "vista" color | `#111111` | `#111111` | `#EDEDED` |
| Logo stars color | `#FF5233` | `#FF5233` | `#FF5233` |
| Subscribe btn bg | `#FF5233` | `#FF5233` | `#FF5233` |
| `transition` | — | `all 300ms ease` | `all 300ms ease` |

**Scroll detection:** Trigger "scrolled" state after `scrollY > 40px`.

**Mobile navbar (`< 640px`):**
- `height: 56px`
- `padding: 0 var(--container-pad-mobile)`
- Logo only (stars), hamburger icon right (`24px × 24px`, `stroke-width: 2px`)
- Mobile menu: full-screen overlay, `background: var(--color-bg)`, `z-index: 60`
  - Links stacked vertically, `font-size: 24px`, `font-weight: 500`, `gap: 24px`, centered
  - Close icon top-right, `24px × 24px`
  - Subscribe button full-width at bottom, `margin: 32px 24px`

---

### 4.2 Hero Section

**Container:**
- `min-height: 70vh`
- `padding-top: 128px` (64px navbar + 64px breathing room)
- `padding-bottom: 80px`
- `position: relative; overflow: hidden;`
- `display: flex; flex-direction: column; justify-content: center;`

**Headline:**
- Text: `vista investigates the future of the internet`
- `font-size: 72px` desktop / `44px` mobile
- `font-weight: 600`
- `line-height: 1.05`
- `letter-spacing: -0.02em`
- `color: var(--color-fg)`
- `max-width: 960px`
- `text-transform: lowercase`

**"vista" underline decoration:**
- `text-decoration: none` (not CSS underline)
- Use `<span>` with `::after` pseudo-element:
  ```css
  .vista-underline::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: #FF5233;
    margin-top: 0.18em;
  }
  ```

**Tagline:**
- Text: "A research hub for builders, investors, and explorers in blockchain and AI."
- `font-size: 20px` / `18px` mobile
- `font-weight: 400`
- `line-height: 1.6`
- `color: var(--color-fg-muted)`
- `max-width: 640px`
- `margin-top: 24px`

**CTAs:**
- `display: flex; gap: 16px; margin-top: 32px;`
- Primary: "Subscribe" → see §4.8 Button Primary
- Secondary: "See what we do →" → see §4.8 Button Ghost
- Mobile: stack vertically, `flex-direction: column; width: 100%;`

**Social proof logos:**
- `margin-top: 48px`
- `display: flex; align-items: center; gap: 32px;`
- Logos: ApeChain, Obol, Arco
- `height: 24px; width: auto;`
- `filter: grayscale(1); opacity: 0.5;`
- Hover: `opacity: 0.8; transition: var(--transition-fast);`

**Decorative elements (absolute positioned):**

| Element | Size | Position | Color | Opacity | Rotation |
|---------|------|----------|-------|---------|----------|
| Circle (top-right) | `200px × 200px` | `top: -40px; right: -60px` | `#FF5233` | `0.05` | `0deg` |
| Cross (bottom-left) | `160px × 160px` | `bottom: 40px; left: -40px` | `#FF5233` | `0.05` | `0deg` |
| Rectangles (right) | `80px × 24px` (varied) | `top: 30%; right: 80px` | `#FF5233` | `0.04` | `0deg` |

All decorative SVGs: `position: absolute; z-index: 0; pointer-events: none; transform: rotate(0deg);`

**Background gradients:**
```css
.hero::before {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255, 82, 51, 0.03) 0%, transparent 70%);
  pointer-events: none;
}
.hero::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.02) 0%, transparent 70%);
  pointer-events: none;
}
```

---

### 4.3 Articles Section ("the latest")

**Section container:**
- `padding: var(--section-gap-desktop) 0`
- `position: relative; z-index: 1;`

**Section title:**
- Text: "the latest"
- Typography: `h1` token — `48px`, `weight 600`, `line-height 1.15`
- `text-transform: lowercase`
- `margin-bottom: 48px`

**Grid layout (desktop > 1024px):**
```css
.articles-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
}

.article-card--large {
  grid-row: 1 / 3; /* spans both rows */
  grid-column: 1;
}

.articles-grid-right {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
}
```

**Alternative flat grid approach:**
```css
.articles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
}
.article-card--large {
  grid-column: 1;
  grid-row: 1 / 3;
}
/* Small cards fill column 2, rows 1 and 2, 2 per row via nested grid */
```

**Tablet (640px – 1024px):**
- Large card: full width
- Small cards: `grid-template-columns: repeat(2, 1fr);`, `gap: 20px;`

**Mobile (< 640px):**
- All cards single column, full width
- `gap: 16px`

#### Article Card — Large

- `aspect-ratio: auto` (height determined by content of two small rows)
- `border: 1px solid var(--color-border)`
- `border-radius: 0`
- `overflow: hidden`
- `background: var(--color-bg-elevated)`
- `position: relative`

**Image area:**
- `width: 100%; height: 55%;`
- `object-fit: cover;`
- Fallback: category-based gradient (see below)

**"LATEST" badge:**
- `position: absolute; top: 20px; left: 20px;`
- `background: #FF5233; color: #FFFFFF;`
- `padding: 6px 14px;`
- `font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;`
- `border-radius: 4px;`

**Content area:**
- `padding: 24px`
- Category: overline token (`12px`, `weight 600`, `uppercase`, `letter-spacing: 0.08em`, `color: var(--color-fg-faint)`)
- `margin-bottom: 8px`
- Title: `font-size: 32px; font-weight: 500; line-height: 1.25; color: var(--color-fg);`
- `margin-bottom: 12px`
- Excerpt: `font-size: 18px; line-height: 1.6; color: var(--color-fg-muted);`
- `-webkit-line-clamp: 2; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical;`
- `margin-bottom: 16px`
- Read more: `font-size: 16px; font-weight: 500; color: var(--color-fg); text-decoration: none;`
  - Hover: `color: var(--color-accent);`

#### Article Card — Small (×4)

- `aspect-ratio: 1 / 1`
- `border: 1px solid var(--color-border)`
- `border-radius: 0`
- `overflow: hidden`
- `background: var(--color-bg-elevated)`
- `display: flex; flex-direction: column;`

**Image area:**
- `width: 100%; height: 50%;`
- `object-fit: cover;`

**Content area:**
- `padding: 20px`
- `flex: 1; display: flex; flex-direction: column; justify-content: space-between;`
- Category: overline token, `margin-bottom: 6px`
- Title: `font-size: 22px; font-weight: 500; line-height: 1.3; color: var(--color-fg);`
- `-webkit-line-clamp: 2;` (same clamp pattern)
- `margin-bottom: 8px`
- Excerpt: `font-size: 16px; line-height: 1.5; color: var(--color-fg-muted);`
- `-webkit-line-clamp: 2;`
- Read more: `font-size: 16px; font-weight: 500; color: var(--color-fg);`
  - `margin-top: auto;` (pushes to bottom for alignment)

**Card hover state (both sizes):**
```css
.article-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-color: var(--color-accent);
  transition: var(--transition-default);
}
/* NO transform on hover — card stays static */
```

**Category fallback gradients (when no RSS image):**
```css
/* AI topics */
.fallback--ai { background: linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 100%); }
/* DeFi topics */
.fallback--defi { background: linear-gradient(135deg, #FFF1ED 0%, #FFDDD5 100%); }
/* General/Blockchain */
.fallback--general { background: linear-gradient(135deg, #F1F0EB 0%, #E4E2D8 100%); }
```

---

### 4.4 Newsletter Section

**Section container:**
```css
#newsletter {
  min-height: 100vh;
  background: var(--color-bg-dark);
  color: var(--color-fg-on-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  scroll-snap-align: center;
  padding: 80px var(--container-pad-desktop);
}
```

**Content wrapper:**
- `max-width: 720px`
- `text-align: center`
- `position: relative; z-index: 2;`

**Header line:**
- Text: "EMERGENT STACK BY ETH LATAM"
- `font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;`
- `color: var(--color-fg-on-dark-muted);`
- `margin-bottom: 16px;`

**Subscriber badge (inline after header):**
- Text: "10K+ SUBSCRIBERS"
- `display: inline-block; margin-left: 12px;`
- `padding: 4px 10px;`
- `border: 1px solid rgba(255, 255, 255, 0.2);`
- `border-radius: 4px;`
- `font-size: 11px; font-weight: 600; letter-spacing: 0.06em;`
- `color: var(--color-fg-on-dark-muted);`

**Headline:**
- Text: "Less scrolling & more insights:"
- `font-size: 48px; font-weight: 600; line-height: 1.15; letter-spacing: -0.01em;`
- `color: #EDEDED;`
- `margin-bottom: 8px;`

**Subheadline:**
- Text: "The blockchain + AI newsletter for builders shaping the future"
- `font-size: 20px; font-weight: 400; line-height: 1.6;`
- `color: var(--color-fg-on-dark-muted);`
- `margin-bottom: 32px;`

**Bullet points:**
- `text-align: left; max-width: 520px; margin: 0 auto 40px;`
- Each bullet: `font-size: 18px; line-height: 1.7; color: rgba(237, 237, 237, 0.9);`
- Bullet character: `›` (not `•`), `margin-right: 12px; color: var(--color-accent);`
- `margin-bottom: 8px` between bullets

**Email form (desktop):**
```css
.newsletter-form {
  display: flex;
  max-width: 480px;
  margin: 0 auto;
}

.newsletter-input {
  flex: 1;
  height: 52px;
  padding: 0 20px;
  font-size: 16px;
  color: #EDEDED;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px 0 0 8px;
  border-right: none;
  outline: none;
  transition: border-color var(--transition-fast);
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.newsletter-input:focus {
  border-color: var(--color-accent);
}

.newsletter-submit {
  height: 52px;
  padding: 0 28px;
  background: var(--color-accent);
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border: none;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  white-space: nowrap;
  transition: background var(--transition-fast);
}

.newsletter-submit:hover {
  background: var(--color-accent-hover);
}
```

**Email form (mobile < 640px):**
```css
.newsletter-form {
  flex-direction: column;
  gap: 12px;
}
.newsletter-input {
  border-radius: 8px;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}
.newsletter-submit {
  border-radius: 8px;
  width: 100%;
}
```

**Attribution:**
- `margin-top: 32px;`
- Text: "authored by vista in collab with arco.lat"
- `font-size: 14px; color: var(--color-fg-on-dark-muted);`

**Partner logos:**
- `margin-top: 20px;`
- `display: flex; justify-content: center; align-items: center; gap: 32px;`
- ETH LATAM logo + ARCO logo: `height: 32px; width: auto; opacity: 0.8; filter: brightness(0) invert(1);`

**Background decoration:**
- `background-image: url('/frame-110.svg');`
- `position: absolute; right: -10%; top: 0; bottom: 0; width: 60%;`
- `background-size: cover; background-repeat: no-repeat;`
- `opacity: 0.15;`
- `pointer-events: none; z-index: 0;`

---

### 4.5 Services Section ("what we do")

**Section container:**
- `padding: var(--section-gap-desktop) 0;`

**Section title:**
- Text: "what we do"
- `h1` token, `text-transform: lowercase;`
- `margin-bottom: 48px;`

**Grid:**
```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Tablet */
@media (max-width: 1024px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile */
@media (max-width: 640px) {
  .services-grid { grid-template-columns: 1fr; }
}
```

#### Service Card

```css
.service-card {
  padding: 32px;
  border: 1px solid var(--color-border);
  border-radius: 0;
  background: var(--color-bg-elevated);
  position: relative;
  transition: var(--transition-default);
}

.service-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  border-color: var(--color-accent);
}
```

**Card internals:**

| Element | Spec |
|---------|------|
| Number watermark | `font-family: var(--font-mono); font-size: 48px; font-weight: 700; color: var(--color-fg); opacity: 0.08; position: absolute; top: 24px; right: 24px;` |
| Icon | `48px × 48px; color: var(--color-accent); stroke-width: 1.5px;` Lucide icons. `margin-bottom: 20px;` |
| Title | `font-size: 32px; font-weight: 500; line-height: 1.25; color: var(--color-fg); margin-bottom: 12px;` |
| Description | `font-size: 18px; line-height: 1.6; color: var(--color-fg-muted); margin-bottom: 20px;` 3-4 lines max. |
| CTA link | `font-size: 16px; font-weight: 500; color: var(--color-fg); text-decoration: none;` Hover: `color: var(--color-accent);` |

**Service cards content:**

| # | Title | Icon (Lucide) |
|---|-------|---------------|
| 01 | AI Training | `<Brain />` or `<Cpu />` |
| 02 | Marketing Campaigns | `<Megaphone />` |
| 03 | Protocol Growth | `<TrendingUp />` |

**Section bottom CTA:**
- Text: "View all services →"
- `margin-top: 48px;`
- `font-size: 18px; font-weight: 500; color: var(--color-fg);`
- Hover: `color: var(--color-accent);`
- Links to `/landing2/services`

---

### 4.6 About Preview ("who we are")

**Section container:**
- `padding: var(--section-gap-desktop) 0;`

**Section title:**
- Text: "who we are"
- `h1` token, `text-transform: lowercase;`
- `margin-bottom: 24px;`

**Content:**
- `max-width: 640px;`
- `text-align: left;` (left-aligned)
- Paragraph: `font-size: 20px; line-height: 1.6; color: var(--color-fg-muted);`
- Text: "Vista is a research collective exploring blockchain and AI. We're at the frontier, finding signal in the noise. We help teams move faster with research-backed insights and execution."

**CTA:**
- `margin-top: 24px;`
- Text: "Learn more about Vista →"
- `font-size: 18px; font-weight: 500; color: var(--color-fg);`
- Hover: `color: var(--color-accent);`
- Links to `/landing2/about`

---

### 4.7 Footer

**Container:**
```css
footer {
  background: var(--color-bg-dark);
  color: var(--color-fg-on-dark);
  padding: 80px var(--container-pad-desktop) 40px;
  position: relative;
  z-index: 1;
}
```

#### Optional CTA Band (top of footer)

```css
.footer-cta {
  text-align: center;
  padding-bottom: 64px;
  margin-bottom: 64px;
  border-bottom: 1px solid var(--color-border-dark);
}
```

- Headline: "Ready to work together?"
- `font-size: 32px; font-weight: 500; color: #EDEDED; margin-bottom: 24px;`
- Button: "Start a conversation →" — ghost style on dark (see §4.8)

#### Footer columns

```css
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
```

**Column 1 — Brand:**
- Logo: `vista ₊˚⊹` — `font-size: 20px; font-weight: 600;` `vista` in `#EDEDED`, `₊˚⊹` in `#FF5233`, `margin-left: 4px`
- Tagline: `font-size: 14px; line-height: 1.6; color: var(--color-fg-on-dark-muted); margin-top: 16px; max-width: 240px;`
- Text: "Research collective exploring blockchain and AI."

**Column 2 — Pages:**
- Header: `font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-fg-on-dark-muted); margin-bottom: 16px;`
- Links: `font-size: 14px; color: var(--color-fg-on-dark); line-height: 2.2;`
- Hover: `color: var(--color-accent);`
- Items: Home, Services, About

**Column 3 — Connect:**
- Same header style as Column 2
- Links: Substack, Telegram, Twitter
- Same link style as Column 2

#### Footer bottom bar

```css
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  border-top: 1px solid var(--color-border-dark);
}
```

- Left: `© 2026 Vista` — `font-size: 14px; color: var(--color-fg-on-dark-muted);`
- Center/right: `vista.wtf` — same style
- Social icons: `display: flex; gap: 16px;`
  - Each: `24px × 24px; color: var(--color-fg-on-dark-muted);`
  - Hover: `color: #EDEDED; transition: var(--transition-fast);`
  - Icons: X (Twitter), LinkedIn, YouTube

---

### 4.8 Buttons

#### Primary Button

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #FFFFFF;
  background: var(--color-accent);
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.btn-primary:hover {
  background: var(--color-accent-hover);
}

.btn-primary:active {
  background: #E5492E; /* slightly darker */
}
```

#### Ghost / Secondary Button

```css
.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-fg);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 0;
  cursor: pointer;
  transition: var(--transition-fast);
}

.btn-ghost:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.btn-ghost:active {
  background: var(--color-accent-muted);
}
```

**Ghost on dark background:**
```css
.btn-ghost--dark {
  color: #EDEDED;
  border-color: rgba(255, 255, 255, 0.2);
}
.btn-ghost--dark:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
```

**Touch target:** All buttons minimum `44px` height. On mobile, full-width variants get `width: 100%;`.

---

## 5. Animation & Interaction Specs

### 5.1 Scroll Reveal (IntersectionObserver)

```javascript
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
);
```

**Reveal animation:**
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 600ms ease, transform 600ms ease;
}

.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

**Stagger for grids:** Each child gets `transition-delay` incremented by `80ms`:
- Card 1: `0ms`
- Card 2: `80ms`
- Card 3: `160ms`
- Card 4: `240ms`
- Card 5: `320ms`

### 5.2 Navbar Inversion (IntersectionObserver)

```javascript
const newsletterObserver = new IntersectionObserver(
  ([entry]) => {
    setIsNewsletterVisible(entry.isIntersecting);
  },
  { threshold: 0.1 }
);

// Observe: document.getElementById('newsletter')
```

When `isNewsletterVisible === true`: add class `navbar--inverted` which applies the dark palette from §4.1 table.

### 5.3 Scroll Snap

```css
main {
  scroll-snap-type: y proximity;
}

#newsletter {
  scroll-snap-align: center;
  scroll-snap-stop: normal;
}

html {
  scroll-behavior: smooth;
}
```

Only the newsletter section snaps. All other sections scroll freely.

### 5.4 Logo Text Reveal (Navbar scroll)

```css
.navbar-logo-text {
  display: inline-block;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  white-space: nowrap;
  transition: max-width 300ms ease, opacity 300ms ease;
}

.navbar--scrolled .navbar-logo-text {
  max-width: 80px; /* enough for "vista " */
  opacity: 1;
}
```

### 5.5 Card hover

- Articles: `box-shadow` + `border-color` change, `300ms ease`, NO transform
- Services: `translateY(-3px)` + `box-shadow` + `border-color`, `300ms ease`

---

## 6. Responsive Behavior Summary

### Mobile (< 640px)

| Component | Change |
|-----------|--------|
| Navbar | `56px` height, hamburger menu, no link text |
| Hero | `padding-top: 96px`, headline `44px`, CTAs stack vertically |
| Articles | Single column, `gap: 16px`, all cards full-width |
| Newsletter | `padding: 48px 24px`, headline `36px`, form stacks vertically |
| Services | Single column |
| About | Full width, `padding: 0 24px` |
| Footer | Single column, `gap: 32px` |
| Grid lines | Hidden |
| Section gaps | `80px` |

### Tablet (640px – 1024px)

| Component | Change |
|-----------|--------|
| Navbar | Desktop style, `padding: 0 48px` |
| Hero | Headline `56px` |
| Articles | Large card full-width, small cards `2×2` grid |
| Newsletter | Same as desktop, `padding: 80px 48px` |
| Services | `2-column` grid |
| Footer | `3-column` maintained, reduced gap `32px` |
| Grid lines | 8-column variant |
| Section gaps | `100px` |

### Desktop (> 1024px)

All specs as defined above (default values).

---

## 7. RSS Integration Spec

**Endpoint:** `https://vistasubstack.substack.com/feed`

**Parse fields:**
- `<title>` → card title
- `<description>` → card excerpt (strip HTML, clamp)
- `<enclosure url>` or `<media:content>` → card image
- `<category>` → category tag
- `<pubDate>` → sort order (newest first)

**Fetch strategy:**
- Client-side fetch on component mount
- Cache in state/localStorage for 1 hour (`Date.now() - lastFetch > 3600000`)
- Show skeleton loaders (pulsing `var(--color-border)` background) while loading
- On error: show 5 cards with fallback gradients and placeholder text

**Card 1** (large) = most recent article, gets "LATEST" badge.  
**Cards 2-5** = next 4 articles.

---

## 8. Pre-Implementation Checklist

- [ ] All color values use `var(--color-*)` tokens — no hardcoded hex in components
- [ ] All `border-radius` values are `0` or `2px` (except newsletter input `8px`, badges `4px`)
- [ ] Stars `₊˚⊹` rendered with `color: #FF5233`, `margin-left: 4px`, `rotation: 0deg`
- [ ] Decorative SVGs have `transform: rotate(0deg)` explicitly set
- [ ] No dark mode toggle anywhere — `#E4E2D8` background always
- [ ] Newsletter section triggers navbar inversion via IntersectionObserver
- [ ] Scroll snap is `proximity` not `mandatory`
- [ ] Grid lines visible on tablet+desktop, hidden on mobile
- [ ] All touch targets ≥ `44px`
- [ ] Fonts loaded: Geist Sans + Geist Mono
- [ ] RSS feed fetched client-side with fallback gradients
- [ ] "LATEST" badge on first article card (not "FEATURED")
- [ ] Section titles lowercase
- [ ] Hero height `~70vh` (not `100vh`)
- [ ] All transitions use defined tokens from §2.4
- [ ] `DELETE` all existing landing2 code before implementing

---

**END OF DESIGN SPECIFICATION**
