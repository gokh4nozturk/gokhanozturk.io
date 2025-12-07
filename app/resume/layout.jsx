export const metadata = {
  alternates: {
    canonical: "/resume",
  },
  description: "Professional journey and resume highlights",
  openGraph: {
    description: "Professional journey and resume highlights",
    images: [
      {
        alt: "Gökhan Öztürk – Developer, crafter.",
        height: 630,
        type: "image/png",
        url: "https://gokhanozturk.io/api/og",
        width: 1200,
      },
    ],
    title: "Resume | Gökhan Öztürk – Developer, crafter.",
    url: "/resume",
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
    nocache: true,
  },
  title: {
    default: "Resume",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@gokh4nozturk",
    description: "Professional journey and resume highlights",
    images: [
      {
        url: "https://gokhanozturk.io/api/og",
      },
    ],
    site: "@gokh4nozturk",
    title: "Resume | Gökhan Öztürk – Developer, crafter.",
  },
};

export default function ResumeLayout({ children }) {
  return <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 pb-56">{children}</div>;
}
