export const metadata = {
  metadataBase: new URL('https://gokhanozturk.io'),
  title: {
    default: 'Gökhan Öztürk – Developer, crafter.',
    template: '%s | Gökhan Öztürk – Developer, crafter.',
  },
  description: `Front-end developer, JavaScript enthusiast.`,
  openGraph: {
    title: 'Gökhan Öztürk – Developer, crafter.',
    description: `Front-end developer, JavaScript enthusiast.`,
    url: 'https://gokhanozturk.io',
    site_name: 'Gökhan Öztürk',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Gökhan Öztürk',
    card: 'summary_large_image',
  },
};