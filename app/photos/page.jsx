import SplashCursor from '@components/reactbits/SplashCursor';
import TitleDescription from '@components/TitleDescription';
import { ScrollArea } from '@components/ui/scroll-area';
import { Unsplash } from '@lib/unsplash';
import NextImage from 'next/image';
import NextLink from 'next/link';
export const revalidate = 3600; // 60 * 60 seconds

export default async function Photos() {
  const unsplash = new Unsplash();
  const photos = await unsplash.getPhotos();

  return (
    <div className="w-full">
      <SplashCursor />
      <ScrollArea className="max-h-[calc(100dvh-16rem)]">
        <TitleDescription title="Photos" description="A collection of photos that I have taken." />
        <div className="gap-1 pb-10 pt-2 sm:columns-3">
          {photos.map((photo, index) => (
            <Photo key={photo.id} data={photo} index={index} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

function Photo({ data: photo, index }) {
  const { urls, description, alt_description, width, height, links } = photo;
  return (
    <NextLink href={links.html}>
      <NextImage
        priority={index < 2}
        loading={index < 2 ? 'eager' : 'lazy'}
        className="mb-2 rounded-sm transition-all hover:scale-[1.01] md:mb-1"
        src={urls.raw}
        width={width}
        height={height}
        alt={description || alt_description || 'Unsplash Photo'}
        title={description}
      />
    </NextLink>
  );
}

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
