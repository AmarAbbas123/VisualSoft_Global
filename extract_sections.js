import fs from 'fs';

const html = fs.readFileSync('mt_bytes_raw.html', 'utf8');

function extractSectionDetails(id) {
  // Find start of section
  const startIdx = html.indexOf(`id="${id}"`);
  if (startIdx === -1) {
    console.log(`Section ${id} NOT found`);
    return;
  }
  // Find closing section tag
  // We can scan for </section> after startIdx
  const endIdx = html.indexOf('</section>', startIdx);
  const sectionContent = html.substring(startIdx - 10, endIdx + 10);
  
  fs.writeFileSync(`section_${id}.html`, sectionContent, 'utf8');
  console.log(`Wrote section_${id}.html (length: ${sectionContent.length})`);
}

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
  extractSectionDetails(id);
}

// Also check header/nav
const headerIdx = html.indexOf('<header');
const headerEnd = html.indexOf('</header>', headerIdx);
if (headerIdx !== -1) {
  fs.writeFileSync('header.html', html.substring(headerIdx, headerEnd + 9), 'utf8');
  console.log('Wrote header.html');
}

// Also footer
const footerIdx = html.indexOf('<footer');
const footerEnd = html.lastIndexOf('</footer>');
if (footerIdx !== -1) {
  fs.writeFileSync('footer.html', html.substring(footerIdx, footerEnd + 9), 'utf8');
  console.log('Wrote footer.html');
}
