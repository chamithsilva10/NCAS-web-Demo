const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const pages = [
  'https://ncas.ac.lk/ncas-6th-international-research-symposium-2024-photos/',
  'https://ncas.ac.lk/ncas-5th-international-research-symposium-2023/',
  'https://ncas.ac.lk/ncas-4th-international-research-symposium-2022-photos/',
  'https://ncas.ac.lk/symposium-gallery-2020/',
  'https://ncas.ac.lk/ncas_symposium_gallery_2019/',
  'https://ncas.ac.lk/symposium-2018/'
];

const outRoot = path.resolve(__dirname, '..', 'downloaded-galleries');
if (!fs.existsSync(outRoot)) fs.mkdirSync(outRoot, { recursive: true });

function get(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // follow redirect
        return resolve(get(new URL(res.headers.location, url).toString()));
      }
      if (res.statusCode !== 200) return reject(new Error('Status ' + res.statusCode + ' for ' + url));
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(downloadFile(new URL(res.headers.location, url).toString(), dest));
      }
      if (res.statusCode !== 200) return reject(new Error('Download failed ' + res.statusCode + ' ' + url));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve()));
      file.on('error', (err) => reject(err));
    }).on('error', reject);
  });
}

function extractImageUrls(html, base) {
  const urls = new Set();
  // Match full absolute URLs pointing to wp-content/uploads
  const abs = html.match(/https?:\/\/[^\s"')>]+wp-content\/uploads\/[^\s"')>]+/g);
  if (abs) abs.forEach(u => urls.add(u));
  // Match relative paths like /wp-content/uploads/...
  const rel = html.match(/(\/(?:wp-content|wp-includes)\/uploads\/[^")>\s]+)/g);
  if (rel) rel.forEach(r => urls.add(new URL(r, base).toString()));

  // Also capture src="..." occurrences for images that might not include 'wp-content'
  const srcs = html.match(/https?:\/\/[^\s"')>]+\.(?:jpg|jpeg|png|gif|webp)/gi);
  if (srcs) srcs.forEach(u => urls.add(u));
  const rel2 = html.match(/(\/(?:uploads|wp-content)\/[^")>\s]+\.(?:jpg|jpeg|png|gif|webp))/gi);
  if (rel2) rel2.forEach(r => urls.add(new URL(r, base).toString()));

  return Array.from(urls).filter(u => !!u).map(u => u.split('?')[0]);
}

(async () => {
  console.log('Starting gallery scraper...');
  const summary = {};
  for (const pageUrl of pages) {
    try {
      console.log('Fetching page:', pageUrl);
      const html = await get(pageUrl);
      const imgs = extractImageUrls(html, pageUrl);
      console.log('Found', imgs.length, 'images on', pageUrl);
  const slug = pageUrl.replace(/https?:\/\/[^/]+/, '').replace(/\//g, '-').replace(/[^a-zA-Z0-9-_]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'home';
      const outDir = path.join(outRoot, slug);
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      summary[slug] = { page: pageUrl, images: [] };

      // download sequentially to be polite
      for (const imgUrl of imgs) {
        try {
          const urlObj = new URL(imgUrl);
          const filename = path.basename(urlObj.pathname);
          const dest = path.join(outDir, filename);
          if (fs.existsSync(dest)) {
            console.log('Already downloaded:', filename);
            summary[slug].images.push({ url: imgUrl, file: dest, status: 'skipped' });
            continue;
          }
          process.stdout.write('Downloading: ' + imgUrl + ' ... ');
          await downloadFile(imgUrl, dest);
          console.log('saved ->', dest);
          summary[slug].images.push({ url: imgUrl, file: dest, status: 'ok' });
          // tiny delay
          await new Promise(r => setTimeout(r, 200));
        } catch (e) {
          console.error('Failed to download', imgUrl, e.message);
          summary[slug].images.push({ url: imgUrl, status: 'error', error: e.message });
        }
      }

    } catch (e) {
      console.error('Failed to fetch page', pageUrl, e.message);
    }
  }
  const summaryPath = path.join(outRoot, 'summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  console.log('Done. Images saved to', outRoot);
  console.log('Summary written to', summaryPath);
})();
