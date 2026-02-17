# DESIGN-PATCH-V4 — Polish Pass (Hero · Latest · Navbar)

> Incremental edits to existing landing2 components. No rewrites. Coder-ready values.

---

## 0. Shared Tokens

```
--rail-left-desktop: 64px   (px-16 = 64px — already set via md:px-16)
--rail-left-mobile:  24px   (px-6 = 24px — already set)
--max-frame:         1200px (already set)
--accent:            #FF5233
--text-primary:      #111111
--text-secondary:    #575757
--surface:           #E4E2D8
--border-rule:       rgba(0,0,0,0.10)
```

These are implicit in the current code. No CSS-variable file needed unless team wants one — just keep all three sections using `max-w-[1200px] mx-auto px-6 md:px-16` verbatim so left edges always align.

---

## 1. Hero Geometry & Proportional Tuning

### 1a. Section height
```diff
- min-h-[88vh] md:min-h-[92vh]
+ min-h-[85vh] md:min-h-[90vh]
```
Rationale: slightly shorter hero keeps the "latest" section peek visible on 1080p screens, inviting scroll.

### 1b. Vertical centering → top-aligned flex
```diff
- flex items-center justify-center
+ flex items-start
```
Content sits at a fixed top offset instead of dead-centering (editorial style). Padding handles placement:
```diff
- pt-20 md:pt-28 pb-16 md:pb-20
+ pt-[140px] md:pt-[180px] pb-16 md:pb-24
```

### 1c. Headline sizing
```diff
- text-[52px] md:text-[72px] lg:text-[76px]
+ text-[44px] md:text-[68px] lg:text-[76px]
```
Mobile `44px` fits better on 375px screens without overflow. Desktop stays bold.

### 1d. Max-width constraint tighten
```diff
- max-w-[620px] md:max-w-[700px]
+ max-w-[560px] md:max-w-[640px]
```
Narrower text block gives more white space to the right for decorative symbols to breathe.

### 1e. Decorative symbol coordinates (reference-faithful)

| Symbol  | Property | Current | → New |
|---------|----------|---------|-------|
| Ring    | top      | -14%    | -10%  |
| Ring    | left     | 58%     | 62%   |
| Ring    | width    | clamp(180px,22vw,300px) | clamp(160px,20vw,260px) |
| Grid    | top      | 52%     | 48%   |
| Grid    | right    | -2%     | 2%    |
| Grid    | width    | clamp(170px,20vw,250px) | clamp(140px,17vw,220px) |
| Plus    | bottom   | -30%    | -20%  |
| Plus    | left     | 33%     | 28%   |
| Plus    | width    | clamp(160px,18vw,230px) | clamp(130px,16vw,200px) |

All three scale down ~15% to avoid competing with headline. Positions shift so they frame the right half without overlapping text column.

### 1f. CTA buttons
```diff
- px-6 py-3 text-base
+ px-7 py-3.5 text-[15px]
```
Slightly wider hit target, tighter font size for editorial feel.

### 1g. Social proof logos — add top margin
```diff
- mt-8 opacity-70
+ mt-10 md:mt-12 opacity-60
```
More breathing room; slightly dimmer so they don't compete.

---

## 2. Latest Section — Editorial Grid

### 2a. Section heading alignment
Already uses `max-w-[1200px] mx-auto px-6 md:px-16` ✅. No change.

### 2b. Heading style tweak
```diff
- text-[36px] md:text-[48px] font-semibold lowercase mb-12
+ text-[32px] md:text-[44px] font-semibold lowercase mb-10 md:mb-14
```
Slightly smaller, responsive bottom margin.

### 2c. Desktop grid — proportions
```diff
- md:grid-cols-[1.15fr_1fr]
+ md:grid-cols-[1.2fr_1fr]
```
Give featured card a bit more width. The 1.2 : 1 ratio better matches editorial reference where lead story dominates.

### 2d. Large card image height
```diff
- h-[52%] md:h-[56%]
+ h-[48%] md:h-[52%]
```
Reduce image area so more headline/excerpt is visible above fold.

### 2e. Large card title size
```diff
- text-[34px] md:text-[40px]
+ text-[28px] md:text-[34px]
```
Current is oversized vs. small cards. This ratio (34 vs 22) is ~1.55× which reads as clear hierarchy without shouting.

### 2f. Small cards — force square aspect
Already has `aspect-square` conditionally. Ensure via:
```tsx
// In ArticleCard, when !isLarge:
className="... aspect-square"
// Remove the style={{ aspectRatio: ... }} line entirely — let Tailwind handle it.
```
```diff
- style={{ aspectRatio: isLarge ? 'auto' : undefined }}
+ // Remove this line
```

### 2g. Small card padding tighten
```diff
- p-5 md:p-6
+ p-4 md:p-5
```
Tighter padding lets content fill the square better.

### 2h. Mobile layout — stacked squares
Current mobile renders cards without forced aspect. Change:
```diff
// Mobile container: change from single column to something that enforces rhythm
- <div className="md:hidden border border-black/[0.10]">
+ <div className="md:hidden border border-black/[0.10] grid grid-cols-1 gap-0">
```
Each mobile card should be `aspect-[4/3]` (not full square — too tall on phone):
```tsx
// Add to ArticleCard mobile-specific logic or wrap:
// On mobile (!isLarge), apply aspect-[4/3] instead of aspect-square
```
Implementation: add a prop or use responsive class:
```diff
- aspect-square
+ aspect-square md:aspect-square aspect-[4/3]
```
Wait — simpler: use responsive aspect:
```diff
className={`... ${isLarge ? '' : 'aspect-[4/3] md:aspect-square'}`}
```

### 2i. "READ MORE" link → subtler
```diff
- text-[15px] font-medium text-[#3F3F3F]
+ text-[13px] font-medium uppercase tracking-[0.05em] text-[#3F3F3F]
```

---

## 3. Navbar Transition & Mobile Menu

### 3a. Scroll transition — smoother height
```diff
- transition-all duration-300
+ transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
```
Apply to the outer `<nav>` element. Slower ease-out feels premium.

### 3b. Logo text reveal
Current `style={{ maxWidth, opacity }}` works but janks. Switch to Tailwind transition:
```diff
// Replace inline style approach with:
<span className={`text-lg font-medium transition-all duration-500 overflow-hidden whitespace-nowrap
  ${inverted ? 'text-[#E4E2D8]' : 'text-[#111111]'}
  ${scrolled ? 'max-w-[80px] opacity-100 mr-1' : 'max-w-0 opacity-0 mr-0'}
`}>
  vista
</span>
```
Remove the `style={{ maxWidth, opacity, marginRight }}` object entirely.

### 3c. Mobile hamburger — breakpoint consistency
Currently `md:hidden` for hamburger but `lg:flex` for nav links. This leaves a dead zone (md–lg) with only Subscribe button. Fix:
```diff
// Hamburger:
- md:hidden
+ lg:hidden

// Remove the md-only Subscribe button entirely:
- <Link className="hidden md:inline-flex lg:hidden ...">Subscribe</Link>
```
Now: `<lg` = hamburger, `≥lg` = full nav. Clean single breakpoint.

### 3d. Mobile menu — slide animation
Replace hard `{menuOpen && ...}` with animated mount:
```tsx
<div className={`lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
  ${menuOpen ? 'max-h-[300px] opacity-100 pb-5 pt-2' : 'max-h-0 opacity-0 pb-0 pt-0'}
`}>
  <div className={`border-t ${inverted ? 'border-white/[0.08]' : 'border-black/[0.08]'}`}>
    <div className="flex flex-col gap-4 pt-4">
      {/* ...links... */}
    </div>
  </div>
</div>
```
Always rendered in DOM, animated via max-height + opacity. No conditional mount.

### 3e. Mobile menu link sizing
```diff
- text-base
+ text-[17px] py-1
```
Bigger tap targets, slight vertical padding per link.

### 3f. Backdrop blur value
```diff
- backdropFilter: 'blur(12px)'
+ backdropFilter: 'blur(16px) saturate(1.4)'
```
Richer frosted glass. `saturate` keeps the warm surface color through.

---

## 4. Spacing & Type Tweaks (Mobile Readability)

### 4a. Hero subhead on mobile
```diff
- text-[18px] md:text-[20px] ... max-w-[540px]
+ text-[16px] md:text-[20px] leading-[1.6] max-w-[480px] md:max-w-[540px]
```

### 4b. Latest card category label
```diff
- text-[11px] tracking-[0.1em] mb-3
+ text-[11px] tracking-[0.12em] mb-2
```

### 4c. Latest card small title
```diff
- text-[20px] md:text-[22px]
+ text-[18px] md:text-[21px]
```
Prevents 2-line overflow in square cards on medium screens.

### 4d. Latest card excerpt on mobile
```diff
- text-[16px] line-clamp-2
+ text-[14px] leading-[1.5] line-clamp-2
```

### 4e. Global touch: underline offset on hero "vista"
```diff
- textUnderlineOffset: '0.18em'
+ textUnderlineOffset: '0.22em'
```
Slightly more breathing room between text and red underline.

---

## Summary of Files to Edit

| File | Changes |
|------|---------|
| `HeroSection.tsx` | §1a–1g |
| `LatestSection.tsx` | §2a–2i, §4b–4d |
| `Navigation.tsx` | §3a–3f |

No new files. No new dependencies. Newsletter section untouched.
