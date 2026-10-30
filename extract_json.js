import fs from 'fs';

const txt = fs.readFileSync('industry_chunk.js', 'utf8');

// Find the big object containing "Baymard Institute"
const idx = txt.indexOf('Baymard Institute');
// Let's find the start of the object
let start = txt.lastIndexOf('{"technology":', idx);
if (start === -1) {
  start = txt.lastIndexOf('technology:{', idx);
}
if (start === -1) {
  start = txt.lastIndexOf('retail:{', idx);
}
console.log('Start index:', start);

// Let's dump 5000 characters around it to see the structure
console.log(txt.substring(idx - 1500, idx + 3500));
