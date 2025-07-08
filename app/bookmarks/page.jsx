/* eslint-disable @next/next/no-img-element */
import Raindrop from '@lib/raindrop';
import AnimatedLink from 'components/AnimatedLink';
import TitleDescription from 'components/TitleDescription';
import YearFilter from 'components/YearFilter';
import { ScrollArea } from 'components/ui/scroll-area';

export const revalidate = 3600; // 60 * 60 seconds

export default async function Bookmarks({ searchParams }) {
  const raindrop = new Raindrop();
  const year = searchParams.year || 'all';
  const bookmarks = await raindrop.getBookmark({ perPage: 100, sort: '-created', page: 0, year });

  return (
    <div className="w-full">
      <div className="flex items-start justify-between">
        <TitleDescription
          title="Bookmarks"
          description="A collection of bookmarks that I have saved."
        />
        <YearFilter year={year} />
      </div>
      <ScrollArea className="mb-24 max-h-[calc(100dvh-15rem)]">
        <div className="grid divide-y">
          {bookmarks?.map((bookmark) => (
            <Bookmark key={bookmark._id} data={bookmark} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

function Bookmark({ data: bookmark }) {
  const { title, link, tags, created } = bookmark;
  const date = new Date(created);
  return (
    <div className="flex justify-between gap-10 py-2">
      <div className="flex flex-col items-start gap-1 text-sm">
        <span className="text-xs dark:text-gray-300">
          {date.toLocaleDateString().replaceAll('/', '.')}
        </span>
        <AnimatedLink href={link} className="font-medium text-sm sm:text-base dark:text-gray-400">
          {title}
        </AnimatedLink>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs dark:text-gray-400">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <img
        className="order-1 hidden aspect-[960/576] w-32 shrink-0 rounded-sm object-cover text-xs sm:block"
        src={bookmark.cover}
        alt={bookmark.title}
      />
    </div>
  );
}

export async function generateMetadata() {
  const siteUrl = '/bookmarks';

  return {
    title: 'Bookmarks',
    description: 'A collection of bookmarks',
    openGraph: {
      title: 'Bookmarks',
      description: 'A collection of bookmarks',
      url: siteUrl,
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}
