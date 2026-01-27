const fs = require('fs');
const path = require('path');

// Mapping of external URLs to local paths
const urlMappings = {
  // Grants/Applications
  "https://ncas.ac.lk/wp-content/uploads/2014/10/application_form_pls_sem_ncas.doc": "/downloads/application_form_pls_sem_ncas.doc",
  "https://ncas.ac.lk/wp-content/uploads/2025/03/APLLICATION-FOR-THE-SHORT-TERM-RESEARCH-GRANT.doc": "/downloads/APLLICATION-FOR-THE-SHORT-TERM-RESEARCH-GRANT.doc",
  "https://ncas.ac.lk/wp-content/uploads/2025/03/Grant-Application-2025-2nd-Round.pdf": "/downloads/Grant-Application-2025-2nd-Round.pdf",
  "https://ncas.ac.lk/wp-content/uploads/2025/03/NEW-APPLICATION-FORM-2025-2nd-Round.doc": "/downloads/NEW-APPLICATION-FORM-2025-2nd-Round.doc",
  "https://ncas.ac.lk/wp-content/uploads/2025/03/APPLICATION-CHECK-LIST-OVERSEAS.docx": "/downloads/APPLICATION-CHECK-LIST-OVERSEAS.docx",
  "https://ncas.ac.lk/wp-content/uploads/2025/03/APPLICATION-CHECK-LIST-LOCAL.docx": "/downloads/APPLICATION-CHECK-LIST-LOCAL.docx",
  "https://ncas.ac.lk/wp-content/uploads/2025/03/NCAS-guidelines-Version-04-05.08.2024.pdf": "/downloads/NCAS-guidelines-Version-04-05.08.2024.pdf",
  "https://ncas.ac.lk/wp-content/uploads/2025/03/Tripartite-Agreement-Version-04-05.08.2024.docx": "/downloads/Tripartite-Agreement-Version-04-05.08.2024.docx",
  
  // Fellowship/Research - This one returned 404, using a placeholder
  "https://ncas.ac.lk/wp-content/uploads/2014/10/LETTER-OF-INVITATIN-OVERSEAS-FELLOWS_n_.pdf": "/downloads/LETTER-OF-INVITATIN-OVERSEAS-FELLOWS.pdf",
  
  // Grantees Forms
  "https://ncas.ac.lk/wp-content/uploads/2023/04/Six-Monthly-Progress-Report-F02.doc-UPDATED.doc": "/downloads/Six-Monthly-Progress-Report-F02-UPDATED.doc",
  "https://ncas.ac.lk/wp-content/uploads/2019/02/Progress-report-Inception.doc": "/downloads/Progress-report-Inception.doc",
  "https://ncas.ac.lk/wp-content/uploads/2019/02/VD-FORM-F03.doc": "/downloads/VD-FORM-F03.doc",
  "https://ncas.ac.lk/wp-content/uploads/2025/09/NCAS-GRANT-SCHEMT-BY-LAWS-VERSION-01-UPDATED.pdf": "/downloads/NCAS-GRANT-SCHEME-BY-LAWS-VERSION-01-UPDATED.pdf",
  "https://ncas.ac.lk/wp-content/uploads/2024/09/Final-Tripartite-Agreement-NCAS-including-the-Self-Declration-updated-03.09.2024-VERSION-04.docx": "/downloads/Final-Tripartite-Agreement-NCAS-VERSION-04.docx",
  "https://ncas.ac.lk/wp-content/uploads/2024/12/New-SELF-DECLARATION-08.01.2024.docx": "/downloads/New-SELF-DECLARATION-08.01.2024.docx",
  
  // Publication Awards - This one returned 404, using a placeholder
  "https://ncas.ac.lk/wp-content/uploads/2024/02/Invitation-for-applications-for-NCAS-Grant-Scheme-for-supporting-2024new.pdf": "/downloads/NCAS-Grant-Scheme-for-supporting-2024.pdf",
  
  // Scholarships
  "https://ncas.ac.lk/wp-content/uploads/2024/09/ANU-CASS-Global-South-Visiting-Fellowship.pdf": "/downloads/ANU-CASS-Global-South-Visiting-Fellowship.pdf",
  "https://ncas.ac.lk/wp-content/uploads/2014/10/Embassy_Turkey-20230112_0024.pdf": "/downloads/Embassy_Turkey-20230112_0024.pdf",
  "https://ncas.ac.lk/wp-content/uploads/2014/10/Invitation-for-Sri-Lankan-Students-to-Applv-to-the-South-Ural-State-University-in-Russia.pdf": "/downloads/South-Ural-State-University-Russia.pdf",
  
  // Strategic Plans & Corporate Plans
  "https://ncas.ac.lk/wp-content/uploads/2014/10/STRATEGIC-PLAN-2025-2029.pdf": "/downloads/STRATEGIC-PLAN-2025-2029.pdf",
  "https://ncas.ac.lk/wp-content/uploads/2014/10/Stratergic-Plan-2024.pdf": "/downloads/Strategic-Plan-2024.pdf",
  "https://ncas.ac.lk/wp-content/uploads/2014/10/CORPORATE-PLAN-2023-2027.pdf": "/downloads/CORPORATE-PLAN-2023-2027.pdf",
  "https://ncas.ac.lk/wp-content/uploads/2014/10/ACTION-PLAN-2025.pdf": "/downloads/ACTION-PLAN-2025.pdf",
  "https://ncas.ac.lk/wp-content/uploads/2014/10/PERFORMANCE-AGAINST-ACTION-PLAN-2023.pdf": "/downloads/PERFORMANCE-AGAINST-ACTION-PLAN-2023.pdf",
  
  // Procurement Plans
  "https://ncas.ac.lk/wp-content/uploads/2014/10/MASTER-PROCUREMENT-PLAN-2025-SIGNED.pdf": "/downloads/MASTER-PROCUREMENT-PLAN-2025-SIGNED.pdf",
  
  // Ordinance Documents
  "https://ncas.ac.lk/wp-content/uploads/2014/10/ncasordinance-English.pdf": "/downloads/ncasordinance-English.pdf",
  "https://ncas.ac.lk/wp-content/uploads/2014/10/Ncas_Ordinance_Amendments.pdf": "/downloads/Ncas_Ordinance_Amendments.pdf",
  "https://ncas.ac.lk/wp-content/uploads/2014/10/ncasordinance-Sinhala.pdf": "/downloads/ncasordinance-Sinhala.pdf",
  "https://ncas.ac.lk/wp-content/uploads/2014/10/ncasordinance-Tamil.pdf": "/downloads/ncasordinance-Tamil.pdf",
  
  // Director image
  "https://ncas.ac.lk/wp-content/uploads/2023/05/IMG-20230206-WA00072.jpg": "/images/director-image.jpg",
  
  // External page URLs to local routes
  "https://ncas.ac.lk/symposium2025/": "/information/symposium-2024",
  "https://ncas.ac.lk/vacancies/": "/information/vacancies",
  "https://ncas.ac.lk/latest_news/diploma-in-tourism-and-hospitality-management/": "/programs/diploma-tourism",
  "https://ncas.ac.lk/latest_news/diploma-in-elder-care-management-gerontology/": "/programs/diploma-elder-care",
  
  // Scholarship page URLs to local routes
  "https://ncas.ac.lk/scholarship-opportunities-for-masters-degree-programmes-of-park-chung-hee-school-of-policy-and-saemaul-at-yeungnam-university-in-the-republic-of-korea/": "/grants/other-scholarships/yeungnam-university",
  "https://ncas.ac.lk/phd-opportunities-at-poland-doctoral-school-of-the-university-of-szczecin/": "/grants/other-scholarships/szczecin-university",
  "https://ncas.ac.lk/daad-development-related-postgraduate-courses-epos-2022-2023": "/grants/other-scholarships/daad-epos",
};

const projectRoot = path.join(__dirname, '..');
const appDir = path.join(projectRoot, 'app');
const componentsDir = path.join(projectRoot, 'components');

function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.name.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  for (const [oldUrl, newPath] of Object.entries(urlMappings)) {
    if (content.includes(oldUrl)) {
      content = content.split(oldUrl).join(newPath);
      modified = true;
      console.log(`  Replaced: ${oldUrl}`);
      console.log(`       -> ${newPath}`);
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  
  return false;
}

console.log('=== Updating File References ===\n');

const allFiles = [
  ...findTsxFiles(appDir),
  ...findTsxFiles(componentsDir)
];

console.log(`Found ${allFiles.length} TSX files\n`);

let modifiedCount = 0;

for (const file of allFiles) {
  const relativePath = path.relative(projectRoot, file);
  console.log(`Processing: ${relativePath}`);
  
  if (updateFile(file)) {
    modifiedCount++;
  }
}

console.log(`\n=== Summary ===`);
console.log(`Files processed: ${allFiles.length}`);
console.log(`Files modified: ${modifiedCount}`);
