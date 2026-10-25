import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy | TechNeekX (TNX)',
  description:
    'Privacy Policy for TechNeekX (TNX) - learn how we collect, handle, and protect user, applicant, and student developer data across our platforms.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy/`,
  },
  openGraph: {
    title: 'Privacy Policy | TechNeekX (TNX)',
    description:
      'Privacy Policy for TechNeekX (TNX) - learn how we collect, handle, and protect user, applicant, and student developer data.',
    url: `${SITE_CONFIG.url}/privacy/`,
    siteName: 'TechNeekX',
    type: 'website',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
