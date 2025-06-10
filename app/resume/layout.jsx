export const metadata = {
  title: {
    default: "Resume",
  },
  description: "Professional journey and resume highlights",
  openGraph: {
    title: "Resume | Gökhan Öztürk – Developer, crafter.",
    description: "Professional journey and resume highlights",
    url: "/resume",
    images: [
      {
        url: "https://gokhanozturk.io/api/og",
        width: 1200,
        height: 630,
        alt: "Gökhan Öztürk – Developer, crafter.",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "/resume",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Resume | Gökhan Öztürk – Developer, crafter.",
    card: "summary_large_image",
    site: "@gokh4nozturk",
    creator: "@gokh4nozturk",
    description: "Professional journey and resume highlights",
    images: [
      {
        url: "https://gokhanozturk.io/api/og",
      },
    ],
  },
};

export default function ResumeLayout({ children }) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 pb-56">
      {children}
    </div>
  );
}
