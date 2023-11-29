import { Raindrop } from '@lib/raindrop'

export default async function Bookmarks() {
  const raindrop = new Raindrop()
  const { items: bookmarks } = await raindrop.getRaindrops()

  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex flex-col gap-4">
        {bookmarks?.map((bookmark, index) => (
          <Bookmark key={bookmark.id} data={bookmark} index={index} />
        ))}
      </div>
    </div>
  )
}

function Bookmark({ data: bookmark, _index }) {
  const { title, link, tags, created } = bookmark
  const date = new Date(created)
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <div className="flex gap-4">
        <span className="dark:text-gray-300">{date.toLocaleDateString().replaceAll('/', '.')}</span>
      </div>
      <div className="flex gap-4">
        <a className="underline-offset-4 hover:underline dark:text-gray-100" href={link}>{title}</a>
      </div>
      <div className="flex gap-2 text-sm">
        {
          tags.map((tag, index) => (
            <span key={index} className="dark:text-gray-400">#{tag}</span>
          ))
        }
      </div>
    </div>
  )
}
