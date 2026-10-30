import fs from 'fs';

const html = fs.readFileSync('section_capabilities-overview.html', 'utf8');
console.log('LENGTH:', html.length);

const articles = [...html.matchAll(/<article[^>]*>([\s\S]*?)<\/article>/gi)].map(m => m[0]);
console.log('CAPABILITIES COUNT:', articles.length);
articles.forEach((a, i) => {
  console.log(`\n--- CAPABILITY ${i+1} ---`);
  // clean tags except h3, p, li, img
  const cleaned = a.replace(/<svg[\s\S]*?<\/svg>/g, '[SVG]');
  console.log(cleaned.slice(0, 1000));
});

// Also check the nav/indicator if any
const nav = html.match(/<nav[^>]*>[\s\S]*?<\/nav>/i);
if (nav) {
  console.log('\nNAV:', nav[0].slice(0, 1000));
}
