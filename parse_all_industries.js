import fs from 'fs';

const txt = fs.readFileSync('industry_chunk.js', 'utf8');

let start = txt.indexOf('{"technology":');
let balance = 0;
let end = -1;
let inString = false;
let escape = false;

for (let i = start; i < txt.length; i++) {
  const c = txt[i];
  if (escape) {
    escape = false;
    continue;
  }
  if (c === '\\') {
    escape = true;
    continue;
  }
  if (c === '"') {
    inString = !inString;
    continue;
  }
  if (!inString) {
    if (c === '{') balance++;
    else if (c === '}') {
      balance--;
      if (balance === 0) {
        end = i;
        break;
      }
    }
  }
}

const jsObjStr = txt.substring(start, end + 1);
try {
  const fn = new Function('return (' + jsObjStr + ');');
  const parsed = fn();
  console.log('Successfully parsed with JS Function! Keys:', Object.keys(parsed));
  
  const homeData = {};
  for (const [k, v] of Object.entries(parsed)) {
    homeData[k] = {
      name: v.name,
      ctaLabel: v.home?.cta || `Explore ${v.name}`,
      boardTitle: v.home?.boardTitle || '',
      source: v.home?.source || {},
      eyebrow: v.hub?.signals?.[0]?.eyebrow || 'Industry Trend',
      headline: v.home?.boardTitle || '',
      summary: v.home?.title || '',
      metrics: v.home?.metrics || [],
      chart: v.home?.chart || { type: 'flow', metrics: [] },
      chartHeading: v.home?.chartHeading || 'Key Metrics',
      chartUnit: v.home?.chartUnit || ''
    };
  }
  
  if (!fs.existsSync('src/data')) {
    fs.mkdirSync('src/data', { recursive: true });
  }
  fs.writeFileSync('src/data/industryHomeData.json', JSON.stringify(homeData, null, 2), 'utf8');
  console.log('Saved src/data/industryHomeData.json!');
} catch (e) {
  console.error('Failed:', e.message);
}
