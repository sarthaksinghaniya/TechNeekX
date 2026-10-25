import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/seo';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: ['Googlebot', 'Google-Extended'],
        allow: '/',
      },
      {
        userAgent: ['Applebot', 'Applebot-Extended'],
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User'],
        allow: '/',
      },
      {
        userAgent: ['ClaudeBot', 'anthropic-ai'],
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: ['Twitterbot', 'LinkedInBot', 'facebookexternalhit', 'WhatsApp'],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
