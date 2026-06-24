'use client';

import { motion } from 'framer-motion';
import { Handshake, Trophy, Users, Target, ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';
import { openTeamForm } from '@/config/teamForms';

const Partnership = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const collaborationTypes = [
    {
      icon: Trophy,
      title: "Sponsor Hackathons",
      description: "Connect with elite builders through high-impact hackathon events and innovation challenges.",
      gradient: "from-blue-500 to-purple-500",
      delay: 0.1
    },
    {
      icon: Target,
      title: "Partner on AI Projects",
      description: "Collaborate on cutting-edge AI solutions with our team of talented builders and innovators.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: Users,
      title: "Collaborate with Talent",
      description: "Access a curated network of high-potential builders and innovators for your projects.",
      gradient: "from-green-500 to-teal-500",
      delay: 0.3
    }
  ];

  // Placeholder sponsor logos (would be replaced with actual logos)
  const sponsorLogos = [
    { name: "Startup Partner", gradient: "from-gray-600 to-gray-800" },
    { name: "Tech Company", gradient: "from-blue-600 to-blue-800" },
    { name: "Innovation Hub", gradient: "from-purple-600 to-purple-800" },
    { name: "AI Lab", gradient: "from-green-600 to-green-800" },
    { name: "Developer Tools", gradient: "from-orange-600 to-orange-800" },
    { name: "Education Platform", gradient: "from-pink-600 to-pink-800" }
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
    <section id="partnership" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 top-10 left-10"
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
          {/* Handshake icon */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 mb-6 glow"
          >
            <Handshake className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6 heading-premium"
          >
            Work With
            <span className="text-gradient"> TechNeekX</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium mb-4"
          >
            Access a curated network of high-potential builders and innovators.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-green-400 font-semibold text-sm">Early partners get priority access and long-term collaboration benefits</span>
          </motion.div>
        </motion.div>

        {/* Collaboration Types */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {collaborationTypes.map((type, index) => (
            <motion.div
              key={type.title}
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
                className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0`}
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
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${type.gradient} flex items-center justify-center mb-4 glow relative z-10`}
              >
                <type.icon className="w-7 h-7 text-white" />
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300 relative z-10"
                animate={{ 
                  scale: hoveredCard === index ? 1.05 : 1 
                }}
                transition={{ duration: 0.3 }}
              >
                {type.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                className="text-white/70 text-sm leading-relaxed relative z-10"
                animate={{ 
                  y: hoveredCard === index ? -2 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                {type.description}
              </motion.p>

              {/* Hover effect decoration */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${type.gradient} opacity-0`}
                animate={{ 
                  opacity: hoveredCard === index ? 0.2 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Logos Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Trusted By Leading Organizations</h3>
            <p className="text-white/60">Join our growing list of innovation partners</p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {sponsorLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-4 flex items-center justify-center h-20"
              >
                <div className={`w-full h-full bg-gradient-to-r ${logo.gradient} rounded-lg opacity-20`}></div>
                <span className="absolute text-white/60 text-xs font-medium">{logo.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Build Together
            </h3>
            <p className="text-white/70 mb-6">
              Whether you're looking to sponsor an event, collaborate on a project, or explore partnership opportunities, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openTeamForm('partner')}
                className="btn-primary flex items-center gap-2"
              >
                <Mail size={20} />
                Partner With Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openTeamForm('partner')}
                className="btn-secondary flex items-center gap-2"
              >
                <ArrowRight size={20} />
                View Partnership Options
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;
