'use client';

import { motion } from 'framer-motion';
import { Shield, Check, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const EliteClub = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const criteria = [
    { text: "Builders", included: true, delay: 0.1 },
    { text: "Hackathon participants", included: true, delay: 0.2 },
    { text: "AI/Tech enthusiasts", included: true, delay: 0.3 },
    { text: "People who take action", included: true, delay: 0.4 },
    { text: "Spectators", included: false, delay: 0.5 },
    { text: "Passive learners", included: false, delay: 0.6 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.12,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/15 to-red-500/15 top-10 left-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-red-500/15 to-orange-500/15 bottom-10 right-10"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Shield Icon */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-red-500 mb-8 glow"
          >
            <Shield className="w-8 h-8 text-white" />
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 heading-premium"
          >
            Not for
            <br />
            <span className="text-gradient"> Everyone</span>
          </motion.h2>
          
          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium mb-12"
          >
            We're building with people who execute, not just learn.
          </motion.p>

          {/* Criteria Checklist */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <div className="space-y-4">
              {criteria.map((item, index) => (
                <motion.div
                  key={item.text}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="flex items-center justify-center gap-4 p-3 rounded-xl transition-all duration-300"
                  style={{
                    background: hoveredItem === index 
                      ? item.included 
                        ? 'rgba(34, 197, 94, 0.1)' 
                        : 'rgba(239, 68, 68, 0.1)'
                      : 'transparent'
                  }}
                >
                  {item.included ? (
                    <Check className={`w-6 h-6 ${hoveredItem === index ? 'text-green-400' : 'text-green-500'}`} />
                  ) : (
                    <X className={`w-6 h-6 ${hoveredItem === index ? 'text-red-400' : 'text-red-500'}`} />
                  )}
                  <span className={`text-lg font-medium ${
                    item.included 
                      ? 'text-white' 
                      : 'text-red-500 line-through'
                  }`}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              See If You Qualify
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-sm mt-4"
            >
              This creates identity filtering (VERY powerful psychologically)
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EliteClub;
