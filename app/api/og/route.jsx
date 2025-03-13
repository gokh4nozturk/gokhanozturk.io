import { ImageResponse } from '@vercel/og';
import React from 'react';

export const runtime = 'edge';

export async function GET() {
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
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
          <img
            src="https://pub-e80ae7bbbfd0439e86c73b572dc9e5b0.r2.dev/profile.svg"
            alt="logo"
            height={220}
            width={220}
          />
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <p
              style={{
                fontSize: '50px',
                paddingBottom: '10px',
                fontWeight: 'bold',
                lineHeight: '0.01',
              }}
            >
              Gökhan Öztürk
            </p>
            <p
              style={{
                fontSize: '28px',
                fontWeight: 'normal',
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
            gap: '10px',
            width: '100%',
            marginTop: '60px',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              fontWeight: 'normal',
              textAlign: 'center',
              color: 'rgba(96, 165, 250, 1)',
              textDecoration: 'underline',
            }}
          >
            gh/gokh4nozturk
          </p>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 'normal',
              textAlign: 'center',
              color: 'rgba(96, 165, 250, 1)',
              textDecoration: 'underline',
            }}
          >
            in/gokhannozturk
          </p>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        emoji: 'fluent',
        debug: false,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
