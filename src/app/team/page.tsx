'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import TeamPageCard from '@/components/TeamPageCard';
import teamData from '../../../data/team.json';
import '@/styles/TeamPage.css';

// Scroll Progress Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default function TeamPage() {
  const [activeFlippedCard, setActiveFlippedCard] = useState<string | null>(null);

  const toggleFlip = (cardKey: string) => {
    setActiveFlippedCard(prev => (prev === cardKey ? null : cardKey));
  };

  // Robustly extract categories from restructured team.json
  const data = Array.isArray(teamData) ? teamData[0] : teamData;
  const { officialTeam = [], coreTeam = [], members = [] } = data || {};

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="team-page"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="team-page-container"
      >
        <ScrollProgress />
        <Loader />
        <Navbar />

        {/* Background animated decorative blobs */}
        <div className="team-page-bg-blob team-page-blob-1" />
        <div className="team-page-bg-blob team-page-blob-2" />

        <div className="team-page-content">
          {/* Breadcrumb Back to Home */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => window.location.href = '/'}
            className="team-breadcrumb"
          >
            <ChevronLeft size={16} />
            Back to Home
          </motion.button>

          {/* Header section with specified title layout */}
          <header className="team-page-header">
            <span className="team-page-badge">PILLARS OF TECHNEEKX</span>
            <h1 className="team-page-title">Our Team</h1>
            <p className="team-page-description">
              Meet the core team of developers, designers, and innovators building the playground for next-gen builders.
            </p>
          </header>

          {/* Members grid section */}
          <section style={{ paddingBottom: '60px' }}>
            {officialTeam.length > 0 && (
              <>
                <h2 className="team-section-heading">Official Team</h2>
                <div className="team-members-grid">
                  {officialTeam.map((member: any, idx: number) => (
                    <TeamPageCard
                      key={`official-${idx}`}
                      member={member}
                      isFlipped={activeFlippedCard === `official-${idx}`}
                      onFlip={() => toggleFlip(`official-${idx}`)}
                    />
                  ))}
                </div>
              </>
            )}

            {coreTeam.length > 0 && (
              <>
                <h2 className="team-section-heading" style={{ marginTop: '48px' }}>Core Team</h2>
                <div className="team-members-grid">
                  {coreTeam.map((member: any, idx: number) => (
                    <TeamPageCard
                      key={`core-${idx}`}
                      member={member}
                      isFlipped={activeFlippedCard === `core-${idx}`}
                      onFlip={() => toggleFlip(`core-${idx}`)}
                    />
                  ))}
                </div>
              </>
            )}

            {members.length > 0 && (
              <>
                <h2 className="team-section-heading" style={{ marginTop: '48px' }}>Members</h2>
                <div className="team-members-grid">
                  {members.map((member: any, idx: number) => (
                    <TeamPageCard
                      key={`member-${idx}`}
                      member={member}
                      isFlipped={activeFlippedCard === `member-${idx}`}
                      onFlip={() => toggleFlip(`member-${idx}`)}
                    />
                  ))}
                </div>
              </>
            )}
          </section>
        </div>

        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
