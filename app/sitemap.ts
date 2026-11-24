import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.aetherpro.us',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    { url: 'https://www.aetherpro.us/learn' },
    { url: 'https://www.aetherpro.us/learn/guide' },
  ]
}
