'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Loader from '@/components/Loader';
import RecruitmentModal from '@/components/RecruitmentModal';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import FeaturedEvents from '@/components/FeaturedEvents';
import PartnersMarquee from '@/components/PartnersMarquee';
import JourneySummary from '@/components/JourneySummary';
import FounderNote from '@/components/FounderNote';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Community from '@/components/Community';
import useSectionAnimation from '@/hooks/useSectionAnimation';
import { AnimatePresence, m } from 'framer-motion';

export default function Home() {
  useSectionAnimation(); // Initialize section animations

  return (
    <main className="min-h-screen">
      <Loader />
      {/* <RecruitmentModal /> */}
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
    </main>
  );
}
