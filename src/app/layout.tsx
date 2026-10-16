import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/navigation.css";
import MotionProvider from "@/components/MotionProvider";
import { SITE_CONFIG, generateStructuredData } from "@/config/seo";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "TechNeekX (TNX) | Youth Innovation & AI Product Studio",
    template: "%s | TechNeekX (TNX)",
  },
  description: SITE_CONFIG.description,
  applicationName: "TechNeekX",
  authors: [
    { name: SITE_CONFIG.founder.name, url: SITE_CONFIG.founder.url },
    { name: SITE_CONFIG.name, url: SITE_CONFIG.url },
  ],
  generator: "Next.js",
  keywords: SITE_CONFIG.keywords,
  referrer: "origin-when-cross-origin",
  creator: SITE_CONFIG.founder.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      "en-US": SITE_CONFIG.url,
      "en-IN": SITE_CONFIG.url,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo.webp", type: "image/webp" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/logo.webp",
    apple: [
      { url: "/logo.webp", sizes: "180x180", type: "image/webp" },
    ],
  },
  openGraph: {
    title: "TechNeekX (TNX) | Youth Innovation, AI Studio & Developer Ecosystem",
    description:
      "TechNeekX (TNX / TechNX / GIT / techneek) is a student-driven tech innovation ecosystem and AI product studio founded by Sarthak Singhaniya. Building real-world AI, winning national hackathons, and empowering builders.",
    url: SITE_CONFIG.url,
    siteName: "TechNeekX",
    images: [
      {
        url: "/heroImg.webp",
        width: 1200,
        height: 630,
        alt: "TechNeekX (TNX) - AI Product Studio & Developer Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechNeekX (TNX) | Youth Innovation & AI Product Studio",
    description:
      "Student-driven tech innovation hub and AI product studio led by Sarthak Singhaniya. Empowering 1000+ builders across 80+ hackathons.",
    images: ["/heroImg.webp"],
    creator: "@techneekx",
    site: "@techneekx",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Technology Innovation, Artificial Intelligence, Open Source Software",
  other: {
    // Geographic & Local SEO tags
    "geo.region": SITE_CONFIG.geo.region,
    "geo.placename": SITE_CONFIG.geo.placename,
    "geo.position": SITE_CONFIG.geo.position,
    ICBM: SITE_CONFIG.geo.icbm,

    // Siri & Apple Optimization tags
    "apple-mobile-web-app-title": "TechNeekX",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",

    // Search & LLM Engine Identity tags
    "author-profile": SITE_CONFIG.founder.github,
    "organization-profile": SITE_CONFIG.profiles.githubOrg,
    "ai-agent-ready": "true",
    "chatgpt-fts": "true",
    "brand-aliases": "TNX, tnx, TechNX, technx, techneek, Techneek, GIT, Team TechNeekX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    organizationSchema,
    websiteSchema,
    founderPersonSchema,
    softwareProjectsSchema,
    faqSchema,
  } = generateStructuredData();

  return (
    <html lang="en">
      <head>
        {/* OpenSearch auto-discovery */}
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="TechNeekX"
          href="/opensearch.xml"
        />

        {/* Structured JSON-LD Data for Google Knowledge Graph, AI Overviews, Perplexity & Siri */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(founderPersonSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareProjectsSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
