import { Unsplash } from '@lib/unsplash'
import NextImage from 'next/image'
import NextLink from 'next/link'

export default async function Photos() {
  const unsplash = new Unsplash()
  const images = await unsplash.getPhotos()

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((photo, index) => (
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
        className="rounded-lg"
        src={urls.raw}
        width={width}
        height={height}
        alt={description || alt_description}
      />
    </NextLink>
  )
}
