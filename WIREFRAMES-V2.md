# Vista V2 Wireframes
**Date:** 2026-02-15 | **Status:** Awaiting Jarvis Approval

---

## Design Philosophy

**Core shift from V1:** V1 was a reskin. V2 is a reimagination.

| Principle | V1 (Failed) | V2 (Proposed) |
|-----------|-------------|---------------|
| Layout | Standard sections stacked | Full-viewport cinematic sections |
| Typography | Decorative numbers + lines | Typography IS the design (Are.na) |
| Proof | Generic "10K+" badges | Stripe-style contextual metrics woven into narrative |
| Services | Generic cards | Named products with proof points (InvisibleTech) |
| Whitespace | Filled every gap | Radical breathing room, confidence in emptiness |
| Interaction | Basic fade-ins | Purposeful scroll-driven reveals |
| Mobile | Afterthought | Primary design target |

**The big idea:** Every section earns its space. No decorative filler. Content speaks, whitespace amplifies.

---

## HOMEPAGE

### Section 1: Hero (100vh)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│                                                 │
│                   ₊˚⊹                           │
│            (stars animate in)                    │
│                                                 │
│         vista                                   │
│            (text reveals on scroll/delay)        │
│                                                 │
│                                                 │
│    Research collective on blockchain & AI.       │
│    See what's coming before others do.           │
│                                                 │
│                                                 │
│    [Subscribe ↗]     [Join Telegram →]           │
│                                                 │
│                                                 │
│              ↓ scroll                            │
└─────────────────────────────────────────────────┘
```

**Design notes:**
- Full viewport, centered content, massive breathing room
- Stars ₊˚⊹ appear first (400ms), then "vista" slides in from left (800ms)
- Tagline fades in below (1200ms) — two lines, poetic but clear
- Two CTAs: primary (Subscribe, orange fill) + secondary (Telegram, ghost)
- Subtle scroll indicator (↓) pulses at bottom
- Background: clean, no gradients/decorations — confidence in emptiness
- **Mobile:** Same layout scales down. Stars + text centered. CTAs stack vertically.

---

### Section 2: Proof Bar (compact, not a full section)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│   10,000+ readers  ·  2 clients  ·  Est. 2024   │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Design notes:**
- NOT a big section — a single-line proof strip (like Stripe's logo bar but with stats)
- Thin top/bottom border, subtle background shift
- Numbers in bold/large, labels in small muted text
- Scrolls into view with counter animation (0 → 10,000+)
- **Mobile:** Stats stack into 3 rows, centered, still compact

---

### Section 3: What We Do (full section, ~80vh)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  What we do                                     │
│                                                 │
│  ┌─────────────────┐  ┌─────────────────┐       │
│  │  SIGNAL          │  │  UPSKILL         │      │
│  │  Protocol Growth │  │  AI Training     │      │
│  │                  │  │                  │       │
│  │  Research-driven │  │  Make your team  │       │
│  │  growth for      │  │  dangerous with  │      │
│  │  protocols that  │  │  AI. Hands-on    │      │
│  │  deserve         │  │  workshops, not  │      │
│  │  attention.      │  │  slide decks.    │      │
│  │                  │  │                  │       │
│  │  → Learn more    │  │  → Learn more    │      │
│  └─────────────────┘  └─────────────────┘       │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │  AMPLIFY                                 │    │
│  │  Marketing Campaigns                     │    │
│  │                                          │    │
│  │  Strategy + content + distribution.      │    │
│  │  We don't do "awareness" — we do         │    │
│  │  pipeline.                               │    │
│  │                                          │    │
│  │  → Learn more                            │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Design notes:**
- Services get NAMES: **Signal** (Protocol Growth), **Upskill** (AI Training), **Amplify** (Marketing)
- 2-column top row + 1 full-width bottom (asymmetric grid = visual interest)
- Each card: name (large, bold), subtitle (muted), 2-3 line description, arrow link
- Cards have subtle border, generous internal padding (32-40px)
- Hover: card lifts slightly (translateY -2px), border becomes orange
- Staggered scroll-in animation (left card, right card, bottom card)
- **Mobile:** All cards stack full-width. Same hierarchy.

---

### Section 4: Latest Research (full section)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  Latest research                                │
│                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ RESEARCH  │ │ ANALYSIS │ │ OPINION  │        │
│  │           │ │          │ │          │         │
│  │ The State │ │ LatAm's  │ │ The News-│        │
│  │ of AI     │ │ Crypto   │ │ letter   │        │
│  │ Agents    │ │ Moment   │ │ Is the   │        │
│  │ in DeFi   │ │          │ │ Product  │        │
│  │           │ │          │ │          │         │
│  │ How auto- │ │ Why the  │ │ Why we   │        │
│  │ nomous... │ │ most ex- │ │ bet on   │        │
│  │           │ │ citing...│ │ long-... │         │
│  │ Coming    │ │ Coming   │ │ Coming   │        │
│  │ soon      │ │ soon     │ │ soon     │        │
│  └──────────┘ └──────────┘ └──────────┘        │
│                                                 │
│            [Read on Substack →]                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Design notes:**
- 3-column grid (equal width)
- Each card: category tag (small, colored pill — orange for Research, muted for others), title (bold, 1.5rem), excerpt (muted, 2 lines), "Coming soon" badge
- No images — typography-driven (Are.na principle)
- Cards have minimal border, max whitespace
- Single CTA below: "Read on Substack →" (text link, not button)
- **Mobile:** Horizontal scroll carousel OR stack. I recommend **horizontal scroll** for mobile engagement.

---

### Section 5: Philosophy (full section, statement piece)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│                                                 │
│     "Good projects die in silence              │
│      every day. We make sure                    │
│      yours doesn't."                            │
│                                                 │
│                                                 │
│     Signal over noise.                          │
│     We filter thousands of data points          │
│     into what matters.                          │
│                                                 │
│     Build in public.                            │
│     Our newsletter is our product.              │
│     Our reputation is our track record.         │
│                                                 │
│     LatAm-first, globally relevant.             │
│     Based in the Dominican Republic,            │
│     building for the world.                     │
│                                                 │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Design notes:**
- This is the Are.na-inspired soul section
- Opening quote: huge display type (4-5rem), orange accent on quotation marks
- Values below: each is a bold statement + one-line explanation
- Massive whitespace between elements (80-120px vertical gaps)
- No cards, no borders — just type on space
- Each value fades in on scroll (staggered 200ms)
- **Mobile:** Quote wraps naturally. Values stack beautifully. This section shines on mobile.

---

### Section 6: Newsletter (compact)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│     Stay ahead.                                 │
│     Weekly research on blockchain & AI,          │
│     delivered to your inbox.                    │
│                                                 │
│     [your@email.com          ] [Subscribe]       │
│                                                 │
│     Join 10,000+ readers  ·  Free forever       │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Design notes:**
- Simple. Not a heavy card. Just text + input + button.
- "Stay ahead." as section headline (not "Newsletter" — that's boring)
- Inline input + button on desktop, stacked on mobile
- Social proof line below: "Join 10,000+ readers · Free forever"
- Subscribe button: orange fill, rounded
- **Mobile:** Input + button stack vertically. Full-width.

---

### Section 7: Footer

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  vista ₊˚⊹                                      │
│                                                 │
│  Home  ·  Services  ·  About  ·  Research       │
│                                                 │
│  Twitter  ·  Telegram  ·  Substack              │
│                                                 │
│  © 2026 Vista. Dominican Republic.              │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Design notes:**
- Clean, centered, minimal
- Logo at top, nav links, social links, copyright
- No heavy grid/columns — single centered column
- Subtle top border
- **Mobile:** Same layout, naturally responsive

---

## SERVICES PAGE

### Section 1: Hero

```
┌─────────────────────────────────────────────────┐
│                                                 │
│                                                 │
│  We don't do "awareness."                       │
│  We do results.                                 │
│                                                 │
│  Three ways we help protocols                   │
│  and teams win.                                 │
│                                                 │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

### Section 2-4: Service Deep Dives (one per service)

Each service gets a full section:

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  01                                              │
│                                                 │
│  SIGNAL                                         │
│  Protocol Growth                                │
│                                                 │
│  Research-driven growth for protocols that       │
│  deserve attention. We combine deep research     │
│  with strategic positioning to put you on        │
│  the map — and keep you there.                   │
│                                                 │
│  ── What you get ──                              │
│                                                 │
│  • Research reports that position your           │
│    protocol as a thought leader                  │
│  • Community strategy that builds real           │
│    advocates, not airdrop farmers                │
│  • Content pipeline: from thread to              │
│    long-form to social                           │
│                                                 │
│  ── Proof ──                                     │
│                                                 │
│  "Vista's research helped us reach              │
│   audiences we couldn't access alone."           │
│   — [Client name, if available]                  │
│                                                 │
│  [Get in touch →]                                │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Design notes:**
- Each service is a FULL section (lots of breathing room)
- Number (01, 02, 03) in large muted type — adds structure without being generic
- Service name: massive type (3-4rem)
- Description: body text, 3-4 lines max
- "What you get": bullet list, specific deliverables
- Proof: testimonial or metric (if available)
- CTA: "Get in touch →" text link
- Alternating subtle background tints per section
- **Mobile:** Same hierarchy scales perfectly

---

### Section 5: CTA

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  Ready to talk?                                 │
│                                                 │
│  [Start a conversation →]  [Subscribe first →]   │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## ABOUT PAGE

### Section 1: Hero

```
┌─────────────────────────────────────────────────┐
│                                                 │
│                                                 │
│  We're Vista.  ₊˚⊹                              │
│                                                 │
│  A research collective on                        │
│  blockchain & AI, based in                       │
│  the Dominican Republic.                         │
│                                                 │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

### Section 2: Story

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  We started Vista because good projects          │
│  die in silence every day.                       │
│                                                 │
│  The best technology doesn't always win.         │
│  The best-communicated technology does.          │
│  We bridge that gap — with research,             │
│  strategy, and relentless execution.             │
│                                                 │
│  We're not a media company. We're not an         │
│  agency. We're a collective of researchers       │
│  and operators who believe the most              │
│  interesting things in crypto and AI are         │
│  happening in LatAm — and the world              │
│  needs to know.                                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Design notes:**
- Pure typography. No images. No decorations.
- Large body text (1.25-1.5rem), generous line-height (1.8)
- This is the Are.na "words do the work" principle at its strongest
- Paragraphs separated by 48-64px of space

---

### Section 3: Values

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  What we believe                                │
│                                                 │
│  ┌─────────────┐  ┌─────────────┐              │
│  │ Signal over  │  │ Edge without│              │
│  │ noise        │  │ effort      │              │
│  │              │  │             │               │
│  │ We filter    │  │ Confident   │              │
│  │ thousands of │  │ in          │              │
│  │ data points  │  │ restraint.  │              │
│  │ into what    │  │ Opinionated │              │
│  │ matters.     │  │ but show    │              │
│  │              │  │ our work.   │              │
│  └─────────────┘  └─────────────┘              │
│                                                 │
│  ┌─────────────┐  ┌─────────────┐              │
│  │ Build in     │  │ LatAm-first│              │
│  │ public       │  │ globally   │               │
│  │              │  │ relevant   │               │
│  │ Newsletter   │  │            │               │
│  │ is product.  │  │ Based in   │               │
│  │ Reputation   │  │ DR,        │               │
│  │ is track     │  │ building   │               │
│  │ record.      │  │ for the    │               │
│  │              │  │ world.     │               │
│  └─────────────┘  └─────────────┘              │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Design notes:**
- 2×2 grid of value cards
- Each: bold title + 2-line explanation
- Minimal borders, lots of internal padding
- **Mobile:** Stack single column

---

### Section 4: Newsletter CTA (same as homepage section 6)

---

## GLOBAL COMPONENTS

### Navigation Bar
```
┌─────────────────────────────────────────────────┐
│  vista ₊˚⊹          Services  Research  About  │
│                                    [Subscribe]   │
└─────────────────────────────────────────────────┘
```
- Transparent at top, blur + border on scroll (keep from V1, it works)
- Logo: stars always visible, "vista" text appears on scroll
- Links: Services, Research (→ Substack), About
- Subscribe button: orange, always visible
- **Mobile:** Hamburger menu, full-screen overlay

### Dark Mode
- Toggle in nav (keep from V1)
- Respects system preference
- Smooth transition (200ms)

### Scroll Animations
- **All sections:** fade-in + translateY(20px → 0) on intersection
- **Stagger:** children animate 100-200ms apart
- **Duration:** 600ms ease-out
- **Once:** don't re-animate on scroll up
- **Mobile:** Same animations but reduced translateY (10px) for less motion

---

## KEY DIFFERENCES FROM V1

| Aspect | V1 (Rejected) | V2 (Proposed) |
|--------|---------------|---------------|
| Hero | Cluttered with decorative SVGs | Clean, centered, breathing room |
| Social proof | Generic numbered badges | Compact proof strip with counters |
| Services | Unnamed generic cards | Named products (Signal, Upskill, Amplify) |
| Articles | RSS-dependent, broken | Static placeholders, typography-driven |
| Philosophy | Missing | Full statement section (Are.na-style) |
| Newsletter | Heavy card design | Lightweight inline form |
| Services page | Same as homepage preview | Full deep-dive per service |
| About page | Basic template | Story-driven, typography-first |
| Whitespace | Filled every gap | Radical breathing room |
| Typography | Decorative elements | Type IS the design |
| Mobile | Afterthought | Primary design target |

---

## INTERACTION SPEC

1. **Page load:** Stars fade in (400ms) → "vista" slides in (800ms) → tagline fades (1200ms) → CTAs fade (1600ms)
2. **Scroll down:** Proof bar counter-animates → Services cards stagger in → Articles slide up → Philosophy values stagger → Newsletter fades in
3. **Nav:** Transparent → blur+border at 40px scroll (keep V1 behavior)
4. **Service cards:** Hover lifts 2px, border turns orange (300ms)
5. **Article cards:** Hover subtle scale (1.02) 
6. **CTAs:** Primary (orange fill) scales 1.05 on hover. Secondary (ghost) gets subtle background.
7. **Mobile:** All hover states become active/tap states. Reduce motion for performance.

---

## QUESTIONS FOR JARVIS

1. **Service names:** Are "Signal", "Upskill", "Amplify" good? Or should I ask Isaac?
2. **Stats accuracy:** Is "10,000+ readers, 15+ protocols, 2 years" correct?
3. **Testimonials:** Any real client quotes available, or use placeholders?
4. **Research articles:** Stick with the 3 placeholder titles from the brief?
5. **Philosophy wording:** The values text — should Isaac approve the copy?

---

**Ready for Jarvis review. Do NOT proceed to code until approved.**
