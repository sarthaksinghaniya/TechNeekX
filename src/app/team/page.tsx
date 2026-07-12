'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
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
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
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

// CountUp Component for premium stat counting on mount
const CountUp = ({ value, duration = 1200, suffix = "" }: { value: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) {
      setCount(end);
      return;
    }
    const incrementTime = Math.max(Math.floor(duration / end), 16);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
};

export default function TeamPage() {
  const router = useRouter();
  const [activeFlippedCard, setActiveFlippedCard] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 1500], [0, -120]);
  const yBlob2 = useTransform(scrollY, [0, 1500], [0, 120]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleFlip = (cardKey: string) => {
    setActiveFlippedCard(prev => (prev === cardKey ? null : cardKey));
  };

  // Robustly extract categories from restructured team.json
  const data = Array.isArray(teamData) ? teamData[0] : teamData;
  const { officialTeam = [], coreTeam = [], members = [] } = data || {};

  // Calculate stats dynamically from actual data in team.json
  const totalMembers = officialTeam.length + coreTeam.length + members.length;
  
  const totalLeads = [...officialTeam, ...coreTeam, ...members].filter(member => {
    const role = (member.designation || '').toLowerCase();
    return role.includes('lead') || role.includes('director') || role.includes('founder') || role.includes('cto') || role.includes('chairman') || role.includes('president');
  }).length;

  const totalDepts = new Set([...officialTeam, ...coreTeam, ...members].map(member => {
    const role = (member.designation || '').toLowerCase();
    if (role.includes('tech') || role.includes('frontend') || role.includes('ai') || role.includes('ml')) return 'Technology';
    if (role.includes('design')) return 'Design';
    if (role.includes('media')) return 'Media';
    if (role.includes('operation')) return 'Operations';
    return 'Management';
  })).size;

  // Stagger reveal animation configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 14
      }
    }
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="team-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="team-page-container"
      >
        <ScrollProgress />
        <Loader />
        <Navbar />

        {/* Background animated decorative blobs */}
        <motion.div style={{ y: yBlob1 }} className="team-page-bg-blob team-page-blob-1" />
        <motion.div style={{ y: yBlob2 }} className="team-page-bg-blob team-page-blob-2" />

        <div className="team-page-content">
          {/* Breadcrumb Back to Home */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => router.push('/')}
            className="team-breadcrumb"
          >
            <ChevronLeft size={16} />
            Back to Home
          </motion.button>

          {/* Hero section */}
          <header className="team-page-header">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="team-page-badge"
            >
              PILLARS OF TECHNEEKX
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="team-page-title"
            >
              Our Team
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="team-page-description"
            >
              Meet the passionate developers, designers, innovators and builders creating the future of TechNeekX.
            </motion.p>

            {/* Statistics cards grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="team-stats-grid"
            >
              <div className="team-stat-card">
                <span className="team-stat-number">
                  <CountUp value={totalMembers} suffix="+" />
                </span>
                <span className="team-stat-label">Members</span>
              </div>
              <div className="team-stat-card">
                <span className="team-stat-number">
                  <CountUp value={totalDepts} />
                </span>
                <span className="team-stat-label">Departments</span>
              </div>
              <div className="team-stat-card">
                <span className="team-stat-number">
                  <CountUp value={totalLeads} suffix="+" />
                </span>
                <span className="team-stat-label">Leads</span>
              </div>
              <div className="team-stat-card">
                <span className="team-stat-number">∞</span>
                <span className="team-stat-label">Possibilities</span>
              </div>
            </motion.div>
          </header>

          {/* Members sections */}
          <section style={{ paddingBottom: '80px' }}>
            {/* Official Leadership */}
            {officialTeam.length > 0 && (
              <div className="team-section-header">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="team-section-heading">
                    Official Leadership
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="team-section-underline"
                      style={{ originX: 0 }}
                    />
                  </h2>
                  <p className="team-section-subtitle">The people leading TechNeekX.</p>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  className="team-members-grid"
                >
                  {officialTeam.map((member: any, idx: number) => (
                    <motion.div key={`official-${idx}`} variants={cardVariants} className="team-card-wrapper-item">
                      <TeamPageCard
                        member={member}
                        isFlipped={activeFlippedCard === `official-${idx}`}
                        onFlip={() => toggleFlip(`official-${idx}`)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}

            {/* Core Team */}
            {coreTeam.length > 0 && (
              <div className="team-section-header">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="team-section-heading">
                    Core Team
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="team-section-underline"
                      style={{ originX: 0 }}
                    />
                  </h2>
                  <p className="team-section-subtitle">The builders working across multiple domains.</p>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  className="team-members-grid"
                >
                  {coreTeam.map((member: any, idx: number) => (
                    <motion.div key={`core-${idx}`} variants={cardVariants} className="team-card-wrapper-item">
                      <TeamPageCard
                        member={member}
                        isFlipped={activeFlippedCard === `core-${idx}`}
                        onFlip={() => toggleFlip(`core-${idx}`)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}

            {/* Members / Other Teams */}
            {members.length > 0 && (
              <div className="team-section-header">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="team-section-heading">
                    Members
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="team-section-underline"
                      style={{ originX: 0 }}
                    />
                  </h2>
                  <p className="team-section-subtitle">The community members contributing to the ecosystem.</p>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  className="team-members-grid"
                >
                  {members.map((member: any, idx: number) => (
                    <motion.div key={`member-${idx}`} variants={cardVariants} className="team-card-wrapper-item">
                      <TeamPageCard
                        member={member}
                        isFlipped={activeFlippedCard === `member-${idx}`}
                        onFlip={() => toggleFlip(`member-${idx}`)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
          </section>
        </div>

        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
