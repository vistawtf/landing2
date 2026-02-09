import puppeteer from 'puppeteer';

const BASE_URL = 'http://localhost:3050';

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  // Test all pages on the smallest viewport
  const viewport = { width: 375, height: 667 };
  const pages = ['/', '/about', '/archive', '/#newsletter', '/#about'];
  
  console.log(`Testing all pages at ${viewport.width}x${viewport.height}...`);
  
  for (const path of pages) {
    const page = await browser.newPage();
    await page.setViewport(viewport);
    
    try {
      await page.goto(`${BASE_URL}${path}`, { waitUntil: 'networkidle2', timeout: 10000 });
      
      // Check scrollability and footer
      const result = await page.evaluate(() => {
        const footer = document.querySelector('footer');
        const body = document.body;
        
        // Scroll to bottom
        window.scrollTo(0, body.scrollHeight);
        
        return {
          canScroll: body.scrollHeight > window.innerHeight,
          documentHeight: body.scrollHeight,
          viewportHeight: window.innerHeight,
          footerExists: !!footer,
          footerBottom: footer ? footer.getBoundingClientRect().bottom : null
        };
      });
      
      const status = result.canScroll && result.footerExists ? '✅' : '❌';
      console.log(`${status} ${path}: canScroll=${result.canScroll}, height=${result.documentHeight}, footer=${result.footerExists}`);
    } catch (e) {
      console.log(`❌ ${path}: ERROR - ${e.message}`);
    }
    
    await page.close();
  }
  
  await browser.close();
  console.log('\nDone!');
}

main().catch(console.error);
