# TEAM-BRIEF-V4 — Landing2 Incremental Polish

> Generated 2026-02-15. Process rule: **incremental edits only — no full rewrites.**

---

## A) Exact Scope

### CHANGE (by file)

| File | What to change |
|---|---|
| **HeroSection.tsx** | 1. Adjust `min-h`, `pt`, `pb` to tighten hero vertical proportions (reference: hero should feel ~80vh, not 92vh on desktop). 2. Move DecorativeSymbols positions: **RingIcon** → top area, partially clipped by top margin; **PlusIcon** → bottom-left, partially clipped by left margin; **GridIcon** → right side, `top:50%; transform:translateY(-50%)` (vertically centered), partially clipped by right margin. 3. Remove `overflow-hidden` from the parallax container; keep `overflow-hidden` on the `<section>` so shapes clip at section edge (gutter-safe). 4. Ensure `<h1>` left padding aligns with LatestSection's `"the latest"` heading (both use `px-6 md:px-16` inside `max-w-[1200px] mx-auto` — verify identical). |
| **LatestSection.tsx** | 1. Remove `rounded-none` class (already none, but audit for any `rounded-*`). 2. Remove white/light card backgrounds — cards should be `bg-transparent` with only `border-black/[0.10]` dividers (editorial column style, like footer). 3. Ensure `"the latest"` heading `px` matches hero `<h1>` left offset exactly. 4. Mobile: enforce `aspect-square` on every card (five 1:1 squares, single column). |
| **Navigation.tsx** | 1. Logo text ("vista") transition: replace `maxWidth`/`opacity` inline style hack with a CSS `transition` on `width` + `opacity` using Tailwind classes or a single `transform: scaleX()` approach for smooth reveal (no layout jump). 2. Mobile hamburger: change breakpoint from `md:hidden` → show hamburger on `<lg` (currently Subscribe btn shows on md but hamburger only on `<md`; reconcile so mobile menu is accessible on tablets too). 3. Verify mobile menu dropdown renders correctly and all links work. |
| **NewsletterSection.tsx** | 1. Confirm form input and button use `rounded-[2px]` (squared). No other changes — section is approved. |

### DO NOT TOUCH

- `FooterSection.tsx` — approved as-is
- `ServicesSection.tsx` — approved as-is
- `WhoWeAreSection.tsx` — approved as-is
- `GridLines.tsx` — approved as-is
- `icons.tsx` — approved as-is
- `page.tsx` — section order approved
- **No new content, sections, or copy changes.** No new dependencies.

---

## B) Visual Acceptance Criteria

### Desktop (≥1024px)

| Element | Criterion |
|---|---|
| Hero height | ~80–85vh; text vertically centered in upper-half area |
| Decorative ring | Partially clipped by top edge; center ≈58% from left |
| Decorative plus | Bottom-left; partially clipped by left edge of section |
| Decorative grid (4-rect) | Right side; vertically centered; partially clipped by right edge |
| No shape bleeds into max-w gutters | Shapes only clip at section boundary, never overlap body text columns |
| Hero h1 left edge | Pixel-aligned with "the latest" heading left edge |
| Articles grid | 1 large left + 2×2 right; no white card bg; thin border dividers only; bg-transparent |
| Navbar logo text | Smooth fade-in on scroll, no width jump; no abrupt appear/disappear |

### Mobile (<768px)

| Element | Criterion |
|---|---|
| Hero | Proportionally shorter; text readable at 52px |
| Hamburger menu | Visible; opens overlay with all nav links + Subscribe CTA |
| Articles | Single column; each card 1:1 aspect ratio (5 squares) |
| Newsletter form | Stacked; input + button both squared (rounded-[2px]) |

---

## C) Risk Checklist

- [ ] Don't break scroll-snap behavior on page.tsx
- [ ] Don't alter newsletter section beyond button/input border-radius audit
- [ ] Don't change footer/services/who-we-are
- [ ] Don't add new npm packages
- [ ] Don't change color palette (`#FF5233`, `#E4E2D8`, `#111`)
- [ ] Don't modify text copy anywhere
- [ ] Test that IntersectionObserver for navbar inversion still works after nav refactor
- [ ] Verify partner logos still render in hero and newsletter
- [ ] Confirm GridLines still renders in both hero and latest sections

---

## D) QA Checklist (Pass/Fail)

| # | Test | Pass condition |
|---|---|---|
| 1 | Hero h1 left alignment | DevTools: hero h1 `offsetLeft` === latest h2 `offsetLeft` (±1px) |
| 2 | Decorative ring clipping | Ring visually clipped by section top edge; no horizontal bleed past max-w gutters |
| 3 | Decorative plus clipping | Plus visually clipped by section left/bottom edge |
| 4 | Decorative grid centering | Grid shape right edge clipped; vertical center within ±5% of section midpoint |
| 5 | Hero height desktop | Section height between 78vh and 86vh at 1440px viewport |
| 6 | Navbar logo text transition | Scroll slowly: "vista" text fades in smoothly over ≥200ms; no layout shift (CLS = 0) |
| 7 | Mobile hamburger visible | At 768px width: hamburger icon visible; tap opens menu with 4 links |
| 8 | Mobile menu links work | Each link scrolls to correct section and closes menu |
| 9 | Article cards no white bg | Computed background-color of article cards = transparent or `#E4E2D8` |
| 10 | Mobile articles 1:1 | At 375px width: each article card height === width (±2px) |
| 11 | Newsletter form squared | Input + button `border-radius` ≤ 2px |
| 12 | No console errors | Zero React/Next.js errors in console on full page scroll |

---

## E) Implementation Order

### Phase 1 — Hero & Geometry (lowest risk, highest visual impact)
1. Adjust hero section height (`min-h-[80vh] md:min-h-[84vh]`)
2. Reposition three decorative shapes per constraints (ring top-clip, plus bottom-left-clip, grid right-centered-clip)
3. Verify hero text left alignment matches LatestSection heading

### Phase 2 — Articles & Navbar (medium risk)
4. Strip article card backgrounds → transparent; border-only editorial grid
5. Enforce mobile 1:1 aspect-ratio on all 5 article cards
6. Fix navbar logo text transition (smooth width/opacity, no layout jump)
7. Reconcile hamburger breakpoint to `<lg`; test mobile menu

### Phase 3 — QA & Newsletter Audit (low risk, verification)
8. Audit newsletter input/button `rounded-[2px]` — confirm, no change needed
9. Run full QA checklist (all 12 items)
10. Desktop + mobile screenshot comparison before/after

---

*End of brief. No further action until dev confirms Phase 1 start.*
