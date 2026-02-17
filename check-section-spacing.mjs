import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1365, height: 768 });
await page.goto('http://localhost:3000/landing2', { waitUntil: 'networkidle2' });

const data = await page.evaluate(() => {
  const ids = ['hero', 'latest', 'services', 'who-we-are'];
  const out = {};
  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    out[id] = {
      paddingTop: cs.paddingTop,
      marginTop: cs.marginTop,
      top: r.top,
      offsetTop: el.offsetTop,
      className: el.className,
    };
  }
  return out;
});

console.log(JSON.stringify(data, null, 2));
await browser.close();
