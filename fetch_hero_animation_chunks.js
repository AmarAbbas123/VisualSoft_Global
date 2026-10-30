import fs from 'fs';

async function fetchChunks() {
  const files = [
    'static/chunks/bd904a5c.17b5fadeb30ac711.js',
    'static/chunks/7051.6d563eda7227d716.js',
    'static/chunks/b536a0f1.76e2d0e7815e68d5.js',
    'static/css/f6b65d9381356bd3.css'
  ];

  for (const f of files) {
    const url = `https://mt-bytes.io/_next/${f}`;
    const res = await fetch(url);
    const txt = await res.text();
    const safeName = f.replace(/\//g, '_');
    fs.writeFileSync(safeName, txt, 'utf8');
    console.log(`Saved ${safeName}: length ${txt.length}`);
  }
}

fetchChunks();
