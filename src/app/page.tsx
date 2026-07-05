'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import FeaturedEvents from '@/components/FeaturedEvents';
import PartnersMarquee from '@/components/PartnersMarquee';
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
import FounderNote from '@/components/FounderNote';
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
        
        {/* <section id="hero" className="section-animate pt-18"> */}
          <Hero />
        {/* </section> */}
        
        
        <PartnersMarquee />
        <About />
        <JourneySummary />
        <FeaturedEvents />

        <Community />
        
        
        <FeaturedProjects />
        <FinalCTA/>
        
        
        <FounderNote />
        <Gallery />
        
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
