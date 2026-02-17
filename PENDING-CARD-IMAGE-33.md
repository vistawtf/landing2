# Pending: Article Card Updates - Images 33% + Remove Tags
**Queued:** 2026-02-16 17:28 UTC  
**Updated:** 2026-02-16 17:31 UTC (added tag removal)  
**Priority:** MEDIUM  
**Requested by:** Isaac

## Task

**Two changes to article cards:**

1. Adjust the images in 1:1 article cards (4 small cards in 2x2 grid) to occupy **33% of the card height**
2. **Remove category tags/badges** (AI, DeFi, Infra, etc.) from ALL cards (large + small)

## Current State

**Small cards (1:1 aspect ratio):**
- Currently images are at a different height percentage
- Need to be exactly 33% of card height

**Large card:**
- Leave as-is (this task only affects the 4 small cards)

## Implementation

**File:** `/root/clawd/vista-website/src/components/landing2/LatestSection.tsx`

### Change 1: Remove Category Tags

Find and remove category badge display:
```tsx
// Remove this (or similar):
<span className="... category-badge">{article.category}</span>
```

Remove from:
- Large card
- All 4 small cards

**Result:** Cards show only: Image, Title, Description (large only), READ MORE

### Change 2: Adjust Small Card Images

Look for image wrapper in small cards (where `!isLarge`):

```tsx
// Current (probably)
<div className="relative h-[40%] ...">
  <Image ... />
</div>

// Change to
<div className="relative h-[33%] ...">
  <Image ... />
</div>
```

### Visual Impact

**Before:** Images at current height (likely 40%)  
**After:** Images at 33% → More space for text below

**33% means:**
- If card is 300px tall
- Image = 100px (33%)
- Text area = 200px (67%)

## Testing

- [ ] Small cards (1:1) have images at exactly 33% height
- [ ] Large card unchanged
- [ ] Text doesn't overflow with new proportions
- [ ] All 4 small cards look consistent
- [ ] Build passes
- [ ] Screenshot verification

## Success Criteria

- [ ] Image height = 33% on small cards only
- [ ] Large card untouched
- [ ] Visual balance maintained
- [ ] Build passes
- [ ] Isaac approves proportions

---
**Status:** PENDING (add to queue)
**Expected effort:** 15-20 min (simple height adjustment)
