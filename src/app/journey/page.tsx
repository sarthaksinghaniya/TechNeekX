'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RealJourney from '@/components/RealJourney';
import Loader from '@/components/Loader';
import LiveActivityFeed from '@/components/LiveActivityFeed';
import StickyCTA from '@/components/StickyCTA';
import CommandPalette from '@/components/CommandPalette';

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

export default function JourneyPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="journey-page"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="min-h-screen bg-[#f9fafb]"
      >
        <ScrollProgress />
        <Loader />
        <Navbar />
        <StickyCTA />
        <CommandPalette />

        <main className="pt-20">
          <RealJourney />
        </main>

        <Footer />
        <LiveActivityFeed />
      </motion.main>
    </AnimatePresence>
  );
}
