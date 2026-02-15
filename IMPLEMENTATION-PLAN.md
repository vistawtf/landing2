# Vista Redesign — Implementation Plan

## Current State
- 3 sections: Hero → Newsletter → About (scroll-snap)
- Simple navbar with Newsletter/About links
- No Services section, no Articles section, no Services page

## Target State (from approved brief)
Homepage sections (in order):
1. Hero (keep sacred elements: SVG figures, logo animation, tagline)
2. Services Preview (NEW — 3 cards)
3. Latest Articles (NEW — 3 placeholder cards)
4. Newsletter Signup (keep sacred card, reposition from #2 to #4)
5. About (keep existing content)
6. Footer (keep, update nav links)

New pages:
- /services — Full services page
- /about — Already exists, enhance

## Implementation Tasks

### Task 1: Remove scroll-snap, switch to natural scroll
- Remove `usePremiumScrollSnap` from page.tsx
- Update CSS: remove snap-container/snap-section constraints
- Use intersection-observer for section fade-in animations (already exists via AnimatedSection)
- Keep smooth scroll for nav links

### Task 2: Create ServicesPreview component
New file: `src/components/ServicesPreview.tsx`
3 service cards:
- **AI Training** — "Custom AI models and training pipelines for your protocol"
- **Marketing Campaigns** — "Strategic campaigns that cut through crypto noise"  
- **Protocol Promotion** — "End-to-end promotion for launches and growth"
Each card: icon, title, short description, subtle hover effect
"See all services →" link to /services

### Task 3: Create ArticlesPreview component  
New file: `src/components/ArticlesPreview.tsx`
3 placeholder article cards with:
- Placeholder title, date, category tag
- Short excerpt
- "Read on Substack →" link (placeholder href)
Section header: "Latest from Vista"
Note: These are static placeholders — no RSS integration yet

### Task 4: Create /services page
New file: `src/app/services/page.tsx`
3 detailed service sections (AI Training, Marketing Campaigns, Protocol Promotion)
Each with: description, what's included bullets, CTA
Contact/inquiry CTA at bottom

### Task 5: Update Homepage layout
- Reorder sections: Hero → ServicesPreview → ArticlesPreview → Newsletter → About
- Update SECTION_IDS
- Update navbar links: Newsletter, Services, About
- Update footer nav links to match

### Task 6: Update About page
- Add team/values section (placeholder content OK)
- Add newsletter CTA (already exists)

### Task 7: Polish & responsive
- Ensure all new sections look good on mobile
- Test dark mode for all new components
- Smooth transitions between sections

## Design Guidelines
- Keep dark mode support (CSS custom properties already set up)
- Use existing color palette (--ultra-orange as accent)
- Use existing typography classes (text-display, text-h1, text-body, etc.)
- Use AnimatedSection for scroll animations
- Geist Sans / Geist Mono fonts
- Maintain the "edgy but restrained" feel — no gratuitous decoration
