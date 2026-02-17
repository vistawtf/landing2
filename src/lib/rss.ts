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

export interface Article {
  title: string;
  excerpt: string;
  category: string;
  link: string;
  image?: string;
  date?: string;
}

export const RSS_FEED_URL = 'https://vistalabs.substack.com/feed';

// Map category intelligently based on article title/content keywords
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
  
  return 'AI'; // Default for a16z news content (tech/AI focused)
}

// Extract image from RSS item
function extractImage(item: RSSItem): string | undefined {
  // Try enclosure first
  if (item.enclosure?.url) {
    return item.enclosure.url;
  }
  
  // Try to extract from content:encoded or content
  const content = item['content:encoded'] || item.content || '';
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch?.[1]) {
    return imgMatch[1];
  }
  
  return undefined;
}

export async function fetchRSSFeed(): Promise<Article[]> {
  const parser = new Parser({
    customFields: {
      item: [
        ['content:encoded', 'content:encoded'],
        ['content', 'content']
      ]
    }
  });
  
  const feed = await parser.parseURL(RSS_FEED_URL);
  
  const articles = feed.items.slice(0, 5).map((item: RSSItem) => {
    const title = item.title || 'Untitled';
    const description = item.contentSnippet || item.content?.substring(0, 200) || 'No description available';
    const category = inferCategory(title, description);
    
    return {
      title,
      excerpt: description.substring(0, 150) + (description.length > 150 ? '...' : ''),
      category,
      link: item.link || '#',
      image: extractImage(item),
      date: item.pubDate,
    };
  });
  
  return articles;
}
