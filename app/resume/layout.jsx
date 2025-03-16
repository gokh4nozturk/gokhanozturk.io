import { FeedbackRating } from '@components/hextaui/feedback';

export const metadata = {
  title: {
    default: 'Resume | Gökhan Öztürk – Developer, crafter.',
    template: '%s | Gökhan Öztürk – Developer, crafter.',
  },
  description: 'Professional journey and resume highlights',
  openGraph: {
    title: 'Resume | Gökhan Öztürk – Developer, crafter.',
    description: 'Professional journey and resume highlights',
    url: '/resume',
    images: [
      {
        url: 'https://gokhanozturk.io/api/og',
        width: 1200,
        height: 630,
        alt: 'Gökhan Öztürk – Developer, crafter.',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: '/resume',
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
    title: 'Resume | Gökhan Öztürk – Developer, crafter.',
    card: 'summary_large_image',
    site: '@gokhanozturk',
    creator: '@gokhanozturk',
    description: 'Professional journey and resume highlights',
    images: [
      {
        url: 'https://gokhanozturk.io/api/og',
      },
    ],
  },
};

export default function ResumeLayout({ children }) {
  return (
    <article className="prose prose-p3 flex flex-col gap-4 items-center mx-auto max-w-2xl pb-56 dark:prose-p3-dark">
      {children}
      {/* <FeedbackRating /> */}
    </article>
  );
}
