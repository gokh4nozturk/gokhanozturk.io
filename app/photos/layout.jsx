export async function generateMetadata() {
  const siteUrl = '/photos';

  return {
    title: 'Photos',
    description: 'A collection of photos',
    openGraph: {
      title: 'Photos',
      description: 'A collection of photos',
      url: siteUrl,
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}

export default function PhotosLayout({ children }) {
  return children;
}
