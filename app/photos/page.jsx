import unsplash from '../../lib/unsplash';
import NextImage from 'next/image';
import NextLink from 'next/link';

export default async function Photos() {
  const images = await unsplash.getPhotos();

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {images.map((photo) => (
        <Photo key={photo.id} data={photo} />
      ))}
    </div>
  );
}

const Photo = ({ data: photo }) => {
  const { urls, description, alt_description, width, height, links } = photo;
  return (
    <NextLink href={links.html}>
      <NextImage
        className="rounded-lg"
        loading="lazy"
        src={urls.raw}
        width={width}
        height={height}
        alt={description || alt_description}
      />
    </NextLink>
  );
};
