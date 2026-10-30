import fs from 'fs';

const js = fs.readFileSync('static_chunks_7051.6d563eda7227d716.js', 'utf8');
const idx = js.indexOf('47051:');
console.log('47051 starts at:', idx);
const componentCode = js.substring(idx);
fs.writeFileSync('hero_anim_component.js', componentCode, 'utf8');
console.log('Saved hero_anim_component.js, length:', componentCode.length);
