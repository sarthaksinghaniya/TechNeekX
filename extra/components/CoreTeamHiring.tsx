'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Cpu, ArrowRight, Crown } from 'lucide-react';
import { useState } from 'react';
import { openTeamForm, FORM_CONFIG } from '@/config/teamForms';

const CoreTeamHiring = () => {
  const [hoveredRole, setHoveredRole] = useState<number | null>(null);

  
  const roles = [
    {
      icon: Cpu,
      title: "Chief Technology Officer",
      subtitle: "Tech Lead",
      description: "Drive our technical vision, architect scalable solutions, and lead our engineering team.",
      requirements: [
        "Strong technical background",
        "Experience with AI/ML projects",
        "Leadership in tech teams"
      ],
      gradient: "from-green-500 to-teal-500",
      delay: 0.3
    },
    {
      icon: TrendingUp,
      title: "Chief Operating Officer",
      subtitle: "Operations & Scale",
      description: "Operationalize our roadmap, streamline execution, and keep teams unblocked as we scale.",
      requirements: [
        "Track record running ops in a fast-growing org",
        "Systems thinking with bias for process-light execution",
        "Comfort working cross-functionally with product and community"
      ],
      gradient: "from-blue-500 to-indigo-500",
      delay: 0.4
    },
    {
      icon: Crown,
      title: "Open Position",
      subtitle: "We're Hiring",
      description: "Help us build the next chapter of TechNeekX. Tell us how you can make the biggest impact.",
      requirements: [
        "Builder mindset and ownership",
        "Experience shipping in ambiguous environments",
        "Ability to collaborate across product, community, and ops"
      ],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.5,
      badge: "We're Hiring",
      action: {
        label: "Apply Now",
        onClick: () => openTeamForm('coreTeam')
      }
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
    <section id="core-team" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 top-10 right-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/10 to-green-500/10 bottom-10 left-10"
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
          {/* Crown icon */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 mb-6 glow"
          >
            <Crown className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6 heading-premium"
          >
            We're Building the
            <span className="text-gradient"> Core Team</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed subheading-premium"
          >
            Join the leadership team that's shaping India's AI builder ecosystem.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-white/60"
          >
            <span className="text-sm">Limited positions</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span className="text-sm">High ownership</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span className="text-sm">Real impact</span>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        >
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              onHoverStart={() => setHoveredRole(index)}
              onHoverEnd={() => setHoveredRole(null)}
              className={`w-full p-5 rounded-2xl bg-white/70 backdrop-blur-md shadow-md flex flex-col space-y-3 relative ${
                hoveredRole === index ? 'border border-orange-200' : 'border border-white/40'
              }`}
            >
              {/* Badge for highlighted roles */}
              {role.badge && (
                <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full z-20">
                  {role.badge}
                </div>
              )}
              
              {/* Animated gradient background on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0`}
                animate={{ 
                  opacity: hoveredRole === index ? 0.15 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              
              {/* Icon */}
              <motion.div
                className={`w-10 h-10 rounded-xl bg-gradient-to-r ${role.gradient} flex items-center justify-center relative z-10`}
              >
                <role.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                className="text-base font-semibold text-slate-900 relative z-10"
              >
                {role.title}
              </motion.h3>
              
              {/* Subtitle */}
              <motion.p 
                className="text-xs font-medium text-slate-600 relative z-10"
              >
                {role.subtitle}
              </motion.p>
              
              {/* Description */}
              <motion.p 
                className="text-sm text-slate-600 leading-relaxed relative z-10"
              >
                {role.description}
              </motion.p>

              {/* Requirements */}
              <div className="space-y-2 mb-6 relative z-10">
                {role.requirements.map((req, reqIndex) => (
                  <motion.div
                    key={reqIndex}
                    className="flex items-start gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-xs text-slate-600">{req}</span>
                  </motion.div>
                ))}
              </div>

              {role.action && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={role.action.onClick}
                  className="relative z-10 w-full mt-3 py-2.5 rounded-xl bg-[var(--accent-primary)] text-white text-sm font-semibold shadow-md"
                >
                  {role.action.label}
                </motion.button>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-24"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Lead?
            </h3>
            <p className="text-white/70 mb-6">
              This is your chance to build something meaningful with a team of passionate builders.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openTeamForm('coreTeam')}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              Apply for Core Team
              <ArrowRight size={20} />
            </motion.button>
            <div className="text-center mt-4">
              <p className="text-white/60 text-sm">
                {FORM_CONFIG.coreTeam.trustIndicator}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {FORM_CONFIG.coreTeam.timeEstimate}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreTeamHiring;
