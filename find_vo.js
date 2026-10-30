import fs from 'fs';

const txt = fs.readFileSync('industry_chunk.js', 'utf8');

// Find where "AI adoption is ahead of confidence" appears elsewhere or the data object
const matches = [...txt.matchAll(/name:"Technology"/g)];
console.log('Matches for Technology:', matches.length);
if (matches.length > 0) {
  const idx = txt.indexOf('name:"Technology"');
  console.log(txt.substring(idx - 100, idx + 1000));
} else {
  // Let's find "Cart Abandonment Research"
  const idx = txt.indexOf('Cart Abandonment Research');
  console.log('Cart Abandonment Research:');
  console.log(txt.substring(idx - 200, idx + 500));
}
