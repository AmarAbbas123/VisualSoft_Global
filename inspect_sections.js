import fs from 'fs';

const html = fs.readFileSync('mt_bytes_raw.html', 'utf8');

// Function to print details of each section
const sectionIds = [
  'hero',
  'technology-partners',
  'who-we-are',
  'capabilities-overview',
  'industry-intelligence',
  'engagement-models',
  'ecosystem',
  'insights-original-content',
  'home-next-step'
];

for (const id of sectionIds) {
  const regex = new RegExp(`<section[^>]*id=["']${id}["'][\\s\\S]*?<\\/section>`, 'i');
  const match = html.match(regex);
  if (match) {
    console.log(`\n================ SECTION: ${id} (Length: ${match[0].length}) ================`);
    // Extract text and basic structure
    const cleaned = match[0]
      .replace(/<svg[\s\S]*?<\/svg>/gi, '[SVG_ICON]')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<script[\s\S]*?<\/script>/gi, '');
    
    // Print first 1500 chars of text
    console.log(cleaned.slice(0, 1200));
  } else {
    console.log(`Section ${id} not found directly with regex`);
  }
}
