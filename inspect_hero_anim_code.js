import fs from 'fs';

console.log('=== CSS: static_css_f6b65d9381356bd3.css ===');
const css = fs.readFileSync('static_css_f6b65d9381356bd3.css', 'utf8');
console.log(css.slice(0, 3000));

console.log('\n=== JS: static_chunks_7051.6d563eda7227d716.js ===');
const js = fs.readFileSync('static_chunks_7051.6d563eda7227d716.js', 'utf8');
console.log(js.slice(0, 3000));
