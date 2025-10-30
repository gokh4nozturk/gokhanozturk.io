/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
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
  webpack: (config, { isServer }) => {
    // Configure MDX
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
