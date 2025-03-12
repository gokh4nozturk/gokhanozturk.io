import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from 'components/Header';
import Navigation from 'components/Navigation';
import { ThemeProvider } from 'components/ThemeProvider';
import { Toaster } from 'sonner';

export const metadata = {
  metadataBase: new URL('https://gokhanozturk.io'),
  title: {
    default: 'Gökhan Öztürk – Developer, crafter.',
    template: '%s | Gökhan Öztürk – Developer, crafter.',
  },
  description: 'Frontend developer, JavaScript enthusiast and 👻 Witchcraft 🕸️.',
  keywords: [
    'Gökhan Öztürk',
    'Frontend Developer',
    'JavaScript Developer',
    'Web Development',
    'React Developer',
    'Next.js Developer',
    'Software Engineer',
    'Web Engineer',
    'Frontend Engineer',
  ],
  authors: [{ name: 'Gökhan Öztürk', url: 'https://gokhanozturk.io' }],
  creator: 'Gökhan Öztürk',
  publisher: 'Gökhan Öztürk',
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: 'https://gokhanozturk.io',
  },
  openGraph: {
    title: 'Gökhan Öztürk – Developer, crafter.',
    description: 'Frontend developer, JavaScript enthusiast and 👻 Witchcraft 🕸️.',
    url: 'https://gokhanozturk.io',
    siteName: 'Gökhan Öztürk',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://gokhanozturk.io/api/og',
        width: 1200,
        height: 630,
        alt: 'Gökhan Öztürk - Developer Portfolio',
        type: 'image/png',
      },
    ],
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
    title: 'Gökhan Öztürk – Developer, crafter.',
    card: 'summary_large_image',
    site: '@gokhanozturk',
    creator: '@gokhanozturk',
    description: 'Frontend developer, JavaScript enthusiast and 👻 Witchcraft 🕸️.',
    images: [
      {
        url: 'https://gokhanozturk.io/api/og',
        width: 1200,
        height: 630,
        alt: 'Gökhan Öztürk - Developer Portfolio',
        type: 'image/png',
      },
    ],
  },
  other: {
    'facebook-domain-verification': 'your-facebook-domain-verification-code',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    favicon: 'icons/favicon.ico',
    icon: [
      { url: 'icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: 'icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    appleTouchIcon: 'icons/apple-touch-icon.png',
    msTileImage: 'icons/mstile-150x150.png',
  },
  manifest: 'manifest.json',
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="mx-auto grid h-dvh grid-rows-[auto_auto] items-center bg-slate-50 px-4 pt-4 font-sans tracking-tight text-gray-900 antialiased
            selection:bg-yellow-100 selection:text-gray-900 dark:bg-[#111010] dark:text-gray-50
            sm:max-w-3xl sm:grid-rows-[auto_1fr] sm:px-10 sm:pt-10 [&_*]:transition-all"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex h-full flex-col justify-between relative">{children}</main>
          <Navigation />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <Toaster offset={64} />
      </body>
    </html>
  );
}
