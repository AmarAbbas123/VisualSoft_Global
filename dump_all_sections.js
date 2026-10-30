import fs from 'fs';

const files = [
  'section_hero.html',
  'section_technology-partners.html',
  'section_who-we-are.html',
  'section_capabilities-overview.html',
  'section_industry-intelligence.html',
  'section_engagement-models.html',
  'section_ecosystem.html',
  'section_insights-original-content.html',
  'section_home-next-step.html',
  'header.html',
  'footer.html'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== FILE: ${file} ===================`);
  
  // Extract text nodes cleanly
  // Replace tags with spaces or newlines
  const text = content
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' [ICON] ')
    .replace(/<[^>]+>/g, '\n')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n');
  
  console.log(text.slice(0, 3000));
}
