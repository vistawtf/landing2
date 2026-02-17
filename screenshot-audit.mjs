import puppeteer from 'puppeteer';
import { writeFileSync } from 'fs';

const URL = 'http://localhost:3000';

async function takeScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 390, height: 844 },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000)); // wait for animations

    // Full page screenshot
    await page.screenshot({
      path: `/tmp/audit-${vp.name}-full.png`,
      fullPage: true,
    });
    console.log(`✅ ${vp.name} full screenshot saved`);

    // Test scrolled nav state
    await page.evaluate(() => window.scrollTo(0, 300));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({
      path: `/tmp/audit-${vp.name}-scrolled.png`,
    });
    console.log(`✅ ${vp.name} scrolled screenshot saved`);

    // Scroll to newsletter
    await page.evaluate(() => {
      const el = document.getElementById('newsletter');
      if (el) el.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
      path: `/tmp/audit-${vp.name}-newsletter.png`,
    });
    console.log(`✅ ${vp.name} newsletter screenshot saved`);

    // Scroll to services
    await page.evaluate(() => {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
      path: `/tmp/audit-${vp.name}-services.png`,
    });
    console.log(`✅ ${vp.name} services screenshot saved`);

    // Scroll to bottom (footer)
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({
      path: `/tmp/audit-${vp.name}-footer.png`,
    });
    console.log(`✅ ${vp.name} footer screenshot saved`);

    // On mobile: test hamburger menu
    if (vp.name === 'mobile') {
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise(r => setTimeout(r, 300));
      const menuBtn = await page.$('button[aria-label="Toggle menu"]');
      if (menuBtn) {
        await menuBtn.click();
        await new Promise(r => setTimeout(r, 500));
        await page.screenshot({ path: `/tmp/audit-mobile-menu-open.png` });
        console.log('✅ mobile menu open screenshot saved');
      }
    }

    await page.close();
  }

  await browser.close();
  console.log('Done!');
}

takeScreenshots().catch(console.error);
