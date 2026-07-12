'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import * as LucideIcons from 'lucide-react';
import { journey } from '@/constants/journey';
import '../styles/RealJourney.css';

const RealJourney = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Screen size detection for responsive animations
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track scroll progress of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 65%']
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Reveal the dashed progress line downwards without stretching
  const clipPath = useTransform(smoothProgress, [0, 1], ["inset(0 0 100% 0)", "inset(0 0 0% 0)"]);

  const rowVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05
      }
    }
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    }
  };

  const dateVariants = {
    hidden: (isCardRight: boolean) => ({
      opacity: 0,
      x: isCardRight ? -40 : 40
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const cardVariants = {
    hidden: ({ isCardRight, isMobile }: { isCardRight: boolean; isMobile: boolean }) => ({
      opacity: 0,
      x: (isMobile || isCardRight) ? 100 : -100
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Helper to construct CSS linear-gradient background from Tailwind "from-X to-Y" classes
  const getGradientStyle = (gradientString: string) => {
    if (!gradientString) return { background: 'linear-gradient(135deg, #7c3aed, #ff0080)' };
    const parts = gradientString.split(' ');
    const fromClass = parts.find(p => p.startsWith('from-'))?.replace('from-', '') || 'purple-500';
    const toClass = parts.find(p => p.startsWith('to-'))?.replace('to-', '') || 'pink-500';
    
    const colorMap: Record<string, string> = {
      'indigo-500': '#6366f1',
      'purple-500': '#7c3aed',
      'pink-500': '#ff0080',
      'red-500': '#ef4444',
      'blue-500': '#0062ff',
      'cyan-500': '#06b6d4',
      'green-500': '#22c55e',
      'emerald-500': '#10b981',
      'teal-500': '#14b8a6',
      'orange-500': '#f97316',
      'violet-500': '#8b5cf6',
      'rose-500': '#f43f5e',
      'yellow-500': '#eab308'
    };

    const fromColor = colorMap[fromClass] || '#7c3aed';
    const toColor = colorMap[toClass] || '#ff0080';

    return {
      background: `linear-gradient(135deg, ${fromColor}, ${toColor})`
    };
  };

  return (
    <section className="real-journey-section">
      {/* Background decoration blur blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="real-journey-container">
        {/* Back to Home Link */}
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-8 bg-transparent border-none cursor-pointer"
        >
          <LucideIcons.ChevronLeft size={16} />
          Back to Home
        </motion.button>

        {/* Premium Header matching Homepage Design System */}
        <div className="text-center mb-16">
          <span className="tnx-section-label">
            OUR <span style={{ textTransform: 'none' }}>TechNeekX</span> JOURNEY
          </span>
          <h1 className="tnx-main-heading mx-auto">
            Our Journey
          </h1>
          <p className="tnx-body-text mx-auto text-center">
            Consistently shipping, hacking, and building since 28th August 2025. 
            Every milestone in our path is backed by execution, learning, and collaboration.
          </p>
        </div>

        {/* Centered Timeline Wrapper */}
        <div className="real-timeline-wrapper" ref={containerRef}>
          {/* Dashed Timeline vertical line (track and progress fill) */}
          <div className="real-timeline-line">
            <motion.div
              className="real-timeline-line-progress"
              style={{ clipPath }}
            />
          </div>

          <div className="real-timeline-items">
            {journey.map((milestone, idx) => {
              const IconComponent = milestone.icon;
              
              // Alternating: Index 0, 2, 4... date left, card right
              // Index 1, 3, 5... card left, date right
              const isCardRight = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: isMobile ? 0.15 : 0.3 }}
                  className={`real-milestone-row ${isCardRight ? 'align-right' : 'align-left'}`}
                >
                  {/* Central Indicator Dot */}
                  <motion.div 
                    variants={dotVariants}
                    className={`real-dot-wrapper ${milestone.status}`}
                  >
                    <div className="real-dot" />
                  </motion.div>

                  {/* Date Label on opposite side (Desktop only) */}
                  <motion.span 
                    variants={dateVariants}
                    custom={isCardRight}
                    className="real-date-label"
                  >
                    {milestone.date}
                  </motion.span>

                  {/* Milestone Card */}
                  <motion.div 
                    variants={cardVariants}
                    custom={{ isCardRight, isMobile }}
                    className="real-card"
                  >
                    {/* Content */}
                    <div className="real-card-content">
                      <span className="real-card-mobile-date">
                        {milestone.date}
                      </span>

                      <div className="real-card-header">
                        <div className="real-card-title-group">
                          <div className="real-card-icon-box" style={getGradientStyle(milestone.gradient)}>
                            <IconComponent size={16} className="text-white" />
                          </div>
                          <h4 className="real-card-title">{milestone.title}</h4>
                        </div>
                      </div>

                      <p className="real-card-description">
                        {milestone.description}
                      </p>

                      <div className="flex items-center gap-3 mt-4">
                        <span className={`real-status-badge ${milestone.status}`}>
                          {milestone.status === 'now' ? 'In Progress' : 'Completed'}
                        </span>
                        
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/5 border border-purple-500/10 text-purple-600 text-[10px] font-semibold">
                          <LucideIcons.Zap size={10} />
                          <span>{milestone.impact}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-block bg-white/50 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto border border-slate-200/60 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              JOURNEY IN PROGRESS
            </h3>
            <p className="text-slate-600">
              Every milestone is backed by real execution, learning, and consistency.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default RealJourney;
