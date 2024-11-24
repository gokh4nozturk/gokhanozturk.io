import AnimatedLink from '@components/AnimatedLink'
import TitleDescription from '@components/TitleDescription'
import Raindrop from '@lib/raindrop'
import { ScrollArea } from '../components/ui/scroll-area'

export const revalidate = 3600 // 60 * 60 seconds

export default async function Bookmarks() {
  const raindrop = new Raindrop()
  const bookmarks = await raindrop.getBookmark({ perPage: 100, sort: '-created', page: 0 })

  return (
    <div className='w-full'>
      <TitleDescription title='Bookmarks' description='A collection of bookmarks that I have saved.' />
      <ScrollArea className='h-[430px] sm:h-[500px]'>
        <div className="grid divide-y pb-10">
          {bookmarks?.map(bookmark => (
            <Bookmark key={bookmark._id} data={bookmark} />
          ))}
        </div>
      </ScrollArea>
    </div>

  )
}

function Bookmark({ data: bookmark }) {
  const { title, link, tags, created } = bookmark
  const date = new Date(created)
  return (
    <div className="flex justify-between gap-10 py-2">
      <div className='flex flex-col items-start gap-1 text-sm'>
        <span className="text-xs dark:text-gray-300">{date.toLocaleDateString().replaceAll('/', '.')}</span>
        <AnimatedLink href={link} className="font-medium dark:text-gray-400">{title}</AnimatedLink>
        <div className="flex gap-2">
          {
            tags.map((tag, index) => (
              <span key={index} className="text-xs dark:text-gray-400">#{tag}</span>
            ))
          }
        </div>
      </div>
      <img
        className="order-1 hidden aspect-[960/576] w-32 shrink-0 rounded-sm object-cover text-xs sm:block"
        src={bookmark.cover}
        alt={bookmark.title}
      />
    </div>
  )
}

export async function generateMetadata() {
  const siteUrl = '/bookmarks'

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
  }
}
