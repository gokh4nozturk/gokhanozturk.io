import chromium from 'chrome-aws-lambda';
import MarkdownIt from 'markdown-it';
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteerCore from 'puppeteer-core';

export async function GET(req) {
  const md = new MarkdownIt();
  const filePath = path.join(process.cwd(), 'public', 'resume.md');
  const markdown = await fs.readFile(filePath, 'utf-8');
  const htmlContent = md.render(markdown);

  try {
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

    await page.setContent(`
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; }
            h1,h2,h3 { color: #333; }
          </style>
        </head>
        <body>${htmlContent}</body>
      </html>
    `);

    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=resume.pdf',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}
