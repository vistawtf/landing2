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

async function fetchRSS() {
  try {
    const parser = new Parser({
      customFields: {
        item: [
          ['content:encoded', 'content:encoded'],
          ['content', 'content'],
        ],
      },
      requestOptions: {
        headers: REQUEST_HEADERS,
      },
    });

    console.log('Fetching RSS feed from:', RSS_FEED_URL);
    const feed = await parser.parseURL(RSS_FEED_URL);
    console.log('Feed fetched successfully:', feed.title);

    if (!Array.isArray(feed.items) || feed.items.length === 0) {
      throw new Error('RSS feed returned no items');
    }

    const articles = feed.items.slice(0, 5).map((item) => {
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

    const file = writeArticles(articles, RSS_FEED_URL);
    console.log('RSS articles saved to:', file);
    console.log(`Fetched ${articles.length} articles from RSS`);
  } catch (rssError) {
    console.warn('RSS fetch failed, trying archive API:', rssError.message);

    try {
      const archiveArticles = await fetchFromArchive();
      const file = writeArticles(archiveArticles, ARCHIVE_API_URL);
      console.log('Archive articles saved to:', file);
      console.log(`Fetched ${archiveArticles.length} articles from archive API`);
    } catch (archiveError) {
      console.warn('Archive API fetch failed, using hardcoded fallback:', archiveError.message);

      const fallbackArticles = [
        { title: 'The Future of AI Agents in DeFi', excerpt: 'Exploring how autonomous agents are reshaping decentralized finance protocols.', category: 'AI', link: '#' },
        { title: 'Protocol Governance 2.0', excerpt: 'New models for decentralized decision-making.', category: 'DeFi', link: '#' },
        { title: 'Infrastructure Scaling', excerpt: "How L2s are solving Ethereum's throughput challenges.", category: 'Infra', link: '#' },
        { title: 'MEV & Intent-Based Systems', excerpt: 'The evolution of transaction ordering and user intent.', category: 'DeFi', link: '#' },
        { title: 'AI Model Coordination', excerpt: 'Multi-agent systems working together on-chain.', category: 'AI', link: '#' },
      ];

      const file = writeArticles(fallbackArticles, RSS_FEED_URL);
      console.log('Fallback articles written to:', file);
    }
  }
}

fetchRSS();
