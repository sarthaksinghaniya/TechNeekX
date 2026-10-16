import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Join TechNeekX | Developer & Innovator Community | TechNeekX (TNX)',
  description:
    'Become part of TechNeekX (TNX / TechNX / GIT / techneek). Join a high-energy community of developers, AI practitioners, designers, and innovators building real products.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/join/`,
  },
  keywords: [
    'Join TechNeekX',
    'TechNeekX registration',
    'TechNeekX recruitment',
    'TNX community join',
    'TechNX membership',
    'Student tech community signup',
  ],
  openGraph: {
    title: 'Join TechNeekX - Where Curious Minds Build the Future',
    description: 'Learn by shipping real software, winning hackathons, and collaborating with top engineering talent.',
    url: `${SITE_CONFIG.url}/join/`,
  },
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
