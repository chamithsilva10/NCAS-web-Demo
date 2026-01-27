const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// All external document URLs to download
const documents = [
  // Grants/Applications
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/application_form_pls_sem_ncas.doc", name: "application_form_pls_sem_ncas.doc" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2025/03/APLLICATION-FOR-THE-SHORT-TERM-RESEARCH-GRANT.doc", name: "APLLICATION-FOR-THE-SHORT-TERM-RESEARCH-GRANT.doc" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2025/03/Grant-Application-2025-2nd-Round.pdf", name: "Grant-Application-2025-2nd-Round.pdf" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2025/03/NEW-APPLICATION-FORM-2025-2nd-Round.doc", name: "NEW-APPLICATION-FORM-2025-2nd-Round.doc" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2025/03/APPLICATION-CHECK-LIST-OVERSEAS.docx", name: "APPLICATION-CHECK-LIST-OVERSEAS.docx" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2025/03/APPLICATION-CHECK-LIST-LOCAL.docx", name: "APPLICATION-CHECK-LIST-LOCAL.docx" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2025/03/NCAS-guidelines-Version-04-05.08.2024.pdf", name: "NCAS-guidelines-Version-04-05.08.2024.pdf" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2025/03/Tripartite-Agreement-Version-04-05.08.2024.docx", name: "Tripartite-Agreement-Version-04-05.08.2024.docx" },
  
  // Fellowship/Research
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/LETTER-OF-INVITATIN-OVERSEAS-FELLOWS_n_.pdf", name: "LETTER-OF-INVITATIN-OVERSEAS-FELLOWS.pdf" },
  
  // Grantees Forms
  { url: "https://ncas.ac.lk/wp-content/uploads/2023/04/Six-Monthly-Progress-Report-F02.doc-UPDATED.doc", name: "Six-Monthly-Progress-Report-F02-UPDATED.doc" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2019/02/Progress-report-Inception.doc", name: "Progress-report-Inception.doc" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2019/02/VD-FORM-F03.doc", name: "VD-FORM-F03.doc" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2025/09/NCAS-GRANT-SCHEMT-BY-LAWS-VERSION-01-UPDATED.pdf", name: "NCAS-GRANT-SCHEME-BY-LAWS-VERSION-01-UPDATED.pdf" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2024/09/Final-Tripartite-Agreement-NCAS-including-the-Self-Declration-updated-03.09.2024-VERSION-04.docx", name: "Final-Tripartite-Agreement-NCAS-VERSION-04.docx" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2024/12/New-SELF-DECLARATION-08.01.2024.docx", name: "New-SELF-DECLARATION-08.01.2024.docx" },
  
  // Publication Awards
  { url: "https://ncas.ac.lk/wp-content/uploads/2024/02/Invitation-for-applications-for-NCAS-Grant-Scheme-for-supporting-2024new.pdf", name: "NCAS-Grant-Scheme-for-supporting-2024.pdf" },
  
  // Scholarships
  { url: "https://ncas.ac.lk/wp-content/uploads/2024/09/ANU-CASS-Global-South-Visiting-Fellowship.pdf", name: "ANU-CASS-Global-South-Visiting-Fellowship.pdf" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/Embassy_Turkey-20230112_0024.pdf", name: "Embassy_Turkey-20230112_0024.pdf" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/Invitation-for-Sri-Lankan-Students-to-Applv-to-the-South-Ural-State-University-in-Russia.pdf", name: "South-Ural-State-University-Russia.pdf" },
  
  // Strategic Plans & Corporate Plans
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/STRATEGIC-PLAN-2025-2029.pdf", name: "STRATEGIC-PLAN-2025-2029.pdf" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/Stratergic-Plan-2024.pdf", name: "Strategic-Plan-2024.pdf" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/CORPORATE-PLAN-2023-2027.pdf", name: "CORPORATE-PLAN-2023-2027.pdf" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/ACTION-PLAN-2025.pdf", name: "ACTION-PLAN-2025.pdf" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/PERFORMANCE-AGAINST-ACTION-PLAN-2023.pdf", name: "PERFORMANCE-AGAINST-ACTION-PLAN-2023.pdf" },
  
  // Procurement Plans
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/MASTER-PROCUREMENT-PLAN-2025-SIGNED.pdf", name: "MASTER-PROCUREMENT-PLAN-2025-SIGNED.pdf" },
  
  // Ordinance Documents
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/ncasordinance-English.pdf", name: "ncasordinance-English.pdf" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/Ncas_Ordinance_Amendments.pdf", name: "Ncas_Ordinance_Amendments.pdf" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/ncasordinance-Sinhala.pdf", name: "ncasordinance-Sinhala.pdf" },
  { url: "https://ncas.ac.lk/wp-content/uploads/2014/10/ncasordinance-Tamil.pdf", name: "ncasordinance-Tamil.pdf" },
];

// Director image
const images = [
  { url: "https://ncas.ac.lk/wp-content/uploads/2023/05/IMG-20230206-WA00072.jpg", name: "director-image.jpg" },
];

const downloadDir = path.join(__dirname, '..', 'public', 'downloads');
const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Create directories if they don't exist
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
  console.log('Created downloads directory:', downloadDir);
}

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('Created images directory:', imagesDir);
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    console.log(`Downloading: ${url}`);
    
    const file = fs.createWriteStream(destPath);
    
    protocol.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        console.log(`  Redirecting to: ${redirectUrl}`);
        file.close();
        fs.unlinkSync(destPath);
        downloadFile(redirectUrl, destPath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        reject(new Error(`Failed to download ${url}: Status ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`  Saved to: ${destPath}`);
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('=== Downloading Documents ===\n');
  
  let successCount = 0;
  let failCount = 0;
  const failed = [];
  
  // Download documents
  for (const doc of documents) {
    const destPath = path.join(downloadDir, doc.name);
    try {
      await downloadFile(doc.url, destPath);
      successCount++;
    } catch (err) {
      console.error(`  ERROR: ${err.message}`);
      failed.push({ url: doc.url, name: doc.name, error: err.message });
      failCount++;
    }
  }
  
  console.log('\n=== Downloading Images ===\n');
  
  // Download images
  for (const img of images) {
    const destPath = path.join(imagesDir, img.name);
    try {
      await downloadFile(img.url, destPath);
      successCount++;
    } catch (err) {
      console.error(`  ERROR: ${err.message}`);
      failed.push({ url: img.url, name: img.name, error: err.message });
      failCount++;
    }
  }
  
  console.log('\n=== Summary ===');
  console.log(`Successfully downloaded: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  
  if (failed.length > 0) {
    console.log('\nFailed downloads:');
    failed.forEach(f => console.log(`  - ${f.name}: ${f.error}`));
  }
  
  // Create a placeholder file for failed downloads
  if (failed.length > 0) {
    const placeholderPath = path.join(downloadDir, 'MISSING_FILES.txt');
    const content = `The following files could not be downloaded and need to be manually added:\n\n${failed.map(f => `- ${f.name}\n  Original URL: ${f.url}\n  Error: ${f.error}`).join('\n\n')}`;
    fs.writeFileSync(placeholderPath, content);
    console.log('\nCreated MISSING_FILES.txt with list of files that need manual download');
  }
}

downloadAll().catch(console.error);
