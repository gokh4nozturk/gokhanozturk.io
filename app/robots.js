export default function robots() {
  return {
    host: "https://gokhanozturk.io",
    rules: {
      allow: "/",
      disallow: "/private/",
      userAgent: "*",
    },
    sitemap: "https://gokhanozturk.io/sitemap.xml",
  };
}
