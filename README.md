# Vista Website

A clean, minimal landing page for Vista — a research hub for builders, investors, and explorers in blockchain and AI.

## 🎯 MVP Features

- **Header**: Fixed navigation with logo and subscribe CTA
- **Hero Section**: Clean headline with tagline
- **Newsletter Signup**: Email capture form (placeholder for Beehiiv integration)
- **Latest Section**: Featured article cards with placeholder content
- **Footer**: Simple footer with social links

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Inter + Instrument Serif (Google Fonts)
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+
- npm or yarn

### Installation

```bash
# Clone/navigate to the project
cd vista-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
vista-website/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout with metadata & fonts
│       ├── page.tsx        # Main landing page
│       ├── globals.css     # Global styles & CSS variables
│       └── favicon.ico     # Site favicon
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Colors

| Name | Value | Usage |
|------|-------|-------|
| Vista Coral | `#E85C41` | Primary accent, CTAs |
| Vista Dark | `#0D0D0D` | Text, dark sections |
| Vista Gray | `#6B7280` | Secondary text |
| Vista Border | `#E5E5E5` | Dividers, borders |

### Typography

- **Display**: Instrument Serif (headlines)
- **Body**: Inter (everything else)

## 🔜 Next Steps

### Immediate (v1.1)

1. **Beehiiv Integration**
   - Connect newsletter form to Beehiiv API
   - Add email validation
   - Handle errors gracefully

2. **Real Content**
   - Replace placeholder posts with actual newsletter editions
   - Add proper images

3. **SEO**
   - Add OG images
   - Configure sitemap.xml
   - Set up robots.txt

### Future (v2.0)

- Article pages
- Search functionality
- Channels/categories system
- RSS feed

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy (zero config needed)

### Environment Variables

None required for MVP. Will need:

```env
# For Beehiiv integration
BEEHIIV_API_KEY=your_api_key
BEEHIIV_PUBLICATION_ID=your_publication_id
```

## 📝 License

© 2025 Vista. All rights reserved.
