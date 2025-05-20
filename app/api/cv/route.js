import chromium from 'chrome-aws-lambda';
import puppeteerCore from 'puppeteer-core';

export async function GET(req) {
  // For local development vs. Vercel deployment
  const isDev = process.env.NODE_ENV === 'development';

  let browser;
  if (isDev) {
    // Local development - use local Chrome
    browser = await puppeteerCore.launch({
      headless: true,
      executablePath:
        process.platform === 'win32'
          ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
          : process.platform === 'linux'
            ? '/usr/bin/google-chrome'
            : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    });
  } else {
    // Vercel - use chrome-aws-lambda
    browser = await puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });
  }

  const page = await browser.newPage();

  const host = req.headers.get('host');
  const resumeUrl = `${host?.startsWith('localhost') ? 'http' : 'https'}://${host}/resume`;

  await page.goto(resumeUrl, {
    waitUntil: 'networkidle0', // sayfa tamamen yüklensin
  });

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: false,
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' },
  });

  await browser.close();

  return new Response(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="resume.pdf"',
    },
  });
}
