# Pending: Latest Section Background Color Adjustment
**Queued:** 2026-02-16 15:59 UTC  
**Priority:** HIGH (immediate feedback from Isaac)  
**Requested by:** Isaac

## Problem

**Current implementation:** Black background (#111) on article cards  
**Isaac's feedback:** "el negro me pareció muy fuerte, demasiado contraste con el fondo"

**Issue:** Too much contrast between black article cards and beige page background.

## Task

Choose a different background color from Vista's official color palette - preferably a **gray** that has less contrast with the beige page background.

## Investigation Required

### 1. Review Vista Color Palette

**Reference:** `/root/clawd/vista-website/VISTA-COLORS.md`

**Find:**
- Current page background: `#E4E2D8` (WARM BEIGE)
- Available grays in palette
- Neutral colors that could work

### 2. Contrast Calculation

**Current (too strong):**
```
Background: #E4E2D8 (beige, light)
Cards: #111111 (black, dark)
Contrast ratio: Very high ❌
```

**Target (softer):**
```
Background: #E4E2D8 (beige, light)
Cards: [GRAY from palette]
Contrast ratio: Medium (readable but not harsh)
```

### 3. Test Options

**From Vista palette, try:**
- Dark gray variants (if available)
- Charcoal tones
- Any neutral that's between beige and black

**Ensure:**
- White text remains readable on chosen background
- Category badges visible
- "READ MORE" buttons have good contrast

## Implementation

**File to update:**
`/root/clawd/vista-website/src/components/landing2/LatestSection.tsx`

**Current code:**
```tsx
bg-[#111] hover:bg-[#1a1a1a]  // Too strong contrast
```

**New code (example):**
```tsx
bg-[PALETTE_GRAY] hover:bg-[DARKER_GRAY]
```

## Testing Checklist

- [ ] Reviewed VISTA-COLORS.md for available grays
- [ ] Tested chosen color with white text (readable?)
- [ ] Verified contrast with beige background (not too harsh?)
- [ ] Category badges still visible
- [ ] Hover state works (slightly darker)
- [ ] Build passes
- [ ] Screenshot showing new background vs. beige page

## Success Criteria

- [ ] Background color from Vista official palette
- [ ] Less contrast than black (#111)
- [ ] White text still readable
- [ ] Isaac approves the visual balance

## Isaac's Direction

> "lo unico que el negro me pareció muy fuerte, demasiado contraste con el fondo. Puedes escoger otro color de la paleta de colores de vista? quizas un gris o algo?"

**Translation for team:** Current black is too harsh against beige background. Choose a gray from Vista palette that's softer/less contrasty.

---
**Status:** PENDING (queued for immediate batch)
**Expected effort:** 15-30 min (quick color swap from palette)
