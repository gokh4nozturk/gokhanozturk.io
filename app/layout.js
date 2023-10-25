import { Analytics } from '@vercel/analytics/react'
import { Header } from '../components/Header'
import '../styles/globals.css'

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
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="main mt-10">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
