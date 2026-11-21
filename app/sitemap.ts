import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://aetherpro.us',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    { url: 'https://aetherpro.us/learn' },
    { url: 'https://aetherpro.us/learn/guide' },
  ]
}
