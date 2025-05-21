import chromium from 'chrome-aws-lambda';
import MarkdownIt from 'markdown-it';
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteerCore from 'puppeteer-core';

// Simplified handler for Vercel
const getChromePath = () => {
  if (process.env.NODE_ENV === 'development') {
    // Local development - use local Chrome
    return process.platform === 'win32'
      ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
      : process.platform === 'linux'
        ? '/usr/bin/google-chrome'
        : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  }

  // Vercel - will use the Chrome binary from chrome-aws-lambda
  return null;
};

export async function GET(req) {
  let browser = null;
  try {
    const md = new MarkdownIt();
    const filePath = path.join(process.cwd(), 'public', 'resume.md');
    const markdown = await fs.readFile(filePath, 'utf-8');
    const htmlContent = md.render(markdown);

    // For local development vs. Vercel deployment
    const isDev = process.env.NODE_ENV === 'development';

    // Configure browser options
    const options = {
      args: chromium.args,
      headless: true,
    };

    // Add executablePath only if it's available and not in development
    if (!isDev) {
      options.executablePath = await chromium.executablePath;
    } else {
      options.executablePath = getChromePath();
    }

    browser = await puppeteerCore.launch(options);
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

    if (browser) {
      await browser.close();
    }

    return new Response(`Error generating PDF: ${error.message}`, {
      status: 500,
    });
  }
}
