# Vista Website Redesign Brief V3 — FINAL
**Date:** 2026-02-15  
**Status:** Awaiting Isaac Approval  
**Iterations:** V1 failed (recycled design), V2 failed (recycled design), V3 = START FROM SCRATCH

---

## WHY V1 & V2 FAILED

**Both teams recycled the existing design instead of starting from zero.**

Evidence:
- Rotated SVG symbols (violated sacred brand elements)
- "01 —— WHAT WE DO" separators (explicitly rejected in brief)
- 90% same structure as original
- Didn't study references deeply, just copied surface patterns

**V3 MANDATE:**
1. **DELETE** all code in `/src/app/landing2/` and `/src/components/landing2/`
2. **START** from blank canvas
3. **REFERENCE** Stripe/are.na/Works in Progress for principles, NOT main branch for structure
4. **PRESERVE** only sacred brand elements (exact specs below)

---

## CLIENT CONTEXT (Isaac)

**Role:** Lido PM, Vista founder, crypto/AI expert  
**Expertise:** Deep blockchain knowledge, but NOT web design expert  
**Needs:** Guidance from team on conversion/SEO/UX best practices  

**What Isaac wants:**
- Website that feels **edgy with authority but accessible**
- "We're at the frontier" — serious but young (not afraid of hot takes/memes)
- 5-second impression: "Best team for blockchain+AI, experienced but approachable"
- Mobile-first (will show at conferences, needs to communicate instantly)

**What Isaac explicitly does NOT want:**
- Recycled design from current site
- Long dashes and AI-sounding copy
- Inflated stats we don't have
- Generic corporate vibe

---

## SACRED BRAND ELEMENTS (DO NOT CHANGE)

### 1. Vista Logo Stars: ₊˚⊹
```
Exact character sequence: ₊˚⊹
Color: #FF5233 (ultra-orange)
Positioning: Always to the RIGHT of "vista" text
Spacing: 4px margin-left from "vista"
Rotation: NONE (0deg, never rotate these stars)
Size: Relative to parent text size
```

**Critical:** These are not decorative SVGs. These are the brand identifier. Never rotate, tilt, or modify.

### 2. Decorative SVG Symbols
Three shapes used as background decoration:
- **Ring/Circle** (from main branch: Hero.tsx, circle SVG path)
- **Grid/Plus** (from main branch: Hero.tsx, plus SVG path)  
- **Cross** (from main branch: Hero.tsx, cross SVG path - note: in V1/V2 this was INCORRECTLY rotated)

**Usage:**
- Can reposition, rescale, change opacity
- CANNOT rotate (keep rotation: 0deg or remove transform entirely)
- Use sparingly as background elements, not primary focus
- Subtle opacity (0.04-0.08)

### 3. Colors
```css
--ultra-orange: #FF5233  (primary accent, CTAs, highlights)
--ultra-blue: (check main globals.css for exact value)
--background: light mode default, dark mode supported
--foreground: high contrast text
--muted: secondary text
--border: subtle borders (1px, low opacity)
```

**Usage:**
- Orange = CTAs, links, highlights, logo stars
- Blue = optional secondary accent (subtle gradients ok)
- Background/foreground = respect light/dark mode
- Generous whitespace, minimal borders

### 4. Typography
```css
Font family: Geist (already configured)
Weights: 400 (regular), 500 (medium), 600 (semibold)

Scale:
- Display (hero): 4-6rem (64-96px)
- H1 (section headlines): 2.5-3.5rem (40-56px)
- H2 (subsections): 1.5-2rem (24-32px)
- Body: 1.125-1.25rem (18-20px) — READABLE on mobile
- Caption: 0.875-1rem (14-16px)

Line-height:
- Headlines: 1.1-1.2 (tight)
- Body: 1.6-1.8 (generous, readable)

Letter-spacing:
- Display: -0.02em (tight)
- Body: normal (0)
```

### 5. Dark Mode
- Toggle in nav (keep existing DarkModeToggle component)
- Respect system preference as default
- Smooth transition (200ms)

---

## REFERENCES (What to Copy & Why)

### Stripe (https://stripe.com)
**What Isaac likes:**
- Case studies with expandable cards (one open, others collapsed)
- Navigation flow
- Use of colors and shapes for hierarchy
- Animations that guide attention
- Stats as social proof ($1.4tn processed, 99.999% uptime)
- Clear communication ("helps me understand everything")

**What to copy:**
- **Hero**: Big headline, clear value prop, dual CTAs, subtle gradient backgrounds
- **Stats section**: Large numbers with context, counter animations on scroll
- **Card interactions**: Hover states that lift/shadow, smooth transitions
- **Scroll animations**: Fade-in + translateY, staggered timing
- **Color blocking**: Use of background tints to separate sections
- **Case studies structure**: If we add client stories, use expandable cards

**What NOT to copy:**
- Their exact layout (we're not a payment processor)
- Heavy product screenshots (we're research/services, more abstract)

### Are.na (https://are.na)
**What Isaac likes:**
- Simplicity and modularity
- Clean, modular, generous whitespace
- "Relaxes confidence" — uncluttered, intentional
- Philosophy visible on homepage (not hidden in About)
- Transparency (18,791 supporters shown publicly)

**What to copy:**
- **Whitespace**: Radical breathing room between sections (80-120px gaps)
- **Typography-first**: No decorative elements, words do the work
- **Philosophy section**: "The Secret" style — bold statements + brief explanations
- **Modular boxes**: Simple borders, generous internal padding, no shadows
- **Honesty**: Show real stats, don't inflate numbers
- **Content over chrome**: Minimal UI, maximum content clarity

**What NOT to copy:**
- Their extreme minimalism (Isaac wants "less radical" whitespace)
- Black & white only (we have orange/blue brand colors to use)

### Works in Progress (Stripe publication, 2nd reference image)
**What Isaac sent:**
- Example of article grid layout
- Typography treatment (serif headlines, clean body text)
- Bordered boxes with tags
- 1 featured article (large, left, red background) + grid of smaller articles (right)

**What to copy:**
- **Article layout**: 1 featured (50% width, left) + 4 articles in 2x2 grid (right)
- **Box style**: Clean borders, tags/labels inside, "Read more →" links
- **Typography hierarchy**: Large headlines, clear excerpts
- **Category tags**: Small pills/labels (e.g., "Spotlight", "Issue 21")
- **Whitespace in grids**: Generous gaps between cards (16-24px)

### Vista Sketch (1st reference image)
**Isaac's own Figma mockup** — this is the MOST important reference.

**Layout:**
```
┌─────────────────────────────────────────┐
│ vista investigates the future internet  │
│ A research hub for builders, investors, │
│ and explorers in blockchain and AI      │
├─────────────────────────────────────────┤
│                THE LATEST                │
├──────────────────────┬──────────────────┤
│                      │  Article 2 │ Art3│
│   FEATURED           ├──────────────────┤
│   Article 1          │  Article 4 │ Art5│
│   (large, 50% width) │                  │
│                      │  (2x2 grid)      │
├──────────────────────┴──────────────────┤
│   Newsletter signup (dark bg, orange)   │
└─────────────────────────────────────────┘
```

**What to copy EXACTLY:**
- Hero: "vista investigates the future internet" + tagline
- Article section title: "the latest"
- Layout: 1 featured (left, 50%) + 4 grid (right, 2x2)
- Featured article: "FEATURED" badge, large image/color block, title, excerpt, "READ MORE →"
- Grid articles: Smaller cards, image/color, title, category, "READ MORE →"
- Newsletter: Dark background, orange CTA, tagline
- Both light & dark mode mockups shown (respect that)

**Colors for articles (if RSS images fail):**
Use Vista brand colors or gradients:
- Featured: Orange gradient or solid #FF5233
- Grid: Mix of orange, blue, muted tints
- Or generate based on article category (AI = blue, DeFi = orange, etc.)

---

## HOMEPAGE STRUCTURE (EXACT ORDER)

Isaac's priority: **Newsletter/Research conversion first**, services secondary.

**Sections:**

### 1. Hero (100vh, full viewport)
```
┌─────────────────────────────────────┐
│                                     │
│         vista ₊˚⊹                   │
│                                     │
│    vista investigates               │
│    the future of the internet       │
│                                     │
│    A research hub for builders,     │
│    investors, and explorers in      │
│    blockchain and AI                │
│                                     │
│    [Subscribe]  [Explore →]         │
│                                     │
│         ↓ scroll                    │
└─────────────────────────────────────┘
```

**Design:**
- Full viewport height (100vh or 100dvh)
- Centered content, massive whitespace
- Logo at top (stars ₊˚⊹ with subtle animation reveal)
- Headline: "vista investigates the future of the internet"
- Tagline: "A research hub for builders, investors, and explorers in blockchain and AI"
- Dual CTAs:
  - Primary: "Subscribe" (orange fill, newsletter)
  - Secondary: "Explore →" (ghost/outline, scroll to content)
- Subtle scroll indicator at bottom (↓ with pulse animation)
- Background: Clean (optional very subtle orange/blue radial gradients at edges, <5% opacity)
- NO decorative SVGs in hero (save for later sections)

**Mobile:**
- Same structure, scales down gracefully
- Headline smaller but still impactful (2.5-3rem)
- CTAs stack vertically

---

### 2. The Latest (Featured + Grid Layout)

Based on Vista sketch + Works in Progress style.

```
┌───────────────────────────────────────────────────┐
│  the latest                                       │
├────────────────────────┬──────────┬───────────────┤
│                        │ Article2 │ Article3      │
│   FEATURED             │          │               │
│                        ├──────────┼───────────────┤
│   Article 1            │ Article4 │ Article5      │
│   (image or gradient)  │          │               │
│   Title here           │ (2x2 grid, smaller)      │
│   Excerpt...           │                          │
│   READ MORE →          │                          │
│                        │                          │
└────────────────────────┴──────────┴───────────────┘
```

**Layout:**
- Section title: "the latest" (lowercase, simple)
- Grid: 
  - Featured article: 50% width (left), taller card
  - 4 articles: 2x2 grid (right), equal size
- Gap: 16-20px between cards

**Featured Article Card:**
- Image from RSS or gradient fallback (orange/blue)
- Badge: "FEATURED" (small pill, top-left)
- Category tag: e.g., "AI" or "DeFi" (small, muted)
- Title: Large (1.5-2rem), bold
- Excerpt: 2-3 lines, muted text
- CTA: "READ MORE →" (text link, orange on hover)
- Border: 1px subtle
- Hover: Slight lift (translateY -2px), border becomes orange

**Grid Article Cards:**
- Smaller image/gradient block (top)
- Category tag (small)
- Title: Medium (1.125-1.25rem)
- Date: If available from RSS
- CTA: "→" icon or "READ MORE" (subtle)
- Same hover behavior

**RSS Integration:**
- Fetch from Substack RSS at build time (static)
- Extract: title, excerpt, category/tags, pubDate, image (if available)
- Fallback: If no image, use gradient or solid color (category-based)
- Link: Opens Substack article in new tab

**Mobile:**
- Featured article: Full width
- Grid: Stack vertically OR horizontal scroll carousel (designer's choice based on UX research)

---

### 3. Newsletter Signup (RIGHT AFTER ARTICLES)

### 4. Services Preview

Short teaser, drives to dedicated Services page.

```
┌─────────────────────────────────────────┐
│  what we do                             │
│                                         │
│  We help crypto teams and protocols     │
│  ship faster with AI and better         │
│  strategies.                            │
│                                         │
│  ┌──────────┐ ┌──────────┐ ┌─────────┐│
│  │ AI       │ │ Marketing│ │ Protocol││
│  │ Training │ │ Campaigns│ │ Growth  ││
│  │          │ │          │ │         ││
│  │ Brief... │ │ Brief... │ │ Brief...││
│  │ →        │ │ →        │ │ →       ││
│  └──────────┘ └──────────┘ └─────────┘│
│                                         │
│  [View all services →]                  │
└─────────────────────────────────────────┘
```

**Design:**
- Section title: "what we do" (lowercase, simple)
- Short intro: 1-2 sentences explaining services value
- 3 service cards in horizontal row (equal width)
- Each card:
  - Icon or number (01, 02, 03)
  - Service name: "AI Training", "Marketing Campaigns", "Protocol Growth"
  - Brief description: 1-2 lines
  - Link: "→" or "Learn more"
- CTA button below: "View all services →" (links to /services page)
- Cards have subtle border, hover lift

**Copy tone:**
- Human, direct, no long dashes
- "We help crypto teams ship faster" NOT "We provide solutions for organizations"
- Active voice, short sentences

**Mobile:**
- Cards stack vertically OR horizontal scroll

---

### 5. About / Philosophy (Integrated)

Short "who we are" section. Are.na tone: simple, honest, poetic.

```
┌─────────────────────────────────────────┐
│  who we are                             │
│                                         │
│  Vista is a research collective         │
│  exploring blockchain and AI.           │
│                                         │
│  We're at the frontier — finding        │
│  signal in the noise, building tools,   │
│  and helping teams move faster.         │
│                                         │
│  What we believe:                       │
│  • Signal over noise                    │
│  • Edgy but grounded                    │
│  • Build in public                      │
│                                         │
│  Trusted by: [Obol] [ApeChain] [Arco]   │
└─────────────────────────────────────────┘
```

**Design:**
- Section title: "who we are" (lowercase)
- 2-3 short paragraphs, generous line-height (1.7-1.8)
- Values: 3-4 bullet points (bold statement, no long explanations)
- "Trusted by" with logo lockup (Obol, ApeChain, Arco)
- NO inflated stats (no "10,000+ readers" — that's Arco's)
- Founded 2025 (optional footnote if needed)

**Copy tone:**
- Are.na style: "We're at the frontier"
- Confident but not corporate: "finding signal in the noise"
- No long dashes, no AI slop

**Mobile:**
- Same structure, text scales

---

### MOVED TO #3

Based on Vista sketch: dark background, orange CTA.

```
┌─────────────────────────────────────────┐
│ [Dark background, subtle pattern/glow]  │
│                                         │
│  GET VISTA IN YOUR INBOX                │
│                                         │
│  Original analysis on DeFi, L2s,        │
│  AI agents, and emerging crypto trends. │
│  Delivered every week.                  │
│                                         │
│  [email@example.com    ] [SUBSCRIBE →]  │
│                                         │
│  Co-published with Arco                 │
└─────────────────────────────────────────┘
```

**Design:**
- Dark background (inverted from page, or dark gray/black)
- Optional subtle glow/pattern (Vista sketch has orange wave graphic)
- Headline: "GET VISTA IN YOUR INBOX"
- Tagline: Short value prop (1-2 lines)
- Email input + Subscribe button (inline on desktop, stacked on mobile)
- Subscribe button: Orange (#FF5233), bold, "SUBSCRIBE →"
- Footnote: "Co-published with Arco" (credit partnership, don't claim their 10K subs)

**Mobile:**
- Input full-width
- Button full-width below
- Same dark background treatment

---

### 6. Footer

Clean, centered, minimal (Are.na style).

```
┌─────────────────────────────────────────┐
│  vista ₊˚⊹                              │
│                                         │
│  Home · Services · Research · About     │
│                                         │
│  Twitter · Telegram · Substack          │
│                                         │
│  © 2025 Vista                           │
└─────────────────────────────────────────┘
```

**Design:**
- Logo at top (vista ₊˚⊹)
- Nav links: simple, inline, separated by ·
- Social links: simple, inline
- Copyright: minimal
- Subtle top border (1px)
- Dark mode toggle (optional, if not in nav already)

**Mobile:**
- Same centered layout

---

## SERVICES PAGE (/services)

Dedicated page, deep-dive into each service.

**Structure:**

### Hero
```
We don't do "awareness."
We do results.

[Short intro paragraph about Vista's approach to services]
```

### Service 1: AI Training
```
01

AI Training

Make your team dangerous with AI.

[2-3 paragraphs describing the service]

What you get:
• Custom curriculum
• Hands-on workshops
• Ongoing support

Proof: [Client quote if available, or metric]

[Get in touch →]
```

### Service 2: Marketing Campaigns
(Same structure, 02)

### Service 3: Protocol Growth
(Same structure, 03)

### CTA
```
Ready to work together?

[Start a conversation →]  [Subscribe instead →]
```

**Design:**
- Each service is a full section with breathing room
- Number prefix (01, 02, 03) in large muted type
- Service name: massive (3-4rem)
- Description: generous line-height, max-width for readability
- "What you get": bullet list, specific deliverables
- Optional testimonial or metric
- CTA at bottom of each section

**Mobile:**
- Same hierarchy, scales down

---

## NAVIGATION

### Desktop
```
┌─────────────────────────────────────────┐
│ vista ₊˚⊹      Services Research About  │
│                              [Subscribe]│
└─────────────────────────────────────────┘
```

**Behavior:**
- Transparent at top
- On scroll (>40px): blur background + subtle border
- Logo: stars always visible, "vista" text fades in on scroll (keep existing animation)
- Links: Services, Research (→ Substack), About (→ #about anchor or dedicated page)
- Subscribe button: always visible, orange fill
- Dark mode toggle: subtle icon (sun/moon)

### Mobile (Creative)
**Options (designer research & choose best UX):**
- **Option A**: Classic hamburger menu (simple, familiar)
- **Option B**: Bottom tab bar (easier thumb reach, modern)
- **Option C**: Slide-out tray (gesture-based, iOS-style)

**Requirements:**
- Must work one-handed (Isaac shows at conferences)
- Clear, immediate access to Services + Newsletter
- No hidden complexity

---

## INTERACTIONS & ANIMATIONS

### Scroll Animations (Stripe-inspired)
- **All sections**: Fade-in + translateY(20px → 0) on intersection observer
- **Stagger**: Children elements animate 100-200ms apart
- **Duration**: 500-700ms, ease-out
- **Threshold**: 0.25 (trigger when 25% visible)
- **Once**: Don't re-animate on scroll up

### Card Hover States
- **Service cards**: translateY(-3px) + soft box-shadow (300ms ease)
- **Article cards**: border color changes to orange + slight lift
- **Buttons**: scale(1.02) + shadow (200ms ease)

### Counter Animations
- **If showing any numbers** (e.g., "Founded 2025"): Count up from 0 on scroll into view
- Duration: 1-1.5s, eased

### Mobile Considerations
- **Reduce motion**: translateY(10px) instead of 20px
- **Touch targets**: Minimum 44px × 44px
- **Performance**: 60fps, no jank (test on older devices)

---

## COPY GUIDELINES

**Voice:**
- Edgy with authority but accessible
- Serious but young (not afraid of hot takes)
- Human, not AI (avoid long dashes, corporate speak)
- Direct, active voice
- Short sentences, paragraphs breathe

**Examples of GOOD copy:**
- "We're at the frontier — finding signal in the noise"
- "Make your team dangerous with AI"
- "We don't do 'awareness.' We do results."
- "Original analysis on DeFi, L2s, AI agents, and emerging crypto trends"

**Examples of BAD copy:**
- "We provide comprehensive solutions for organizations seeking to leverage cutting-edge technologies" (too corporate)
- "Innovative — groundbreaking — transformative" (AI slop)
- "Our team of experts delivers world-class services" (vague, generic)

**Reference:**
- isaac-voice skill is available (use for tone, don't follow religiously)
- Stripe copy: clear, confident, specific
- Are.na copy: poetic, honest, human

---

## TECHNICAL REQUIREMENTS

### Stack (Existing)
- Next.js 16, React 19, Tailwind v4
- Geist fonts (already configured)
- Dark mode support (DarkModeToggle component exists)

### Build Process
1. **DELETE** existing `/src/app/landing2/` and `/src/components/landing2/`
2. **START** from scratch in same directories
3. **REFERENCE** main branch ONLY for:
   - Sacred SVG paths (stars, ring, grid, plus)
   - Brand colors from globals.css
   - Image assets (/partners/*.svg)
4. **IMPLEMENT** new design based on this brief

### RSS Integration (Articles)
```javascript
// Fetch Substack RSS at build time
// Parse: title, link, pubDate, description, image
// Fallback: if no image, use gradient/solid color
// Featured: first item in array
// Grid: items 2-5
```

### Performance
- Lighthouse score: 90+ (performance)
- Mobile-first responsive design
- Touch targets: 44px minimum
- Text readable: 16px+ body on mobile
- Animations: 60fps, no jank
- Images: optimized, lazy-loaded

### Accessibility
- WCAG AA compliance
- Keyboard navigation
- Screen reader tested
- Focus states visible
- Alt text on images

---

## QUALITY CHECKLIST (Before Delivery)

### Design
- [ ] Started from scratch (no recycled V1/V2 code)
- [ ] Sacred elements preserved exactly (stars not rotated, colors exact)
- [ ] References applied (Stripe animations, are.na whitespace, WIP layout)
- [ ] Article layout matches Vista sketch (1 featured + 2x2 grid)
- [ ] Mobile-first, responsive tested

### Content
- [ ] Copy is human, not AI slop (no long dashes, corporate speak)
- [ ] Stats are honest (Trusted by Obol/ApeChain/Arco, Founded 2025)
- [ ] Newsletter section credits Arco partnership (doesn't claim 10K subs)
- [ ] Service descriptions are specific, valuable

### Technical
- [ ] Build compiles clean (npm run build)
- [ ] All routes work (/, /services)
- [ ] Images load (from main branch assets)
- [ ] Dark mode toggle works
- [ ] RSS integration functional (or placeholder ready)
- [ ] Localhost tested
- [ ] Ngrok tested
- [ ] Screenshots captured (desktop + mobile)

### Interactions
- [ ] Scroll animations smooth (60fps)
- [ ] Hover states work (cards lift, borders change)
- [ ] Mobile nav functional (chosen UX pattern)
- [ ] Touch targets 44px+
- [ ] Text readable without zoom

---

## TEAM STRUCTURE (For Spawning)

### 1. Lead Designer (Opus 4.6)
**Responsibilities:**
- Translate this brief into specific design decisions
- Create component specifications (buttons, cards, nav, etc.)
- Define animation/interaction details
- Research mobile nav UX (choose best pattern)
- Ensure consistency with references (Stripe, are.na, WIP)

**Deliverable:** Design specification document for developer

---

### 2. Copywriter (Sonnet 4.5)
**Skills:** copywriting, isaac-voice, marketing-psychology  
**Responsibilities:**
- Write all copy (hero, services, about, newsletter)
- Ensure tone matches brief (edgy, accessible, human)
- Avoid AI slop (no long dashes, corporate speak)
- Reference isaac-voice skill for tone (don't follow religiously)

**Deliverable:** Copy document for all sections

---

### 3. Frontend Developer (Codex)
**Skills:** vercel-react-best-practices, frontend-design  
**Responsibilities:**
- DELETE all existing landing2 code
- Implement design from scratch
- Integrate RSS feed (Substack)
- Preserve sacred brand elements
- Build responsive, performant, accessible
- Test thoroughly (localhost + ngrok + screenshots)

**Deliverable:** Working website on vista-redesign branch

---

### 4. Product Owner (Jarvis)
**Responsibilities:**
- Approve design spec before dev starts
- Validate copy against brief
- Test final implementation before showing Isaac
- Ensure no recycled code (spot-check)
- Verify quality checklist complete

**Deliverable:** Final approval to Isaac

---

## WORKFLOW

### Phase 1: Design & Copy (Parallel)
1. Jarvis shows Isaac this brief for approval
2. IF approved, spawn Designer + Copywriter simultaneously
3. Designer creates design spec
4. Copywriter creates copy document
5. **Jarvis reviews BOTH**, sends to Isaac for approval

### Phase 2: Development
6. ONLY after Isaac approves design+copy, spawn Developer
7. Developer deletes old code, builds from scratch
8. Developer implements approved design+copy
9. Developer tests quality checklist

### Phase 3: Validation
10. Jarvis tests implementation
11. Jarvis validates against brief (no recycled code, sacred elements preserved)
12. Jarvis captures screenshots
13. **ONLY when quality bar met**, Jarvis shows Isaac

### Phase 4: Iteration (if needed)
14. Isaac provides feedback
15. Make targeted adjustments (no full redesign)
16. Re-validate and deliver

---

## CRITICAL SUCCESS FACTORS

1. **START FROM SCRATCH** — Delete all landing2 code before building
2. **PRESERVE SACRED** — Stars not rotated, exact colors, Geist fonts
3. **APPLY REFERENCES** — Stripe animations, are.na whitespace, WIP layout
4. **HONEST STATS** — Trusted by (logos), not inflated numbers
5. **HUMAN COPY** — Edgy but accessible, no AI slop
6. **ARTICLE LAYOUT** — 1 featured + 2x2 grid (Vista sketch)
7. **MOBILE-FIRST** — Works at conferences, one-handed
8. **DUAL CONVERSION** — Newsletter primary, services secondary
9. **JARVIS VALIDATES** — Nothing reaches Isaac without PO approval
10. **QUALITY BAR** — Fortune 500 polish, not "good enough"

---

## FINAL NOTES

**To the team:**
- This is V3 after two failed attempts
- Isaac explicitly said V1 and V2 recycled the design instead of starting fresh
- Your job is to prove we can deliver a TRUE redesign
- Take the brief seriously, ask questions if unclear
- Jarvis (PO) will reject work that doesn't meet the bar
- Quality over speed — Isaac would rather wait than see another recycled attempt

**To Jarvis (me):**
- Show Isaac this brief for approval BEFORE spawning team
- Validate design spec + copy before dev starts
- Spot-check code (ensure no recycling from V1/V2)
- Test final implementation thoroughly
- Only show Isaac when quality bar is met

---

**Success = Isaac says:** "This is fundamentally different. This is what I wanted."
