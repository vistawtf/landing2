# Vista Website V3 - Design Specification (Final Revised)
**Date:** 2026-02-16  
**Version:** 3.0 Final  
**Based on:** IMPLEMENTATION-PLAN-V3-FINAL-CONSOLIDATED.md

---

## 🎨 Global Design System

### Color Palette

```css
/* Primary Accent */
--ultra-orange: #FF5233;
--medium-orange: #FF7043;
--light-orange: #FF8A65;
--accent-muted: rgba(255, 82, 51, 0.08);

/* Backgrounds */
--bg-page: #E4E2D8;              /* Main page background */
--bg-elevated: #FFFFFF;          /* Cards, elevated surfaces */
--bg-newsletter: #111111;        /* Newsletter section only */

/* Text */
--fg-primary: #111111;           /* Main text */
--fg-muted: #575757;             /* Secondary text */
--fg-newsletter: #E4E2D8;        /* Text on dark newsletter */

/* Neutrals */
--vista-black: #111111;
--ultra-gray: #191919;
--idle-gray: #2D2D2D;
--medium-gray: #575757;
--light-gray: #999999;

/* Borders */
--border-light: rgba(0, 0, 0, 0.08);
--border-hover: #FF5233;
--border-muted: rgba(0, 0, 0, 0.06);

/* Grid Lines */
--grid-light: rgba(0, 0, 0, 0.06);
--grid-dark: rgba(255, 255, 255, 0.06);
```

### Typography Scale

**Font families:**
- Primary: Geist Sans (variable)
- Monospace: Geist Mono (variable)

**Type scale:**
```
Display:     72px / 44px (mobile), weight 600, line-height 1.1
H1:          48px / 36px (mobile), weight 600, line-height 1.2
H2:          32px, weight 500, line-height 1.3
H3:          22px, weight 500, line-height 1.4
Body-lg:     20px, weight 400, line-height 1.6
Body:        18px, weight 400, line-height 1.6
Body-md:     16px, weight 400, line-height 1.5
Caption:     14px, weight 500, line-height 1.4
Overline:    12px, weight 600, uppercase, letter-spacing 0.08em, line-height 1.3
```

### Spacing System

**Container:**
- Max-width: 1200px
- Padding: 24px (mobile), 48px (tablet), 64px (desktop)

**Section gaps:**
- Mobile: 80px
- Desktop: 120px

**Component gaps:**
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px

### Border Radius (Square Philosophy)

```
Buttons:     0-2px max
Cards:       0-2px max
Inputs:      8px (newsletter exception, can reduce to 4-6px)
Badges:      4px
Decorative:  Circles allowed (decorative symbols)
```

### Transitions

```
default:              300ms ease
hover:                200ms ease
navbar-theme-switch:  300ms ease
scroll-snap:          cubic-bezier(0.32, 0.72, 0, 1)
logo-expand:          300ms ease
```

### Grid Lines System

**Implementation:**
- Position: absolute, full section height
- z-index: 0 (behind content)
- 2 vertical lines at container edges (1200px max-width)
- Color: var(--grid-light) light mode, var(--grid-dark) dark mode
- Width: 1px
- Opacity: 0.6
- Hide on mobile (<640px) if too busy

**CSS pattern:**
```css
.grid-lines {
  position: absolute;
  inset: 0;
  max-width: 1200px;
  margin: 0 auto;
  pointer-events: none;
}

.grid-lines::before,
.grid-lines::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--grid-light);
}

.grid-lines::before { left: 0; }
.grid-lines::after { right: 0; }
```

---

## 🧩 Component Library

### Buttons

**Primary (Orange):**
```
background: #FF5233
color: white
padding: 12px 24px
border-radius: 2px
font-size: 16px
font-weight: 500
border: none
transition: background 200ms ease

hover:
  background: #FF7043
  
active:
  background: #FF4020
```

**Secondary (Ghost):**
```
background: transparent
color: #111111
padding: 12px 24px
border-radius: 2px
border: 1px solid rgba(0, 0, 0, 0.15)
font-size: 16px
font-weight: 500
transition: all 200ms ease

hover:
  border-color: #FF5233
  color: #FF5233
  background: rgba(255, 82, 51, 0.04)
```

**Text Link:**
```
color: #575757
font-size: 16px
font-weight: 500
text-decoration: none
transition: color 200ms ease

hover:
  color: #FF5233
  text-decoration: underline
  text-underline-offset: 4px
```

### Article Cards

**Dimensions:**
- Large card (left): ~660px × 660px (1:1 aspect)
- Grid cards (right): ~320px × 320px each (1:1 aspect)
- Gap: 20px between all cards

**Structure:**
```
Card container:
  border-radius: 2px
  border: 1px solid rgba(0, 0, 0, 0.08)
  background: white
  overflow: hidden
  transition: all 300ms ease
  
  hover:
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08)
    border-color: #FF5233
    transform: none (NO translateY)

Image area (top):
  height: 50-55% of card
  width: 100%
  object-fit: cover
  background: gradient fallback (if no image)

Content area (bottom):
  padding: 24px
  
  Category tag:
    font-size: 12px
    font-weight: 600
    text-transform: uppercase
    color: #999999
    letter-spacing: 0.08em
    margin-bottom: 12px
  
  Title:
    font-size: 22px (grid cards) / 32px (large card)
    font-weight: 500
    color: #111111
    margin-bottom: 12px
    line-height: 1.3
  
  Excerpt:
    font-size: 18px
    color: #575757
    line-height: 1.6
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
    overflow: hidden
    margin-bottom: 16px
  
  Read More link:
    font-size: 16px
    color: #575757
    transition: color 200ms ease
    
    hover:
      color: #FF5233
```

**CRITICAL:** NO "latest" badge on any card (desktop or mobile)

**Mobile behavior:**
- ALL cards: 1:1 aspect ratio (including large card)
- Single column stack
- Same size for all cards
- Gap: 16px between cards

### Service Cards

**Dimensions:**
- Desktop: 3 columns, equal width (~370px each with gaps)
- Gap: 24px between cards
- Padding: 32px internal

**Structure:**
```
Card container:
  border-radius: 2px
  border: 1px solid rgba(0, 0, 0, 0.08)
  background: white
  padding: 32px
  transition: all 300ms ease
  
  hover:
    transform: translateY(-3px)
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06)
    border-color: #FF5233

Icon:
  width: 48px
  height: 48px
  color: #FF5233
  stroke-width: 1.5px (outline style)
  margin-bottom: 16px

Number watermark:
  position: absolute
  top: 32px
  right: 32px
  font-family: Geist Mono
  font-size: 48px
  color: rgba(0, 0, 0, 0.08)
  font-weight: 600

Title:
  font-size: 32px
  font-weight: 500
  color: #111111
  margin-bottom: 12px

Description:
  font-size: 18px
  color: #575757
  line-height: 1.6
  margin-bottom: 16px

CTA link:
  font-size: 16px
  color: #575757
  
  hover:
    color: #FF5233
```

**Icons (from Lucide):**
- AI Training: Brain or Cpu
- Marketing Campaigns: Megaphone or Radio
- Protocol Growth: TrendingUp or Network

### Forms (Newsletter)

**Email Input:**
```
flex: 1
height: 56px (desktop) / 54px (mobile)
padding: 0 20px (desktop) / 0 16px (mobile)
background: rgba(255, 255, 255, 0.08)
border: 1px solid rgba(255, 255, 255, 0.15)
border-radius: 8px 0 0 8px (desktop) / 8px (mobile stacked)
color: #EDEDED
font-size: 16px (desktop) / 15px (mobile)
transition: all 200ms ease

placeholder:
  color: #9A9A9A

focus:
  outline: none
  border-color: rgba(255, 255, 255, 0.3)
```

**Submit Button:**
```
width: auto
min-width: max-content
height: 56px (desktop) / 54px (mobile)
padding: 0 24px (desktop) / 0 20px (mobile)
background: #FF5233
border: none
border-radius: 0 8px 8px 0 (desktop) / 8px (mobile stacked)
color: white
font-size: 14px (desktop) / 12px (mobile)
font-weight: 600
letter-spacing: 0.08em
text-transform: uppercase
display: flex
align-items: center
gap: 8px (desktop) / 6px (mobile)
transition: background 200ms ease

hover:
  background: #FF6A47

focus-visible:
  outline: 2px solid white
  outline-offset: 2px

icon (ChevronRight):
  width: 18px
  height: 18px
  stroke-width: 2.2px
```

**Form Container:**
```
display: flex
flex-direction: row (desktop) / column (mobile)
gap: 0 (desktop, inputs touching) / 12px (mobile)
margin-top: 20px
```

### Navigation

**Navbar container:**
```
position: fixed
top: 0
left: 0
right: 0
z-index: 1000
transition: all 300ms ease
```

**Initial state (top of page):**
```
background: transparent
border-bottom: none
padding: 20px 0

Logo:
  content: "₊˚⊹"
  color: #FF5233
  font-size: 24px
  
Links:
  color: #111111
  font-size: 16px
  font-weight: 500
  
Subscribe button:
  background: #FF5233
  color: white
```

**Scrolled state:**
```
background: rgba(250, 250, 250, 0.8)
backdrop-filter: blur(12px)
border-bottom: 1px solid rgba(0, 0, 0, 0.08)
padding: 16px 0

Logo animation:
  "₊˚⊹" → "vista ₊˚⊹"
  expand left, 300ms ease
  margin-left: 4px between "vista" and stars
  stars maintain 0deg rotation ALWAYS
```

**Newsletter section intersection (dark theme):**
```
background: rgba(17, 17, 17, 0.8)
backdrop-filter: blur(12px)
border-bottom: 1px solid rgba(255, 255, 255, 0.08)

Logo:
  color: #E4E2D8 (text "vista")
  stars: #FF5233 (unchanged)

Links:
  color: #E4E2D8

Subscribe button:
  background: #FF5233 (unchanged)
  color: white (unchanged)
```

**Implementation:**
- IntersectionObserver on `#newsletter` section
- `rootMargin: "-50px 0px -50px 0px"` (trigger before full intersection)
- Toggle class: `.navbar--inverted`
- All transitions: 300ms ease

---

## 📐 Section Specifications

### 1. HERO

**Dimensions:**
- Height: ~70vh (NOT 100vh)
- Shows peek of content below (~30vh of next section visible)

**Layout:**
```
Section container:
  position: relative
  min-height: 70vh
  display: flex
  align-items: center
  justify-content: center
  overflow: hidden (for decorative symbols)
  background: #E4E2D8

Content container:
  max-width: 1200px
  padding: 0 64px (desktop) / 0 24px (mobile)
  position: relative
  z-index: 10

Content max-width:
  640px (mobile) / 768px (desktop)
```

**Decorative Symbols (from landing2 Hero.tsx):**

```jsx
<div className="parallax-container absolute inset-0 overflow-hidden pointer-events-none select-none" 
     style={{ perspective: "1000px" }}>
  <RingIcon
    className="absolute text-ultra-orange will-change-transform"
    style={{
      width: "clamp(160px, 21vw, 280px)",
      height: "auto",
      top: "-5%",
      left: "50%",
      transform: "translateZ(-200px) scale(1.2)",
    }}
  />
  <GridIcon
    className="absolute text-ultra-orange hidden sm:block will-change-transform"
    style={{
      width: "clamp(200px, 40vw, 420px)",
      height: "auto",
      top: "25%",
      right: "-5%",
      transform: "translateZ(-150px) scale(1.15)",
    }}
  />
  <PlusIcon
    className="absolute text-ultra-orange will-change-transform"
    style={{
      width: "clamp(140px, 22vw, 240px)",
      height: "auto",
      bottom: "-8%",
      left: "48%",
      transform: "translateZ(-100px) scale(1.1)",
    }}
  />
</div>
```

**CRITICAL:** Icons source: `/src/components/icons.tsx` (RingIcon, GridIcon, PlusIcon)

**Headline:**
```
"vista investigates the future of the internet"
  
"vista" word:
  text-decoration: underline
  text-decoration-color: #FF5233
  text-decoration-thickness: 4px (CRITICAL: not 2px)
  text-underline-offset: 0.18em
  font-weight: 400
  
Rest of text:
  font-size: 72px (desktop) / 44px (mobile)
  font-weight: 600
  line-height: 1.1
  color: #111111
```

**Tagline:**
```
"A research hub for builders, investors, and explorers in blockchain and AI."

font-size: 20px
color: #575757
line-height: 1.6
max-width: 480px
margin-top: 16px
```

**CTAs:**
```
Primary button (Subscribe):
  [See Buttons - Primary spec above]
  
Secondary button (See what we do →):
  [See Buttons - Secondary spec above]
  onClick: smooth scroll to #services section

Spacing:
  gap: 16px between buttons
  margin-top: 32px from tagline
```

**Social Proof Logos:**
```
Container:
  display: flex
  gap: 32px
  align-items: center
  margin-top: 32px
  
Logos:
  - ApeChain
  - Obol
  - Arco
  
Each logo:
  height: 32px
  width: auto
  filter: grayscale(100%)
  opacity: 0.6
  transition: opacity 200ms ease
  
  hover:
    opacity: 1
```

**Grid Lines:**
- Visible on hero section
- 2 vertical lines at container edges (1200px)
- Color: rgba(0, 0, 0, 0.06)

### 2. THE LATEST (Articles)

**Section Title:**
```
"the latest"

font-size: 48px (desktop) / 36px (mobile)
font-weight: 600
color: #111111
text-transform: lowercase
margin-bottom: 48px
```

**Layout - Desktop:**
```
Container:
  max-width: 1200px
  display: grid
  grid-template-columns: 1fr 1fr
  grid-template-rows: 1fr 1fr
  gap: 20px

Large card (left):
  grid-row: 1 / 3
  aspect-ratio: 1 / 1
  
Grid cards (right):
  2×2 grid (4 cards)
  each: aspect-ratio: 1 / 1
  gap: 20px between
```

**Layout - Mobile:**
```
Container:
  display: flex
  flex-direction: column
  gap: 16px

All cards:
  aspect-ratio: 1 / 1
  NO badge on "latest" card
  Same size for all
```

**Card specs:** See Component Library > Article Cards

**RSS Integration:**
```
Source: https://vistasubstack.substack.com/feed
Parse: title, excerpt, image, category, date
Sort: latest first (large card = most recent)
Fallback gradients by category:
  - AI: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
  - DeFi: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
  - Infra: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
  - Default: linear-gradient(135deg, #fa709a 0%, #fee140 100%)
```

### 3. NEWSLETTER (Full-Screen Dark)

**CRITICAL:** Use design from `/tmp/landing2-reference/src/components/Newsletter.tsx` adapted to full-screen.

**Section Container:**
```
height: 100vh
background: #111111
color: #E4E2D8
display: flex
align-items: center
justify-content: center
position: relative
overflow: hidden
scroll-snap-align: center
```

**Background Decoration:**
```
SVG pattern: /public/frame-110.svg (orange curved lines)

Layer 1 (base):
  background: #111111

Layer 2 (vector):
  background-image: url('/frame-110.svg')
  background-repeat: no-repeat
  background-size: auto 125% (mobile) / auto 108% (desktop)
  background-position: 170% center (mobile) / 100% center (desktop)
  opacity: 0.4 (mobile) / 1 (desktop md) / 0.75 (desktop lg)

Layer 3 (overlay gradient):
  Mobile:
    linear-gradient(to right, #111111, rgba(17,17,17,0.9), rgba(17,17,17,0.58))
  Desktop (<1366px):
    linear-gradient(to right, #111111, rgba(17,17,17,0.72), rgba(17,17,17,0.16))
  Desktop (>1367px):
    linear-gradient(to right, #111111, rgba(17,17,17,0.66), rgba(17,17,17,0.1))
```

**Content Layout:**
```
Container:
  max-width: 1200px
  padding: 64px (desktop) / 32px (mobile)
  position: relative
  z-index: 10
  
Layout:
  display: flex
  flex-direction: column
  gap: clamp(14px, 2vw, 20px)
  
Main content:
  max-width: 700px
```

**Kicker Row:**
```
display: flex
align-items: center
gap: 12px
margin-bottom: 16px

Kicker text:
  "EMERGENT STACK BY ETH LATAM"
  font-size: 12px
  font-weight: 600
  text-transform: uppercase
  letter-spacing: 0.08em
  color: #8E8E8E

Social proof chip:
  "10k+ subscribers"
  background: rgba(255, 255, 255, 0.08)
  border: 1px solid rgba(255, 255, 255, 0.15)
  border-radius: 16px
  padding: 4px 12px
  font-size: 11px
  font-weight: 600
  color: #E4E2D8
```

**Headline:**
```
"Less scrolling & more insights:
The blockchain + AI newsletter for builders shaping the future"

font-size: clamp(1.3rem, 6.2vw, 1.6rem) (mobile) / 48px (desktop)
font-weight: 500
color: #F5F5F5
line-height: 1.2
max-width: 26ch (mobile) / none (desktop)
margin-bottom: 16px
```

**Bullets:**
```
ul:
  list-style: none
  margin: 12px 0 0
  padding: 0
  color: #E6E6E6
  font-size: 18px (desktop) / 15px (mobile)
  line-height: 1.6

li:
  position: relative
  padding-left: 18px
  margin-top: 3px (except first)
  
li::before:
  content: "\203A" (› character)
  position: absolute
  left: 0
  color: #BDBDBD
```

**Form:** See Component Library > Forms (Newsletter)

**Authorship Line:**
```
"authored by vista in collab with arco.lat"

font-size: 14px
color: rgba(255, 255, 255, 0.6)
margin-top: 12px

"vista" word:
  color: #FF5233
  font-weight: 600
```

**Partner Logos:**
```
Container:
  display: flex
  gap: 24px
  align-items: center
  margin-top: 32px

ETH LATAM logo:
  src: /partners/eth-latam-white.svg
  height: 32px
  width: auto
  opacity: 0.8

ARCO logo:
  src: /partners/arco-white.png
  height: 32px
  width: auto
  opacity: 0.8
```

**Navbar Behavior:**
- IntersectionObserver watches newsletter section
- When in viewport: navbar switches to dark theme (see Navigation spec)
- When exits: navbar returns to light theme
- Transition: 300ms ease

### 4. SERVICES ("What We Do")

**Section Title:**
```
"what we do"

font-size: 48px (desktop) / 36px (mobile)
font-weight: 600
color: #111111
text-transform: lowercase
margin-bottom: 48px
```

**Layout:**
```
Desktop:
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 24px
  
Tablet (768-1024px):
  grid-template-columns: repeat(2, 1fr)
  third card wraps to second row
  
Mobile (<768px):
  grid-template-columns: 1fr
  stack vertically
```

**Cards:** See Component Library > Service Cards

**Services:**
1. AI Training (01)
2. Marketing Campaigns (02)
3. Protocol Growth (03)

**Bottom CTA:**
```
"View all services →"

display: block
text-align: center
margin-top: 48px
font-size: 16px
font-weight: 500
color: #575757

hover:
  color: #FF5233
  text-decoration: underline
  text-underline-offset: 4px

Links to: /landing2/services
```

### 5. WHO WE ARE (Preview)

**Section Title:**
```
"who we are"

font-size: 48px (desktop) / 36px (mobile)
font-weight: 600
color: #111111
text-transform: lowercase
margin-bottom: 24px
```

**Content:**
```
Paragraph:
  "Vista is a research collective exploring blockchain and AI. 
   We're at the frontier, finding signal in the noise. 
   We help teams move faster with research-backed insights and execution."
  
  font-size: 20px
  color: #575757
  line-height: 1.6
  max-width: 640px
  margin-bottom: 24px

CTA link:
  "Learn more about Vista →"
  font-size: 16px
  color: #575757
  
  hover:
    color: #FF5233
    text-decoration: underline
  
  Links to: /landing2/about
```

### 6. FOOTER

**Container:**
```
background: #111111 (or #0A0A0A)
color: #E4E2D8
padding: 80px 0 32px
position: relative

Grid lines:
  visible vertical guides (white, rgba(255,255,255,0.06))
```

**Optional CTA Section (top of footer):**
```
background: rgba(255, 255, 255, 0.03)
padding: 48px 0
margin-bottom: 64px
text-align: center

Headline:
  "Ready to work together?"
  font-size: 32px
  font-weight: 500
  color: #E4E2D8
  margin-bottom: 24px

Button:
  "Start a conversation →"
  Primary orange or ghost white variant
  Links to: contact form or calendar
```

**Main Footer Content:**
```
Layout:
  display: grid
  grid-template-columns: 2fr 1fr 1fr
  gap: 64px (desktop) / 32px (mobile)
  
Mobile:
  grid-template-columns: 1fr
  stack vertically
```

**Column 1 (Brand):**
```
Logo:
  "vista ₊˚⊹"
  font-size: 24px
  margin-bottom: 16px
  
  "vista": #E4E2D8
  "₊˚⊹": #FF5233, 0deg rotation, 4px margin-left

Tagline:
  "Research collective exploring blockchain and AI."
  font-size: 14px
  color: rgba(255, 255, 255, 0.6)
  line-height: 1.6
  max-width: 280px
```

**Column 2 (Pages):**
```
Heading:
  "PAGES"
  font-size: 12px
  font-weight: 600
  text-transform: uppercase
  letter-spacing: 0.08em
  color: rgba(255, 255, 255, 0.4)
  margin-bottom: 16px

Links:
  - Home
  - Services
  - About
  
  font-size: 14px
  color: rgba(255, 255, 255, 0.7)
  line-height: 2
  
  hover:
    color: #FF5233
```

**Column 3 (Connect):**
```
Heading:
  "CONNECT"
  [same as Column 2]

Links:
  - Substack (https://vistasubstack.substack.com)
  - Telegram (https://t.me/vistaDAO)
  - Twitter (https://twitter.com/viaboratorio)
  
  [same styling as Column 2]
```

**Bottom Bar:**
```
border-top: 1px solid rgba(255, 255, 255, 0.08)
padding-top: 24px
margin-top: 64px
display: flex
justify-content: space-between
align-items: center

Mobile:
  flex-direction: column
  gap: 16px
  text-align: center

Copyright:
  "© 2026 Vista"
  font-size: 14px
  color: rgba(255, 255, 255, 0.4)

Domain:
  "vista.wtf"
  font-size: 14px
  color: rgba(255, 255, 255, 0.4)

Social icons:
  display: flex
  gap: 16px
  
  Each icon:
    width: 24px
    height: 24px
    color: rgba(255, 255, 255, 0.4)
    
    hover:
      color: white
  
  Icons: X, LinkedIn, YouTube (from Lucide)
```

---

## 🎬 Interactions & Animations

### Navbar Scroll Behavior

**Trigger:** window.scrollY > 50

**Changes:**
1. Logo: "₊˚⊹" → "vista ₊˚⊹" (300ms ease, expand left)
2. Background: transparent → rgba(250,250,250,0.8) + blur(12px)
3. Border-bottom: none → 1px solid rgba(0,0,0,0.08)
4. Padding: 20px → 16px vertical

### Navbar Theme Inversion (Newsletter Section)

**Implementation:**
```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navbar.classList.add('navbar--inverted');
      } else {
        navbar.classList.remove('navbar--inverted');
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '-50px 0px -50px 0px'
  }
);

observer.observe(document.getElementById('newsletter'));
```

**CSS:**
```css
.navbar--inverted {
  background: rgba(17, 17, 17, 0.8) !important;
  border-bottom-color: rgba(255, 255, 255, 0.08) !important;
}

.navbar--inverted .nav-link {
  color: #E4E2D8 !important;
}

.navbar--inverted .logo-text {
  color: #E4E2D8 !important;
}

/* Stars and Subscribe button unchanged (FF5233) */
```

### Card Hover States

**Article cards:**
```css
transition: all 300ms ease;

.article-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-color: #FF5233;
  /* NO transform */
}
```

**Service cards:**
```css
transition: all 300ms ease;

.service-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  border-color: #FF5233;
}
```

### Scroll Snap (Newsletter Only)

```css
html {
  scroll-behavior: smooth;
}

main {
  scroll-snap-type: y proximity;
}

#newsletter {
  scroll-snap-align: center;
  scroll-snap-stop: normal;
}
```

---

## 📱 Responsive Breakpoints

### Mobile (<640px)

- Grid lines: hidden or 0.3 opacity
- Hero: 44px headline, 70vh height
- Latest: single column, all cards 1:1
- Newsletter: stacked form, smaller text
- Services: single column
- Footer: single column stack
- Navbar: compact padding

### Tablet (640-1024px)

- Grid lines: visible, 0.5 opacity
- Hero: 56px headline
- Latest: 2 columns or keep 1+4 layout
- Services: 2 columns
- Footer: 2 columns or stack

### Desktop (>1024px)

- Grid lines: visible, 0.6 opacity
- Hero: 72px headline, full layout
- Latest: 1+4 layout (1 large, 4 grid)
- Newsletter: horizontal form
- Services: 3 columns
- Footer: 3 columns

---

## ✅ Sacred Elements Checklist

- [ ] Stars `₊˚⊹` at 0deg rotation ALWAYS
- [ ] Color #FF5233 exact (no variations)
- [ ] 4px margin-left between "vista" and stars
- [ ] Hero underline: 4px thickness (NOT 2px)
- [ ] NO "latest" badge on any viewport
- [ ] Decorative symbols match Hero.tsx pattern exactly
- [ ] Newsletter design based on Newsletter.tsx
- [ ] Light mode ONLY: #E4E2D8 page background
- [ ] Newsletter section: #111111 dark background
- [ ] Border-radius 0-2px max (square philosophy)
- [ ] Grid lines visible and subtle

---

## 🚀 Implementation Notes

### File Structure

```
/src/app/landing2/
  page.tsx                    # Main landing page

/src/components/landing2/
  Navigation.tsx              # Navbar with theme switching
  HeroSection.tsx            # Hero with decorative symbols
  LatestSection.tsx          # 5-card articles layout
  NewsletterSection.tsx      # Full-screen dark newsletter
  ServicesSection.tsx        # 3-column services
  WhoWeAreSection.tsx        # Preview paragraph + CTA
  FooterSection.tsx          # Dark footer
  GridLines.tsx              # Grid lines component

/src/components/
  icons.tsx                  # RingIcon, GridIcon, PlusIcon (from main branch)
```

### CSS Classes Convention

Use descriptive, component-scoped classes:
- `.hero-*` for hero components
- `.article-card-*` for article cards
- `.newsletter-hero-*` for newsletter (from landing2 reference)
- `.service-card-*` for service cards
- `.footer-*` for footer components
- `.navbar-*` for navigation

### RSS Feed Integration

```typescript
// Client-side fetch on mount
useEffect(() => {
  fetch('https://vistasubstack.substack.com/feed')
    .then(res => res.text())
    .then(xml => {
      // Parse XML to JSON
      // Extract: title, link, description, category, pubDate, image
      // Sort by pubDate desc
      // Set state: [latest, ...rest]
    });
}, []);
```

### Icons Import

```typescript
import { RingIcon, GridIcon, PlusIcon } from '@/components/icons';
import { Brain, Megaphone, TrendingUp, ChevronRight } from 'lucide-react';
```

---

## 📊 Design References

1. **Chaos Labs** (chaoslabs.xyz)
   - Grid system with vertical guides
   - Squared design (border-radius 0-2px)
   - Dark footer with clean columns
   - Precision typography

2. **Stripe** (stripe.com)
   - Hero gradients (radial, subtle)
   - Generous whitespace (~70vh sections)
   - Peek effect (show content below fold)
   - Smooth scroll behavior

3. **Vista landing2** (main branch)
   - Hero decorative symbols (RingIcon, GridIcon, PlusIcon)
   - Newsletter card design (adapted to full-screen)
   - CSS class conventions (newsletter-hero-*)
   - Sacred brand elements (stars, orange, underline)

---

**END OF DESIGN SPEC**

**Developer Implementation Guide:**
1. DELETE all `/src/app/landing2/` and `/src/components/landing2/` files first
2. Reference this spec for every component
3. Copy decorative symbols pattern from main branch Hero.tsx exactly
4. Copy newsletter CSS classes from main branch globals.css
5. Validate against Sacred Elements Checklist before reporting
6. Test: build, localhost, ngrok, screenshots
7. Report to Jarvis with completion checklist

**Estimated implementation time:** 90-120 minutes (clean build)
