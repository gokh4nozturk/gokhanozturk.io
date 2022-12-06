/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  plugins: [
    [
      "postcss-nested",
      {
        // Add any options here
      },
    ],
  ],
};

module.exports = nextConfig;
