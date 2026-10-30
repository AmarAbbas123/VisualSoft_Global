import fs from 'fs';

const text = fs.readFileSync('page_chunk.js', 'utf8');
const idx = text.indexOf('Turning ideas into');
if (idx !== -1) {
  console.log('Context around Turning ideas into:');
  console.log(text.substring(idx - 200, idx + 400));
} else {
  console.log('Not in page_chunk.js, searching other chunks...');
}
