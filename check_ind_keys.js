import fs from 'fs';

const txt = fs.readFileSync('industry_chunk.js', 'utf8');

// Find all industries and their home configs
// The industries are: technology, retail, restaurants, real-estate, healthcare, education, hospitality, travel
const indKeys = ['technology', 'retail', 'restaurants', 'real-estate', 'healthcare', 'education', 'hospitality', 'travel'];

// Let's find where each industry's "home" config is defined
for (const key of indKeys) {
  const searchPattern = `"${key}":`;
  const idx = txt.indexOf(searchPattern);
  console.log(`Industry ${key} index:`, idx);
}
