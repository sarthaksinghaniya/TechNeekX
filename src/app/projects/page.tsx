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
  Image as ImageIcon,
  X
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import projectsData from '../../../data/project.json';
import '@/styles/ProjectsPage.css';
import Loader from '@/components/Loader';
import Image from 'next/image';

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    // Filter out projects with null links
    if (project.link === null) return false;

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
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
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
      <Loader />
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="projects-page-header"
          >
            <span className="projects-page-badge">Portfolio</span>
            <h1 className="projects-page-title">Featured Creations</h1>
            <p className="projects-page-description">
              A comprehensive showcase of production-ready web applications, intelligent AI products, healthcare utilities, and creative toolkits built by our community.
            </p>
          </motion.div>



          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="projects-cards-grid"
          >
            <AnimatePresence mode="popLayout">
              {sortedProjects.length > 0 ? (
                sortedProjects.map((project) => {
                  const IconComponent = project.icon ? iconMap[project.icon] : Cpu;
                  const colorClass = getColorClass(project.color);
                  const gradientStyle = getGradientStyle(project.color);
                  const statusClass = project.status.toLowerCase().replace(' ', '-');
                  const isLongDescription = project.description.length > 100;
                  const shortDescription = isLongDescription
                    ? `${project.description.slice(0, 100)}...`
                    : project.description;

                  return (
                    <motion.div
                      layout
                      key={project.id}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.15 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className={`project-page-card ${colorClass}`}
                      onClick={() => setSelectedProject(project)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Image Header with Category Overlay */}
                      <div className="project-page-image-container">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="project-page-image object-cover"
                          />
                        ) : (
                          <div className="project-page-image-placeholder" style={gradientStyle}>
                            <IconComponent size={48} />
                          </div>
                        )}

                        {/* Overlay Badges */}
                        <div className="project-page-overlay-badges">
                          <span className="project-page-category-tag">{project.category}</span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="project-page-card-body">
                        {/* Title and status row opposite to each other */}
                        <div className="project-page-title-row">
                          <h3 className="project-page-card-title">{project.title}</h3>
                          <span className={`project-page-status-badge project-status-${statusClass}`}>
                            <span className="project-status-dot" />
                            {project.status}
                          </span>
                        </div>

                        {/* Tagline */}
                        {project.tagline && (
                          <span className="project-page-card-tagline">{project.tagline}</span>
                        )}

                        {/* Description */}
                        <p className="project-page-card-desc">
                          {shortDescription}
                          {isLongDescription && (
                            <span className="project-page-read-more"> Read More</span>
                          )}
                        </p>

                        {/* Tech Stack Tags */}
                        {/* <div className="project-page-tech-stack mt-auto">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <span key={tech} className="project-page-tech-tag">
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="project-page-tech-tag font-bold text-slate-400">
                              +{project.techStack.length - 3}
                            </span>
                          )}
                        </div> */}

                        {/* Action buttons (stopPropagation to avoid modal launch) */}
                        <div className="project-page-card-actions">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (project.link) window.open(project.link, '_blank');
                            }}
                            className={`project-page-btn-action project-page-btn-hero ${!project.link ? 'disabled' : ''}`}
                            disabled={!project.link}
                          >
                            <span>Demo</span>
                            <ExternalLink size={14} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, '_blank');
                            }}
                            className="project-page-btn-action project-page-btn-outline"
                          >
                            <Github size={14} />
                            <span>Source</span>
                          </button>
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

        {/* Project Details Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <div className="project-modal-overlay-wrapper">
              {/* Backdrop blur overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="project-modal-backdrop"
              />

              {/* Modal panel container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 25 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="project-modal-content"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="project-modal-close-btn"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* Modal Image Header */}
                <div className="project-modal-image-container">
                  {selectedProject.image ? (
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="project-modal-image object-cover"
                    />
                  ) : (
                    (() => {
                      const ModalIcon = selectedProject.icon && iconMap[selectedProject.icon] ? iconMap[selectedProject.icon] : Cpu;
                      return (
                        <div className="project-modal-image-placeholder" style={getGradientStyle(selectedProject.color)}>
                          <ModalIcon size={56} />
                        </div>
                      );
                    })()
                  )}

                  {/* Overlays */}
                  <div className="project-modal-overlay-badges">
                    <span className="project-page-category-tag">{selectedProject.category}</span>
                    <span className={`project-page-status-badge project-status-${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                      <span className="project-status-dot" />
                      {selectedProject.status}
                    </span>
                  </div>
                </div>

                {/* Modal Info Content */}
                <div className="project-modal-body">
                  <h2 className="project-modal-title">{selectedProject.title}</h2>

                  {selectedProject.tagline && (
                    <p className="project-modal-tagline">
                      {selectedProject.tagline}
                    </p>
                  )}

                  <p className="project-modal-description">
                    {selectedProject.description}
                  </p>

                  {/* Key Features */}
                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div className="project-modal-section">
                      <h4 className="project-modal-section-title">Key Features</h4>
                      <ul className="project-modal-features-list">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="project-modal-feature-item">
                            <Check size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Impact */}
                  {selectedProject.impact && (
                    <div className="project-modal-section">
                      <h4 className="project-modal-section-title">Impact & Outcomes</h4>
                      <p className="project-modal-impact-text">{selectedProject.impact}</p>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="project-modal-section">
                    <h4 className="project-modal-section-title">Tech Stack</h4>
                    <div className="project-modal-tech-stack">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="project-modal-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Modal CTA Buttons */}
                  <div className="project-modal-actions">
                    <button
                      onClick={() => {
                        if (selectedProject.link) window.open(selectedProject.link, '_blank');
                      }}
                      className={`project-page-btn-action project-page-btn-hero ${!selectedProject.link ? 'disabled' : ''}`}
                      disabled={!selectedProject.link}
                    >
                      <span>Visit Live Demo</span>
                      <ExternalLink size={16} />
                    </button>
                    <button
                      onClick={() => window.open(selectedProject.github, '_blank')}
                      className="project-page-btn-action project-page-btn-outline"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
};

export default ProjectsPage;
