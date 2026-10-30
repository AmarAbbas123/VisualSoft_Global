import fs from 'fs';

const txt = fs.readFileSync('industry_chunk.js', 'utf8');

// Find vO object or data definition
const vOIdx = txt.indexOf('vO:');
if (vOIdx !== -1) {
  console.log('vO snippet:');
  console.log(txt.substring(vOIdx - 50, vOIdx + 3000));
} else {
  // Search for "AI adoption is ahead of confidence"
  const idx = txt.indexOf('AI adoption is ahead of confidence');
  console.log(txt.substring(idx - 500, idx + 1500));
}
