import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Terms and Conditions | TechNeekX (TNX)',
  description:
    'Terms and Conditions of TechNeekX (TNX) - community guidelines, intellectual property terms, and participation conditions for our developer ecosystem.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms/`,
  },
  openGraph: {
    title: 'Terms and Conditions | TechNeekX (TNX)',
    description:
      'Terms and Conditions of TechNeekX (TNX) - community guidelines, intellectual property terms, and participation conditions.',
    url: `${SITE_CONFIG.url}/terms/`,
    siteName: 'TechNeekX',
    type: 'website',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
