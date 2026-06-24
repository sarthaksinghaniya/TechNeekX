'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Plus } from 'lucide-react';
import { useState } from 'react';
import { openTeamForm, FORM_CONFIG } from '@/config/teamForms';

const CommunityPartnersWall = () => {
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.08,
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

  type Partner = {
    name: string;
    role: string;
    avatar: string | null;
    expertise: string[];
    gradient: string;
    isCTA?: boolean;
    description?: string;
    badge?: string;
    link?: string;
  };

  const partners: Partner[] = [
    {
      name: "Innosphere",
      role: "Community Partner",
      avatar: "/innosphere.jpg",
      description: "Empowering students through collaboration, tech events, and skill-building initiatives.",
      badge: "Collaboration Partner",
      expertise: ["Student Collaboration", "Tech Events", "Skill Development"],
      gradient: "from-indigo-500 to-cyan-500",
      link: "https://www.linkedin.com/company/innosphere-student-forum/posts/?feedView=all"
    },
    {
      name: "ByteQuest",
      role: "Hackathon Organiser",
      avatar: "/byte quest hack.png",
      description: "Powering high-impact hackathons that turn ideas into real-world solutions.",
      badge: "Collaboration Partner",
      expertise: ["Hospital AI", "National Hackathon", "Innovation"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Gemini",
      role: "AI Innovation Partner",
      avatar: "/download.png",
      description: "Leveraging cutting-edge AI technology to drive innovation and intelligent solutions.",
      badge: "Technology Partner",
      expertise: ["AI Innovation", "Generative AI", "Smart Solutions"],
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      name: "Join as Partner",
      role: "Become Part of Ecosystem",
      avatar: null,
      expertise: ["Your Expertise", "Your Impact", "Your Growth"],
      gradient: "from-gray-500 to-gray-700",
      isCTA: true
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 top-10 left-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 bottom-10 right-10"
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
            Community
            <span className="text-gradient"> Partners</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"
          ></motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium"
          >
            Builders, Innovators & Collaborators Driving TechNeekX Forward
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              onHoverStart={() => setHoveredPartner(index)}
              onHoverEnd={() => setHoveredPartner(null)}
              className={`glass rounded-2xl p-6 text-center card-hover relative overflow-hidden ${
                partner.isCTA ? 'border-2 border-dashed border-white/30' : ''
              }`}
            >
              {/* Gradient background on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0`}
                animate={{ 
                  opacity: hoveredPartner === index ? 0.1 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              
              {/* Avatar */}
              <div className="relative mb-4">
                {partner.avatar ? (
                  <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden border-2 border-white/20">
                    <img
                      src={partner.avatar}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : partner.isCTA ? (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${
                      partner.isCTA ? 'bg-gradient-to-r from-gray-500 to-gray-700' : 'bg-gradient-to-r from-purple-500 to-blue-500'
                    }`}
                  >
                    <Plus className="w-8 h-8 text-white" />
                  </motion.div>
                ) : (
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-gradient-to-r ${partner.gradient}`}>
                    <span className="text-white font-bold text-xl">
                      {getInitials(partner.name)}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <motion.h3 
                  animate={{ 
                    scale: hoveredPartner === index ? 1.05 : 1 
                  }}
                  className="text-lg font-bold text-white mb-2"
                >
                  {partner.name}
                </motion.h3>
                
                <motion.p 
                  className="text-white/60 text-sm mb-4"
                  animate={{ 
                    y: hoveredPartner === index ? -2 : 0 
                  }}
                >
                  {partner.role}
                </motion.p>

                {!partner.isCTA && partner.badge ? (
                  <div className="inline-flex items-center px-3 py-1 mb-3 rounded-full text-xs font-semibold bg-gradient-to-r from-sky-200 to-violet-200 text-slate-800 border border-sky-300/80 shadow-sm">
                    {partner.badge}
                  </div>
                ) : null}

                {!partner.isCTA && partner.description ? (
                  <p className="text-white/75 text-sm leading-relaxed mb-4">
                    {partner.description}
                  </p>
                ) : null}
                
                {/* Expertise Tags */}
                {!partner.isCTA && (
                  <div className="flex flex-wrap justify-center gap-1">
                    {partner.expertise.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 glass rounded-full text-white/70 text-xs"
                        animate={{ 
                          y: hoveredPartner === index ? -1 : 0,
                          transition: { delay: skillIndex * 0.05 }
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                )}

                {!partner.isCTA && partner.link ? (
                  <motion.a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    LinkedIn
                  </motion.a>
                ) : null}
              </div>
              
              {/* CTA Button for Join Card */}
              {partner.isCTA && (
                <motion.div
                  variants={itemVariants}
                  className="mt-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openTeamForm('partner')}
                    className="btn-primary w-full"
                  >
                    Become a Partner
                  </motion.button>
                  <div className="text-center mt-3">
                    <p className="text-white/60 text-sm">
                      {FORM_CONFIG.partner.trustIndicator}
                    </p>
                    <p className="text-white/40 text-xs mt-1">
                      {FORM_CONFIG.partner.timeEstimate}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityPartnersWall;
