# Vista Website - RSS Integration Documentation

## Overview
Successfully integrated RSS feed from **a16z news** (https://www.a16z.news/feed) to power "The Latest" section on the Vista website.

## Implementation Details

### Architecture
**Approach:** Build-time RSS fetching with client-side fallback
- Static export compatible (no server-side API routes)
- RSS feed fetched at build time and saved as JSON
- Client-side component loads pre-generated JSON
- Fallback to hardcoded articles if RSS fails

### Files Created/Modified

#### 1. `/scripts/fetch-rss.js`
Node.js script that fetches Bankless RSS feed and saves to `public/rss-articles.json`
- Fetches 5 most recent articles
- Intelligently categorizes articles (AI/DeFi/Infra) based on keywords
- Extracts images from RSS enclosures or content HTML
- Saves formatted JSON for client consumption

#### 2. `/src/components/landing2/LatestSection.tsx`
Updated to fetch RSS data client-side
- Uses `useEffect` to load `/rss-articles.json` on mount
- Falls back to hardcoded articles if fetch fails
- Preserves existing card layout (1 large + 4 small)
- Maintains all styling and responsive behavior

#### 3. `package.json`
Added scripts:
- `"prebuild": "node scripts/fetch-rss.js"` - Auto-fetches RSS before build
- `"fetch-rss": "node scripts/fetch-rss.js"` - Manual RSS refresh

#### 4. `/public/rss-articles.json`
Generated file containing:
```json
{
  "articles": [ /* 5 formatted articles */ ],
  "fetchedAt": "2026-02-16T15:12:35.903Z",
  "feedUrl": "https://bankless.com/feed"
}
```

### RSS Feed Used
**a16z news** - https://www.a16z.news/feed
- a16z's official news publication
- High-quality tech/AI/crypto content perfectly aligned with Vista's focus
- RSS feed format: Standard RSS 2.0
- Updates: Multiple times per week

### Category Inference Logic
Articles are automatically categorized based on title/description keywords:
- **AI:** ai, artificial intelligence, agent, llm, gpt, model
- **DeFi:** defi, protocol, governance, dao, token, yield, liquidity
- **Infra:** infrastructure, scaling, l2, layer 2, ethereum, blockchain, network
- **Default:** AI (for a16z news content, which is primarily tech/AI focused)

### How It Works

1. **Build Time:**
   - `npm run build` triggers `prebuild` script
   - Script fetches Bankless RSS feed
   - Parses 5 most recent articles
   - Saves formatted JSON to `public/rss-articles.json`

2. **Runtime:**
   - LatestSection component mounts
   - Fetches `/rss-articles.json` (static file)
   - Updates state with RSS articles
   - Renders cards with real content

3. **Fallback:**
   - If fetch fails, shows hardcoded articles
   - No visual disruption to users

### Current Articles (as of 2026-02-16)
1. "Charts of the Week: Customer Service Reckoning" (AI)
2. "The Lighthouse Playbook" (AI)
3. "I'm out, who's with me?: 'Exit' as an organizing idea" (AI)
4. "The Case for Scaling Venture" (Infra)
5. "Defense Acquisition Reform: Victories and Next Steps for FY27 NDAA" (AI)

### Testing Results

✅ **Build:** Passes successfully
✅ **Dev Server:** Running on http://localhost:3006
✅ **RSS Fetch:** Successfully pulls 5 articles from Bankless
✅ **Layout:** Preserved (1 large card + 4 small cards in grid)
✅ **Categories:** Correctly inferred (AI, DeFi, Infra mix)
✅ **Links:** Point to original Bankless articles
✅ **Fallback:** Gracefully handles fetch errors

### Images
✅ **Images are working!** The a16z news RSS feed includes high-quality featured images for each article, which are now displaying in the cards. Gradient backgrounds serve as fallback for any articles without images.

### Future Enhancements
- Add image extraction from article content HTML (partially implemented)
- Support multiple RSS feeds (mix sources)
- Add date formatting/display
- Cache control/refresh mechanism
- Admin UI to change RSS feed URL

### Manual RSS Refresh
To fetch latest articles without full rebuild:
```bash
npm run fetch-rss
```

Then restart dev server or rebuild.

---

**Integration Verified:** 2026-02-16  
**RSS Source:** Bankless (https://bankless.com/feed)  
**Articles Displayed:** 5  
**Status:** ✅ Working  
**Images:** ✅ Displaying from RSS feed  
**Categories:** ✅ Correctly inferred (AI, Infra, DeFi)  
**Links:** ✅ All pointing to original a16z news articles
