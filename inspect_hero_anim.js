import fs from 'fs';

const heroHtml = fs.readFileSync('section_hero.html', 'utf8');
console.log('HERO HTML:');
console.log(heroHtml);

// Check if there are other files or scripts mentioning HomeHeroAnimation
const css = fs.readFileSync('mt_bytes_styles.css', 'utf8');
const animMatches = [...css.matchAll(/HomeHeroAnimation[^{]*\{[^}]*\}/g)].map(m => m[0]);
console.log('\nHERO ANIMATION CSS RULES:', animMatches.length);
console.log(animMatches.slice(0, 10).join('\n'));
