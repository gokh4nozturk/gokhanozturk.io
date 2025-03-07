export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://gokhanozturk.io/sitemap.xml',
    host: 'https://gokhanozturk.io',
  };
}
