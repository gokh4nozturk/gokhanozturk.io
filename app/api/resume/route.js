import MarkdownIt from 'markdown-it';
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

export async function GET(req) {
  const md = new MarkdownIt();
  const filePath = path.join(process.cwd(), 'public', 'resume.md');
  const markdown = await fs.readFile(filePath, 'utf-8');
  const htmlContent = md.render(markdown);

  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
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
    return new Response(
      `Error: ${error.message}. Please run "npx puppeteer browsers install chrome" first.`,
      { status: 500 }
    );
  }
}
