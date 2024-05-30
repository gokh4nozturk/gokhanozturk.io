import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Container from '@components/Container'
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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container>
            <Header />

            <main className="main mt-10">{children}</main>
          </Container>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
