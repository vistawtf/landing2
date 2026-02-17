# Pending: White Background Iterations Testing
**Queued:** 2026-02-16 16:41 UTC  
**Priority:** HIGH (Isaac directive)  
**Requested by:** Isaac

## Task

Test TWO color iterations - moving from current beige to white/gray schemes.

## Iteration 1: Alabaster White

**Colors:**
- Page background: `#FAFAFA` (alabaster white)
- Article cards: `#F2F2F2` (light gray)

**Changes needed:**
- Update page background (currently #E4E2D8 beige)
- Update article cards background (currently #2D2D2D gray)
- Verify text colors work (may need adjustment)

## Iteration 2: Pure White

**Colors:**
- Page background: `#FFFFFF` (pure white)
- Article cards: `#FAFAFA` (alabaster white - subtle cards on white)

**Changes needed:**
- Page background to pure white
- Article cards to alabaster
- Verify sufficient contrast between cards and page

## Implementation

### Files to modify:

**1. Page background:**
- Likely in `src/app/page.tsx` or layout
- Current: `#E4E2D8` (WARM BEIGE)
- Change to: `#FAFAFA` (iter 1) or `#FFFFFF` (iter 2)

**2. Article cards:**
- `/src/components/landing2/LatestSection.tsx`
- Current: `#2D2D2D` (IDLE GRAY)
- Change to: `#F2F2F2` (iter 1) or `#FAFAFA` (iter 2)

**3. Text colors adjustment:**
- Currently: White text on dark cards
- Need: Dark text on light cards
- Change text from white to dark (probably #111 or #2D2D2D)
- Update category badges
- Update "READ MORE" buttons

### Testing protocol:

**For EACH iteration:**

1. **Implement colors:**
   - Update page background
   - Update card backgrounds
   - Adjust text colors (white → dark)
   - Adjust hover states appropriately

2. **Build + restart:**
   ```bash
   npm run build
   pkill -f "next dev"
   cd /root/clawd/vista-website && npm run dev
   ```

3. **Screenshot:**
   - Full page view
   - Show hero + latest section
   - Annotate with iteration number
   - Save as `white-iter-1.png` or `white-iter-2.png`

4. **Document:**
   - What changed
   - Text readability
   - Visual contrast assessment
   - Any issues

## Success Criteria

- [ ] Iteration 1 implemented and screenshot
- [ ] Iteration 2 implemented and screenshot
- [ ] Text readable in both iterations
- [ ] Cards visible against page background
- [ ] Hover states work
- [ ] Build passes for both
- [ ] Both screenshots delivered to Isaac
- [ ] Original colors can be restored if needed

## Notes

**Major shift:** Moving from warm beige (#E4E2D8) to cool whites/grays.

**Text color critical:** Current white text won't work on light backgrounds. Must flip to dark text.

**Contrast:** Iteration 2 (#FFF page, #FAFAFA cards) has VERY subtle contrast - verify cards are distinguishable.

## Deliverables

1. `white-iter-1.png` - Alabaster iteration screenshot
2. `white-iter-2.png` - Pure white iteration screenshot
3. Brief comparison notes
4. Isaac chooses which to keep (or revert to beige)

---
**Status:** PENDING (add to queue)
**Expected effort:** 45-60 min (two full iterations + screenshots)
