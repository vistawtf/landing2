import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1400 });
  
  // Navigate to landing2
  await page.goto('http://localhost:3000/landing2', { 
    waitUntil: 'networkidle0',
    timeout: 10000
  });
  
  // Wait for fonts and images
  await new Promise(r => setTimeout(r, 1000));
  
  // Scroll to "the latest" section
  await page.evaluate(() => {
    const section = document.getElementById('latest');
    if (section) {
      section.scrollIntoView({ behavior: 'instant' });
    }
  });
  
  await new Promise(r => setTimeout(r, 500));
  
  // Take screenshot of full viewport (should show the latest section)
  await page.screenshot({
    path: 'cards-shadow-result.png',
    fullPage: false
  });
  
  console.log('✅ Screenshot saved: cards-shadow-result.png');
  
  await browser.close();
})();
