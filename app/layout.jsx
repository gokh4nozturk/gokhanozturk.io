import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@components/Header'
import { ThemeProvider } from '@components/ThemeProvider'
import '@styles/globals.css'

export const metadata = {
  metadataBase: new URL('https://gokhanozturk.io'),
  title: {
    default: 'Gökhan Öztürk – Developer, crafter.',
    template: '%s | Gökhan Öztürk – Developer, crafter.',
  },
  description: 'Front-end developer, JavaScript enthusiast.',
  openGraph: {
    title: 'Gökhan Öztürk – Developer, crafter.',
    description: 'Front-end developer, JavaScript enthusiast.',
    url: 'https://gokhanozturk.io',
    site_name: 'Gökhan Öztürk',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Gökhan Öztürk',
    card: 'summary_large_image',
  },
  icons: {
    favicon: 'icons/favicon.ico',
    appleTouchIcon: 'icons/apple-touch-icon.png',
    msTileImage: 'icons/mstile-150x150.png',
  },
  manifest: 'manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning title='Gökhan Öztürk'>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className='grid h-dvh grid-rows-[220px_1fr] items-center bg-slate-50 px-4 font-sans tracking-tight
            text-gray-900 antialiased selection:bg-yellow-100 selection:text-gray-900
            dark:bg-[#111010] dark:text-gray-50 sm:px-20'
        >
          <Header />
          <main className='flex h-full flex-col justify-between'>{children}</main>

          <Analytics />
          <SpeedInsights />
        </body>
      </ThemeProvider>
    </html>
  )
}
