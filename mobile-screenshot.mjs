import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';

const SCREENSHOTS_DIR = './screenshots';
const BASE_URL = 'http://localhost:3050';

const VIEWPORTS = [
  { name: 'iphone-375', width: 375, height: 667 },
  { name: 'iphone-390', width: 390, height: 844 },
  { name: 'iphone-428', width: 428, height: 926 },
];

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'about', hash: '#about' },
  { name: 'newsletter', hash: '#newsletter' },
];

async function main() {
  await mkdir(SCREENSHOTS_DIR, { recursive: true });
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  for (const viewport of VIEWPORTS) {
    console.log(`\n=== Testing viewport: ${viewport.name} (${viewport.width}x${viewport.height}) ===`);
    
    for (const pageInfo of PAGES) {
      const page = await browser.newPage();
      await page.setViewport({ width: viewport.width, height: viewport.height });
      
      const url = pageInfo.path 
        ? `${BASE_URL}${pageInfo.path}` 
        : `${BASE_URL}/${pageInfo.hash || ''}`;
      
      console.log(`Visiting ${url}...`);
      await page.goto(url, { waitUntil: 'networkidle2' });
      
      // If there's a hash, scroll to it
      if (pageInfo.hash) {
        await page.evaluate((hash) => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
        }, pageInfo.hash);
        await new Promise(r => setTimeout(r, 500));
      }
      
      // Take full page screenshot
      const filename = `${SCREENSHOTS_DIR}/before-${viewport.name}-${pageInfo.name}.png`;
      await page.screenshot({ path: filename, fullPage: true });
      console.log(`  Saved: ${filename}`);
      
      // Also take a viewport screenshot to see what's visible
      const viewportFilename = `${SCREENSHOTS_DIR}/before-${viewport.name}-${pageInfo.name}-viewport.png`;
      await page.screenshot({ path: viewportFilename, fullPage: false });
      console.log(`  Saved: ${viewportFilename}`);
      
      // Check if footer is visible by scrolling to bottom
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await new Promise(r => setTimeout(r, 300));
      
      const bottomFilename = `${SCREENSHOTS_DIR}/before-${viewport.name}-${pageInfo.name}-bottom.png`;
      await page.screenshot({ path: bottomFilename, fullPage: false });
      console.log(`  Saved: ${bottomFilename}`);
      
      // Check for overflow issues
      const metrics = await page.evaluate(() => {
        const body = document.body;
        const html = document.documentElement;
        return {
          bodyScrollHeight: body.scrollHeight,
          bodyClientHeight: body.clientHeight,
          htmlScrollHeight: html.scrollHeight,
          htmlClientHeight: html.clientHeight,
          windowInnerHeight: window.innerHeight,
          documentHeight: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
          footerVisible: (() => {
            const footer = document.querySelector('footer');
            if (!footer) return 'no footer found';
            const rect = footer.getBoundingClientRect();
            return {
              bottom: rect.bottom,
              windowHeight: window.innerHeight,
              isVisible: rect.bottom <= window.innerHeight + 50,
              footerHeight: rect.height
            };
          })()
        };
      });
      
      console.log(`  Metrics:`, JSON.stringify(metrics, null, 2));
      
      await page.close();
    }
  }
  
  await browser.close();
  console.log('\n=== Done! ===');
}

main().catch(console.error);
