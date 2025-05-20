import puppeteer from 'puppeteer';

export async function GET(req) {
  console.log('req', req.headers.get('host'));

  const browser = await puppeteer.launch({
    headless: 'new', // puppeteer@20+ için
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  const host = req.headers.get('host');
  const resumeUrl = `${host?.startsWith('localhost') ? 'http' : 'https'}://${host}/resume`;

  await page.goto(resumeUrl, {
    waitUntil: 'networkidle0', // sayfa tamamen yüklensin
  });

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: false,
    margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
  });

  await browser.close();

  return new Response(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="resume.pdf"',
    },
  });
}
