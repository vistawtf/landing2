# Footer Social Logos Fix

**Priority:** High  
**Requested:** 2026-02-16 by Isaac  
**Context:** Vista strategy session tomorrow (Feb 17) - needs production quality

---

## Problems Identified

**Screenshot evidence:** Isaac provided footer social icons showing:

1. **X (Twitter) logo is incorrect:**
   - Current logo is NOT the official x.com logo
   - Need to replace with official X branding

2. **LinkedIn logo is wrong version:**
   - Isaac previously requested a different LinkedIn logo design
   - Current icon doesn't match his request

---

## Requirements

1. **X logo:** Use official x.com logo (black background version for dark footer)
2. **LinkedIn logo:** Use the version Isaac previously requested (need to verify which one)
3. **Consistent sizing:** Both icons should match Substack icon size
4. **Color scheme:** Work on dark background (#000 or similar)

---

## Current Implementation

**File:** `vista-website/src/components/landing2/FooterSection.tsx`

Icons are likely implemented as:
- SVG inline
- Or image imports
- Need to check current implementation

---

## Action Steps

1. **Find official logos:**
   - X.com: Download official logo from x.com brand assets
   - LinkedIn: **"in" cuadrado** (confirmed by Isaac 2026-02-16)

2. **Implementation details:**
   - LinkedIn: Use the square "in" logo (not bug icon, not full "LinkedIn" wordmark)
   - X: Use official x.com logo

3. **Implementation:**
   - Replace icons in FooterSection.tsx
   - Test on dark background
   - Ensure consistent sizing with Substack icon
   - Verify links still work correctly

4. **QA:**
   - Screenshot footer with new logos
   - Verify icons are crisp (not blurry)
   - Test hover states if any
   - Check mobile view

---

## Success Criteria

- [ ] X logo matches official x.com branding
- [ ] LinkedIn logo matches Isaac's preference
- [ ] Both icons same size as Substack icon
- [ ] Icons work on dark background
- [ ] Links tested and functional
- [ ] Screenshot delivered for Isaac approval

---

## Notes

- Quick fix (15-20 min) - should be batched with other footer work
- May need to ask Isaac which LinkedIn logo version he wants
- Official logos typically available from brand asset pages
