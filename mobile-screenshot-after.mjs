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
  
  // Wait for server to be ready
  console.log('Waiting for server...');
  await new Promise(r => setTimeout(r, 3000));
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const results = [];
  
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
      const filename = `${SCREENSHOTS_DIR}/after-${viewport.name}-${pageInfo.name}.png`;
      await page.screenshot({ path: filename, fullPage: true });
      console.log(`  Saved: ${filename}`);
      
      // Scroll to bottom and take screenshot
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await new Promise(r => setTimeout(r, 300));
      
      const bottomFilename = `${SCREENSHOTS_DIR}/after-${viewport.name}-${pageInfo.name}-bottom.png`;
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
          canScroll: body.scrollHeight > window.innerHeight,
          footerVisible: (() => {
            const footer = document.querySelector('footer');
            if (!footer) return 'no footer found';
            const rect = footer.getBoundingClientRect();
            return {
              bottom: rect.bottom,
              windowHeight: window.innerHeight,
              isFullyVisible: rect.bottom <= window.innerHeight,
              footerHeight: rect.height
            };
          })()
        };
      });
      
      console.log(`  Metrics:`, JSON.stringify(metrics, null, 2));
      
      results.push({
        viewport: viewport.name,
        page: pageInfo.name,
        canScroll: metrics.canScroll,
        documentHeight: metrics.documentHeight,
        footerVisible: metrics.footerVisible.isFullyVisible !== false
      });
      
      await page.close();
    }
  }
  
  await browser.close();
  
  console.log('\n=== SUMMARY ===');
  const allPassed = results.every(r => r.canScroll || r.footerVisible);
  console.log(`Status: ${allPassed ? '✅ ALL PASSED' : '❌ ISSUES FOUND'}`);
  results.forEach(r => {
    const status = (r.canScroll || r.footerVisible) ? '✅' : '❌';
    console.log(`  ${status} ${r.viewport} - ${r.page}: height=${r.documentHeight}, canScroll=${r.canScroll}, footerVisible=${r.footerVisible}`);
  });
  
  console.log('\n=== Done! ===');
}

main().catch(console.error);
