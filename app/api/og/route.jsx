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
          justifyContent: 'center',
          background: 'linear-gradient(125deg, #0F172A 0%, #1E293B 100%)',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gradient overlays */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 20% 150%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)',
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 80% -50%, rgba(244, 63, 94, 0.15) 0%, transparent 60%)',
            opacity: 0.8,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            zIndex: 2,
            maxWidth: '80%',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              background: 'linear-gradient(to right, #FFFFFF, #E2E8F0)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Gökhan Öztürk
          </div>

          <div
            style={{
              fontSize: 28,
              color: '#94A3B8',
              letterSpacing: '-0.02em',
              fontWeight: 400,
              marginTop: '-8px',
            }}
          >
            Frontend developer, JavaScript enthusiast and 👻 Witchcraft 🕸️.
          </div>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '32px',
            }}
          >
            {['React', 'Next.js', 'TypeScript'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '8px 16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#E2E8F0',
                  fontSize: '18px',
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Minimal branding element */}
        <div
          style={{
            position: 'absolute',
            right: 80,
            bottom: 80,
            width: '40px',
            height: '4px',
            background: '#6366F1',
            borderRadius: '2px',
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
          }}
        />
      </div>,
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
