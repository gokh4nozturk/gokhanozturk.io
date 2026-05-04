export default function robots() {
  return {
    host: "https://gozturk.dev",
    rules: {
      allow: "/",
      disallow: "/private/",
      userAgent: "*",
    },
    sitemap: "https://gozturk.dev/sitemap.xml",
  };
}
