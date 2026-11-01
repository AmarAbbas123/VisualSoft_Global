const https = require('https');
https.get('https://mt-bytes.io/_next/static/chunks/app/layout-260e0bbae0953563.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('"what-we-do"===p');
    console.log(data.substring(idx - 100, idx + 800));
  });
});
