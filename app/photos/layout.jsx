export async function generateMetadata() {
  const siteUrl = "/photos";

  return {
    alternates: {
      canonical: siteUrl,
    },
    description: "A collection of photos",
    openGraph: {
      description: "A collection of photos",
      title: "Photos",
      url: siteUrl,
    },
    title: "Photos",
  };
}

export default function PhotosLayout({ children }) {
  return children;
}
