'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Sparkles, Scale, Cpu } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  type Project = {
    title: string;
    oneLiner: string;
    problem: string;
    solution: string;
    impact: string;
    image: string;
    tags: string[];
    gradient: string;
    links: {
      demo: string;
      github: string;
    };
    status: string;
    category: string;
    aiPowered?: boolean;
    icon?: 'scale' | 'cpu';
  };

  const projects: Project[] = [
    {
      title: "ReviveLab",
      oneLiner: "AI-powered E-waste management solution",
      problem: "E-waste management is inefficient, with poor sorting and recycling recommendations leading to environmental harm.",
      solution: "Built an AI platform that uses computer vision to identify e-waste types, provides recycling recommendations, and tracks environmental impact.",
      impact: "Improved recycling efficiency by 40%, reduced environmental impact, and created a scalable solution for smart cities.",
      image: "/f3efe143-3bd0-4dc5-8f55-e5fa6c051f61.png",
      tags: ["AI", "SaaS", "Sustainability"],
      gradient: "from-green-500 to-teal-500",
      links: {
        demo: "https://reviber.netlify.app",
        github: "https://github.com/sarthaksinghaniya/reviber"
      },
      status: "Live",
      category: "AI Product"
    },
    {
      title: "HanuBot",
      oneLiner: "Intelligent AI chatbot assistant",
      problem: "Businesses struggle with customer support efficiency and personalization, leading to poor user experiences.",
      solution: "Developed a sophisticated conversational AI that understands context, learns from interactions, and provides personalized responses.",
      impact: "Reduced response time by 60%, improved customer satisfaction by 45%, and automated 80% of routine inquiries.",
      image: "/f3efe143-3bd0-4dc5-8f55-e5fa6c051f61.png",
      tags: ["AI", "Chatbot", "NLP"],
      gradient: "from-purple-500 to-pink-500",
      links: {
        demo: "https://revibe-lab.netlify.app",
        github: "https://github.com/sarthaksinghaniya/revibe-lab"
      },
      status: "Beta",
      category: "AI Tool"
    },
    {
      title: "HanuPlanner",
      oneLiner: "AI-powered scheduling and planning",
      problem: "Teams struggle with inefficient time management and poor project planning, leading to missed deadlines and burnout.",
      solution: "Created an AI-powered scheduling assistant that optimizes time allocation, predicts bottlenecks, and provides intelligent planning recommendations.",
      impact: "Increased team productivity by 35%, reduced project delays by 50%, and improved work-life balance for users.",
      image: "/ChatGPT Image Sep 7, 2025, 10_41_17 AM.png",
      tags: ["AI", "Productivity", "SaaS"],
      gradient: "from-blue-500 to-cyan-500",
      links: {
        demo: "https://hanu-planner.netlify.app",
        github: "https://github.com/sarthaksinghaniya/Hanu-Planner"
      },
      status: "Development",
      category: "Productivity Tool"
    },
    {
      title: "Hospital Pulse AI",
      oneLiner: "Healthcare operational stress predictor",
      problem: "Hospitals face operational overload with no early warning system, leading to emergency department crowding and staff burnout.",
      solution: "Built a predictive analytics system using time series analysis and machine learning to forecast operational stress 6 hours in advance.",
      impact: "Achieved 92% accuracy in predicting ED surges, reduced ER crowding by 35%, and prevented staff burnout through proactive resource allocation.",
      image: "/ChatGPT Image Jan 7, 2026, 10_51_37 AM.png",
      tags: ["Healthcare", "AI", "Analytics"],
      gradient: "from-red-500 to-orange-500",
      links: {
        demo: "https://github.com/ByteQuest-2025/GFGBQ-Team-hopx",
        github: "https://github.com/ByteQuest-2025/GFGBQ-Team-hopx"
      },
      status: "Beta",
      category: "Healthcare AI"
    },
    {
      title: "Path Sarthi",
      oneLiner: "Career roadmap and performance tracker",
      problem: "Students and professionals lack clear career guidance and struggle to track their skill development progress effectively.",
      solution: "Developed a comprehensive platform that integrates with LinkedIn and Unstop, providing personalized career roadmaps and skill tracking.",
      impact: "Helped 500+ users identify career paths, improved skill acquisition by 40%, and increased job placement rates by 25%.",
      image: "/d4009897-c04d-4fe5-859d-f145042c645a.png",
      tags: ["Career", "SaaS", "Analytics"],
      gradient: "from-indigo-500 to-purple-600",
      links: {
        demo: "https://path-sarthi--sarthakshubh.replit.app",
        github: "https://github.com/sarthaksinghaniya/Path-Sarthi"
      },
      status: "Beta",
      category: "Career Tool"
    },
    {
      title: "HANU-YOUTH",
      oneLiner: "Global youth empowerment platform",
      problem: "Young people lack access to unified resources for skill development, networking, and opportunities in the tech ecosystem.",
      solution: "Created a comprehensive platform combining research hub, gamified learning, hackathons, UN updates, and AI assistance in one unified ecosystem.",
      impact: "Connected 10,000+ youth globally, facilitated 50+ skill development programs, and created opportunities for international collaboration.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
      tags: ["Community", "Education", "AI"],
      gradient: "from-yellow-500 to-orange-500",
      links: {
        demo: "https://68b572cc01f02e00082d1c34--hanuyouthapp.netlify.app/",
        github: "https://github.com/sarthaksinghaniya/hanu-youth"
      },
      status: "Development",
      category: "Community Platform"
    },
    {
      title: "LXNode – AI Legal Assistant",
      oneLiner: "AI-powered legal assistant for document analysis & query resolution",
      problem: "Legal documents are dense and time-consuming to interpret, and non-legal users often struggle to extract key obligations, risks, and actionable insights.",
      solution: "Built an AI legal assistant that analyzes and summarizes legal documents, answers natural-language legal queries, surfaces smart insights, and provides context-aware suggestions through a user-friendly interface.",
      impact: "Speeds up understanding of complex legal language, improves clarity in decision-making, and makes legal insights accessible to non-legal users.",
      image: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?w=600&h=400&fit=crop",
      tags: ["AI", "LegalTech", "NLP", "SaaS"],
      gradient: "from-violet-500 to-fuchsia-500",
      links: {
        demo: "https://lxnode.netlify.app/",
        github: "https://github.com/sarthaksinghaniya/lxnode-AI"
      },
      status: "Live",
      category: "AI Tool",
      aiPowered: true,
      icon: "scale"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'Beta': return 'bg-blue-500';
      case 'Development': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Product': return 'from-purple-500 to-pink-500';
      case 'AI Tool': return 'from-blue-500 to-cyan-500';
      case 'Productivity Tool': return 'from-green-500 to-teal-500';
      case 'Healthcare AI': return 'from-red-500 to-orange-500';
      case 'Career Tool': return 'from-indigo-500 to-purple-600';
      case 'Community Platform': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
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
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 top-10 right-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 bottom-10 left-10"
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
            Our
            <span className="text-gradient"> Projects</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium"
          >
            From AI-powered solutions to community platforms, our projects showcase 
            our commitment to innovation and excellence.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
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
              className={`card-hover card-tilt rounded-2xl overflow-hidden group relative project-card ${
                project.aiPowered
                  ? 'ring-1 ring-violet-500/20 hover:ring-violet-400/40 hover:shadow-[0_20px_70px_-30px_rgba(167,139,250,0.45)]'
                  : ''
              }`}
            >
              {/* Animated gradient border */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0"
                style={{ backgroundImage: `linear-gradient(135deg, ${project.gradient.replace('from-', '').replace(' to-', ', ')})` }}
                animate={{ 
                  opacity: hoveredProject === index ? 0.3 : 0 
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Project Header */}
              <div className="relative p-6 pb-0 z-10">
                {/* Category badge */}
                <motion.div
                  animate={{ 
                    y: hoveredProject === index ? -2 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs font-semibold mb-4`}
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  {project.category}
                </motion.div>
                
                {/* Title and one-liner */}
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300"
                  animate={{ 
                    scale: hoveredProject === index ? 1.02 : 1 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-white/70 font-medium mb-4"
                  animate={{ 
                    y: hoveredProject === index ? -2 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.oneLiner}
                </motion.p>
              </div>

              {/* Project Image */}
              <div className="relative mx-6 mb-6 rounded-xl overflow-hidden z-10">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  animate={{ 
                    scale: hoveredProject === index ? 1.05 : 1 
                  }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}
                  animate={{ 
                    opacity: hoveredProject === index ? 0.3 : 0.2 
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                {/* AI Powered Badge */}
                {project.aiPowered ? (
                  <motion.div 
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-semibold bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90 backdrop-blur-sm border border-white/10 shadow-[0_10px_30px_-15px_rgba(167,139,250,0.6)]"
                    animate={{ 
                      scale: hoveredProject === index ? 1.05 : 1 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      {project.icon === 'scale' ? <Scale className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
                      AI Powered
                    </span>
                  </motion.div>
                ) : null}
                
                {/* Status Badge */}
                <motion.div 
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-semibold ${getStatusColor(project.status)} backdrop-blur-sm`}
                  animate={{ 
                    scale: hoveredProject === index ? 1.05 : 1 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.status}
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="px-6 pb-6 z-10">
                {/* Case Study Problem */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-white/60 text-xs font-semibold">PROBLEM</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Case Study Solution */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-white/60 text-xs font-semibold">SOLUTION</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Case Study Impact */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-white/60 text-xs font-semibold">IMPACT</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 glass rounded-full text-white/70 text-xs font-medium group-hover:bg-white/20 transition-colors duration-300"
                      animate={{ 
                        y: hoveredProject === index ? -2 : 0,
                        transition: { delay: tagIndex * 0.05 }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.links.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 glass text-white rounded-xl font-semibold text-sm hover:bg-white/20 transition-all duration-300"
                  >
                    <Github size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Hover overlay with "View Project" */}
              <motion.div 
                className="project-overlay"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredProject === index ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ 
                    y: hoveredProject === index ? 0 : 20 
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-white font-semibold"
                >
                  <span>View Details</span>
                  <ArrowRight size={20} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/teamtechneekx"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary flex items-center gap-2 mx-auto"
          >
            View All Projects
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
