# Vista Design System

> Living document. Last updated: 2026-03-21

---

## Brand Identity

**What Vista is:** A research hub and newsletter for builders, investors, and explorers at the intersection of blockchain and AI in Latin America.

**Who it's for:** Crypto-native operators, protocol builders, VC scouts, and technical founders working across LATAM. They read a16z, follow Bankless, and want signal without noise.

**Aesthetic direction:** Fortune 500 editorial polish meets crypto-native minimalism. Think The Verge's information density married to a16z crypto's restraint. The site should feel like a premium research publication, not a Web3 startup landing page.

**Design philosophy:**
1. Grid minimalista — compact borders over gaps and shadows
2. Optimize for UX + subscriptions — every element should earn its pixel
3. Quiet confidence — the design should get out of the content's way
4. Light-dark rhythm — alternating section backgrounds create visual pacing

---

## Color Palette

### Primary

| Color | Hex | Usage | Notes |
|-------|-----|-------|-------|
| **ULTRA ORANGE** | `#FF5233` | Primary CTAs, accents, brand mark, underlines | **Sacred. Never change.** |
| **Dark Orange (hover)** | `#E64A2E` | Hover state for orange elements | Darken, never lighten |
| **Medium Orange** | `#FF7043` | CSS `.subscribe-btn:hover` (legacy class) | Use sparingly |

### Backgrounds

| Color | Hex | Usage |
|-------|-----|-------|
| **Page background** | `#FAFAFA` | Default body background (CSS var `--background`) |
| **White** | `#FFFFFF` | Hero, LatestSection, ServicesSection backgrounds |
| **Card surface** | `#F2F2F2` | Article cards in LatestSection |
| **Card hover** | `#E8E8E8` | Article card hover state |
| **Dark background** | `#111111` | Newsletter section, footer, CTA band (CSS var `.dark --background`) |
| **Dark surface** | `#161616` | Dark mode elevated surfaces |

### Text

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary text** | `#111111` | Headings, body copy on light backgrounds |
| **Secondary text** | `#444444` | Article excerpts, descriptions |
| **Tertiary text** | `#575757` | Hero subtitle, service descriptions |
| **Muted text** | `#666666` | Card meta text, "READ MORE" links |
| **Placeholder text** | `#8A8A8A` | "COMING SOON" labels |
| **Light label** | `#999999` | "TRUSTED BY", kicker text, bullet markers |
| **Dark-on-dark text** | `#E4E2D8` | Primary text on dark backgrounds (cream) |
| **Dark-on-dark muted** | `white/60` | Footer descriptions, authorship line |
| **Dark-on-dark faint** | `white/40` | Sub-footer text, "[ENTER AGENT MODE]" |
| **Dark-on-dark label** | `white/50` | Footer section headers ("PAGES", "SOCIALS") |

### Borders

| Color | Hex | Usage |
|-------|-----|-------|
| **Light border** | `black/[0.08]` | Article card borders, nav border, grid lines |
| **Light border (subtle)** | `black/[0.06]` | Section dividers, grid rail lines |
| **Light border (button)** | `black/[0.15]` | Secondary button border |
| **Dark border** | `white/[0.08]` | Footer internal borders, nav border on dark |
| **Dark border (button)** | `white/[0.2]` | "LEARN MORE" button border on dark |
| **Dark border (input)** | `white/[0.15]` | Newsletter email input border |

### Accent Colors (defined but rarely used)

| Color | Hex | Usage |
|-------|-----|-------|
| Ultra Blue | `#2962FF` | Available, not currently used |
| Ultra Purple | `#BA68C8` | Available, not currently used |
| Medium Lime | `#B2FF59` | Available, not currently used |
| Light Orange | `#FF8A65` | "vibecoded with <3" text, dark-mode emphasis |

---

## Typography

### Font Stack

| Role | Font | CSS Variable |
|------|------|-------------|
| **Body / UI** | Geist Sans | `var(--font-geist-sans)` |
| **Code / Labels** | Geist Mono | `var(--font-geist-mono)` |
| **Display (hero)** | Geist Sans (weight 400, tight tracking) | Inline styles in HeroSection |

> **Note:** CONTEXT.md mentions Inter (body) + Instrument Serif (display), but the codebase actually uses **Geist Sans + Geist Mono** via the `geist` package. The layout.tsx imports `GeistSans` and `GeistMono`. No serif font is loaded anywhere in the codebase.

### Type Scale

| Name | Size | Weight | Line Height | Tracking | Usage |
|------|------|--------|-------------|----------|-------|
| **Display** | `clamp(2.5rem, 5vw, 4rem)` | 400 | 1.1 | -0.02em | Hero headline |
| **H2 (section)** | `32px / 44px` (md) | 500 (`font-medium`) | tight | — | "the latest" heading |
| **H2 (section alt)** | `36px / 48px` (md) | 500 | tight | — | "what we do" heading |
| **H2 (newsletter)** | `clamp(1.2rem, 5vw, 1.4rem)` / `md:text-4xl` | 500 | tight | — | Newsletter heading |
| **H3 (card large)** | `28px / 32px` (md) | 500 | 1.15 | — | Featured article title |
| **H3 (card small)** | `20px / 22px` (md) | 500 | 1.15 | — | Article card titles |
| **H3 (service)** | `32px` | 500 | — | — | Service card titles |
| **H3 (footer CTA)** | `32px / 42px` (md) | 500 | tight | — | "Build something useful" |
| **H3 (agent)** | `28px` | 400 | 1.1 | tight | "Feed vista to your agent" |
| **Body** | `16px / 20px` (md) | 400 | 1.6 | — | Hero subtitle |
| **Body (service)** | `18px` (text-lg) | 400 | relaxed | — | Service descriptions |
| **Body (newsletter)** | `18px / 16px` (md) | 400 | relaxed | — | Newsletter bullets |
| **Small body** | `14px` (text-sm) | 400 | relaxed | — | Footer description, links |
| **Label** | `10px / 11px` (md) | 600 | — | 0.12em | "TRUSTED BY", kicker |
| **Label (footer)** | `12px` (text-xs) | 400 | — | 0.12em | Footer section headers |
| **Meta / CTA link** | `13px` | 500 (`font-mono`) | — | 0.05em | "READ MORE ->", "LEARN MORE →" |
| **Button** | `15px` | 500 | — | — | Hero buttons |
| **Button (uppercase)** | `14px` (text-sm) | 600 | — | wider | "SUBSCRIBE", "WORK WITH VISTA" |

### Typography Rules

1. **Lowercase section headings** — "the latest", "what we do", "who we are" are all lowercase. This is deliberate brand style.
2. **Monospaced for meta** — "READ MORE", "COMING SOON", "SUBSCRIBE", kicker labels use `font-mono`.
3. **No serif font** — Despite design intent mentioning Instrument Serif, the codebase uses only Geist. If serif is desired, it needs to be added.
4. **font-feature-settings** — `"kern" 1, "liga" 1` enabled on hero heading and body.
5. **Antialiasing** — `-webkit-font-smoothing: antialiased` globally.

---

## Spacing System

### Base Grid
An 8px grid is defined in CSS custom properties but **inconsistently followed** in component code.

```
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-5:  20px
--space-6:  24px
--space-8:  32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
```

### Section Spacing

| Section | Top Padding | Bottom Padding | Notes |
|---------|-------------|----------------|-------|
| Hero | `140px` (pt) | `90px` (pb) | On both mobile and desktop |
| Latest | `140px` minus `72px` margin-top | `90px` | Uses `page-section-spacing` class |
| Newsletter | `48px / 80px` (md) | `24px / 96px` (md) | Full viewport height (`h-screen`) |
| Services | `140px` minus `90px` margin-top | `90px` | Uses `page-section-spacing` class |
| Footer | `0px` top (pt-0) | `32px` (pb-8) | Dark, continuous with newsletter |

### Horizontal Padding

| Context | Mobile | Desktop | Notes |
|---------|--------|---------|-------|
| Section content | `px-6` (24px) | `md:px-16` (64px) | Most sections |
| Navigation | `px-4` (16px) | `md:px-16` (64px) | ⚠️ Inconsistent: px-4 vs px-6 mobile |
| Newsletter | `px-8` (32px) | `md:px-16` (64px) | ⚠️ Inconsistent: px-8 vs px-6 mobile |
| Footer columns | `px-6` (24px) | `px-6` (24px) | Consistent |

### Max Width
- All content containers: `max-w-[1200px] mx-auto`
- Text content max-widths vary: `max-w-[480px]`, `max-w-[540px]`, `max-w-[560px]`, `max-w-[640px]`, `max-w-[700px]`

### Component Internal Spacing

| Component | Padding | Notes |
|-----------|---------|-------|
| Article card (large) | `p-5 md:p-6` | 20px / 24px |
| Article card (small) | `p-4` | 16px |
| Service card | `p-8` | 32px |
| Footer CTA column | `py-8 md:py-10 px-6` | |
| Footer nav columns | `py-8 md:py-10 px-6` | Consistent ✓ |
| Nav buttons | `px-6 py-2.5` | Subscribe button |
| Hero buttons | `px-7 py-3.5` | ⚠️ Different from nav button |

---

## Component Patterns

### Buttons

**Primary (Orange CTA):**
- Background: `#FF5233`, hover: `#E64A2E`
- Text: white, `font-medium` or `font-semibold`
- Border radius: `rounded-[3px]` (3px, nearly square)
- Transition: `transition-colors duration-200`
- ⚠️ **Casing inconsistency:** Hero uses sentence case ("Subscribe"), footer/newsletter use ALL CAPS ("SUBSCRIBE", "WORK WITH VISTA")

**Secondary (Outline):**
- Border: `border border-black/[0.15]` (light) or `border border-white/[0.2]` (dark)
- Hover: border and text shift to `#FF5233` with faint orange background
- Same border radius and sizing as primary

**Text Links (Mono):**
- Style: `font-mono font-medium uppercase tracking-[0.05em]`
- Color: `#666666` → hover: `#FF5233`
- Arrow: `->` or `→`
- Size: 13px

### Cards

**Article Card:**
- Background: `#F2F2F2`, hover: `#E8E8E8`
- Border: `border border-black/[0.08]`
- No border radius (square corners, part of grid minimalista)
- No shadows, no gaps between cards (gap-0)
- Image area: 50% height with gradient overlay
- Title height fixed at `h-[72px]` for small cards (alignment)

**Service Card:**
- Background: `white` (not `#F2F2F2`)
- Border: `border border-black/[0.08]`, rounded-[2px]
- Hover: `-translate-y-1`, shadow appears, border turns `#FF5233`
- Number watermark: `text-5xl font-semibold text-black/[0.08] font-mono` in top-right
- Icon: 48px, `#FF5233`, `strokeWidth={1.5}`

### Navigation

- Fixed position, `z-50`
- Light: `bg-[#FFFFFF]` with `border-b border-black/[0.08]`
- Dark (inverted over newsletter): `bg-[#111111]` with `border-b border-white/[0.08]`
- Scrolled: backdrop blur (`blur(8px) saturate(1.1)`)
- Logo: BrandLogo component with wordmark (slides in on scroll) + mark
- Desktop nav links: `text-base font-medium`, hover → `#FF5233`
- Mobile: hamburger menu with slide-down panel
- Transition: `duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`

### Section Dividers

- `HeroLatestDivider`: 1px line, `bg-black/[0.06]`
- `SectionDivider`: 1px line, dark variant uses `rgba(0,0,0,0.06)` (⚠️ should probably be white-based for dark-to-dark transitions)
- Grid rails: vertical 1px lines at max-width edges, `bg-black/[0.06]` or `bg-white/[0.06]`

---

## Layout

### Grid System
- **Max content width:** 1200px, centered with `mx-auto`
- **Grid rails:** Faint vertical lines at left/right edges of content area (GridLines component)
- **Article grid (desktop):** 2 columns — 1 large card + 2×2 grid of small cards, `gap-0`
- **Article grid (mobile):** Single column stack, `gap-0`
- **Service grid:** 1 / 2 / 3 columns at sm / md / lg, `gap-6`
- **Footer grid:** 1 / 4 columns, `gap-0` with internal borders

### Section Flow
```
Navigation (fixed, z-50)
├── HeroSection (bg-white)
├── HeroLatestDivider (1px line)
├── LatestSection (bg-white, page-section-spacing)
├── SectionDivider (dark)
├── NewsletterSection (bg-#111, h-screen, flex items-center)
├── ServicesSection (bg-white, page-section-spacing)
└── FooterSection (bg-#111)
```

### Responsive Breakpoints
- `sm`: 640px (Tailwind default)
- `md`: 768px (primary breakpoint for most layout shifts)
- `lg`: 1024px (service grid → 3 columns, nav desktop mode)

---

## Motion & Interaction

### Transitions
| Element | Duration | Easing | Property |
|---------|----------|--------|----------|
| Buttons | 200ms | `ease` (default) | `background-color`, `color` |
| Links | 300ms | `ease` (default) | `color` |
| Nav (scroll/invert) | 500ms | `cubic-bezier(0.22,1,0.36,1)` | `background`, `border`, `padding` |
| Logo wordmark | 450ms | `cubic-bezier(0.22,1,0.36,1)` | `max-width`, `opacity`, `transform` |
| Service card hover | 300ms | `ease` (default) | `transform`, `box-shadow`, `border-color` |
| Article card hover | 200ms | `ease` (default) | `background-color` |
| Trusted logos | 240ms | `ease` | `opacity`, `filter`, `transform` |

### Hover States
- **Buttons:** Background darkens (orange → `#E64A2E`)
- **Secondary buttons:** Border shifts to `#FF5233`, text turns orange, faint bg tint
- **Nav links:** Text color → `#FF5233`
- **Article cards:** Background `#F2F2F2` → `#E8E8E8`, "READ MORE" text → `#FF5233`
- **Service cards:** Translate up 4px, shadow appears, border turns orange
- **Footer links:** Text → `#FF5233`
- **Trusted logos:** Opacity 0.5 → 1.0, grayscale removed, slight lift
- **Partner logos:** Opacity 0.8 → 1.0

### Animations (CSS)
- `fadeInUp`: opacity 0→1, translateY 20px→0 (0.7s with cubic-bezier)
- `fadeIn`: opacity 0→1 (0.4s ease-out)
- `animate-on-scroll`: Intersection observer driven (class `is-visible`)

### Focus States
- Newsletter submit: `focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2`
- Newsletter input: `focus:border-[#FF5233]`
- Trusted logos: `focus-visible` outline
- ⚠️ Most nav links and footer links have **no explicit focus styles**

---

## Do's and Don'ts

### Do
- ✅ Use `#FF5233` as the single accent color. No other accent colors compete.
- ✅ Keep section headings lowercase ("the latest", not "The Latest")
- ✅ Use `font-mono` for meta labels (READ MORE, COMING SOON, kickers)
- ✅ Use `max-w-[1200px] mx-auto` for all content containers
- ✅ Use `border border-black/[0.08]` for card borders (grid minimalista)
- ✅ Use `rounded-[3px]` or `rounded-[2px]` for buttons/cards (near-square)
- ✅ Use `gap-0` for article card grids (no gaps, just borders)
- ✅ Always darken orange on hover (`#E64A2E`), never lighten
- ✅ Use grid rails (GridLines) on light-background sections
- ✅ Use `transition-colors duration-200` on interactive elements
- ✅ Respect `prefers-reduced-motion` for animations

### Don't
- ❌ Never use rounded corners > 3px on cards or buttons (no `rounded-lg`, no `rounded-xl`)
- ❌ Never add box-shadows to article cards (grid minimalista)
- ❌ Never use colors outside the palette (no random grays, no new accent colors)
- ❌ Never use `gap-*` on the article card grid — borders create separation
- ❌ Never lighten orange on hover (no `#FF7043` for hover states)
- ❌ Don't use serif fonts unless explicitly added to the project
- ❌ Don't mix title-case and ALL CAPS buttons in the same visual context
- ❌ Don't add decorative shadows or gradients to light-background sections
- ❌ Don't deviate from the 1200px max-width for content

---

## Inconsistencies Found

### 1. Horizontal Padding Mismatch (HIGH — affects visual alignment)

**Navigation mobile:** `px-4` (16px)
**Most sections mobile:** `px-6` (24px)
**Newsletter mobile:** `px-8` (32px)

All three values differ. Content edges don't align between sections on mobile.

- **File:** `Navigation.tsx` line: `<div className="max-w-[1200px] mx-auto px-4 md:px-16">`
- **File:** `NewsletterSection.tsx` line: `<div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 md:px-16">`
- **Fix:** Standardize to `px-6 md:px-16` everywhere.

### 2. Button Casing Inconsistency (MEDIUM — brand inconsistency)

Hero buttons use sentence case:
- **File:** `HeroSection.tsx` — "Subscribe", "See what we do →"

All other buttons use ALL CAPS:
- **File:** `NewsletterSection.tsx` — "SUBSCRIBE"
- **File:** `FooterSection.tsx` — "WORK WITH VISTA", "LEARN MORE"

**Fix:** Pick one convention. Recommendation: ALL CAPS with tracking for action buttons, sentence case for inline text links.

### 3. Background Color Conflict: #FAFAFA vs #FFFFFF (MEDIUM)

- `globals.css` sets `--background: #FAFAFA` and body uses it
- But Hero, Latest, and Services sections all explicitly set `bg-[#FFFFFF]`
- Navigation also uses `bg-[#FFFFFF]`

This means the body is `#FAFAFA` but every visible section is `#FFFFFF`, making the CSS variable pointless and creating potential flash issues.

- **Files:** `HeroSection.tsx`, `LatestSection.tsx`, `ServicesSection.tsx`, `Navigation.tsx`
- **Fix:** Either use `bg-background` (the CSS var) consistently, or change `--background` to `#FFFFFF`.

### 4. Button Sizing Inconsistency (MEDIUM)

| Button | Padding | File |
|--------|---------|------|
| Hero "Subscribe" | `px-7 py-3.5` | HeroSection.tsx |
| Nav "Subscribe" | `px-6 py-2.5` | Navigation.tsx |
| Footer "WORK WITH VISTA" | `px-7 py-4` | FooterSection.tsx |
| Newsletter "SUBSCRIBE" | `h-14 px-6` | NewsletterSection.tsx |
| Footer "LEARN MORE" | `px-7 py-4` | FooterSection.tsx |
| Mobile nav "Subscribe" | `px-5 py-2` | Navigation.tsx |

Six different button sizes for the same brand. Nav button is understandably smaller, but hero and footer primary CTAs should match.

### 5. Section Heading Font Sizes Vary (LOW — may be intentional)

| Section | Mobile | Desktop | File |
|---------|--------|---------|------|
| "the latest" | 32px | 44px | LatestSection.tsx |
| "what we do" | 36px | 48px | ServicesSection.tsx |

The 4px difference between sections creates subtle inconsistency. Both use `font-medium leading-tight text-[#111] lowercase`.

**Fix:** Standardize to one size, or document the intentional hierarchy difference.

### 6. Hero Uses Inline Styles Instead of Design System (LOW)

The hero heading uses a massive inline `style` block with `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, and `fontFeatureSettings`. This bypasses the CSS typography system (`.text-display` class exists in globals.css but isn't used here).

- **File:** `HeroSection.tsx` lines 62-71
- **Fix:** Use the `.text-display` utility class, or extend it.

### 7. Missing Focus Styles on Navigation Links (ACCESSIBILITY)

Desktop nav links and footer links have hover styles but no `focus-visible` styles. Only the trusted logos and newsletter submit button have explicit focus states.

- **Files:** `Navigation.tsx`, `FooterSection.tsx`
- **Fix:** Add `focus-visible:text-[#FF5233] focus-visible:outline-none` or similar.

### 8. SectionDivider Dark Mode Logic Inverted (BUG)

```tsx
// SectionDividers.tsx
style={{ background: dark ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.06)' }}
```

When `dark={true}`, it uses black at 6% opacity — but this divider sits between dark-background sections, where a black line would be invisible. The logic appears reversed.

- **File:** `SectionDividers.tsx`
- **Fix:** `dark` prop should use `white/[0.06]` for visibility on dark backgrounds.

### 9. Newsletter Section Uses `h-screen` (LAYOUT)

The newsletter section uses `h-screen` which forces full viewport height regardless of content. On very tall monitors this creates excessive empty space. On short viewports it may cause overflow.

- **File:** `NewsletterSection.tsx` — `className="relative w-full h-screen mt-[-10px]..."`
- **Fix:** Consider `min-h-screen` or a max-height cap.

### 10. Unused CSS Classes Accumulating (TECH DEBT)

The globals.css file contains many classes that aren't used in any component:
- `.service-card` (separate system from inline Tailwind in ServicesSection)
- `.article-card` and related classes
- `.newsletter-hero-*` (entire legacy newsletter system, ~200 lines)
- `.btn-primary`, `.btn-secondary` (not used — components use inline Tailwind)
- `.subscribe-btn` (not used)
- `.value-card`, `.stat-value` (not used)

This adds ~400+ lines of dead CSS.

### 11. Text Color Gray Values Are Inconsistent (LOW)

Multiple gray values used without clear hierarchy:
- `#444444` (article excerpts)
- `#575757` (hero subtitle, service descriptions, service card CTA links)
- `#666666` (article card meta)
- `#8A8A8A` (placeholder labels)
- `#999999` (trusted by label, newsletter kicker, bullet markers)

The `#444` vs `#575757` distinction is too subtle to be intentional. Should consolidate to 3 tiers: secondary (#444), tertiary (#666), muted (#999).

### 12. `page-section-spacing` Negative Margins (FRAGILE)

```css
.page-section-spacing {
  padding-top: 140px;
  padding-bottom: 90px;
  margin-top: -90px;
}
#latest.page-section-spacing {
  margin-top: -72px;
}
```

Negative margins to collapse spacing between sections is fragile and hard to maintain. Changing one section's padding breaks all downstream sections.

---

## Competitive Research Insights

### What Premium Media Brands Do Well

**a16z crypto (a16zcrypto.com):**
- Ultra-clean, content-first layout with generous whitespace
- Single accent color (their green) used with extreme restraint
- System font stack (no custom fonts), lets content speak
- Newsletter CTA is subtle, not full-bleed dark sections
- Minimalist nav: just a few links, no "Subscribe" button in nav

**Bankless (bankless.com):**
- Dark-mode first (crypto-native audience expects it)
- Multiple newsletter products segmented clearly
- Social proof front and center ("350,000+ pioneers")
- Premium tier prominently displayed
- Content taxonomy is visible and filterable

**Morning Brew:**
- Famous for its one-page newsletter landing with clear value prop
- Social proof ("4M+ readers") is the first thing you see
- Single CTA per viewport — extreme focus
- Clean, friendly, non-intimidating design

**The Browser Company (Arc):**
- Uses serif typography (unusual in tech) — creates editorial feel
- Generous whitespace and large type scale
- Minimal color palette — mostly black, white, and one accent
- Every interaction feels intentional and crafted

### Key Takeaways for Vista
1. **Social proof positioning** — "10k+ subscribers" badge is buried in the newsletter section. Move it higher, or add it to the hero.
2. **Content-first hierarchy** — Competitor sites let articles/content dominate. Vista's hero decorative elements (ring, grid, plus icons) compete with the headline.
3. **Dark mode consideration** — Crypto audience expects dark mode. Vista has CSS support for `.dark` class but doesn't offer a toggle.
4. **Newsletter segmentation** — Bankless segments newsletters by topic. As Vista grows, consider naming the newsletter and giving it its own identity.

---

## Recommendations Summary

### Top 3 Fixes (Inconsistencies — Do Immediately)

1. **Standardize horizontal padding** — Change Navigation to `px-6` and Newsletter to `px-6` on mobile. Everything should be `px-6 md:px-16`. This is the most visible inconsistency because content edges visibly shift as you scroll.

2. **Fix button casing convention** — Choose ALL CAPS for primary action buttons (matching the newsletter and footer pattern) and update hero buttons. Or choose sentence case and update everything else. Mixed casing makes the brand feel indecisive.

3. **Fix SectionDivider dark logic** — The `dark` prop currently renders a black line on dark backgrounds (invisible). Swap the values so dark sections get a white-based divider.

### Top 3 Things to Adopt from Competitors

1. **Promote social proof to the hero** — a16z, Bankless, and Morning Brew all lead with subscriber counts. Vista's "10k+ subscribers" is hidden in the newsletter section. Add a proof chip or subscriber count near the hero CTA ("Join 10,000+ builders").

2. **Reduce decorative noise in the hero** — The three decorative SVG shapes (ring, grid, plus) compete with the headline for attention. a16z and Morning Brew use near-zero decoration. Consider reducing to one subtle decorative element, or making them much more transparent.

3. **Add a dark mode toggle** — The CSS system already supports `.dark` class with a full palette. Crypto-native audiences (Vista's exact audience) strongly prefer dark mode. Adding a toggle in the nav would be low effort with high audience satisfaction.

### Overall Design System Maturity Assessment

**Score: 6.5/10 — Solid foundation, needs consolidation**

**Strengths:**
- Strong color palette with a sacred accent color and clear usage rules
- Good section rhythm (light/dark alternation)
- Consistent max-width (1200px) and responsive breakpoints
- Well-crafted interactions (nav inversion, logo wordmark slide, trusted logo hover)
- Professional typography choice (Geist is excellent)

**Weaknesses:**
- Design tokens exist in CSS (`--space-*`, `--color-*`) but components use hardcoded values instead
- ~400 lines of unused CSS from previous iterations
- Button styles aren't standardized (6 different size/casing combinations)
- Horizontal padding varies between sections (3 different values)
- Hero uses inline styles instead of the defined typography system
- No dark mode toggle despite full CSS dark mode support
- Missing focus styles on most interactive elements (accessibility gap)

**Path to 8+/10:**
1. Create shared button components with 2-3 defined sizes
2. Replace all hardcoded color/spacing values with CSS variables
3. Remove dead CSS
4. Add focus-visible styles globally
5. Document the spacing scale and enforce it
