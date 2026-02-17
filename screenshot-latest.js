const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1200 });
  
  console.log('Navigating to landing2...');
  await page.goto('http://localhost:3006/landing2', { waitUntil: 'networkidle2' });
  
  // Wait a bit for the RSS data to load
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Find the "the latest" section
  console.log('Taking screenshot of "The Latest" section...');
  const latestSection = await page.$('#latest');
  
  if (latestSection) {
    await latestSection.screenshot({ path: '/root/clawd/latest-section.png' });
    console.log('✅ Screenshot saved to /root/clawd/latest-section.png');
  } else {
    console.log('❌ Could not find #latest section');
    await page.screenshot({ path: '/root/clawd/full-page.png' });
    console.log('Saved full page screenshot instead');
  }
  
  // Also save the full page
  await page.screenshot({ path: '/root/clawd/full-landing2-page.png', fullPage: true });
  console.log('✅ Full page screenshot saved to /root/clawd/full-landing2-page.png');
  
  await browser.close();
})();
