# URGENT: Navbar Animation - Revert Broken Changes
**Created:** 2026-02-16 16:07 UTC  
**Priority:** CRITICAL - Isaac feedback  
**Issue:** Stars ₊˚⊹ not visible in hero position

## Problem

**What was asked:** Make EXISTING animation smoother (just timing/easing)  
**What was delivered:** Changed animation fundamentally, broke initial state  
**Result:** Stars ₊˚⊹ don't show when at top of page (hero position)

**Isaac's feedback:**
> "ahora las estrellas no se ven cuando estoy posicionado en el hero, algo esta obviamente mal y el QA no se si esta siendo tan bueno, solo queria suavizar lo que ya estaba, no cambiarlo fundamentalmente"

## Expected Behavior (ORIGINAL)

**At top (hero):**
- Show: `₊˚⊹` (stars only)
- Hidden: "vista" text

**After scroll:**
- Show: `vista ₊˚⊹` (text + stars)
- Transition: Smooth expansion

## Current Broken Behavior

**At top (hero):**
- Show: NOTHING (stars missing!) ❌
- This is the bug

## Fix Required

**REVERT the animation changes and ONLY adjust timing/easing:**

1. **Restore original visibility logic:**
   - Stars MUST be visible at top
   - Only "vista" text should be hidden initially
   - Don't touch show/hide logic!

2. **ONLY change these (and nothing else):**
   ```tsx
   // Just make smoother:
   duration-300 → duration-450
   ease-out → cubic-bezier(0.22,1,0.36,1)
   
   // DON'T TOUCH:
   - Initial state (what shows at top)
   - Visibility conditions
   - Scroll triggers
   - Transform properties
   ```

## QA Checklist (MANDATORY)

Before reporting complete:
- [ ] **At top of page:** Stars ₊˚⊹ ARE VISIBLE
- [ ] **After scroll:** "vista" text appears, stars stay visible
- [ ] **Animation:** Smoother than before (450ms, better easing)
- [ ] **Behavior:** IDENTICAL to original (just smoother)
- [ ] **Screenshot:** Show stars visible at hero position
- [ ] **Test:** Scroll up and down multiple times

## What Went Wrong

**QA Failure Points:**
1. Didn't test initial state (top of page)
2. Changed behavior instead of just timing
3. Delivered without verifying basic functionality
4. Screenshot from Isaac shows the problem clearly

## Lesson

**When asked to "make smoother":**
- ✅ Change: duration, easing, timing
- ❌ Don't change: visibility, logic, behavior, initial state

**Always test:**
- Initial load state
- All scroll positions
- Both directions (up/down)

---
**Status:** CRITICAL FIX NEEDED
**Expected time:** 15-30 min (revert + timing only)
