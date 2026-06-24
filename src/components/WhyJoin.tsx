'use client';

import { motion } from 'framer-motion';
import { Code, Trophy, Briefcase, Users, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const WhyJoin = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: Code,
      title: "Work on Real AI Products",
      description: "Build actual AI solutions that solve real problems, not just theoretical exercises.",
      gradient: "from-blue-500 to-purple-500",
      delay: 0.1
    },
    {
      icon: Trophy,
      title: "Participate in National Hackathons",
      description: "Compete and win at the highest level with our proven hackathon strategies and mentorship.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: Briefcase,
      title: "Build Strong Portfolio Projects",
      description: "Create impressive projects that showcase your skills and attract top recruiters.",
      gradient: "from-green-500 to-teal-500",
      delay: 0.3
    },
    {
      icon: Users,
      title: "Network with Top Builders",
      description: "Connect with India's most talented developers, innovators, and tech leaders.",
      gradient: "from-orange-500 to-red-500",
      delay: 0.4
    }
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
    <section id="why-join" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 top-10 left-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 bottom-10 right-10"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6 heading-premium"
          >
            Why Join
            <span className="text-gradient"> TechNeekX?</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium"
          >
            We're not just another tech community. We're a launchpad for builders who want 
            to create real impact and accelerate their careers.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="card-hover card-tilt rounded-2xl p-6 text-center group relative"
            >
              {/* Animated gradient background on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0`}
                animate={{ 
                  opacity: hoveredCard === index ? 0.1 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              
              {/* Icon */}
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                }}
                className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center glow relative z-10`}
              >
                <benefit.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300 relative z-10"
                animate={{ 
                  scale: hoveredCard === index ? 1.05 : 1 
                }}
                transition={{ duration: 0.3 }}
              >
                {benefit.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                className="text-white/70 text-sm leading-relaxed relative z-10"
                animate={{ 
                  y: hoveredCard === index ? -2 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                {benefit.description}
              </motion.p>

              {/* Hover effect decoration */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.gradient} opacity-0`}
                animate={{ 
                  opacity: hoveredCard === index ? 0.2 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mid-page CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary flex items-center gap-2 mx-auto"
          >
            Collaborate With Us
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoin;
