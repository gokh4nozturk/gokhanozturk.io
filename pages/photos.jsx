import { useState, useEffect } from 'react';
import unsplash from '../lib/unsplash';
import NextImage from 'next/image';
import DefaultLayout from '../layouts/Default';
import NextLink from 'next/link';

export default function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const images = await unsplash.getPhotos();
    setPhotos(images);
  };

  return (
    <DefaultLayout>
      <div className="grid sm:grid-cols-2 gap-4">
        {photos.map((photo) => (
          <Photo key={photo.id} data={photo} />
        ))}
      </div>
    </DefaultLayout>
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
