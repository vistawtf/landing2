import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1800 });
  
  // Navigate to landing2
  await page.goto('http://localhost:3000/landing2', { 
    waitUntil: 'networkidle0',
    timeout: 10000
  });
  
  // Wait for fonts and images
  await new Promise(r => setTimeout(r, 1000));
  
  // Scroll to footer (who we are section is now part of footer)
  await page.evaluate(() => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  });
  
  await new Promise(r => setTimeout(r, 500));
  
  // Take screenshot
  await page.screenshot({
    path: 'footer-merge-result.png',
    fullPage: false
  });
  
  console.log('✅ Screenshot saved: footer-merge-result.png');
  
  await browser.close();
})();
