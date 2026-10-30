import fs from 'fs';

const html = fs.readFileSync('section_who-we-are.html', 'utf8');
console.log(html);
