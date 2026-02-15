# Vista Website Redesign Brief V2
**Date:** 2026-02-15  
**Status:** Product Owner Approved  
**Client:** Isaac (Vista founder, Lido PM)

---

## Context: What Went Wrong V1

The first PM failed because:
1. **Shallow research** - Looked at references but didn't extract design principles
2. **Bad interview** - Asked generic questions instead of probing vision
3. **Lazy preservation** - Kept 90% of design thinking "preserve essence" meant "copy most of it"
4. **Zero quality bar** - Broke images, tilted sacred logo stars, generic separators
5. **No design phase** - Went straight to code without mockups/wireframes

**Client feedback:** "I expected a refactorization from first principles, not a vague update."

---

## Success Criteria V2

**What Isaac wants:**
- Website feels **fundamentally different** (not 90% the same)
- **Fortune 500 polish** with **edgy startup soul**
- Dynamic, engaging, immersive (like Stripe)
- **Mobile-first** (Isaac will test on phone immediately)
- Sacred elements preserved **in essence** (not literal copy-paste)

**What "fundamentally different" means:**
- Rethink layout, hierarchy, interactions from scratch
- Keep DNA (stars, orange, Geist), rebuild everything else
- Apply reference principles, don't copy references

---

## Design Principles (Extracted from References)

### From Stripe (https://stripe.com)
✅ **Stats as social proof** - Big numbers with context ($1.4tn processed, 99.999% uptime)  
✅ **Metrics in every section** - Case studies have specific proof points (160 countries, 11K locations)  
✅ **Clear value prop** - "Financial infrastructure to grow your revenue" (no fluff)  
✅ **Hierarchy through scale** - Headlines are MASSIVE, body text breathes  
✅ **Subtle animations** - Elements fade/slide in on scroll, never jarring  
✅ **Clean CTAs** - Every section has clear next action  

### From Are.na (https://are.na)
✅ **Whitespace = confidence** - Don't fill every pixel, let content breathe  
✅ **Poetic but clear** - "Playlists, but for ideas" / "Internet memory palace"  
✅ **Philosophy visible** - Their values are on homepage, not hidden in About  
✅ **Transparency** - "18,791 people support Are.na" (show the numbers)  
✅ **Content-first** - No hero images, no stock photos, just ideas  
✅ **Typography-driven** - No decorative elements, words do the work  

### From InvisibleTech (https://invisibletech.ai)
✅ **Product naming** - Each service has a name (Axon, Synapse, Meridial) + clear tagline  
✅ **Specific metrics per service** - "+70% reduction", "24,000+ experts", "80% complexity"  
✅ **Client testimonials with context** - Name + Title + Company (not generic quotes)  
✅ **"What it does" before "how"** - Explain value, then details  
✅ **Clean service grid** - Each product gets equal visual weight  
✅ **B2B credibility** - Specificity builds trust (not vague promises)  

---

## Sacred Elements (DNA to Preserve)

**What stays (in essence, not literal copy):**

1. **₊˚⊹ Stars symbol** - Vista's identifier, NEVER tilt or rotate, exact same SVG
2. **Orange brand color** (#FF5233) - Accent color, not primary
3. **Geist font family** - Modern, clean, technical
4. **Newsletter card** - Keep structure/hierarchy, can restyle presentation
5. **Logo animation** - Stars reveal → "vista" text on scroll (exact same)
6. **Hero symbols** - Ring, grid, plus decorative SVGs (can reposition, not remove)

**What "preserve in essence" means:**
- Stars: Use EXACT same SVG, can change placement/scale/context
- Orange: Keep color, rethink how/where it's used
- Geist: Keep font, rethink sizing/weights/hierarchy
- Newsletter: Keep form structure, redesign card presentation
- Animation: Keep interaction, can refine timing/easing

---

## Pages & Structure

### Homepage (5-7 sections)
1. **Hero** - Stars animation + massive value prop + dual CTA (newsletter + Telegram)
2. **Social Proof** - Stats first (10K+ subscribers, protocols served, etc.) - Stripe-style
3. **What We Do** - 3 services with names, taglines, metrics - InvisibleTech-style
4. **Latest Research** - 3 placeholder article cards (no RSS yet) - Are.na minimalism
5. **Philosophy** - Why Vista exists, what we believe - Are.na transparency
6. **Newsletter** - Simplified signup (not heavy card) - Are.na restraint
7. **Footer** - Clean navigation + social links

### Services Page
- **Hero** - Clear value prop for services overall
- **3 Service Blocks** - Each with: Name, Tagline, Description, Proof points, Testimonial (if available)
- **CTA** - Get in touch OR follow along
- Structure like InvisibleTech (Axon, Synapse, Meridial)

### About Page
- **Hero** - "We're Vista" + mission
- **Story** - Origin, why we exist (Are.na philosophy style)
- **Values** - 4 principles (Are.na "The Secret" style)
- **Team** (future) - Real people, not stock photos
- **Newsletter CTA** - Simple signup

---

## Visual Direction

**Layout:**
- **Generous whitespace** (Are.na) - Don't cram, let breathe
- **Big typography** (Stripe) - Headlines 4-6rem, body 1.125-1.25rem
- **Grid-based** - Clean alignment, consistent spacing
- **Mobile-first** - Touch targets 44px+, readable without zoom

**Interactions:**
- **Scroll-triggered animations** - Fade-in + translateY (Stripe style)
- **Hover states** - Subtle scale/shadow, not jarring
- **Smooth transitions** - 300-500ms ease-out
- **60fps animations** - Test on mobile, no jank

**Color:**
- **Background:** Light mode default, dark mode supported
- **Primary text:** High contrast (900 weight in light, 100 in dark)
- **Accent:** Orange (#FF5233) for CTAs, links, highlights
- **Borders:** Subtle (1px, low opacity)
- **Gradients:** Optional subtle radials (not loud)

**Typography:**
- **Font:** Geist (keep existing)
- **Scale:** 
  - Display: 4-6rem (hero headlines)
  - H1: 3-4rem (section headlines)
  - H2: 2-2.5rem (subsections)
  - Body: 1.125-1.25rem (readable)
  - Caption: 0.875-1rem (metadata)
- **Line-height:** 1.2 for headlines, 1.6 for body
- **Letter-spacing:** Tight for display (-0.02em), normal for body

**Components:**
- **Buttons:** Rounded (6-8px), padding 12-16px, hover shadow/scale
- **Cards:** Rounded (10-12px), subtle border, hover lift
- **Inputs:** Clean, 44px+ height, clear focus states
- **Nav:** Blur + border on scroll (Stripe), transparent at top

---

## Copy Tone

**Voice:** Edgy, fun, accessible (Isaac's words)  
**Not:** Corporate (Messari), media-heavy (Bankless), data-heavy (Delphi)  

**Examples of good Vista copy:**
- "We don't just watch the future — we build it."
- "Good projects die in silence every day. We make sure yours doesn't."
- "Signal over noise. No filler, no hype."
- "Research collective on blockchain & AI. See what's coming before others do."

**Copy principles:**
- **Direct** - Say what you mean (Stripe)
- **Poetic** - Can be lyrical when it lands (Are.na)
- **Specific** - Metrics, not vague promises (InvisibleTech)
- **Confident** - No hedging ("probably", "maybe", "we try")
- **Short** - One idea per sentence, paragraphs breathe

---

## Content (What to Include)

### Stats (Stripe-inspired)
- **10,000+** newsletter subscribers
- **5,000+** Telegram community members
- **15+** protocols served (or clients worked with)
- **2 years** research publishing
- **LatAm-first** (but specific: "Based in Dominican Republic, building for the world")

### Services (InvisibleTech-inspired)
Each service needs:
1. **Name** (not just "AI Training") - Consider: "Vista Intelligence" or "Upskill" or similar
2. **Tagline** - One punchy line ("Make your team dangerous")
3. **Description** - 2-3 sentences, specific value
4. **Proof points** - Bullets with outcomes (if available)
5. **Metric** (if available) - "Teams trained", "Campaigns launched", etc.

**Current services:**
- AI Training & Upskilling
- Marketing Campaigns (strategy + content + distribution)
- Protocol Growth (research + community + positioning)

### Articles (Placeholder for MVP)
3 cards with:
- **Category tag** (Research, Analysis, Opinion)
- **Title** (punchy, specific)
- **Excerpt** (1-2 sentences, teaser)
- **"Coming soon"** badge OR link to Substack

**Placeholder ideas:**
1. "The State of AI Agents in DeFi" (Research)
2. "LatAm's Crypto Moment" (Analysis)
3. "The Newsletter Is the Product" (Opinion)

### Philosophy (Are.na-inspired)
**Vista's values** (refine with Isaac if needed):
- **Signal over noise** - We filter thousands of data points into what matters
- **Edge without effort** - Confident in restraint, opinionated but show our work
- **Build in public** - Newsletter is product, reputation is track record
- **LatAm-first, globally relevant** - Most interesting things happening here

---

## Technical Requirements

### Must-haves
- ✅ **Next.js 16** (current stack)
- ✅ **Tailwind CSS v4** (current stack)
- ✅ **React 19** (current stack)
- ✅ **Responsive** (mobile-first, test on iPhone/Android)
- ✅ **Dark mode** (toggle, respects system preference)
- ✅ **Fast** (Lighthouse 90+ performance)
- ✅ **Accessible** (WCAG AA, keyboard nav, screen reader tested)

### Quality checklist
- [ ] Build compiles clean (no errors)
- [ ] All routes work (/, /services, /about)
- [ ] Images load (no broken assets)
- [ ] Animations smooth on mobile (60fps)
- [ ] Touch targets 44px+ (mobile buttons/links)
- [ ] Text readable without zoom (16px+ body on mobile)
- [ ] Localhost tested (http://localhost:3000)
- [ ] Ngrok tested (public URL)
- [ ] Screenshot provided (desktop + mobile)

---

## Process (How V2 Will Work)

### Phase 1: Design First
**PM spawns Design Lead** (Opus 4.6) to create:
1. **Homepage wireframe** (Figma-style markdown description OR ASCII art)
2. **Component specs** (buttons, cards, nav, footer)
3. **Interaction notes** (scroll animations, hover states)
4. **Mobile layout** (how sections adapt)

**Checkpoint:** Jarvis (Product Owner) approves design BEFORE code

### Phase 2: Implementation
**PM spawns Frontend Dev** (Codex) to:
1. Implement approved design
2. Preserve sacred elements (exact stars SVG, logo animation)
3. Fix broken images from main branch
4. Test on localhost + ngrok
5. Screenshot desktop + mobile views

**Checkpoint:** Jarvis validates implementation BEFORE showing Isaac

### Phase 3: Delivery
**PM reports to Jarvis with:**
- What changed (vs current site)
- What stayed (sacred elements)
- Screenshots (before/after, desktop/mobile)
- Ngrok URL for Isaac to test

**Jarvis shows Isaac ONLY when quality bar met**

---

## Questions for PM

If anything is unclear, PM should ask Jarvis (Product Owner):
1. Do service names need to be more creative? (e.g., "Vista Intelligence" vs "AI Training")
2. Are stats accurate? (10K+ subscribers, 15+ clients, etc.)
3. Should philosophy section be on homepage or About page?
4. Any client testimonials available to include?
5. What exactly should "Latest Research" placeholder titles be?

**Jarvis will ask Isaac directly if needed.**

---

## Final Notes

**This is a redesign, not a reskin.**
- Rethink layout, hierarchy, interactions from scratch
- Apply reference principles (Stripe stats, Are.na whitespace, InvisibleTech service structure)
- Preserve Vista DNA (stars, orange, Geist) but rebuild everything else

**Quality over speed.**
- Take time to get it right
- Design phase before code phase
- Test thoroughly before showing Isaac
- No broken images, no sloppy details

**Isaac's standards:**
- "Fortune 500 polish with edgy startup soul"
- "Fundamentally different, not 90% the same"
- "Mobile-first, I'm testing on my phone"
- "Ralph Loop mode - highest standards possible"

**Success = Isaac says:** "This is what I was looking for."
