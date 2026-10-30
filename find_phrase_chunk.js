import fs from 'fs';

const html = fs.readFileSync('mt_bytes_raw.html', 'utf8');
const scriptSrcs = [...html.matchAll(/<script[^>]*src=["']([^"']+)["']/gi)].map(m => m[1]);

async function checkAll() {
  for (const s of scriptSrcs) {
    const url = 'https://mt-bytes.io' + s;
    const res = await fetch(url);
    const txt = await res.text();
    if (txt.includes('Turning ideas into')) {
      console.log('FOUND IN CHUNK:', s);
      const idx = txt.indexOf('Turning ideas into');
      console.log(txt.substring(idx - 300, idx + 800));
    }
  }
}

checkAll();
