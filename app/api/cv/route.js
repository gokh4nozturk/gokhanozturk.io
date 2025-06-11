import chromium from 'chrome-aws-lambda';
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
  // For local development vs. Vercel deployment
  const isDev = process.env.NODE_ENV === 'development';

  let browser;
  try {
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

    const host = req.headers.get('host');
    const resumeUrl = `${host?.startsWith('localhost') ? 'http' : 'https'}://${host}/resume`;

    await page.goto(resumeUrl, {
      waitUntil: 'networkidle0',
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
