import Parser from 'rss-parser';

interface RSSItem {
  title?: string;
  contentSnippet?: string;
  pubDate?: string;
  link?: string;
  enclosure?: {
    url?: string;
  };
  'content:encoded'?: string;
  content?: string;
}

interface ArchiveItem {
  title?: string;
  description?: string;
  subtitle?: string;
  truncated_body_text?: string;
  canonical_url?: string;
  slug?: string;
  cover_image?: string | null;
  post_date?: string;
}

export interface Article {
  title: string;
  excerpt: string;
  category: string;
  link: string;
  image?: string;
  date?: string;
}

export const RSS_FEED_URL = 'https://vistalabs.substack.com/feed';
export const ARCHIVE_API_URL = 'https://vistalabs.substack.com/api/v1/archive?sort=new';

const REQUEST_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (compatible; VistaRSSBot/1.0; +https://vista.wtf)',
  Accept: 'application/rss+xml, application/xml, text/xml, application/json',
};

function inferCategory(title: string, description: string): string {
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

function extractImage(item: RSSItem): string | undefined {
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

function formatExcerpt(description: string): string {
  return description.substring(0, 150) + (description.length > 150 ? '...' : '');
}

async function fetchArchiveFeed(): Promise<Article[]> {
  const response = await fetch(ARCHIVE_API_URL, { headers: REQUEST_HEADERS });
  if (!response.ok) {
    throw new Error(`Archive API status ${response.status}`);
  }

  const items = (await response.json()) as ArchiveItem[];
  if (!Array.isArray(items) || items.length === 0) {
    return [];
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

export async function fetchRSSFeed(): Promise<Article[]> {
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

    const feed = await parser.parseURL(RSS_FEED_URL);
    if (!Array.isArray(feed.items) || feed.items.length === 0) {
      throw new Error('RSS feed returned no items');
    }

    return feed.items.slice(0, 5).map((item: RSSItem) => {
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
  } catch {
    return fetchArchiveFeed();
  }
}
