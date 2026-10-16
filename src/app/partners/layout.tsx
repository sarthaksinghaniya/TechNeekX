import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Community Partners & Collaborations | TechNeekX (TNX)',
  description:
    'Collaborate with TechNeekX (TNX / TechNX / GIT). Partner with our developer network, sponsor student hackathons, host technical workshops, and recruit top engineering talent.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/partners/`,
  },
  keywords: [
    'TechNeekX partners',
    'TechNeekX collaborations',
    'TNX community partners',
    'Sponsor student hackathons India',
    'TechNX sponsorship',
    'Developer community partnerships',
  ],
  openGraph: {
    title: 'Partner with TechNeekX - Empowering the Builder Ecosystem',
    description: 'Connect your brand with 1000+ enthusiastic builders, engineers, and AI developers across India.',
    url: `${SITE_CONFIG.url}/partners/`,
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
