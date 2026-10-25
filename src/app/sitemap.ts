import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/team/`,
      lastModified: currentDate
    },
    {
      url: `${baseUrl}/projects/`,
      lastModified: currentDate
    },
    {
      url: `${baseUrl}/girls-in-techneekx/`,
      lastModified: currentDate
    },
    {
      url: `${baseUrl}/join/`,
      lastModified: currentDate
    },
    {
      url: `${baseUrl}/events/`,
      lastModified: currentDate
    },
    {
      url: `${baseUrl}/journey/`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/partners/`,
      lastModified: currentDate
    },
    {
      url: `${baseUrl}/gallery/`,
      lastModified: currentDate
    },
    {
      url: `${baseUrl}/privacy/`,
      lastModified: currentDate
    },
    {
      url: `${baseUrl}/terms/`,
      lastModified: currentDate
    },
  ];
}
