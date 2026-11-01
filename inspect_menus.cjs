const https = require('https');
https.get('https://mt-bytes.io/_next/static/chunks/app/layout-260e0bbae0953563.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    ['mega-menu-what-we-do', 'mega-menu-who-we-are', 'mega-menu-what-we-think'].forEach(id => {
      const idx = data.indexOf(id);
      console.log('=== ' + id + ' ===');
      console.log(data.substring(idx - 100, idx + 450));
    });
  });
});
