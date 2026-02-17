# Vista Website Redesign Brief
**Phase 1 — Research & Creative Brief**
**Date:** 2026-02-15 | **Status:** Pending Isaac's Approval

---

## 1. Substack Integration Research

### Finding: No official Substack API exists.

**Options for MVP (ranked):**

| Approach | Effort | Branding Control | Recommendation |
|----------|--------|-----------------|----------------|
| **RSS Feed → Custom Cards** | Medium | Full control ✅ | **MVP pick** |
| Link out to Substack | Zero | None | Fallback |
| Substack embed (single post) | Low | Minimal | Not ideal (no feed) |
| Paid SaaS (Supascribe, SubstackAPI.com) | Low | Medium | Unnecessary cost |

**MVP Recommendation:** Parse Vista's Substack RSS feed client-side (or at build time via Next.js), render article cards with custom styling on the homepage. Clicking opens the full article on Substack. This gives full design control over the feed presentation while keeping Substack as the CMS. No API key needed — just `https://vistasubstack.substack.com/feed`.

---

## 2. Target Audience (Dual Personas)

### Persona A: Content Consumer
- Crypto-native or crypto-curious
- Follows newsletters, CT, Telegram alpha groups
- Values: sharp takes, personality, insider perspective
- Conversion: Newsletter signup, Telegram join

### Persona B: Potential Client (Protocol/Project)
- Founder, BD lead, or marketing lead at a crypto project
- Looking for: AI training, marketing campaigns, protocol promotion
- Values: credibility, portfolio/results, clear service offering
- Conversion: Service inquiry, contact form

---

## 3. Positioning & Tone

**One-liner:** Vista is the edgy friend who actually knows what they're talking about.

**What we ARE:** Edgy, fun, accessible, sharp, opinionated
**What we're NOT:** Corporate (Messari), pure media (Bankless), data-dashboard (Delphi), memey/unserious

**Voice:** Confident but not arrogant. Culturally plugged in. Speaks like a smart person at a party, not a whitepaper.

---

## 4. Reference Analysis

### Primary References (Isaac-selected)

**stripe.com** — The Gold Standard
- Gradient mesh backgrounds, smooth scroll animations
- Stats/social proof prominently displayed
- Customer logos carousel builds trust
- Clean typography hierarchy with generous whitespace
- **Take for Vista:** Animation polish, stats presentation, section transitions

**are.na** — Minimalist Curation
- Ultra-clean, almost anti-design aesthetic
- Focus on content organization over chrome
- Community/ethos-driven messaging
- **Take for Vista:** Content-first philosophy, intentional whitespace. Less directly applicable without an articles section, but the *restraint* is the lesson.

**invisibletech.ai** — B2B with Personality
- Product sections with clear naming (Axon, Synapse, Meridial)
- Client testimonials inline with product descriptions
- Stats embedded within context, not isolated
- **Take for Vista:** Service presentation model — named offerings with proof points

### Additional References (Curated 12)

**Crypto/Web3 with personality:**
1. **zora.co** — Creator economy, bold visual identity, NFT-native but tasteful
2. **phantom.app** — Clean wallet site, dark mode, sleek animations, consumer-friendly
3. **rainbow.me** — Playful, colorful, accessible crypto onboarding
4. **cosmos.network** — Gradient-heavy, space themes, good section pacing
5. **paradigm.xyz** — Research firm with edge, minimal but authoritative

**B2B/SaaS with strong design:**
6. **linear.app** — Dark mode, keyboard-first, developer aesthetic, smooth animations
7. **vercel.com** — Black/white, code-forward, performance obsessed, Stripe-tier polish
8. **raycast.com** — Productivity tool with beautiful dark UI, snappy interactions
9. **resend.com** — Email API with gorgeous minimal design, developer-loved

**Content/Research with edge:**
10. **notboring.co** (Packy McCormick) — Newsletter-first business, personality-driven, optimistic tech takes
11. **dirt.fyi** — Internet culture newsletter, edgy curation, art-world adjacent
12. **thegeneralist.substack.com** — Deep research with clean presentation, professional but warm

---

## 5. Aesthetic Direction

### Color & Mood
- **Primary:** Dark mode (black/near-black backgrounds) — aligns with current site, crypto-native expectation
- **Accent:** Keep existing Vista palette, consider adding a gradient accent (Stripe-inspired)
- **Mood:** Nightclub lobby meets research library — sophisticated edge

### Typography
- Keep current type choices if they're working
- Ensure clear hierarchy: Display → Heading → Body → Caption
- Generous line height for readability

### Motion & Interaction
- **Sacred:** Vista logo scroll animation (stars → text reveal) — KEEP
- **Add:** Smooth section transitions (Stripe-style)
- **Add:** Subtle hover states on interactive elements
- **Avoid:** Gratuitous parallax, loading screens, scroll-jacking (current scroll snap needs evaluation)

### Sacred Elements (DO NOT REMOVE)
1. ✅ Hero figures/SVG symbols
2. ✅ Navbar simplicity
3. ✅ Newsletter card design (can reposition)
4. ✅ Vista logo scroll animation

---

## 6. Page Structure & Content Hierarchy

### Homepage (Main Focus)
```
┌─────────────────────────────────┐
│ Navbar (simple, fixed)          │
├─────────────────────────────────┤
│ HERO                            │
│ • Logo animation (stars→text)   │
│ • Tagline / value prop          │
│ • Hero SVG figures              │
│ • CTA: Newsletter + Telegram    │
├─────────────────────────────────┤
│ WHAT WE DO (Services Preview)   │
│ • 3 service cards (brief)       │
│ • "Learn more" → Services page  │
├─────────────────────────────────┤
│ LATEST FROM VISTA (Placeholder) │
│ • 3 placeholder article cards   │
│ • "Read more on Substack" link  │
│ • (RSS integration deferred)    │
├─────────────────────────────────┤
│ SOCIAL PROOF / STATS            │
│ • Newsletter subscribers count  │
│ • Telegram members              │
│ • Client logos (if available)   │
├─────────────────────────────────┤
│ NEWSLETTER SIGNUP               │
│ • Sacred card design            │
│ • Email input + CTA             │
│ • Telegram join button          │
├─────────────────────────────────┤
│ FOOTER                          │
│ • Links, social, legal          │
└─────────────────────────────────┘
```

### Services Page
```
┌─────────────────────────────────┐
│ HERO: "What We Build"           │
├─────────────────────────────────┤
│ SERVICE 1: AI Training          │
│ • Description + proof points    │
├─────────────────────────────────┤
│ SERVICE 2: Marketing Campaigns  │
│ • Description + proof points    │
├─────────────────────────────────┤
│ SERVICE 3: Protocol Promotion   │
│ • Description + proof points    │
├─────────────────────────────────┤
│ CTA: Contact / Get in Touch     │
├─────────────────────────────────┤
│ FOOTER                          │
└─────────────────────────────────┘
```

### About Us Page
```
┌─────────────────────────────────┐
│ HERO: Story / Mission           │
├─────────────────────────────────┤
│ TEAM (if applicable)            │
├─────────────────────────────────┤
│ VALUES / PHILOSOPHY             │
├─────────────────────────────────┤
│ NEWSLETTER CTA                  │
├─────────────────────────────────┤
│ FOOTER                          │
└─────────────────────────────────┘
```

---

## 7. Conversion Goals & CTAs

| Goal | Primary CTA | Placement |
|------|-------------|-----------|
| Newsletter signup | Email input + Subscribe | Hero, dedicated section, footer |
| Telegram join | "Join Telegram" button | Hero, newsletter section |
| Service inquiry | "Work with us" / Contact | Services page, homepage services preview |

---

## 8. Technical Notes

- **Framework:** Next.js (already in repo)
- **Substack:** RSS → build-time fetch → custom article cards
- **Scroll:** Evaluate removing scroll-snap in favor of smooth natural scroll with intersection-observer animations
- **Branch:** `vista-redesign`
- **Deploy:** MVP today

---

## 9. Key Design Principles

1. **Content over chrome** — Every element earns its place
2. **Edge without effort** — Confidence in restraint, not maximalism
3. **Dual-serve** — Every page works for both readers and potential clients
4. **Mobile-first** — Most crypto audience is mobile
5. **Fast** — No heavy assets, lazy load everything non-critical

---

## ✅ Approval Needed

Isaac — please review and confirm:
1. Page structure & section ordering
2. Services naming (AI Training, Marketing Campaigns, Protocol Promotion — correct?)
3. Substack RSS approach for MVP
4. Any missing content/sections

Once approved, I'll spawn Design + Dev agents to begin implementation.
