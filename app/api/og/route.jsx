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
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #1E293B 100%)',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle dot pattern overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
            backgroundSize: '50px 50px',
            opacity: 0.3,
          }}
        />

        {/* Enhanced gradient overlays */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)',
            opacity: 0.9,
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
              'radial-gradient(circle at 100% 100%, rgba(244, 63, 94, 0.3) 0%, transparent 50%)',
            opacity: 0.9,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            zIndex: 2,
            maxWidth: '85%',
          }}
        >
          <div
            style={{
              fontSize: 86,
              fontWeight: 800,
              background: 'linear-gradient(to right, #FFFFFF 20%, #94A3B8)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
            }}
          >
            Gökhan Öztürk
          </div>

          <div
            style={{
              fontSize: 28,
              color: '#CBD5E1',
              letterSpacing: '-0.02em',
              fontWeight: 500,
              marginTop: '-8px',
              lineHeight: 1.3,
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            Frontend developer, JavaScript enthusiast and{' '}
            <span style={{ fontSize: '36px' }}>👻</span> Witchcraft{' '}
            <span style={{ fontSize: '36px' }}>🕸️</span>
          </div>
        </div>

        {/* Enhanced branding element */}
        <div
          style={{
            position: 'absolute',
            right: 80,
            bottom: 80,
            display: 'flex',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '6px',
              background: '#6366F1',
              borderRadius: '3px',
              boxShadow: '0 0 30px rgba(99, 102, 241, 0.7)',
            }}
          />
          <div
            style={{
              width: '15px',
              height: '6px',
              background: '#F43F5E',
              borderRadius: '3px',
              boxShadow: '0 0 30px rgba(244, 63, 94, 0.7)',
            }}
          />
        </div>
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
