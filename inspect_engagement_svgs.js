import fs from 'fs';

const html = fs.readFileSync('section_engagement-models.html', 'utf8');

const svgs = [...html.matchAll(/<svg[\s\S]*?<\/svg>/gi)].map(m => m[0]);
console.log('Engagement SVGs count:', svgs.length);
svgs.forEach((s, i) => {
  console.log(`SVG ${i+1}: length ${s.length}, snippet: ${s.slice(0, 150)}`);
});
