import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const resumeUrl = 'http://localhost:3000/resume'; // SSR sayfa

  await page.goto(resumeUrl, { waitUntil: 'networkidle0' });

  const pdfPath = path.resolve(__dirname, '../public/resume.pdf');

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0mm',
      bottom: '0mm',
      left: '0mm',
      right: '0mm',
    },
  });

  await browser.close();
  console.log('✅ Resume PDF generated at:', pdfPath);
})();
