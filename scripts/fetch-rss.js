const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const RSS_FEED_URL = 'https://vistalabs.substack.com/feed';
const ARCHIVE_API_URL = 'https://vistalabs.substack.com/api/v1/archive?sort=new';
const REQUEST_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (compatible; VistaRSSBot/1.0; +https://vista.wtf)',
  Accept: 'application/rss+xml, application/xml, text/xml, application/json',
};

function inferCategory(title, description) {
  const text = (title + ' ' + description).toLowerCase();

  if (text.match(/\b(ai|artificial intelligence|agent|llm|gpt|model)\b/i)) {
    return 'AI';
  }
  if (text.match(/\b(defi|protocol|governance|dao|token|yield|liquidity)\b/i)) {
    return 'DeFi';
  }
  if (text.match(/\b(infrastructure|scaling|l2|layer 2|ethereum|blockchain|network)\b/i)) {
    return 'Infra';
  }

  return 'AI';
}

function extractImage(item) {
  if (item.enclosure?.url) {
    return item.enclosure.url;
  }

  const content = item['content:encoded'] || item.content || '';
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch?.[1]) {
    return imgMatch[1];
  }

  return undefined;
}

function formatExcerpt(description) {
  return description.substring(0, 150) + (description.length > 150 ? '...' : '');
}

function outputPath() {
  const outputDir = path.join(__dirname, '../public');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  return path.join(outputDir, 'rss-articles.json');
}

function writeArticles(articles, sourceUrl) {
  const file = outputPath();
  fs.writeFileSync(file, JSON.stringify({
    articles,
    fetchedAt: new Date().toISOString(),
    feedUrl: sourceUrl,
  }, null, 2));
  return file;
}

function readCachedArticles() {
  const file = outputPath();
  if (!fs.existsSync(file)) {
    return [];
  }

  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed?.articles)) {
      return [];
    }
    return parsed.articles.filter((item) => item?.title && item?.link && item.link !== '#');
  } catch {
    return [];
  }
}

// ─── Apify ──────────────────────────────────────────────────────────────────
// Runs benthepythondev/newsletter-scraper via Apify's sync endpoint.
// This bypasses Substack's 403 on GitHub Actions IPs since Apify uses its own infra.
// Input: { newsletterUrl, maxArticles }
// Output: { title, url, published_date, content_markdown, subtitle, ... }
async function fetchViaApify() {
  const token = process.env.APIFY_API_TOKEN;
  if (!token) throw new Error('APIFY_API_TOKEN not set');

  console.log('Fetching via Apify (benthepythondev/newsletter-scraper)...');

  const response = await fetch(
    `https://api.apify.com/v2/acts/benthepythondev~newsletter-scraper/run-sync-get-dataset-items?token=${token}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        newsletterUrl: 'https://efra0x.substack.com',
        scrapeMode: 'archive',
        maxPosts: 5,
        outputFormat: 'text',
        includeImages: true,
        includeMetadata: false,
        delaySeconds: 0.1,
      }),
      signal: AbortSignal.timeout(90_000),
    },
  );

  if (!response.ok) {
    throw new Error(`Apify actor responded with HTTP ${response.status}`);
  }

  const items = await response.json();
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Apify actor returned no items');
  }

  console.log(`Apify returned ${items.length} items`);

  return items.slice(0, 5).map((item) => {
    // Actor doesn't return article title — derive it from the URL slug
    const slug = item.url?.split('/p/')?.[1]?.split('?')?.[0];
    const title = slug
      ? slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      : item.subtitle || 'Untitled';

    const description = item.excerpt || item.content_text?.substring(0, 200) || '';

    // Actor returns Substack CDN thumbnails. Find the first non-avatar image and
    // extract the original S3 URL from the CDN URL.
    const allImages = item.images || [];
    const coverImage = allImages.find(
      (img) => img?.url && !img.alt_text?.toLowerCase().includes('avatar'),
    );
    const cdnUrl = coverImage?.url;
    let imageUrl;
    if (cdnUrl) {
      try {
        const encoded = cdnUrl.split('/fetch/')[1]?.split('/').slice(1).join('/');
        imageUrl = encoded ? decodeURIComponent(encoded) : cdnUrl;
      } catch {
        imageUrl = cdnUrl;
      }
    }

    return {
      title,
      excerpt: formatExcerpt(description),
      category: inferCategory(title, description),
      link: item.url || '#',
      image: imageUrl,
      date: item.published_date,
    };
  });
}

// ─── Direct RSS ──────────────────────────────────────────────────────────────
async function fetchFromRSS() {
  const parser = new Parser({
    customFields: {
      item: [
        ['content:encoded', 'content:encoded'],
        ['content', 'content'],
      ],
    },
    requestOptions: { headers: REQUEST_HEADERS },
  });

  console.log('Fetching RSS feed directly from:', RSS_FEED_URL);
  const feed = await parser.parseURL(RSS_FEED_URL);
  console.log('Feed fetched successfully:', feed.title);

  if (!Array.isArray(feed.items) || feed.items.length === 0) {
    throw new Error('RSS feed returned no items');
  }

  return feed.items.slice(0, 5).map((item) => {
    const title = item.title || 'Untitled';
    const description = item.contentSnippet || item.content?.substring(0, 200) || 'No description available';
    const category = inferCategory(title, description);

    return {
      title,
      excerpt: formatExcerpt(description),
      category,
      link: item.link || '#',
      image: extractImage(item),
      date: item.pubDate,
    };
  });
}

// ─── Archive API ─────────────────────────────────────────────────────────────
async function fetchFromArchive() {
  console.log('Fetching archive API from:', ARCHIVE_API_URL);
  const response = await fetch(ARCHIVE_API_URL, { headers: REQUEST_HEADERS });
  if (!response.ok) {
    throw new Error(`Archive API status ${response.status}`);
  }

  const items = await response.json();
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Archive API returned no items');
  }

  return items.slice(0, 5).map((item) => {
    const title = item.title || 'Untitled';
    const description = item.description || item.subtitle || item.truncated_body_text || 'No description available';
    const category = inferCategory(title, description);
    const link = item.canonical_url || (item.slug ? `https://vistalabs.substack.com/p/${item.slug}` : '#');

    return {
      title,
      excerpt: formatExcerpt(description),
      category,
      link,
      image: item.cover_image || undefined,
      date: item.post_date,
    };
  });
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function fetchRSS() {
  // 1. Apify — bypasses Substack 403 on CI/VPS IPs
  try {
    const articles = await fetchViaApify();
    const file = writeArticles(articles, RSS_FEED_URL);
    console.log(`Apify: ${articles.length} articles saved to ${file}`);
    return;
  } catch (apifyErr) {
    console.warn('Apify fetch failed, trying direct RSS:', apifyErr.message);
  }

  // 2. Direct RSS
  try {
    const articles = await fetchFromRSS();
    const file = writeArticles(articles, RSS_FEED_URL);
    console.log(`Direct RSS: ${articles.length} articles saved to ${file}`);
    return;
  } catch (rssErr) {
    console.warn('Direct RSS failed, trying archive API:', rssErr.message);
  }

  // 3. Archive API
  try {
    const articles = await fetchFromArchive();
    const file = writeArticles(articles, ARCHIVE_API_URL);
    console.log(`Archive API: ${articles.length} articles saved to ${file}`);
    return;
  } catch (archiveErr) {
    console.warn('Archive API failed:', archiveErr.message);
  }

  // 4. Cache
  const cached = readCachedArticles();
  if (cached.length > 0) {
    const file = writeArticles(cached, 'cached');
    console.log(`Using cached rss-articles.json (${cached.length} articles): ${file}`);
    return;
  }

  const file = writeArticles([], RSS_FEED_URL);
  console.log('No cached articles found; wrote empty rss-articles.json:', file);
}

fetchRSS();
