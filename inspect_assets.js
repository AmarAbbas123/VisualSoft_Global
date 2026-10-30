import fs from 'fs';

function printDetails(file) {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== ${file} ===================`);
  console.log('LENGTH:', content.length);
  // Find all images
  const imgs = [...content.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
  console.log('IMAGES:', imgs);
  // Find all svg paths or labels
  const svgLabels = [...content.matchAll(/aria-label=["']([^"']+)["']/gi)].map(m => m[1]);
  console.log('ARIA LABELS:', svgLabels);
}

[
  'section_technology-partners.html',
  'section_who-we-are.html',
  'section_capabilities-overview.html',
  'section_industry-intelligence.html',
  'section_engagement-models.html',
  'section_ecosystem.html',
  'section_insights-original-content.html',
  'section_home-next-step.html'
].forEach(printDetails);
