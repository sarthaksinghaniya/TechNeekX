import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Gallery & Highlights | Hackathons & Tech Meetups | TechNeekX (TNX)',
  description:
    'Visual memories from TechNeekX (TNX / TechNX / GIT) hackathons, coding workshops, keynote presentations, Kalpathon, and community meetups across India.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/gallery/`,
  },
  keywords: [
    'TechNeekX gallery',
    'TechNeekX photos',
    'Kalpathon photos',
    'GeeksforGeeks hackathon pictures',
    'TNX meetups',
    'TechNeekX event moments',
  ],
  openGraph: {
    title: 'TechNeekX Gallery - Innovation in Action',
    description: 'Moments of creativity, competition, and teamwork from TechNeekX hackathons and developer events.',
    url: `${SITE_CONFIG.url}/gallery/`,
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
