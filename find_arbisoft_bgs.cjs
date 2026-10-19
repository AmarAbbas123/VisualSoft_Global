const fs = require('fs');
const raw = fs.readFileSync('C:\\Users\\VisualSoft.com\\.gemini\\antigravity-ide\\brain\\79515b41-886f-4f03-ab20-624fbf1612c8\\.system_generated\\steps\\653\\content.md', 'utf8');

// Find all section tags
const sections = [...raw.matchAll(/<section\b[^>]*>/gi)].map(m => m[0]);
console.log('Sections found:', sections.length);
sections.forEach(s => console.log(' - ' + s));

// Find all background colors in CSS
const bgColors = [...raw.matchAll(/(?:background|background-color):\s*(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|var\([^)]+\))/gi)].map(m => m[1]);
console.log('\nUnique background colors:');
console.log([...new Set(bgColors)]);
