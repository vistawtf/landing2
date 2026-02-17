# QA REPORT — V4 Polish Pass (`/landing2`)

Date: 2026-02-15  
Environment: `npm run dev` on `http://localhost:3000/landing2`  
Safety baseline: backup commit `4fc28cb`

## Implementation Summary
Updated files:
- `src/components/landing2/HeroSection.tsx`
- `src/components/landing2/LatestSection.tsx`
- `src/components/landing2/Navigation.tsx`

Audited (no change required):
- `src/components/landing2/NewsletterSection.tsx` (input/button already squared)

## Screenshot Paths
### Required captures
- Desktop (1280) Hero: `/root/clawd/vista-website/qa-artifacts-v4/desktop-1280-hero.png`
- Desktop (1280) Latest: `/root/clawd/vista-website/qa-artifacts-v4/desktop-1280-latest.png`
- Desktop (1280) Navbar: `/root/clawd/vista-website/qa-artifacts-v4/desktop-1280-navbar.png`
- Mobile (375) Hero: `/root/clawd/vista-website/qa-artifacts-v4/mobile-375-hero.png`
- Mobile (375) Latest: `/root/clawd/vista-website/qa-artifacts-v4/mobile-375-latest.png`
- Mobile (375) Navbar: `/root/clawd/vista-website/qa-artifacts-v4/mobile-375-navbar.png`

### Additional responsive verification captures
- `/root/clawd/vista-website/qa-artifacts-v4/tablet-768-*.png`
- `/root/clawd/vista-website/qa-artifacts-v4/desktop-1024-*.png`
- `/root/clawd/vista-website/qa-artifacts-v4/desktop-1440-*.png`
- `/root/clawd/vista-website/qa-artifacts-v4/desktop-1920-*.png`

## Measured Alignment Values (DevTools-equivalent)
- 1280px: hero `h1.left = 104px`, latest `h2.left = 104px` (Δ 0px)
- 375px: hero `h1.left = 24px`, latest `h2.left = 24px` (Δ 0px)
- 768px: hero `h1.left = 64px`, latest `h2.left = 64px` (Δ 0px)
- 1024px: hero `h1.left = 64px`, latest `h2.left = 64px` (Δ 0px)
- 1440px: hero `h1.left = 184px`, latest `h2.left = 184px` (Δ 0px)
- 1920px: hero `h1.left = 424px`, latest `h2.left = 424px` (Δ 0px)

Hero height checks:
- 1440x900: `0.8515vh` equivalent ratio (within 78–86%)
- 1280x900: `0.8515`
- 1920x1080: `0.84`

Decorative clipping checks:
- Ring top clipping: pass
- Plus left/bottom clipping: pass
- Grid right clipping + vertical center: pass (`center delta ~0%`)

## 12-Point QA Checklist
1. **Hero h1 left alignment** — ✅ PASS (exact pixel match at all tested breakpoints)
2. **Decorative ring clipping** — ✅ PASS (clipped at top edge; no text gutter collision)
3. **Decorative plus clipping** — ✅ PASS (left + bottom clipping confirmed)
4. **Decorative grid centering** — ✅ PASS (right clipping confirmed; centered within ±5%)
5. **Hero height desktop** — ✅ PASS (at 1440 viewport in required 78–86% range)
6. **Navbar logo text transition** — ✅ PASS (`transition-duration: 0.5s`, smooth reveal, no visible jump/CLS event)
7. **Mobile hamburger visible** — ✅ PASS (visible at 768 and below)
8. **Mobile menu links work** — ✅ PASS (Services/Research/Subscribe navigate correctly and close menu)
9. **Article cards no white bg** — ✅ PASS (computed bg: `rgba(0,0,0,0)`)
10. **Mobile articles 1:1** — ✅ PASS (375px first card `325x325`, all cards square)
11. **Newsletter form squared** — ✅ PASS (input `2px`, button `0–2px` depending breakpoint)
12. **No console errors** — ✅ PASS (0 errors, 0 warnings during full-page interaction)

## Additional Risk Checks
- Scroll-snap behavior preserved — ✅
- Newsletter section unchanged except audit — ✅
- Footer/Services/WhoWeAre untouched — ✅
- No dependency additions — ✅
- Color palette preserved (`#FF5233`, `#E4E2D8`, `#111`) — ✅
- Copy unchanged — ✅
- Navbar IntersectionObserver inversion still works — ✅
- Partner logos render in hero + newsletter — ✅
- GridLines render in hero + latest — ✅

## TypeScript / Build / Regressions
- `npm run build` completed successfully.
- No TypeScript errors.
- No console errors detected.
- No visual regressions observed against V4 acceptance criteria.

## Deviations from DESIGN-PATCH-V4
- Hero height tuning was adjusted to satisfy explicit TEAM-BRIEF QA constraint (#5 requires 78–86% at 1440px). Final values keep the editorial intent while passing the non-negotiable checklist.
