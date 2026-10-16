import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Hackathons & Events | National Tech Competitions | TechNeekX (TNX)',
  description:
    'Discover 80+ hackathons, tech workshops, coding sprints, and national competitions participated and won by TechNeekX (TNX / TechNX / GIT) members.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/events/`,
  },
  keywords: [
    'TechNeekX events',
    'TechNeekX hackathons',
    'Kalpathon 2.0',
    'InnVedX Hackathon',
    'TRAE ReVibe Noida',
    'GeeksforGeeks hackathon',
    'National hackathon winners',
    'TNX events',
    'TechNX hackathon team',
    'BBD University hackathon',
  ],
  openGraph: {
    title: 'TechNeekX Hackathons & Events - 80+ Tech Competitions',
    description: 'Explore the hackathon journey, national recognitions, and competitive engineering milestones of TechNeekX.',
    url: `${SITE_CONFIG.url}/events/`,
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
