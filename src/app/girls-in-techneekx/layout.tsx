import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Girls in TechNeekX (GIT) | Women in Tech, AI & Leadership',
  description:
    'Celebrating the achievements, innovations, and leadership of women in TechNeekX (TNX / GIT). Championing feminism in tech, breaking stereotypes, and engineering the future.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/girls-in-techneekx/`,
  },
  keywords: [
    'Girls in TechNeekX',
    'Girls in Tech',
    'Women in Tech India',
    'GIT TechNeekX',
    'Women in STEM',
    'Feminism in Tech',
    'Female Hackathon Winners',
    'Women in AI',
    'Arpita Sharma',
    'Sneha Yadav',
    'Arshi TechNeekX',
    'Kriti Jain',
    'Akshara Dixit',
    'Harshita Agnihotri',
    'Female Software Engineers Lucknow',
    'TechNeekX Women Leaders',
  ],
  openGraph: {
    title: 'Girls in TechNeekX (GIT) - Women Engineering the Future',
    description:
      'Explore the milestones, hackathon victories, design systems, and AI research led by the women of TechNeekX. Equal code. Equal voice. Boundless impact.',
    url: `${SITE_CONFIG.url}/girls-in-techneekx/`,
    siteName: 'TechNeekX',
    images: [
      {
        url: '/heroImg.webp',
        width: 1200,
        height: 630,
        alt: 'Girls in TechNeekX - Empowering Women in Tech and Leadership',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Girls in TechNeekX | Women in Tech & Leadership',
    description:
      'Breaking stereotypes and leading with purpose. Discover the achievements of female builders in TechNeekX.',
    images: ['/heroImg.webp'],
    creator: '@techneekx',
    site: '@techneekx',
  },
};

export default function GirlsInTechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Girls in TechNeekX (GIT)',
    url: `${SITE_CONFIG.url}/girls-in-techneekx/`,
    description:
      'Showcasing the achievements and leadership of women in TechNeekX, promoting feminism and gender equality in technology and software engineering.',
    publisher: {
      '@type': 'Organization',
      name: 'TechNeekX',
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/logo.webp`,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'Person',
          position: 1,
          name: 'Arpita Sharma',
          jobTitle: 'Director of Core Operations',
          worksFor: { '@type': 'Organization', name: 'TechNeekX' },
        },
        {
          '@type': 'Person',
          position: 2,
          name: 'Sneha Yadav',
          jobTitle: 'Design Lead',
          worksFor: { '@type': 'Organization', name: 'TechNeekX' },
        },
        {
          '@type': 'Person',
          position: 3,
          name: 'Arshi',
          jobTitle: 'Media Lead',
          worksFor: { '@type': 'Organization', name: 'TechNeekX' },
        },
        {
          '@type': 'Person',
          position: 4,
          name: 'Kriti Jain',
          jobTitle: 'AI/ML Lead',
          worksFor: { '@type': 'Organization', name: 'TechNeekX' },
        },
        {
          '@type': 'Person',
          position: 5,
          name: 'Akshara Dixit',
          jobTitle: 'AI-ML Lead',
          worksFor: { '@type': 'Organization', name: 'TechNeekX' },
        },
        {
          '@type': 'Person',
          position: 6,
          name: 'Harshita Agnihotri',
          jobTitle: 'Research & Analysis Lead | AIML Mentor',
          worksFor: { '@type': 'Organization', name: 'TechNeekX' },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </>
  );
}
