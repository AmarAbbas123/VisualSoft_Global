import fs from 'fs';

async function examineHeroData() {
  const url = 'https://mt-bytes.io/_next/static/chunks/1914-ecc8ead3c6768769.js';
  const res = await fetch(url);
  const txt = await res.text();
  fs.writeFileSync('hero_data.js', txt);
  
  // Find where 10526 starts
  const idx = txt.indexOf('BUILDING SMARTER SOLUTIONS');
  console.log(txt.substring(idx - 100, idx + 2500));
}

examineHeroData();
