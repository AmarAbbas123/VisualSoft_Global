import fs from 'fs';

const html = fs.readFileSync('section_industry-intelligence.html', 'utf8');
console.log('INDUSTRY HTML length:', html.length);
console.log(html);
