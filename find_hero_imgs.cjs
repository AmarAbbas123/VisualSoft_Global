const fs = require('fs');
const raw = fs.readFileSync('C:\\Users\\VisualSoft.com\\.gemini\\antigravity-ide\\brain\\79515b41-886f-4f03-ab20-624fbf1612c8\\.system_generated\\steps\\653\\content.md', 'utf8');

const urls = [...new Set([...raw.matchAll(/https:\/\/cdn\.arbisoft\.com\/[^\s\"'&]+\.(?:png|jpg|jpeg|webp|svg)/gi)].map(m => m[0]))];
console.log('Found ' + urls.length + ' CDN images:');
urls.forEach(u => console.log(' - ' + u));
