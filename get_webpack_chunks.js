import fs from 'fs';

async function run() {
  const url = "https://mt-bytes.io/_next/static/chunks/webpack-d1a96fb36fd2d664.js";
  const res = await fetch(url);
  const txt = await res.text();
  
  // Find where .js is constructed
  const m = txt.match(/return[^;]*\.js/g);
  console.log("Chunk pattern matches:", m);
  
  // Let's print the entire chunk loading function
  const idx = txt.indexOf('u.u=');
  if (idx !== -1) {
    console.log(txt.substring(idx, idx + 1000));
  } else {
    // print snippet around "static/chunks/"
    const idx2 = txt.indexOf('static/chunks/');
    console.log(txt.substring(idx2 - 100, idx2 + 500));
  }
}

run();
