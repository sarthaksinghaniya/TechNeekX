'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Zap, Cpu, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { PROJECTS } from '@/constants/projects';

export default function ProjectsSummary() {
  const router = useRouter();

  // Highlight top 3 live/featured projects
  const featuredProjects = PROJECTS.filter(p => p.status === 'Live').slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-20 relative bg-[#f9fafb] overflow-hidden border-t border-slate-100">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <Cpu className="w-7 h-7 text-white" />
          </motion.div>
 
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight heading-premium">
            🛠️ Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI Systems</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We build scalable, production-grade applications that solve real-world problems.
          </p>
        </motion.div>
 
        {/* Projects Preview Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative h-full flex flex-col bg-white border border-slate-200/60 rounded-3xl p-6 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-green-500/10 text-green-600 text-xs font-semibold rounded-full border border-green-500/20">
                    Live
                  </span>
                  {project.aiPowered && (
                    <span className="px-2 py-0.5 bg-purple-500/10 text-purple-600 text-[10px] font-bold rounded-full border border-purple-500/20 flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-purple-600" />
                      AI
                    </span>
                  )}
                </div>
                <div className="dark">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
 
              {/* Title & Info */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-950 mb-2">{project.title}</h3>
                <p className="text-slate-500 text-xs font-medium mb-3">{project.category}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.description}</p>
                
                {/* Tech Stack Previews */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-slate-100 border border-slate-200/50 rounded-md text-[10px] text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
 
              {/* Actions */}
              <div className="flex gap-3 pt-2">
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 btn-primary py-2.5 flex items-center justify-center gap-1.5 text-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" style={{ color: '#ffffff' }} />
                    Visit Site
                  </motion.a>
                )}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 btn-secondary py-2.5 flex items-center justify-center gap-1.5 text-xs text-slate-700 border-slate-200 hover:bg-slate-50"
                >
                  <Github className="w-3.5 h-3.5" />
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push('/projects')}
            className="btn-primary inline-flex items-center gap-2"
          >
            Explore All Projects
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
