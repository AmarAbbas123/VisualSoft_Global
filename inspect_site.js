import fs from 'fs';

const html = fs.readFileSync('mt_bytes_raw.html', 'utf8');
console.log('HTML length:', html.length);

if (html.includes('__NEXT_DATA__')) console.log('Framework: Next.js');
if (html.includes('wp-content')) console.log('Framework: WordPress');
if (html.includes('webflow')) console.log('Framework: Webflow');
if (html.includes('framer')) console.log('Framework: Framer');

const titleMatch = html.match(/<title>(.*?)<\/title>/i);
console.log('Title:', titleMatch ? titleMatch[1] : 'None');

const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('H1s:', h1s);
console.log('H2s:', h2s);
console.log('H3s:', h3s);

// Sections and major classes
const sections = [...html.matchAll(/<section([^>]*)>/gi)].map(m => m[1]);
console.log('Sections count:', sections.length);
console.log('Section tag attributes:', sections);

// Check scripts / css links
const cssLinks = [...html.matchAll(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('CSS links:', cssLinks);
