# Vista Website — Project Context

**Repo:** `/root/clawd/vista-website`
**Tech:** Next.js 16.1.6, Tailwind CSS 4, React 19
**Preview:** `https://pericentric-cytoplasmic-pilar.ngrok-free.dev` (ngrok, port 3050)
**Branch:** `vista-redesign`
**Status:** Active development — polished, awaiting deploy to vista.wtf

---

## ⚠️ CRITICAL: PAGE ROUTING (READ BEFORE EDITING ANYTHING)

```
Isaac views:  https://...ngrok.../     →  src/app/page.tsx        ← EDIT THIS
NOT:          https://...ngrok.../landing2 →  src/app/landing2/page.tsx  ← DO NOT EDIT
```

**Components used by root page:** `src/components/landing2/` (shared folder)

**The rule:** When Isaac reports a bug or requests a change, ALL edits go to:
1. `src/components/landing2/*.tsx` (shared components)
2. `src/app/page.tsx` (root page composition)

**NEVER edit `src/app/landing2/page.tsx`** unless Isaac explicitly says "edit the /landing2 route."

**When to doubt:** If you've made a change but Isaac says "still broken" → immediately check:
```bash
grep -n "WhoWeAreSection\|import" src/app/page.tsx  # verify root page imports
curl -I http://localhost:3050/  # verify root page serves
```

This failure caused 30+ minutes of wasted effort on 2026-02-16.

---

## Current State (Updated 2026-02-17)

### Design System
- **Background:** `#FAFAFA` (alabaster white)
- **Card background:** `#F2F2F2` (light gray)  
- **Primary accent:** `#FF5233` (ULTRA ORANGE) — sacred, never dilute
- **Text:** Dark (`#111`, `#444`, `#666`)
- **Newsletter section:** Dark `#111` background (strong contrast)
- **Reference:** `/root/clawd/vista-website/VISTA-COLORS.md`

### Page Structure (root `/`)
```
Navigation (sticky, stars always visible)
→ HeroSection
→ HeroLatestDivider
→ LatestSection (RSS articles, a16z feed, static JSON)
→ SectionDivider dark
→ NewsletterSection
→ SectionDivider dark
→ ServicesSection
→ FooterSection
```

### Footer (Final Design - Feb 16)
```
LEFT column: "who we are" intro (compact, no logo)
RIGHT column: "Build something useful" CTA band
  - CTAs: WORK WITH VISTA / LEARN MORE
  - Sub-CTAs: "Get insights" / "Let's talk"
Bottom: social icons (X official, LinkedIn "in" cuadrado, Substack) + links
Padding: px-6 on ALL sections (consistent)
```

### Article Cards (LatestSection)
- 1 large card + 4 small cards
- Images: 50% height
- No category tags/badges
- Grid minimalista: individual borders (`border border-black/[0.12]`), no gaps
- Titles fixed height (`h-[72px]`) — "READ MORE" aligns across cards
- Links open in new tab (`target="_blank"`)

### Navigation
- Stars `₊˚⊹`: always visible, `marginLeft: '4px'` from "vista" text
- Animation: 450ms cubic-bezier on scroll
- Hover: `#FF5233` → `#E64A2E` (darker, not lighter)

### RSS Integration
- Source: a16z news (https://www.a16z.news/feed)
- **Static JSON** built at build time (NOT live fetch)
- Refresh: `npm run fetch-rss` or `npm run build`
- Cache: `/public/rss-articles.json`

---

## Design Philosophy (NEVER VIOLATE)

1. **Grid minimalista** — gaps and shadows break it; use compact borders
2. **Optimize for UX + subscriptions/readers** — not pure aesthetics
3. **Fortune 500 polish** — thousands will see this page
4. **"No quiero que me entregues rápido, quiero que me entregues bien"**

---

## Optimization Goals

**Primary metric:** UX + subscriptions/readers  
**Research basis:** Medium, NYT, The Verge patterns  
**Decision framework:** "Does this increase newsletter signups?"

---

## Pending Items

- [ ] Deploy to vista.wtf (overdue since Feb 14)
- [ ] Open Graph meta tags (og:image 1200x630, og:title, og:description)
- [ ] Isaac to send Vista branded backgrounds (for workshop slides)
- [ ] Partner logos (placeholder currently)
- [ ] Team member photos

---

## Deployment Verification Checklist

Before claiming ANY change is complete:

1. `npm run build` — zero errors
2. `curl -I http://localhost:3050/` — 200 OK
3. `curl -I https://pericentric-cytoplasmic-pilar.ngrok-free.dev/` — 200 OK
4. Take FRESH screenshot (hard refresh, incognito mode)
5. Verify EXACT element that was changed is visible in screenshot
6. Test initial page load state (top of page, before scrolling)
7. THEN report to Isaac with screenshot

**If Isaac says "still broken" after fixes:** Stop defending. Ask: "¿Puedes compartirme la URL exacta que estás viendo?" Then verify you're editing the right file.

---

## Key Files

```
src/app/page.tsx                          ← ROOT PAGE (what Isaac sees)
src/app/landing2/page.tsx                 ← ALTERNATE ROUTE (not used)
src/components/landing2/Navigation.tsx    ← Navbar + stars
src/components/landing2/HeroSection.tsx   ← Hero
src/components/landing2/LatestSection.tsx ← Article cards
src/components/landing2/NewsletterSection.tsx
src/components/landing2/ServicesSection.tsx
src/components/landing2/FooterSection.tsx ← Footer (LEFT/RIGHT layout)
src/components/landing2/SectionDividers.tsx
public/rss-articles.json                  ← Static RSS cache
VISTA-COLORS.md                           ← Color reference
VISTA-QA-CHECKLIST.md                     ← QA protocol (mandatory)
WORK-QUEUE.md                             ← Auto-queue task tracking
```
