import fs from 'fs';

async function run() {
  const cssUrls = [
    'https://mt-bytes.io/_next/static/css/66af39c88a3a2c53.css',
    'https://mt-bytes.io/_next/static/css/09bbca23464ba725.css',
    'https://mt-bytes.io/_next/static/css/187cbea8b7e73f43.css',
    'https://mt-bytes.io/_next/static/css/bb819a8a93587b05.css',
    'https://mt-bytes.io/_next/static/css/c6e3c02869b4e51d.css'
  ];
  let combined = '';
  for (const url of cssUrls) {
    try {
      const res = await fetch(url);
      const txt = await res.text();
      combined += `\n/* ${url} */\n` + txt;
    } catch (e) {
      console.error('Failed', url, e);
    }
  }
  fs.writeFileSync('mt_bytes_styles.css', combined, 'utf8');
  console.log('mt_bytes_styles.css written, size:', combined.length);
}

run();
