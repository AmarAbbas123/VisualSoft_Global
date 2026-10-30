import fs from 'fs';

const css = fs.readFileSync('mt_bytes_styles.css', 'utf8');

const components = [
  'HeroSection',
  'TechnologyEcosystem',
  'WhoWeAre',
  'LateralGallery',
  'industry-dashboard',
  'EngagementReference',
  'CompanyStory',
  'HomeEcosystem',
  'NewInsightsShowcase',
  'FinalCTASection'
];

for (const comp of components) {
  // Find selectors containing comp
  const regex = new RegExp(`[^}]*${comp}[^}]*\\{[^}]*\\}`, 'g');
  const matches = [...css.matchAll(regex)].map(m => m[0].trim());
  console.log(`\nComponent: ${comp} — found ${matches.length} CSS rules`);
  console.log(matches.slice(0, 5).join('\n\n'));
}
