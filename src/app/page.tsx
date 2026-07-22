'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Loader from '@/components/Loader';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/About'));
const FeaturedProjects = dynamic(() => import('@/components/FeaturedProjects'));
const FeaturedEvents = dynamic(() => import('@/components/FeaturedEvents'));
const PartnersMarquee = dynamic(() => import('@/components/PartnersMarquee'));
const JourneySummary = dynamic(() => import('@/components/JourneySummary'));
const FounderNote = dynamic(() => import('@/components/FounderNote'));
const FinalCTA = dynamic(() => import('@/components/FinalCTA'));
const Footer = dynamic(() => import('@/components/Footer'));
const Gallery = dynamic(() => import('@/components/Gallery'), { ssr: false });
const Community = dynamic(() => import('@/components/Community'), { ssr: false });
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
