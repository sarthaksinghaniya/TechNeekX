'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Sparkle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import Image from 'next/image';
import { FounderCard, OfficialCard, CoreCard } from '@/components/TeamPageCard';
import teamData from '../../../data/team.json';
import '@/styles/TeamPage.css';

export default function TeamPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const data = Array.isArray(teamData) ? teamData[0] : teamData;
  const { officialTeam = [], coreTeam = [] } = data || {};

  // Separate Founder & CEO
  const founder = officialTeam.find((member: any) =>
    member.designation.toLowerCase().includes('founder')
  );
  const officials = officialTeam.filter((member: any) =>
    !member.designation.toLowerCase().includes('founder')
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15,
      },
    },
  };

  return (
    // <AnimatePresence mode="wait">
      <motion.main
        key="team-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="team-page-container"
      >
        <Loader />
        <Navbar />

        {/* Background Blobs (Matches events & partners page background elements) */}
        <div className="team-page-bg-blob team-page-blob-1" />
        <div className="team-page-bg-blob team-page-blob-2" />
        <div className="team-page-bg-blob team-page-blob-3" />

        <div className="team-page-content-wrapper">
          {/* Breadcrumb Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-8 bg-transparent border-none cursor-pointer"
          >
            <ChevronLeft size={16} />
            Back to Home
          </motion.button>

          {/* Hero Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="team-page-header"
          >
            <span className="team-page-badge">Pillars of TechNeekX</span>
            <h1 className="team-page-title">Our Team</h1>
            <p className="team-page-description">
              Meet the passionate developers, designers, innovators and builders creating the future of TechNeekX.
            </p>
          </motion.div>

          {/* 1. Founder Spotlight (Centered big card) */}
          {founder && (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="founder-section-wrapper"
            >
              <FounderCard member={founder} />
            </motion.div>
          )}

          {/* Section Divider */}
          <div className="team-section-divider">
            <div className="divider-line" />
            <span className="divider-star">✦</span>
            <div className="divider-line" />
          </div>

          {/* 2. Officials Section (Student Techy Vibe) */}
          {officials.length > 0 && (
            <div className="team-section-block">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="team-section-title-wrapper"
              >
                <h2 className="team-section-heading">Our Officials</h2>
                <p className="team-section-subtitle">Leading across design, engineering, and operations.</p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                className="officials-grid"
              >
                {officials.map((member: any, idx: number) => (
                  <motion.div key={`official-${idx}`} variants={cardVariants}>
                    <OfficialCard member={member} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Section Divider */}
          <div className="team-section-divider">
            <div className="divider-line" />
            <span className="divider-star">✦</span>
            <div className="divider-line" />
          </div>

          {/* 3. Core Team Section (Right-Aligned Core Cards) */}
          {coreTeam.length > 0 && (
            <div className="team-section-block">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="team-section-title-wrapper"
              >
                <h2 className="team-section-heading">Our Cores</h2>
                <p className="team-section-subtitle">The driving force turning ideas into reality.</p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                className="cores-grid"
              >
                {coreTeam.map((member: any, idx: number) => (
                  <motion.div key={`core-${idx}`} variants={cardVariants}>
                    <CoreCard member={member} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Sparkle Banner Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="team-sparkle-banner-container"
          >
            <div className="team-sparkle-banner">
              {/* Wings Watermark Image placed behind the text */}
              <Image
                src="/about/tnx-wings.png"
                alt="TechNeekX Wings Watermark"
                width={200}
                height={200}
                className="team-sparkle-watermark"
              />
              <div className="team-sparkle-text">
                <p className="team-sparkle-lead">Great teams build great communities.</p>
                <p className="team-sparkle-sub designation-gradient">Together, we build the future.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <Footer />
      </motion.main>
    // </AnimatePresence>
  );
}
