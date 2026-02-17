import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  // Navigate to landing2
  await page.goto('http://localhost:3000/landing2', { 
    waitUntil: 'networkidle0',
    timeout: 10000
  });
  
  // Wait a moment for fonts to load
  await new Promise(r => setTimeout(r, 500));
  
  // Scroll down to trigger navbar animation (text appears)
  await page.evaluate(() => window.scrollTo(0, 100));
  await new Promise(r => setTimeout(r, 500));
  
  // Take full screenshot
  await page.screenshot({
    path: 'navbar-spacing-fixed.png',
    fullPage: false
  });
  
  console.log('✅ Screenshot saved: navbar-spacing-fixed.png (scrolled state)');
  
  await browser.close();
})();
