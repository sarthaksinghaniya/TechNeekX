'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CoreTeam from '@/components/CoreTeam';
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

export default function TeamPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="team-page"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="min-h-screen bg-gradient-to-b from-white to-slate-50"
      >
        <ScrollProgress />
        <Loader />
        <Navbar />
        {/* <StickyCTA /> */}
        <CommandPalette />

        <main className="pt-20">
          <CoreTeam />
        </main>

        <Footer />
        {/* <LiveActivityFeed /> */}
      </motion.main>
    </AnimatePresence>
  );
}
