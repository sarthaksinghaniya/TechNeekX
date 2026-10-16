import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Projects & Code Repositories | AI & Full-Stack Systems | TechNeekX (TNX)',
  description:
    'Explore production AI systems, healthcare technologies, FinTech tools, and open-source GitHub repositories built by TechNeekX (TNX / TechNX / GIT) and founder Sarthak Singhaniya.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/projects/`,
  },
  keywords: [
    'TechNeekX projects',
    'TechNeekX GitHub repositories',
    'FlowX AI',
    'Fracture Vision AI',
    'Hospital Pulse AI hopx',
    'Investment AI Copilot',
    'Reviber music AI',
    'Revive Lab green tech',
    'Hanu Planner',
    'Hanu Youth',
    'Path Sarthi',
    'LXNode AI',
    'Sarthak Singhaniya GitHub projects',
    'TNX coding projects',
    'TechNX AI apps',
    'Open source healthcare AI',
  ],
  openGraph: {
    title: 'TechNeekX AI Projects & Code Repositories | TNX Engineering',
    description:
      'Curated collection of 10+ real-world AI, Web, and Platform Engineering projects by TechNeekX and Sarthak Singhaniya.',
    url: `${SITE_CONFIG.url}/projects/`,
    images: [{ url: '/heroImg.webp', width: 1200, height: 630, alt: 'TechNeekX Engineering & Projects' }],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
