# PO Review V3 — Vista Landing2 Redesign

**Date:** 2026-02-15  
**Reviewer:** Product Owner / QA Lead (AI)  
**Status:** Gap analysis complete, iterative fix plan ready
**Guardrail:** Do NOT rebuild from scratch again — apply incremental edits only.

---

## Executive Summary

1. ✅ **Hero underline** — Already 4px (`decoration-[4px]`). **PASS.**
2. ⚠️ **Latest cards mobile 1:1** — All cards use `aspectRatio: '1 / 1'` inline but the "large" card on desktop (`isLarge`) gets different text sizing; mobile path renders all cards identically. **Likely PASS** but needs visual verification — 1:1 aspect on mobile may cause excessive height with little content.
3. ✅ **No "latest" badge** — No badge component or badge text exists anywhere in `LatestSection.tsx`. **PASS.**
4. 🔴 **Hero decorative figures** — Reference repo is **404 / inaccessible**. Cannot compare. Current implementation uses parallax `RingIcon`, `GridIcon`, `PlusIcon` with `perspective` transforms. Without reference, cannot confirm match. **BLOCKED on reference access.**
5. 🔴 **Newsletter style match to reference** — Same blocker. Current newsletter is dark full-screen (`h-screen`) with `frame-110.svg` background, gradient overlay, form, partner logos. Looks polished but **cannot verify against reference.**
6. ✅ **Newsletter full-screen** — Uses `h-screen`. **PASS.**

---

## Gap Analysis Table

| # | Requirement | Current State | Status | Fix Needed |
|---|-------------|--------------|--------|------------|
| 1 | Hero underline 4px thick | `decoration-[4px]` on `<span>` wrapping "vista" | ✅ PASS | None |
| 2 | Latest cards mobile = 1:1 like others | All cards have `aspectRatio: '1/1'`, mobile renders same `ArticleCard` for all | ⚠️ VERIFY | Visual QA needed — 1:1 may overflow content on small screens. Consider `min-h` fallback. |
| 3 | No "latest" badge (desktop or mobile) | No badge markup exists | ✅ PASS | None |
| 4 | Hero decorative figures match reference | Has Ring, Grid, Plus icons with parallax. Reference repo 404. | 🔴 BLOCKED | Need reference access or screenshots to compare positions/sizes/opacity |
| 5 | Newsletter style matches reference | Full-screen dark section with SVG bg, gradient, form, logos | 🔴 BLOCKED | Same — need reference to compare |
| 6 | Newsletter must be full-screen | `h-screen` on `<section>` | ✅ PASS | None |

---

## Prioritized Fix Plan (Iterative)

### P0 — Critical / Blocking

| ID | Issue | File | Fix | Acceptance Criteria |
|----|-------|------|-----|---------------------|
| P0-1 | **Reference repo inaccessible** | N/A | User must provide: (a) working repo URL, (b) screenshots, or (c) Figma link for requirements #4 and #5 | Reference material accessible and reviewed |

### P1 — High Priority (Visual Polish)

| ID | Issue | File | Fix | Acceptance Criteria |
|----|-------|------|-----|---------------------|
| P1-1 | **Latest cards 1:1 may clip content on mobile** | `LatestSection.tsx` | Change `style={{ aspectRatio: '1 / 1' }}` to CSS class with `aspect-ratio: 1/1` + add `overflow-hidden` and ensure text is `line-clamp` constrained | Cards render as squares on mobile without content overflow |
| P1-2 | **Desktop "latest" large card spans 2 rows but may not render 1:1** | `LatestSection.tsx` | The large card (`isLarge`) has same `aspectRatio: 1/1` — on desktop in a `row-span-2` grid, this may not actually be square. Remove `isLarge` prop usage on desktop OR adjust grid to `grid-rows-2` with explicit row heights | Large card visually matches grid proportions |
| P1-3 | **Decorative figures: positions may drift on ultrawide/small screens** | `HeroSection.tsx` | Add `max-width` container constraint on parallax container; ensure figures don't escape viewport | No horizontal scroll caused by decorative elements on any viewport |

### P2 — Low Priority (Hardening)

| ID | Issue | File | Fix | Acceptance Criteria |
|----|-------|------|-----|---------------------|
| P2-1 | Newsletter `10k+ subscribers` badge — verify if desired | `NewsletterSection.tsx` | Confirm with stakeholder. If not wanted, remove the `<div className="bg-white/[0.08]...">10k+ subscribers</div>` | Badge presence matches approved design |
| P2-2 | Social proof logos in Hero are placeholder text | `HeroSection.tsx` | Replace `<div>ApeChain</div>` etc. with actual `<Image>` components or remove section | Logos render as images or section removed per stakeholder decision |
| P2-3 | Newsletter form has no backend integration | `NewsletterSection.tsx` | Wire `onSubmit` to actual API (Mailchimp/Buttondown/etc.) | Form submission works end-to-end |

---

## Specific File Edits

### P1-1: Ensure mobile cards handle 1:1 gracefully

**File:** `src/components/landing2/LatestSection.tsx`

In `ArticleCard`, the content area (`p-6` div) needs overflow protection:
```diff
- <div className="p-6">
+ <div className="p-4 sm:p-6 overflow-hidden flex-1">
```

And title/excerpt should be clamped:
```diff
- <h3 className={`${isLarge ? 'text-[32px]' : 'text-[22px]'} font-medium text-[#111] mb-3 leading-tight`}>
+ <h3 className={`${isLarge ? 'text-[32px]' : 'text-[22px]'} font-medium text-[#111] mb-3 leading-tight line-clamp-2`}>
```

### P1-2: Normalize desktop large card

**File:** `src/components/landing2/LatestSection.tsx`

Option A (simplest): Remove `isLarge` differentiation entirely — all cards uniform:
```diff
- <ArticleCard article={latest} isLarge />
+ <ArticleCard article={latest} />
```

Option B: Keep large card but remove `aspectRatio` constraint on desktop large card and let `row-span-2` control height.

### P1-3: Constrain decorative figures

**File:** `src/components/landing2/HeroSection.tsx`

Already has `overflow-hidden` on parallax container. Verify section also has it (it does: `overflow-hidden` on `<section>`). **No code change needed — just visual QA.**

---

## QA Pass Criteria

### Desktop (≥1024px)
- [ ] Hero: "vista" has visible orange underline, clearly 4px thick
- [ ] Hero: Decorative shapes (ring, grid, plus) visible, not causing horizontal scroll
- [ ] Hero: CTA buttons render side-by-side
- [ ] Latest: No "latest" badge visible on any card
- [ ] Latest: Cards render in 2-column grid with proper spacing
- [ ] Newsletter: Takes full viewport height
- [ ] Newsletter: Background SVG visible on right side
- [ ] Newsletter: Form input + button render inline
- [ ] Newsletter: Partner logos visible

### Mobile (≤640px)
- [ ] Hero: Text readable, buttons stack vertically
- [ ] Hero: Decorative shapes don't overflow
- [ ] Latest: ALL cards render as 1:1 squares (measure with devtools)
- [ ] Latest: No card has different styling from others (no "large" card)
- [ ] Latest: No "latest" badge visible
- [ ] Newsletter: Full viewport height maintained
- [ ] Newsletter: Form stacks vertically (input above button)
- [ ] Newsletter: Background SVG has reduced opacity (40%)

### Cross-cutting
- [ ] No horizontal scroll on any section at any breakpoint
- [ ] No console errors
- [ ] All transitions smooth (hover states on cards, buttons)
- [ ] Color consistency: `#FF5233` accent, `#E4E2D8` background, `#111` text

---

## Blocker Notice

**Requirements #4 and #5 cannot be verified.** The reference repo `https://github.com/vistawtf/landing2` returns 404. Until the stakeholder provides reference material (screenshots, Figma, or working URL), these requirements remain **OPEN/UNVERIFIABLE**.

Current implementation looks intentional and polished, but "matches reference" is a binary pass/fail that requires the reference to exist.
