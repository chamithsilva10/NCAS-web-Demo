const fs = require('fs');
const path = require('path');

const outRoot = path.resolve(__dirname, '..', 'downloaded-galleries');
const galleries = [
  'ncas-6th-international-research-symposium-2024-photos',
  'ncas-5th-international-research-symposium-2023',
  'ncas-4th-international-research-symposium-2022-photos',
  'symposium-gallery-2020',
  'ncas_symposium_gallery_2019',
  'symposium-2018'
];

const pageUrls = {
  'ncas-6th-international-research-symposium-2024-photos': 'https://ncas.ac.lk/ncas-6th-international-research-symposium-2024-photos/',
  'ncas-5th-international-research-symposium-2023': 'https://ncas.ac.lk/ncas-5th-international-research-symposium-2023/',
  'ncas-4th-international-research-symposium-2022-photos': 'https://ncas.ac.lk/ncas-4th-international-research-symposium-2022-photos/',
  'symposium-gallery-2020': 'https://ncas.ac.lk/symposium-gallery-2020/',
  'ncas_symposium_gallery_2019': 'https://ncas.ac.lk/ncas_symposium_gallery_2019/',
  'symposium-2018': 'https://ncas.ac.lk/symposium-2018/'
};

const summary = {};

for (const gallery of galleries) {
  const galleryPath = path.join(outRoot, gallery);
  if (!fs.existsSync(galleryPath)) {
    console.log(`Gallery directory not found: ${galleryPath}`);
    continue;
  }

  const files = fs.readdirSync(galleryPath).filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
  console.log(`Found ${files.length} images in ${gallery}`);

  summary[gallery] = {
    page: pageUrls[gallery],
    images: files.map(filename => ({
      url: `https://ncas.ac.lk/wp-content/uploads/${filename}`, // approximate URL
      file: path.join(galleryPath, filename),
      status: 'ok'
    }))
  };
}

const summaryPath = path.join(outRoot, 'summary.json');
fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
console.log('Summary recreated at', summaryPath);