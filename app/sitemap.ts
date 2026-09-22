import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://kush5casino.vercel.app/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }]
}
