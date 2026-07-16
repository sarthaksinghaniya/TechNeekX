'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, TrendingUp, Users, Award, Zap, Heart, Brain, DollarSign, Calendar, Music, Recycle, BookOpen, Bot, Globe, Scale, Cpu } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PROJECTS, PROJECT_CATEGORIES, Project, ProjectCategoryId } from '@/constants/projects';

const ProjectsShowcase = () => {
  const router = useRouter();
  const [allProjects] = useState<Project[]>(() => [...PROJECTS]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(() => [...PROJECTS]);
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryId>(PROJECT_CATEGORIES.all.id);

  const categories = Object.values(PROJECT_CATEGORIES);

  const handleFilter = (categoryId: ProjectCategoryId) => {
    const normalizedCategory = categoryId.toLowerCase();

    console.log('Selected:', normalizedCategory);
    console.log('All:', allProjects);

    setActiveCategory(categoryId);

    const nextProjects =
      normalizedCategory === PROJECT_CATEGORIES.all.id
        ? [...allProjects]
        : allProjects.filter((project) => {
            const categories = Array.isArray(project.categories) ? project.categories : [];
            if (categories.map((c) => c.toLowerCase()).includes(normalizedCategory)) {
              return true;
            }

            return project.category.toLowerCase().includes(normalizedCategory);
          });

    const stableProjects = nextProjects.length > 0 ? [...nextProjects] : [...allProjects];

    console.log('Filtered:', stableProjects);

    setFilteredProjects(stableProjects);
  };

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
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 top-10 right-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 bottom-10 left-10"
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
          {/* Premium Header */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 mb-8 glow"
          >
            <Award className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 heading-premium"
          >
            Real-World
            <br />
            <span className="text-gradient">AI Innovation</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed subheading-premium mb-8"
          >
            Building production-ready AI systems and full-stack applications that solve real problems across healthcare, finance, education, and community development.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 mb-12"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-slate-800 font-semibold">10+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-slate-800 font-semibold">5+ Industries</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-slate-800 font-semibold">Production-Ready</span>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-md text-white'
                    : 'glass text-slate-700 hover:text-slate-900 border border-slate-200/50 hover:bg-slate-50'
                }`}
              >
                <span className={activeCategory === category.id ? "dark flex items-center gap-2" : "flex items-center gap-2"}>
                  <category.icon className="w-4 h-4 text-white" />
                  <span className="text-white">{category.name}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Project Card */}
              <div
                className={`glass bg-white rounded-3xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col ${
                  project.aiPowered
                    ? 'ring-1 ring-violet-500/10 hover:ring-violet-400/30'
                    : ''
                }`}
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live'
                          ? 'bg-green-500/10 text-green-600 border border-green-500/20'
                          : project.status === 'In Progress'
                          ? 'bg-yellow-500/10 text-yellow-600 border border-yellow-500/20'
                          : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          project.status === 'Live'
                            ? 'bg-green-500'
                            : project.status === 'In Progress'
                            ? 'bg-yellow-500'
                            : 'bg-blue-500'
                        }`}
                      ></div>
                      {project.status}
                    </div>

                    {project.aiPowered ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 text-violet-700 border border-violet-200/40 backdrop-blur-sm">
                        <Cpu className="w-3.5 h-3.5 text-violet-600" />
                        AI Powered
                      </div>
                    ) : null}
                  </div>
                  <div className="dark">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${project.color}`}>
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{project.category}</p>
                  {project.tagline ? (
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 text-indigo-700 border border-indigo-200/50 mb-4">
                      {project.tagline}
                    </div>
                  ) : null}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-100 border border-slate-200/50 rounded-lg text-xs text-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact Badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600">
                    <Zap className="w-3 h-3 text-purple-600" />
                    <span className="text-xs text-purple-600 font-medium">{project.impact}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.link && (
                    <div className="flex-1 dark">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full btn-primary flex items-center justify-center gap-2 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" style={{ color: '#ffffff' }} />
                        {project.linkLabel ?? 'Live Demo'}
                      </motion.a>
                    </div>
                  )}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex-1 btn-secondary flex items-center justify-center gap-2 text-sm text-slate-700 border-slate-200 hover:bg-slate-50 ${
                      !project.link ? 'w-full' : ''
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    {project.link ? 'Code' : 'View Project'}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="glass bg-white rounded-3xl p-12 max-w-4xl mx-auto border border-slate-200/50 shadow-md"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Build Together?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join our ecosystem of builders, innovators, and problem-solvers. Let's create impactful solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="dark">
                <motion.a
                  href="https://github.com/teamtechneekx"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary flex items-center gap-2"
                >
                  <Github className="w-5 h-5" style={{ color: '#ffffff' }} />
                  Explore All Projects
                </motion.a>
              </div>
              <motion.button
                onClick={() => router.push('/join')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary flex items-center gap-2 text-slate-700 border-slate-200 hover:bg-slate-50"
              >
                <Users className="w-5 h-5" />
                Join as Member
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
