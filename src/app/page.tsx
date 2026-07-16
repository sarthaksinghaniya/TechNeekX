'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import FeaturedEvents from '@/components/FeaturedEvents';
import PartnersMarquee from '@/components/PartnersMarquee';
import dynamic from 'next/dynamic';
const Gallery = dynamic(() => import('@/components/Gallery'), { ssr: false });
import JourneySummary from '@/components/JourneySummary';
const Community = dynamic(() => import('@/components/Community'), { ssr: false });
import FounderNote from '@/components/FounderNote';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import useSectionAnimation from '@/hooks/useSectionAnimation';
import { AnimatePresence, motion } from 'framer-motion';

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
        <Loader />
        <Navbar />
        <Hero />
        
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
