'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useRouter } from 'next/navigation';
import { journey } from '@/constants/journey';
import '../styles/JourneySummary.css';

const JourneySummary = () => {
  const router = useRouter();

  // Show only the 3 most recent milestones from the original data
  const recentMilestones = journey.slice(-3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
    <section id="journey" className="tnx-section-alt">
      {/* Background blur blobs */}
      <div className="journey-bg-blob journey-blob-1" />
      <div className="journey-bg-blob journey-blob-2" />

      <div className="tnx-container">
        <div className="journey-layout">
          
          {/* Left Column: Zig-Zag Timeline */}
          <div className="journey-timeline-wrapper">
            {/* Dashed Timeline vertical line */}
            <div className="journey-line" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="journey-timeline-items"
            >
              {recentMilestones.map((milestone, idx) => {
                const IconComponent = milestone.icon;
                
                // Index 0: date left, card right
                // Index 1: card left, date right
                // Index 2: date left, card right
                const isCardRight = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`journey-milestone-row ${isCardRight ? 'align-right' : 'align-left'}`}
                  >
                    {/* Central Indicator Dot */}
                    <div className={`journey-dot-wrapper ${milestone.status}`}>
                      <div className="journey-dot" />
                    </div>

                    {/* Date Label on opposite side (Desktop only) */}
                    <span className="journey-date-label">
                      {milestone.date}
                    </span>

                    {/* Milestone Card */}
                    <div className="journey-card">
                      {/* Content */}
                      <div className="journey-card-content" style={{ width: '100%' }}>
                        <span className="journey-card-mobile-date">
                          {milestone.date}
                        </span>

                        <div className="journey-card-header">
                          <div className="journey-card-title-group">
                            <div className="journey-card-icon-box" style={getGradientStyle(milestone.gradient)}>
                              <IconComponent size={16} className="text-white" />
                            </div>
                            <h4 className="journey-card-title">{milestone.title}</h4>
                          </div>
                        </div>

                        <p className="journey-card-description">
                          {milestone.description}
                        </p>

                        <div className="flex items-center gap-3 mt-4">
                          <span className={`journey-status-badge ${milestone.status}`}>
                            {milestone.status === 'now' ? 'In Progress' : 'Completed'}
                          </span>
                          
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/5 border border-purple-500/10 text-purple-600 text-[10px] font-semibold">
                            <LucideIcons.Zap size={10} />
                            <span>{milestone.impact}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Explore Button centered at bottom of timeline line */}
            <div className="journey-cta-wrapper">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/journey')}
                className="hero-btn-primary"
              >
                <span>Explore Full Timeline</span>
                <LucideIcons.ArrowRight size={16} />
              </motion.button>
            </div>
          </div>

          {/* Right Column: Title and Storytelling Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="journey-info-col"
          >
            <span className="tnx-section-label">
              OUR <span style={{ textTransform: 'none' }}>TechNeekX</span> JOURNEY
            </span>
            <h2 className="tnx-main-heading">
              Our Journey
            </h2>
            <p className="tnx-body-text">
              Consistently shipping, hacking, and building since August 2025. 
              We track our growth through milestones of work—participating in national events, 
              forming a robust builder network, and launching AI products.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default JourneySummary;
