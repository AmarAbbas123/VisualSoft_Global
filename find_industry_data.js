import fs from 'fs';

const html = fs.readFileSync('mt_bytes_raw.html', 'utf8');
const scriptSrcs = [...html.matchAll(/<script[^>]*src=["']([^"']+)["']/gi)].map(m => m[1]);

async function findIndustryData() {
  for (const s of scriptSrcs) {
    const url = 'https://mt-bytes.io' + s;
    const res = await fetch(url);
    const txt = await res.text();
    if (txt.includes('Checkout friction costs') || txt.includes('Cart Abandonment Research')) {
      console.log('FOUND INDUSTRY DATA IN:', s);
      fs.writeFileSync('industry_chunk.js', txt);
      
      // Extract industry objects
      const idx = txt.indexOf('Checkout friction costs');
      console.log(txt.substring(idx - 400, idx + 1200));
    }
  }
}

findIndustryData();
