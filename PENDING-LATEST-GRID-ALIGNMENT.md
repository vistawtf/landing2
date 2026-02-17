# Pending: Latest Section Grid Alignment Fix
**Queued:** 2026-02-16 15:22 UTC  
**Priority:** After RSS integration complete  
**Requested by:** Isaac

## Problem Identified

**Visual Issue:** The large article card (left) creates a separation line that does NOT align with the boundaries of the 4 small articles (right).

**Isaac's Screenshots:**
- Photo 1: Full grid view showing misalignment
- Photo 2: Close-up showing the separation line between large card image and small card boundaries

## Requirements

### Hard Constraint
- **4 small articles MUST be 1:1 ratio** (square) - NON-NEGOTIABLE

### What Needs Fixing
- Large article card image size/aspect ratio distribution
- The large card's image edge should align perfectly with the grid boundaries of the 4 small cards
- Currently the large card image creates a visual "split line" that doesn't match the 2x2 grid on the right

## Investigation Needed

1. **Measure current grid:**
   - Large card: What's the current image height?
   - Small cards: What's the current size (should be 1:1)
   - Gap/spacing between cards
   - Is there a height mismatch?

2. **Root cause analysis:**
   - Is large card image using aspect-ratio or fixed height?
   - Are small cards truly 1:1 or slightly off?
   - Is there padding/border throwing off alignment?
   - Does the grid system have proper constraints?

3. **Alignment math:**
   - If small cards are 1:1 at height H
   - Then 2 small cards stacked = 2H + gap
   - Large card image should be exactly 2H + gap
   - Check if this math is correct in current implementation

## Potential Solutions to Test

**Approach A: Fix large card image height**
```tsx
// Large card image should match height of 2 small cards + gap
<div className="aspect-[2/1]">  // or calculated height
  <Image ... />
</div>
```

**Approach B: Ensure small cards are truly 1:1**
```tsx
// Small cards must be perfect squares
<div className="aspect-square">
  <Image ... />
</div>
```

**Approach C: Use CSS grid fr units**
```css
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
```

## Success Criteria
- [ ] 4 small cards are perfect 1:1 squares
- [ ] Large card image edge aligns with 2x2 grid boundaries
- [ ] No "split line" misalignment visible
- [ ] Layout works responsively
- [ ] Visual verification with screenshots (before/after)
- [ ] Isaac approves alignment

## Technical Context
- Current layout: 1 large (left, spans 2 rows) + 4 small (right, 2x2 grid)
- File: `/root/clawd/vista-website/src/components/landing2/LatestSection.tsx`
- Grid is using Tailwind CSS classes
- Recently updated with RSS integration

## Notes
Isaac emphasizes: "el equipo que investigue, documente, analice y resuelva"
- Must investigate thoroughly
- Document findings
- Analyze root cause
- Resolve completely with visual proof

---
**Status:** PENDING (queued after RSS integration)
**Next Steps:** Assign to team for investigation + iterative fixes
