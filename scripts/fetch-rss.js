const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const RSS_FEED_URL = 'https://vistasubstack.substack.com/feed';

// Map category intelligently based on article title/content keywords
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
  
  return 'AI'; // Default for a16z news content (tech/AI focused)
}

// Extract image from RSS item
function extractImage(item) {
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

async function fetchRSS() {
  try {
    const parser = new Parser({
      customFields: {
        item: [
          ['content:encoded', 'content:encoded'],
          ['content', 'content']
        ]
      }
    });
    
    console.log('Fetching RSS feed from:', RSS_FEED_URL);
    const feed = await parser.parseURL(RSS_FEED_URL);
    console.log('Feed fetched successfully:', feed.title);
    
    const articles = feed.items.slice(0, 5).map((item) => {
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
    
    const outputDir = path.join(__dirname, '../public');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const outputPath = path.join(outputDir, 'rss-articles.json');
    fs.writeFileSync(outputPath, JSON.stringify({ articles, fetchedAt: new Date().toISOString(), feedUrl: RSS_FEED_URL }, null, 2));
    
    console.log('✅ RSS articles saved to:', outputPath);
    console.log(`📰 Fetched ${articles.length} articles`);
    
  } catch (error) {
    console.warn('⚠️ Failed to fetch RSS, using fallback articles:', error.message);
    const fallbackArticles = [
      { title: 'The Future of AI Agents in DeFi', excerpt: 'Exploring how autonomous agents are reshaping decentralized finance protocols.', category: 'AI', link: '#' },
      { title: 'Protocol Governance 2.0', excerpt: 'New models for decentralized decision-making.', category: 'DeFi', link: '#' },
      { title: 'Infrastructure Scaling', excerpt: "How L2s are solving Ethereum's throughput challenges.", category: 'Infra', link: '#' },
      { title: 'MEV & Intent-Based Systems', excerpt: 'The evolution of transaction ordering and user intent.', category: 'DeFi', link: '#' },
      { title: 'AI Model Coordination', excerpt: 'Multi-agent systems working together on-chain.', category: 'AI', link: '#' },
    ];
    const outputDir = path.join(__dirname, '../public');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    const outputPath = path.join(outputDir, 'rss-articles.json');
    fs.writeFileSync(outputPath, JSON.stringify({ articles: fallbackArticles, fetchedAt: new Date().toISOString(), feedUrl: RSS_FEED_URL }, null, 2));
    console.log('✅ Fallback articles written to:', outputPath);
  }
}

fetchRSS();
