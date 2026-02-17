import puppeteer from 'puppeteer';
import fs from 'fs/promises';

const url = 'http://localhost:3000/landing2';
const outDir = '/root/clawd/vista-website/screenshots';
await fs.mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

const metrics = await page.evaluate(() => {
  const n = document.getElementById('newsletter');
  const rect = n?.getBoundingClientRect();
  return {
    newsletterTopAbs: n ? n.offsetTop : null,
    newsletterHeight: n ? n.clientHeight : null,
    viewportH: window.innerHeight,
    rectTop: rect?.top ?? null,
  };
});

// Scroll close to newsletter, then do wheel input to see where it settles
await page.evaluate((top) => window.scrollTo({ top: Math.max(0, top - 220), behavior: 'auto' }), metrics.newsletterTopAbs ?? 0);
await new Promise(r => setTimeout(r, 400));

const before = await page.evaluate(() => window.scrollY);
await page.mouse.wheel({ deltaY: 420 });
await new Promise(r => setTimeout(r, 700));
const after = await page.evaluate(() => window.scrollY);

const nPos = await page.evaluate(() => {
  const n = document.getElementById('newsletter');
  if (!n) return null;
  const rect = n.getBoundingClientRect();
  return { top: rect.top, bottom: rect.bottom, mid: rect.top + rect.height / 2, vh: window.innerHeight };
});

const screenshotPath = `${outDir}/scroll-snap-newsletter-after.png`;
await page.screenshot({ path: screenshotPath, fullPage: false });

console.log(JSON.stringify({ metrics, before, after, nPos, screenshotPath }, null, 2));

await browser.close();
