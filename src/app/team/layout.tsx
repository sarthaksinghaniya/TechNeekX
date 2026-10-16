import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Team & Leadership | Coding Profiles & Builders | TechNeekX (TNX)',
  description:
    'Meet the core builders, engineers, and visionaries behind TechNeekX (TNX / TechNX / GIT), founded by Sarthak Singhaniya. Explore our GitHub profiles, technical contributions, and leadership team.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/team/`,
  },
  keywords: [
    'TechNeekX team',
    'Sarthak Singhaniya',
    'Sarthak Singhaniya GitHub',
    'Sarthak Singhaniya LinkedIn',
    'Sarthak Singhaniya portfolio',
    'Nikhil Yadav GitHub',
    'Anshuman Soni GitHub',
    'Hardik Talwar GitHub',
    'Anubhav Saxena GitHub',
    'TechNeekX coding profiles',
    'TNX builders',
    'TechNX leadership',
    'techneek founder',
    'Techneek team',
    'GIT team',
  ],
  openGraph: {
    title: 'Pillars of TechNeekX (TNX) - Founder & Core Engineering Team',
    description:
      'Discover the team powering TechNeekX. Explore the coding profiles, GitHub repositories, and backgrounds of our founder Sarthak Singhaniya and core team members.',
    url: `${SITE_CONFIG.url}/team/`,
    images: [{ url: '/sarthak.webp', width: 800, height: 800, alt: 'Sarthak Singhaniya - Founder & CEO of TechNeekX' }],
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
