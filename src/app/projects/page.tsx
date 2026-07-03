'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Brain, 
  Heart, 
  Globe, 
  TrendingUp, 
  DollarSign, 
  Music, 
  Recycle, 
  Calendar, 
  BookOpen, 
  Bot, 
  Scale, 
  Search, 
  ChevronLeft, 
  Check, 
  Github, 
  ExternalLink, 
  Image as ImageIcon 
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import projectsData from '../../../data/project.json';
import '@/styles/ProjectsPage.css';

interface Project {
  id: string;
  title: string;
  status: string;
  category: string;
  tagline?: string;
  categories: string[];
  icon: string;
  color: string;
  description: string;
  features: string[];
  techStack: string[];
  link: string | null;
  linkLabel?: string;
  github: string;
  impact: string;
  aiPowered?: boolean;
  isFeatured: boolean;
  image: string;
}

// Icon mapper for projects
const iconMap: Record<string, React.ComponentType<any>> = {
  Cpu,
  Brain,
  Heart,
  Globe,
  TrendingUp,
  DollarSign,
  Music,
  Recycle,
  Calendar,
  BookOpen,
  Bot,
  Scale
};

const getGradientStyle = (colorString: string) => {
  if (!colorString) return { background: 'linear-gradient(135deg, #8b5cf6, #a855f7)' };
  const parts = colorString.split(' ');
  const fromClass = parts.find(p => p.startsWith('from-'))?.replace('from-', '') || 'indigo-500';
  const toClass = parts.find(p => p.startsWith('to-'))?.replace('to-', '') || 'purple-500';
  
  const colorMap: Record<string, string> = {
    'indigo-500': '#6366f1',
    'purple-500': '#a855f7',
    'pink-500': '#ec4899',
    'red-500': '#ef4444',
    'blue-500': '#3b82f6',
    'cyan-500': '#06b6d4',
    'green-500': '#22c55e',
    'emerald-500': '#10b981',
    'teal-500': '#14b8a6',
    'orange-500': '#f97316',
    'violet-500': '#8b5cf6',
    'fuchsia-500': '#d946ef',
  };

  const fromColor = colorMap[fromClass] || '#6366f1';
  const toColor = colorMap[toClass] || '#a855f7';

  return {
    background: `linear-gradient(135deg, ${fromColor}, ${toColor})`
  };
};

const getColorClass = (colorStr: string) => {
  if (colorStr.includes('indigo-500') && colorStr.includes('purple-500')) return 'color-indigo-purple';
  if (colorStr.includes('purple-500') && colorStr.includes('pink-500')) return 'color-purple-pink';
  if (colorStr.includes('red-500') && colorStr.includes('pink-500')) return 'color-red-pink';
  if (colorStr.includes('blue-500') && colorStr.includes('indigo-500')) return 'color-blue-indigo';
  if (colorStr.includes('blue-500') && colorStr.includes('cyan-500')) return 'color-blue-cyan';
  if (colorStr.includes('green-500') && colorStr.includes('emerald-500')) return 'color-green-emerald';
  if (colorStr.includes('green-500') && colorStr.includes('teal-500')) return 'color-green-teal';
  if (colorStr.includes('orange-500') && colorStr.includes('red-500')) return 'color-orange-red';
  if (colorStr.includes('violet-500') && colorStr.includes('fuchsia-500')) return 'color-violet-fuchsia';
  if (colorStr.includes('cyan-500') && colorStr.includes('blue-500')) return 'color-cyan-blue';
  return 'color-indigo-purple';
};

const ProjectsPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'ai-advanced' | 'healthcare' | 'platforms-tools'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="projects-page-container">
        <div className="projects-page-content-wrapper">
          <div className="projects-page-header">
            <span className="projects-page-badge">PORTFOLIO</span>
            <h1 className="projects-page-title">TechNeekX Projects</h1>
            <p className="projects-page-description">Loading project portfolio...</p>
          </div>
        </div>
      </div>
    );
  }

  // Filter projects based on active tab and search query
  const filteredProjects = (projectsData as Project[]).filter((project) => {
    // Tab filter
    if (activeTab === 'ai-advanced') {
      const isAI = project.categories.includes('ai') || project.categories.includes('advanced') || project.aiPowered;
      if (!isAI) return false;
    } else if (activeTab === 'healthcare') {
      const isHealthcare = project.categories.includes('healthcare');
      if (!isHealthcare) return false;
    } else if (activeTab === 'platforms-tools') {
      const isPlatform = project.categories.includes('platform') || project.categories.includes('productivity') || project.categories.includes('music') || project.categories.includes('sustainability') || project.categories.includes('community');
      if (!isPlatform) return false;
    }

    // Search query filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const titleMatch = project.title.toLowerCase().includes(query);
      const categoryMatch = project.category.toLowerCase().includes(query);
      const descMatch = project.description.toLowerCase().includes(query);
      const techMatch = project.techStack.some(tech => tech.toLowerCase().includes(query));
      return titleMatch || categoryMatch || descMatch || techMatch;
    }

    return true;
  });

  // Sort featured projects to the front
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return a.title.localeCompare(b.title);
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-advanced', label: 'AI & Advanced Systems' },
    { id: 'healthcare', label: 'Healthcare Tech' },
    { id: 'platforms-tools', label: 'Platforms & Tools' }
  ];

  return (
    <>
      <Navbar />

      <main className="projects-page-container">
        {/* Background blobs */}
        <div className="projects-page-bg-blob projects-page-blob-1" />
        <div className="projects-page-bg-blob projects-page-blob-2" />
        <div className="projects-page-bg-blob projects-page-blob-3" />

        <div className="projects-page-content-wrapper">
          {/* Back to Home Link */}
          <motion.button 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-8 bg-transparent border-none cursor-pointer"
          >
            <ChevronLeft size={16} />
            Back to Home
          </motion.button>

          {/* Header */}
          <div className="projects-page-header">
            <span className="projects-page-badge">Portfolio</span>
            <h1 className="projects-page-title">Featured Creations</h1>
            <p className="projects-page-description">
              A comprehensive showcase of production-ready web applications, intelligent AI products, healthcare utilities, and creative toolkits built by our community.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10">
            {/* Tabs */}
            <div className="projects-tabs-container mb-0 w-auto">
              <div className="projects-tabs-list">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`projects-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="projects-tab-active-bg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search by title, tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent text-sm transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="projects-cards-grid"
          >
            <AnimatePresence mode="popLayout">
              {sortedProjects.length > 0 ? (
                sortedProjects.map((project) => {
                  const IconComponent = project.icon ? iconMap[project.icon] : Cpu;
                  const colorClass = getColorClass(project.color);
                  const gradientStyle = getGradientStyle(project.color);
                  const statusClass = project.status.toLowerCase().replace(' ', '-');

                  return (
                    <motion.div
                      layout
                      key={project.id}
                      variants={cardVariants}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className={`project-page-card ${colorClass}`}
                    >
                      {/* Image Header with Badge Overlay */}
                      <div className="project-page-image-container">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="project-page-image" 
                          />
                        ) : (
                          <div className="project-page-image-placeholder" style={gradientStyle}>
                            <IconComponent size={48} />
                          </div>
                        )}
                        
                        {/* Overlay Badges */}
                        <div className="project-page-overlay-badges">
                          <span className="project-page-category-tag">{project.category}</span>
                          <span className={`project-page-status-badge project-status-${statusClass}`}>
                            <span className="project-status-dot" />
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="project-page-card-body">
                        {/* Icon and Featured tag */}
                        <div className="project-page-icon-row">
                          <div className="project-page-app-icon-wrapper" style={gradientStyle}>
                            <IconComponent />
                          </div>
                          {project.isFeatured && (
                            <span className="project-page-featured-tag">Featured</span>
                          )}
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="project-page-card-title">{project.title}</h3>
                        {project.tagline && (
                          <span className="project-page-card-tagline">{project.tagline}</span>
                        )}

                        {/* Description */}
                        <p className="project-page-card-desc">{project.description}</p>

                        {/* Features list */}
                        {project.features && project.features.length > 0 && (
                          <ul className="project-page-features-list">
                            {project.features.map((feature, i) => (
                              <li key={i} className="project-page-feature-item">
                                <Check size={14} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Tech Stack Tags */}
                        <div className="project-page-tech-stack">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="project-page-tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="project-page-card-actions">
                          <a
                            href={project.link || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`project-page-btn-action project-page-btn-primary ${!project.link ? 'disabled' : ''}`}
                            onClick={(e) => !project.link && e.preventDefault()}
                          >
                            <span>Visit Site</span>
                            <ExternalLink size={14} />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-page-btn-action project-page-btn-outline"
                          >
                            <Github size={14} />
                            <span>Source Code</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full"
                >
                  <div className="projects-empty-state">
                    <Search className="mx-auto text-slate-300" size={48} />
                    <h3 className="projects-empty-title">No projects found</h3>
                    <p className="projects-empty-desc">
                      We couldn't find any projects matching your search query or tab filters. Try adjusting your filters.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectsPage;
