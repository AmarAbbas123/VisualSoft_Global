const fs = require('fs');
const raw = fs.readFileSync('C:\\Users\\VisualSoft.com\\.gemini\\antigravity-ide\\brain\\79515b41-886f-4f03-ab20-624fbf1612c8\\.system_generated\\steps\\653\\content.md', 'utf8');

// Find where "We Accelerate" or "We Leverage" appears
const idx = raw.indexOf('We Accelerate');
if (idx !== -1) {
  console.log('Found "We Accelerate" at:', idx);
  console.log(raw.substring(idx - 600, idx + 800));
} else {
  // search "We Leverage"
  const idx2 = raw.indexOf('We Leverage');
  console.log('Found "We Leverage" at:', idx2);
  if (idx2 !== -1) {
    console.log(raw.substring(idx2 - 600, idx2 + 800));
  }
}
