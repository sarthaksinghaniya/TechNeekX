'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Users, Code, Trophy, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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

export default function JoinPage() {
  const benefits = [
    {
      icon: Users,
      title: "Collaborate with Talented Builders",
      description: "Work side-by-side with India's most passionate developers, designers, and AI innovators.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Code,
      title: "Work on Real AI Products",
      description: "Get hands-on experience building and deploying actual AI solutions that solve real problems.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Trophy,
      title: "Participate in National Hackathons",
      description: "Join high-performing teams and access resources to compete and win at the national level.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Briefcase,
      title: "Build a Strong Portfolio",
      description: "Create high-impact projects that showcase your skills and stand out to top-tier companies.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Sparkles,
      title: "Priority Access & Mentorship",
      description: "Receive direct mentorship from experienced founders and early access to exclusive events.",
      color: "text-pink-500",
      bgColor: "bg-pink-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
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
        className="min-h-screen bg-[#f9fafb] flex flex-col"
      >
        <ScrollProgress />
        <Loader />
        <Navbar />
        <StickyCTA />
        <CommandPalette />

        <main className="flex-grow pt-32 pb-20 relative px-4 sm:px-6 lg:px-8">
          {/* Background decoration blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="glass p-8 sm:p-12 border border-slate-200/50 shadow-xl rounded-3xl"
            >
              {/* Announcement Badge */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/30 text-blue-600 rounded-full text-xs font-semibold mb-8 float-badge"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Registrations Starting Soon
              </motion.div>

              {/* Title & Description */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
              >
                Become a Part of <span className="text-gradient">TechNeekX</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-slate-600 mb-10 leading-relaxed"
              >
                We're setting up the builder ecosystem for the next generation of engineers, designers, and AI developers.
                While we prepare for the onboarding phase, here's what you can expect as a member of TechNeekX:
              </motion.p>

              {/* Benefits Checklist */}
              <motion.div 
                variants={itemVariants}
                className="space-y-6 mb-12"
              >
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Membership Benefits</h3>
                <div className="grid gap-6">
                  {benefits.map((benefit, idx) => (
                    <motion.div 
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ x: 4 }}
                      className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200"
                    >
                      <div className={`w-12 h-12 rounded-xl ${benefit.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                          {benefit.title}
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        </h4>
                        <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Navigation Back */}
              <motion.div 
                variants={itemVariants}
                className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="text-sm text-slate-500">
                  Join 50+ builders already in the network.
                </div>
                <Link href="/" className="btn-primary inline-flex items-center gap-2 text-white">
                  <ArrowLeft size={16} style={{ color: '#ffffff' }} />
                  Back to Home
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </main>

        <Footer />
        <LiveActivityFeed />
      </motion.main>
    </AnimatePresence>
  );
}
