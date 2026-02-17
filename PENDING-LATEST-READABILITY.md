# Pending: Latest Section Readability & Styling
**Queued:** 2026-02-16 15:23 UTC  
**Priority:** After grid alignment fix  
**Requested by:** Isaac

## Problems to Fix

### 1. Background Color Change
**Requirement:** Grid background should be black (#111 or #000) to differentiate from beige page background.

**Changes needed:**
- Change article cards background from current (beige/gray) to black
- Change text color to white for contrast
- Maintain readability and visual hierarchy
- Ensure category badges remain visible

### 2. Readability Crisis in 2x2 Grid
**Current problem:** Multiple titles and subtitles are getting cut off (truncated).

**Isaac's question:** Should we:
- ❓ Remove photos from 2x2 small cards?
- ❓ Remove subtitle/description from 2x2 small cards?
- ❓ Adjust font sizes/spacing to fit everything?
- ❓ Other layout solutions?

## Investigation Required

### 🎯 PRIMARY GOAL (Isaac directive)
**Optimize for:** User experience + subscriptions/reader conversions

When researching and evaluating options, prioritize:
- Which layout drives more clicks to articles?
- Which makes users want to subscribe?
- Which feels most trustworthy/professional?
- Which showcases content best to hook readers?

**NOT optimizing for:** Pure aesthetics or designer preference

### Research Best Practices
**Task:** Investigate how other editorial/news sites handle small article cards.

**Sites to research:**
- Medium homepage grids (subscription-focused)
- Substack discovery pages (reader conversion)
- The Verge article grids
- TechCrunch layouts
- NYT homepage cards (paywall conversion)
- a16z.com article grids
- Other crypto/tech publications

**Questions to answer:**
1. Do they show images in small cards?
2. How much text do they show (title only? title + snippet?)
3. What aspect ratios do they use?
4. How do they handle text overflow?
5. What's the typical font size hierarchy?
6. **Which patterns are most common on high-converting newsletter/subscription sites?**

### Current State Analysis
**Measure current implementation:**
- Small card dimensions (width x height)
- Image height (if shown)
- Title font size + line height
- Description font size + line height
- Padding/spacing between elements
- Available space for text

### Content Analysis
**Test with real RSS data:**
- Average title length (characters)
- Average description length
- Longest titles in current feed
- How many lines needed for typical content?

## Potential Solutions to Test

### Option A: Text-Only Small Cards
```
[Category Badge]
Title (2-3 lines max)
READ MORE →
(No image, no description)
```
**Pros:** Simple, clean, text always fits
**Cons:** Less visual interest, no preview

### Option B: Image + Title Only
```
[Image - 40-50% of card height]
[Category Badge]
Title (2-3 lines max)
READ MORE →
(No description)
```
**Pros:** Visual + title, balanced
**Cons:** Less context about article

### Option C: Smaller Image + Title + Snippet
```
[Small Image - 30% height]
[Category Badge]
Title (2 lines max)
Description (1-2 lines)
READ MORE →
```
**Pros:** Full preview
**Cons:** Might still truncate

### Option D: Dynamic Content
- Show full title + description if it fits
- Show only title if description too long
- Responsive to content length

### Option E: Increase Card Size
- Make 2x2 grid bigger (more space for text)
- Adjust large card to maintain alignment
- Cons: Takes more screen space

## Testing Protocol

For EACH option:
1. **Mock up in code** with real RSS data
2. **Screenshot** at actual viewport size
3. **Test edge cases:**
   - Short titles (~30 chars)
   - Long titles (~100+ chars)
   - Long descriptions
   - Missing images
4. **Document:**
   - What fits comfortably
   - What gets cut off
   - Visual appeal rating
   - Pros/cons

## Deliverables

1. **Research Report:**
   - Screenshots from 5-10 reference sites
   - Analysis of their approaches
   - Common patterns identified

2. **Options Comparison:**
   - Side-by-side screenshots of Options A-E
   - Pros/cons for each
   - Recommendation with reasoning

3. **Implementation:**
   - Chosen solution implemented
   - Black background applied
   - White text with proper contrast
   - All edge cases tested

4. **Visual Proof:**
   - Before/after screenshots
   - Demonstration with long/short titles
   - Mobile + desktop views

## Success Criteria
- [ ] Black background applied to article grid
- [ ] White text readable on black
- [ ] NO text truncation visible on ANY card
- [ ] Solution works with varying content lengths
- [ ] Research-backed decision (not just guessing)
- [ ] **Optimized for conversions:** Layout choice backed by analysis of high-performing subscription/newsletter sites
- [ ] **User experience:** Makes readers want to click and subscribe
- [ ] Isaac approves the layout choice

## Design Constraints
- 4 small cards MUST remain 1:1 (square)
- Layout must work with RSS feed (real, unpredictable content)
- Maintain Vista's square philosophy (2px border-radius max)
- Preserve "READ MORE" buttons
- Keep category badges

## Notes
Isaac emphasizes: "investigues en internet o con tus skills o lo que sea necesario"
- This requires REAL research, not just guessing
- Look at actual examples from successful sites
- Test multiple options
- Document reasoning
- Present findings before implementing

**🎯 CRITICAL REMINDER (Isaac):**
> "que recuerden que queremos optimizar por experiencia y suscripciones/lectores, eso es lo que tienen que revisar en su research para ver cual de las opciones creen que seria la mejor"

**Translation for team:** Don't just make it look pretty. Research what drives subscriptions and readership. Look at successful newsletter/subscription sites (Medium, Substack, NYT) and identify patterns that convert visitors to subscribers. Choose the option that best drives reader engagement and subscription conversions, backed by evidence from high-performing sites.

---
**Status:** PENDING (queued after grid alignment)
**Research Required:** YES (mandatory before implementation)
**Expected Effort:** 2-3 iterations with research phase
**Primary Metric:** Conversion optimization (not just aesthetics)
