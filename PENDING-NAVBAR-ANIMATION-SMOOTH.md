# Pending: Navbar Logo Animation Smoothing
**Queued:** 2026-02-16 16:01 UTC  
**Priority:** MEDIUM  
**Requested by:** Isaac

## Problem

The navbar logo animation (when "vista ₊˚⊹" appears/disappears on scroll) needs to be smoother.

**Current behavior:** Animation exists but feels abrupt/not smooth enough  
**Desired behavior:** Smoother, more polished transition

## Investigation Required

### 1. Find Current Animation

**File:** `/src/components/landing2/Navigation.tsx`

**Look for:**
- Scroll-triggered logo animation
- "vista" text appearing/disappearing
- Stars "₊˚⊹" animation
- Transition/animation classes

**Document:**
- Current transition duration
- Current easing function
- What triggers the animation (scroll threshold?)
- What properties animate (opacity? width? transform?)

### 2. Identify Smoothness Issues

**Possible problems:**
- Too fast transition (< 200ms)
- Wrong easing function (linear instead of ease-in-out)
- Abrupt opacity change
- Missing transform transitions
- No stagger between elements

### 3. Improvement Options

**Duration:**
```tsx
// Current (guess)
transition-all duration-200

// Smoother options
transition-all duration-300  // 50% longer
transition-all duration-500  // Much smoother
```

**Easing functions:**
```tsx
// Current (if linear)
transition-all

// Better options
ease-in-out  // Smooth start and end
ease-out     // Quick start, smooth end
cubic-bezier(0.4, 0, 0.2, 1)  // Custom curve
```

**Staggered animation:**
```tsx
// Animate logo and stars separately with slight delay
<span className="transition-opacity duration-300">vista</span>
<span className="transition-opacity duration-300 delay-75">₊˚⊹</span>
```

## Current Animation Details (from previous work)

From Feb 15 redesign notes:
- Logo animation: `₊˚⊹` expands to `vista ₊˚⊹` on scroll
- Transition: 300ms
- Navbar auto-inverts background based on scroll

**Check:**
- Is it opacity-based?
- Is it width-based?
- Is it transform-based?

## Implementation

**Likely changes needed:**

1. **Increase duration:**
   ```tsx
   transition-[max-width,opacity,transform] duration-300
   // Change to duration-400 or duration-500
   ```

2. **Add easing:**
   ```tsx
   transition-[...] duration-400 ease-in-out
   ```

3. **Add transform for smoother motion:**
   ```tsx
   transform translate-x-0 transition-transform duration-400
   ```

4. **Test scroll threshold:**
   - Maybe animation triggers too late/early
   - Adjust scroll position threshold

## Testing Checklist

- [ ] Current animation documented (duration, easing, properties)
- [ ] Tested with longer duration (400ms, 500ms)
- [ ] Tested with different easing (ease-in-out, ease-out)
- [ ] Verified smooth appearance on scroll down
- [ ] Verified smooth disappearance on scroll up
- [ ] No jank or abrupt changes
- [ ] Build passes
- [ ] Visual verification in browser

## Success Criteria

- [ ] Animation feels smoother/more polished
- [ ] No abrupt opacity/width changes
- [ ] Appropriate easing function applied
- [ ] Duration optimized (not too slow, not too fast)
- [ ] Isaac approves the smoothness

## Isaac's Direction

> "la animacion de cuando aparece y desaparece vista en el navbar se puede hacer un poco mas smooth?"

**Translation for team:** The navbar logo animation (vista text appearing/disappearing on scroll) needs to be smoother. Current animation exists but isn't smooth enough - improve transition timing and easing.

---
**Status:** PENDING (queued after background color fix)
**Expected effort:** 30-45 min (find animation, adjust timing/easing, test)
