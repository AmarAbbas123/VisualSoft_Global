import fs from 'fs';
import path from 'path';

const html = fs.readFileSync('mt_bytes_raw.html', 'utf8');

// Find all image sources
const imgRegex = /(?:src|srcSet|url)=["']?([^"' >]+\.(?:webp|svg|png|jpg|jpeg))(?:\?[^"' >]*)?["']?/gi;
const urls = new Set();
let match;
while ((match = imgRegex.exec(html)) !== null) {
  let u = match[1];
  if (u.startsWith('/_next/image?url=')) {
    u = decodeURIComponent(u.replace('/_next/image?url=', '').split('&')[0]);
  }
  if (u.startsWith('/images/') || u.startsWith('/')) {
    urls.add(u);
  }
}

console.log('Found assets to download:', [...urls]);

async function downloadAll() {
  for (const relUrl of urls) {
    const fullUrl = `https://mt-bytes.io${relUrl}`;
    const localPath = path.join('public', relUrl.replace(/^\//, ''));
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    try {
      const res = await fetch(fullUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      });
      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(localPath, buffer);
        console.log(`Downloaded ${relUrl} (${buffer.length} bytes)`);
      } else {
        console.warn(`Failed ${fullUrl}: status ${res.status}`);
      }
    } catch (err) {
      console.error(`Error downloading ${fullUrl}:`, err.message);
    }
  }
}

downloadAll();
