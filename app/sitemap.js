export default function sitemap() {
  return [
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 1,
      url: "https://gokhanozturk.io",
    },
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.8,
      url: "https://gokhanozturk.io/photos",
    },
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.9,
      url: "https://gokhanozturk.io/works",
    },
    {
      changeFrequency: "daily",
      lastModified: new Date(),
      priority: 0.7,
      url: "https://gokhanozturk.io/bookmarks",
    },
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.7,
      url: "https://gokhanozturk.io/resume",
    },
  ];
}
