import { cn } from '@lib/utils';
import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from 'components/Header';
import Navigation from 'components/Navigation';
import { ThemeProvider } from 'components/ThemeProvider';
import { Toaster } from 'sonner';

export const metadata = {
  title: {
    default: 'Gökhan Öztürk – Developer, crafter',
    template: '%s | Gökhan Öztürk – Developer, crafter',
  },
  keywords: [
    'Gökhan Öztürk',
    'gokhanozturk',
    'gokh4nozturk',
    'developer',
    'crafter',
    'web developer',
    'software engineer',
    'programmer',
    'frontend developer',
  ],
  authors: [
    {
      name: 'Gökhan Öztürk',
      url: 'https://gokhanozturk.io',
    },
  ],
  creator: 'Gökhan Öztürk',
  publisher: 'Gökhan Öztürk',
  icon: [
    {
      rel: 'icon',
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
  ],
  description: 'Personal website of Gökhan Öztürk, a developer and crafter.',
  openGraph: {
    title: 'Gökhan Öztürk – Developer, crafter',
    description: 'Personal website of Gökhan Öztürk, a developer and crafter.',
    url: '/',
    images: [
      {
        url: 'https://gokhanozturk.io/api/og',
        width: 1200,
        height: 630,
        alt: 'Gökhan Öztürk – Developer, crafter',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Gökhan Öztürk – Developer, crafter',
    card: 'summary_large_image',
    site: '@gokh4nozturk',
    creator: '@gokh4nozturk',
    description: 'Personal website of Gökhan Öztürk, a developer and crafter.',
    images: [
      {
        url: 'https://gokhanozturk.io/api/og',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'mx-auto grid h-dvh grid-rows-[auto_1fr] items-center bg-p3-background-light px-4 pt-4 font-sans text-p3-text',
          'tracking-tight selection:bg-p3-accent-light selection:text-p3-text sm:max-w-3xl sm:px-10 sm:pt-10',
          'dark:bg-p3-background dark:text-p3-text-dark dark:selection:bg-p3-accent-dark dark:selection:text-p3-text-dark',
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='flex h-full flex-col justify-between'>{children}</main>
          <Navigation />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <Toaster offset={64} />
      </body>
    </html>
  );
}
