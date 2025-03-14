import { ImageResponse } from '@vercel/og';
import React from 'react';

export const runtime = 'edge';

const loadGoogleFont = async (font, text, weights) => {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weights}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error('failed to load font data');
};

export async function GET() {
  const text = 'Gökhan Öztürk - JavaScript enthusiast and 👻 Witchcraft 🕸️.';
  try {
    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: 'rgba(17, 16, 16, 1)',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
          color: 'rgba(249, 250, 251, 1)',
          fontFamily:
            'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
          <img
            src="https://pub-e80ae7bbbfd0439e86c73b572dc9e5b0.r2.dev/profile.svg"
            alt="logo"
            height={240}
            width={240}
          />
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <p
              style={{
                fontSize: '60px',
                paddingBottom: '10px',
                fontWeight: '700',
                lineHeight: '0.01',
              }}
            >
              Gökhan Öztürk
            </p>
            <p
              style={{
                fontSize: '28px',
                fontWeight: '500',
              }}
            >
              Frontend developer, JavaScript enthusiast and 👻 Witchcraft 🕸️.
            </p>
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            width: '100%',
            marginTop: '60px',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              textAlign: 'center',
              color: 'rgba(96, 165, 250, 1)',
              textDecoration: 'underline',
              fontWeight: '500',
            }}
          >
            github.com/gokh4nozturk
          </p>
          <span
            style={{
              fontSize: '40px',
              lineHeight: '0.01',
              fontWeight: '500',
              color: 'rgba(75, 85, 99, 1)',
            }}
          >
            ·
          </span>
          <p
            style={{
              fontSize: '18px',
              textAlign: 'center',
              color: 'rgba(96, 165, 250, 1)',
              textDecoration: 'underline',
              fontWeight: '500',
            }}
          >
            linkedin.com/in/gokhannozturk
          </p>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        emoji: 'fluent',
        debug: false,
        fonts: [
          {
            name: 'Inter',
            data: await loadGoogleFont('Inter', text, '400'),
            weight: 400,
          },
          {
            name: 'Inter',
            data: await loadGoogleFont('Inter', text, '500'),
            weight: 500,
          },
          {
            name: 'Inter',
            data: await loadGoogleFont('Inter', text, '600'),
            weight: 600,
          },
          {
            name: 'Inter',
            data: await loadGoogleFont('Inter', text, '700'),
            weight: 700,
          },
        ],
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
