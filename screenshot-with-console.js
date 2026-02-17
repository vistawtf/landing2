const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1200 });
  
  // Listen for console messages
  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push(`${msg.type()}: ${msg.text()}`);
  });
  
  // Listen for errors
  page.on('pageerror', error => {
    consoleMessages.push(`ERROR: ${error.message}`);
  });
  
  console.log('Navigating to landing2...');
  await page.goto('http://localhost:3006/landing2', { waitUntil: 'networkidle2' });
  
  // Wait for RSS to load
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  console.log('\n=== Browser Console Output ===');
  consoleMessages.forEach(msg => console.log(msg));
  
  // Check if RSS articles loaded
  const articleCount = await page.evaluate(() => {
    const articles = document.querySelectorAll('#latest article');
    return articles.length;
  });
  
  console.log(`\n=== Articles Found: ${articleCount} ===`);
  
  // Get article titles
  const titles = await page.evaluate(() => {
    const articles = document.querySelectorAll('#latest article h3');
    return Array.from(articles).map(h3 => h3.textContent);
  });
  
  console.log('\n=== Article Titles ===');
  titles.forEach((title, i) => console.log(`${i + 1}. ${title}`));
  
  await browser.close();
})();
