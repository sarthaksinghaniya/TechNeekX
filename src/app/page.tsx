'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import MovementPositioning from '@/components/MovementPositioning';
import FOMOLayer from '@/components/FOMOLayer';
import dynamic from 'next/dynamic';
import ProjectsSummary from '@/components/ProjectsSummary';
const EventsOrganized = dynamic(() => import('@/components/EventsOrganized'), { ssr: false });
const Gallery = dynamic(() => import('@/components/Gallery'), { ssr: false });
import TeamSection from '@/components/TeamSection';
const CoreTeamHiring = dynamic(() => import('@/components/CoreTeamHiring'), { ssr: false });
const Partnership = dynamic(() => import('@/components/Partnership'), { ssr: false });
const EliteClub = dynamic(() => import('@/components/EliteClub'), { ssr: false });
const ViralLoop = dynamic(() => import('@/components/ViralLoop'), { ssr: false });
const CommunityPartnersWall = dynamic(() => import('@/components/CommunityPartnersWall'), { ssr: false });
import JourneySummary from '@/components/JourneySummary';
const TrustElements = dynamic(() => import('@/components/TrustElements'), { ssr: false });
const Community = dynamic(() => import('@/components/Community'), { ssr: false });
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import LiveActivityFeed from '@/components/LiveActivityFeed';
import useSectionAnimation from '@/hooks/useSectionAnimation';
import StickyCTA from '@/components/StickyCTA';
import SuggestedForYou from '@/components/SuggestedForYou';
import CommandPalette from '@/components/CommandPalette';
import { AnimatePresence, motion } from 'framer-motion';

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

export default function Home() {
  useSectionAnimation(); // Initialize section animations
  
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="page"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="min-h-screen"
      >
        <ScrollProgress />
        <Loader />
        <Navbar />
        <StickyCTA />
        <CommandPalette />
        <section id="hero" className="section-animate">
          <Hero />
        </section>
        <section id="social-proof" className="section-animate">
          <SocialProof />
        </section>
        <section id="about" className="section-animate">
          <MovementPositioning />
        </section>
        <section id="fomo" className="section-animate">
          <FOMOLayer />
        </section>
        <section id="projects-showcase" className="section-animate">
          <ProjectsSummary />
        </section>
        <section id="events" className="section-animate">
          <EventsOrganized />
        </section>
        <section id="gallery" className="section-animate">
          <Gallery />
        </section>
        <TeamSection />
        <section id="hiring" className="section-animate">
          <CoreTeamHiring />
        </section>
        <section id="partners" className="section-animate">
          <Partnership />
        </section>
        <section id="elite" className="section-animate">
          <EliteClub />
        </section>
        <section id="invite" className="section-animate">
          <ViralLoop />
        </section>
        <section id="community" className="section-animate">
          <CommunityPartnersWall />
          <Community />
        </section>
        <section id="journey" className="section-animate">
          <JourneySummary />
        </section>
        <section id="trust" className="section-animate">
          <TrustElements />
        </section>
        <section id="suggested" className="section-animate">
          <SuggestedForYou />
        </section>
        <section id="contact" className="section-animate">
          <FinalCTA />
        </section>
        <Footer />
        <LiveActivityFeed />
      </motion.main>
    </AnimatePresence>
  );
}
