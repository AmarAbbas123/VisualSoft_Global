import fs from 'fs';

async function fetchPageChunk() {
  const url = 'https://mt-bytes.io/_next/static/chunks/app/page-6dbc73e821f63406.js';
  const res = await fetch(url);
  const text = await res.text();
  fs.writeFileSync('page_chunk.js', text);
  console.log('Saved page_chunk.js, length:', text.length);

  // Search for phrases in hero
  const phrases = text.match(/\["([^"]*Scalable Solutions[^"]*)"\]/g) || text.match(/"Scalable Solutions"[^\]}]*/g);
  console.log('Phrases match:', phrases);
}

fetchPageChunk();
