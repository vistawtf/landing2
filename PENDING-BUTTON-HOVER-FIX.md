# Pending: Primary Button Hover State Fix
**Queued:** 2026-02-16 15:46 UTC  
**Priority:** After readability research  
**Requested by:** Isaac

## Problem

The primary button (orange CTA used throughout the site) currently gets **lighter** on hover, but it should get **darker** to indicate depth/pressing.

**Current behavior:** Orange → Lighter orange on hover ❌  
**Desired behavior:** Orange → Darker orange on hover ✅

## Investigation Required

### 1. Find Current Button Component

**Likely locations:**
- `/src/components/landing2/Navigation.tsx` (Subscribe button)
- `/src/components/landing2/NewsletterSection.tsx` (Subscribe button)
- `/src/components/landing2/LatestSection.tsx` (Read More buttons)
- Shared component file (Button.tsx, CTAButton.tsx, etc.)

**Document:**
- Where is the button component defined?
- Current color values (idle, hover, active)
- Current Tailwind classes used

### 2. Check Vista Color Palette

**Reference:** `/root/clawd/vista-website/VISTA-COLORS.md`

**Find:**
- Current primary orange: `#FF5233` (Vista brand orange)
- Is there a darker orange variant in the palette?
- What are the official color options?

### 3. Determine Solution Path

**Path A: If darker orange exists in palette**
```tsx
// Use existing darker orange for hover
className="bg-[#FF5233] hover:bg-[DARKER_ORANGE]"
```

**Path B: If NO darker orange in palette**
```tsx
// Shift colors:
// - New idle: Lighter orange (create new shade)
// - New hover: Current #FF5233 (becomes the "pressed" state)
className="bg-[LIGHTER_ORANGE] hover:bg-[#FF5233]"
```

## Implementation Steps

1. **Audit all primary buttons:**
   ```bash
   grep -r "Subscribe" src/components/landing2/
   grep -r "READ MORE" src/components/landing2/
   grep -r "#FF5233" src/
   ```

2. **Check palette:**
   ```bash
   cat /root/clawd/vista-website/VISTA-COLORS.md
   ```

3. **Create darker shade if needed:**
   ```js
   // If no darker orange exists, calculate:
   // #FF5233 → darken by 15-20%
   // Example: #E64A2E or #CC3D26
   ```

4. **Update button classes:**
   - Find all instances of primary button
   - Apply consistent hover state
   - Test with current #FF5233 or new shades

5. **Verify across all uses:**
   - Subscribe button (navbar)
   - Subscribe button (newsletter section)
   - Read More buttons (article cards)
   - Any other CTAs using primary orange

## Color Generation Guidelines

**If creating new shades:**

**Option 1: Shift current to idle, darken for hover**
- Idle: `#FF6B4D` (lighter, ~15% brighter)
- Hover: `#FF5233` (current becomes hover)
- Active: `#E64A2E` (even darker if needed)

**Option 2: Keep current as idle, add darker hover**
- Idle: `#FF5233` (current)
- Hover: `#E64A2E` (darken by ~15%)
- Active: `#CC3D26` (darken by ~30%)

**Test both options** and recommend based on:
- Which feels more natural
- Which maintains brand consistency
- Which provides better contrast

## Technical Notes

**Depth indication principles:**
- Hover state should feel like button is "ready to press"
- Active state (click) should feel like button is "pressed down"
- Lighter = surface coming up (wrong for buttons)
- Darker = surface pressed in (correct for buttons)

**Tailwind implementation:**
```tsx
<button className="
  bg-vista-orange          // idle
  hover:bg-vista-orange-dark   // hover
  active:bg-vista-orange-darker // active
  transition-colors duration-200
">
```

Or inline hex if not in Tailwind config:
```tsx
<button className="
  bg-[#FF5233]
  hover:bg-[#E64A2E]
  active:bg-[#CC3D26]
  transition-colors duration-200
">
```

## Success Criteria

- [ ] All primary buttons identified
- [ ] Vista palette reviewed (VISTA-COLORS.md)
- [ ] Solution path determined (use existing darker or create new shades)
- [ ] Hover state changed: darker on hover (not lighter)
- [ ] Consistent across all button instances
- [ ] Transition smooth (200ms)
- [ ] Tested in browser (visual verification)
- [ ] Isaac approves the depth feeling

## Isaac's Direction

> "No me gusta que cuando le haces hover se ponga un tono de naranja más claro, se debería poner más oscuro señalando profundidad. Revisa la paleta de colores de vista y si hay un naranja más oscuro usa ese, si no tendrás que cambiar el color idle a uno más claro para que uses el actual como oscuro, if that makes sense"

**Translation for team:** 
1. Check if Vista palette has darker orange
2. If YES → use for hover
3. If NO → make current color the hover state, create lighter color for idle
4. Goal: hover feels like pressing down (darker), not lighting up (lighter)

---
**Status:** PENDING (queued after readability research)
**Files to check:** VISTA-COLORS.md, all button components
**Expected effort:** 30-60 min (audit + implementation)
