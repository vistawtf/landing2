import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });
await page.goto('http://localhost:3000/landing2', { waitUntil: 'networkidle2' });

// Put viewport around hero->latest transition similar to user report
await page.evaluate(() => {
  const latest = document.getElementById('latest');
  if (!latest) return;
  window.scrollTo({ top: latest.offsetTop - 360, behavior: 'auto' });
});
await new Promise(r => setTimeout(r, 300));

const path = '/root/clawd/vista-website/screenshots/latest-gap-fixed.png';
await page.screenshot({ path, fullPage: false });

const metrics = await page.evaluate(() => {
  const ids = ['latest', 'services', 'who-we-are'];
  const out = {};
  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;
    const cs = getComputedStyle(el);
    out[id] = { paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom, offsetTop: el.offsetTop };
  }
  return out;
});

console.log(JSON.stringify({ path, metrics }, null, 2));
await browser.close();
