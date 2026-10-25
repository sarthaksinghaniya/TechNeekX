'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Users, Code, Trophy, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import '@/styles/JoinPage.css';

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

export default function JoinPage() {
  const benefits = [
    {
      icon: Users,
      title: "Collaborate with Talented Builders",
      description: "Work side-by-side with India's most passionate developers, designers, and AI innovators."
    },
    {
      icon: Code,
      title: "Work on Real AI Products",
      description: "Get hands-on experience building and deploying actual AI solutions that solve real problems."
    },
    {
      icon: Trophy,
      title: "Participate in National Hackathons",
      description: "Join high-performing teams and access resources to compete and win at the national level."
    },
    {
      icon: Briefcase,
      title: "Build a Strong Portfolio",
      description: "Create high-impact projects that showcase your skills and stand out to top-tier companies."
    },
    {
      icon: Sparkles,
      title: "Priority Access & Mentorship",
      description: "Receive direct mentorship from experienced founders and early access to exclusive events."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.08,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="join-page"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="join-page-container editorial-grid-subtle"
      >
        <ScrollProgress />
        <Loader />
        <Navbar />

        {/* Background subtle decorative blobs */}
        <div className="join-page-bg-blob join-page-blob-1" />
        <div className="join-page-bg-blob join-page-blob-2" />

        <div className="join-page-content-wrapper">
          
          {/* Back to Home Link */}
          <motion.button 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 text-sm font-semibold text-[#626873] hover:text-[#111318] transition-colors mb-8 bg-transparent border-none cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Home
          </motion.button>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="join-enterprise-card"
          >
            {/* Announcement Badge */}
            <motion.div 
              variants={itemVariants}
              className="join-page-badge join-status-closed"
            > 
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Recruitment is Closed
            </motion.div>

            {/* Title & Description */}
            <motion.h1 
              variants={itemVariants}
              className="join-page-title"
            >
              Become a Part of <span className="text-[#0062FF]">TechNeekX</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="join-page-description mb-10"
            >
              We&apos;re setting up the builder ecosystem for the next generation of engineers, designers, and AI developers.
              While we prepare for the onboarding phase, here&apos;s what you can expect as a member of TechNeekX:
            </motion.p>

            {/* Benefits Checklist */}
            <motion.div 
              variants={itemVariants}
              className="space-y-4 mb-12"
            >
              <h3 className="text-xs font-bold text-[#626873] uppercase tracking-wider mb-4">Membership Benefits</h3>
              <div className="grid gap-4">
                {benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className="join-benefit-card"
                  >
                    <div className="join-benefit-icon-box">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111318] text-base flex items-center gap-2">
                        {benefit.title}
                        <CheckCircle2 className="w-4 h-4 text-[#0062FF] flex-shrink-0" />
                      </h4>
                      <p className="text-[#626873] text-sm mt-1 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Navigation Back & CTA */}
            <motion.div 
              variants={itemVariants}
              className="border-t border-[#DDE1E6] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="text-sm text-[#626873]">
                Join 100+ builders already in the network.
              </div>

              {/* Recruitment action button */}
              <button disabled className="join-btn-primary">
                Applications Currently Paused
              </button>
            </motion.div>
          </motion.div>
        </div>

        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
