'use client';

import { motion } from 'framer-motion';
import { Code, Trophy, Rocket, Clock, Users, Zap, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const CurrentProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const currentProjects = [
    {
      title: "AI-Powered E-Waste Management",
      status: "Live",
      description: "Computer vision system for intelligent e-waste sorting and recycling recommendations",
      progress: 85,
      team: ["Sarthak S.", "Alex K.", "Maya P."],
      icon: Code,
      gradient: "from-green-500 to-teal-500",
      tags: ["AI", "Sustainability", "Computer Vision"],
      eta: "2 weeks"
    },
    {
      title: "Hospital Pulse AI",
      status: "In Progress",
      description: "Predictive analytics system forecasting hospital operational stress 6 hours in advance",
      progress: 65,
      team: ["Raj M.", "Priya N.", "Team ByteQuest"],
      icon: Trophy,
      gradient: "from-blue-500 to-purple-500",
      tags: ["Healthcare", "AI", "Analytics"],
      eta: "4 weeks"
    },
    {
      title: "Hackathon Preparation Kit",
      status: "In Progress",
      description: "Comprehensive platform for hackathon team formation, strategy, and preparation",
      progress: 45,
      team: ["Community Team", "5 Active Builders"],
      icon: Rocket,
      gradient: "from-purple-500 to-pink-500",
      tags: ["Education", "Community", "Tools"],
      eta: "6 weeks"
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Launching Soon': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 top-10 left-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 bottom-10 right-10"
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
          {/* Icon */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 mb-8 glow"
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 heading-premium"
          >
            What We're Building
            <br />
            <span className="text-gradient">Right Now</span>
          </motion.h2>
          
          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium"
          >
            Real projects. Real progress. Real impact.
          </motion.p>
        </motion.div>

        {/* Current Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="card-hover card-tilt rounded-2xl p-6 relative overflow-hidden"
            >
              {/* Status Badge */}
              <motion.div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full border text-xs font-semibold ${getStatusColor(project.status)}`}
                animate={{ 
                  scale: hoveredProject === index ? 1.05 : 1 
                }}
                transition={{ duration: 0.3 }}
              >
                {project.status}
              </motion.div>

              {/* Icon */}
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                }}
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 glow relative z-10`}
              >
                <project.icon className="w-7 h-7 text-white" />
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                className="text-xl font-bold text-white mb-2 relative z-10"
                animate={{ 
                  scale: hoveredProject === index ? 1.05 : 1 
                }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                className="text-white/70 text-sm leading-relaxed mb-4 relative z-10"
                animate={{ 
                  y: hoveredProject === index ? -2 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                {project.description}
              </motion.p>

              {/* Progress Bar */}
              <div className="mb-4 relative z-10">
                <div className="flex justify-between text-xs text-white/60 mb-2">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${project.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                </div>
              </div>

              {/* Team */}
              <div className="mb-4 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-white/60" />
                  <span className="text-white/60 text-xs">Team</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.team.map((member, idx) => (
                    <span key={idx} className="text-white/60 text-xs">
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tag}
                    className="px-2 py-1 glass rounded-full text-white/60 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ETA */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <Clock className="w-3 h-3" />
                  <span>ETA: {project.eta}</span>
                </div>
                <motion.div
                  animate={{ 
                    x: hoveredProject === index ? 5 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={16} className="text-white/40" />
                </motion.div>
              </div>

              {/* Hover effect decoration */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0`}
                animate={{ 
                  opacity: hoveredProject === index ? 0.1 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Proof */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-400 font-semibold text-sm">ACTIVE DEVELOPMENT</span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
            <p className="text-white/80 text-sm">
              Applications reviewed weekly • Active onboarding in progress
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentProjects;
