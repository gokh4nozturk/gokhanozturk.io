/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'fiverr-res.cloudinary.com',
      'images.squarespace-cdn.com',
      'cdn.pixabay.com',
      'cdn.svgporn.com',
      '*',
    ],
  },
};

module.exports = nextConfig;
