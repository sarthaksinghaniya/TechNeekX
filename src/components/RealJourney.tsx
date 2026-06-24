'use client';

import { motion } from 'framer-motion';
import { Award, Code, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { journey } from '@/constants/journey';

const RealJourney = () => {
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 top-10 right-10"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 bottom-10 left-10"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>

      {/* Premium Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 mb-8 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
        >
          <Award className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 heading-premium"
        >
          🚀 Our Journey
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed subheading-premium mb-8"
        >
          Built through execution, learning, and real-world building — not just ideas.
        </motion.p>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2"
          style={{
            scaleY: Math.min(1, Math.max(0, (scrollY + 500) / 2000))
          }}
        ></motion.div>

        {/* Timeline Items */}
        <div className="relative space-y-12">
          {journey.map((milestone, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="relative flex items-center"
              onMouseEnter={() => setActiveMilestone(index)}
              onMouseLeave={() => setActiveMilestone(null)}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full border-4 border-white transform -translate-x-1/2 z-10 ${
                  milestone.status === 'now' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse' 
                    : `bg-gradient-to-r ${milestone.gradient}`
                }`}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <milestone.icon className="w-3 h-3 text-white" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                className={`ml-20 md:ml-0 md:pr-20 md:text-right ${
                  index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left md:ml-auto'
                }`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`glass bg-white rounded-3xl p-6 border border-slate-200/60 hover:border-slate-300 transition-all duration-300 ${
                  milestone.status === 'now' ? 'ring-2 ring-cyan-500/20 ring-offset-2 ring-offset-transparent' : ''
                }`}>
                  {/* Date and Status */}
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-slate-950">{milestone.date}</h3>
                    {milestone.status === 'now' && (
                      <div className="dark">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-full"
                        >
                          NOW
                        </motion.div>
                      </div>
                    )}
                    {milestone.status === 'completed' && (
                      <div className="px-3 py-1 bg-green-500/10 text-green-600 text-xs font-medium rounded-full border border-green-500/20">
                        COMPLETED
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">{milestone.title}</h4>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-4">{milestone.description}</p>
                  
                  {/* Impact Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600">
                    <Zap className="w-3 h-3 text-purple-600" />
                    <span className="text-xs text-purple-600 font-semibold">{milestone.impact}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final Message */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <motion.div
          variants={itemVariants}
          className="glass bg-white rounded-3xl p-8 max-w-4xl mx-auto border border-slate-200/60 shadow-md"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            JOURNEY IN PROGRESS
          </h2>
          <p className="text-lg text-slate-600">
            Every milestone is backed by real execution, learning, and consistency.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RealJourney;
