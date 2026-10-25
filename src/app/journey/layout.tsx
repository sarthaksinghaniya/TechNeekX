import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Our Journey & Story | From Inception to Innovation | TechNeekX (TNX)',
  description:
    'The evolutionary story of TechNeekX (TNX / TechNX / GIT), founded by Sarthak Singhaniya to transform student developers into world-class software architects and AI innovators.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/journey/`,
  },
  keywords: [
    'TechNeekX journey',
    'TechNeekX origin story',
    'Sarthak Singhaniya vision',
    'TNX timeline',
    'TechNX story',
    'Student tech community journey India',
  ],
  openGraph: {
    title: 'The TechNeekX Journey - Building Next-Gen Builders',
    description: 'From ambitious student projects to a premier builder ecosystem. Discover how TechNeekX grew into a recognized innovation community.',
    url: `${SITE_CONFIG.url}/journey/`,
  },
};

export default function JourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
