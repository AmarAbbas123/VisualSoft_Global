import fs from 'fs';

const html = fs.readFileSync('mt_bytes_raw.html', 'utf8');
const scriptSrcs = [...html.matchAll(/<script[^>]*src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Scripts count:', scriptSrcs.length);
console.log(scriptSrcs);
