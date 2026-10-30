import fs from 'fs';

const html = fs.readFileSync('section_engagement-models.html', 'utf8');
console.log('LENGTH:', html.length);

// Print the 3 articles inside engagement models
const articles = [...html.matchAll(/<article[^>]*>([\s\S]*?)<\/article>/gi)].map(m => m[0]);
console.log('ARTICLES COUNT:', articles.length);
for (let i = 0; i < articles.length; i++) {
  console.log(`\n--- ARTICLE ${i+1} ---`);
  // clean tags except h3 and p
  const text = articles[i].replace(/<svg[\s\S]*?<\/svg>/g, '[SVG]');
  console.log(text.slice(0, 1500));
}
