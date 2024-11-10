import { Unsplash } from '@lib/unsplash'
import NextImage from 'next/image'
import NextLink from 'next/link'

export default async function Photos() {
  const unsplash = new Unsplash()
  const photos = await unsplash.getPhotos()

  return (
    <div className="sm:columns-2">
      {photos.map((photo, index) => (
        <Photo key={photo.id} data={photo} index={index} />
      ))}
    </div>
  )
}

function Photo({ data: photo, index }) {
  const { urls, description, alt_description, width, height, links } = photo
  return (
    <NextLink href={links.html}>
      <NextImage
        priority={index < 2}
        loading={index < 2 ? 'eager' : 'lazy'}
        className="mb-4 rounded-lg"
        src={urls.raw}
        width={width}
        height={height}
        alt={description || alt_description || 'Unsplash Photo'}
      />
    </NextLink>
  )
}
