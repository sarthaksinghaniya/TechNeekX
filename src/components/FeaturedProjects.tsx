'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, ExternalLink, Github, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import projectsData from '../../data/project.json';
import '../styles/FeaturedProjects.css';

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

const FeaturedProjects = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter projects to only show featured ones
  const featuredProjects = (projectsData as Project[]).filter(
    (project) => project.isFeatured
  );

  const activeProject = featuredProjects[activeIndex] || featuredProjects[0];
  const IconComponent = (LucideIcons as any)[activeProject.icon || 'Cpu'] || LucideIcons.Cpu;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section id="featured-projects" className="turnover-projects-section" aria-label="Featured Engineering Builds">
      {/* Background ambient lighting */}
      <div className="turnover-ambient-glow turnover-glow-blue projects-glow-1" />
      <div className="turnover-ambient-glow turnover-glow-cyan projects-glow-2" />

      <div className="turnover-projects-container">
        
        {/* Section Header */}
        <div className="turnover-projects-header">
          <div className="turnover-badge-pill">
            <span className="turnover-badge-dot" />
            <span className="turnover-badge-text">Production Builds &amp; Hackathon Winners</span>
          </div>

          <h2 className="turnover-projects-title">
            Engineering Systems <br />
            <span className="turnover-heading-highlight">That Ship To Production</span>
          </h2>

          <p className="turnover-projects-subtitle">
            A curated showcase of autonomous AI platforms, healthcare diagnostic engines,
            and developer tooling shipped by TechNeekX builder squads.
          </p>

          {/* Interactive Project Switcher Dock */}
          <div className="turnover-project-switcher-dock" role="tablist" aria-label="Featured projects switcher">
            {featuredProjects.map((project, idx) => {
              const TabIcon = (LucideIcons as any)[project.icon || 'Cpu'] || LucideIcons.Cpu;
              const isActive = idx === activeIndex;

              return (
                <button
                  key={project.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  className={`turnover-switcher-tab ${isActive ? 'active' : ''}`}
                >
                  <TabIcon size={14} className="turnover-tab-icon" />
                  <span className="turnover-tab-title">{project.title}</span>
                  {isActive && <span className="turnover-tab-active-dot" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="turnover-project-showcase-grid"
          >
            {/* LEFT: Live Screenshot & Interactive Terminal Visual */}
            <div className="turnover-project-visual-col">
              <div className="turnover-project-visual-frame">
                <div className="turnover-visual-top-bar">
                  <div className="turnover-window-dots">
                    <span className="window-dot dot-red" />
                    <span className="window-dot dot-yellow" />
                    <span className="window-dot dot-green" />
                  </div>
                  <span className="turnover-window-url">{activeProject.link || 'techneekx.io/labs/' + activeProject.id}</span>
                  <span className="turnover-window-status">
                    <span className="status-live-pulse" />
                    {activeProject.status || 'Live'}
                  </span>
                </div>

                <div className="turnover-project-image-wrap">
                  <Image
                    src={activeProject.image || '/hero/techneekx-sculpt.jpg'}
                    alt={activeProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="turnover-project-img"
                    priority
                  />
                  <div className="turnover-image-overlay-vignette" />
                </div>

                {/* Floating Bottom Card: Impact Metric */}
                <div className="turnover-visual-floating-badge">
                  <Sparkles size={14} className="text-[#0062FF]" />
                  <div className="turnover-badge-content">
                    <span className="badge-impact-label">Architecture</span>
                    <span className="badge-impact-val">{activeProject.impact || 'Enterprise Build'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Project Deep Dive & Technical Specifications */}
            <div className="turnover-project-details-col">
              
              <div className="turnover-project-category-row">
                <span className="turnover-project-category-badge">
                  {activeProject.category}
                </span>
                {activeProject.tagline && (
                  <span className="turnover-project-tagline">{activeProject.tagline}</span>
                )}
              </div>

              <h3 className="turnover-project-heading">{activeProject.title}</h3>

              <p className="turnover-project-description">
                {activeProject.description}
              </p>

              {/* Key Features Checklist */}
              {activeProject.features && activeProject.features.length > 0 && (
                <div className="turnover-features-list">
                  {activeProject.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="turnover-feature-item">
                      <CheckCircle2 size={15} className="turnover-check-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="turnover-project-tech-chips">
                {activeProject.techStack?.map((tech) => (
                  <span key={tech} className="turnover-tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Dual Action Buttons */}
              <div className="turnover-project-actions">
                {activeProject.link ? (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="turnover-btn-primary"
                    aria-label={`Launch ${activeProject.title} live demo`}
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={15} className="turnover-btn-icon" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="turnover-btn-primary opacity-60 cursor-not-allowed"
                  >
                    <span>Private Deployment</span>
                  </button>
                )}

                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="turnover-btn-video"
                    aria-label={`View ${activeProject.title} source code on GitHub`}
                  >
                    <div className="turnover-play-icon-wrap">
                      <Github size={15} />
                    </div>
                    <div className="turnover-video-text-wrap">
                      <span className="turnover-video-title">Source Code</span>
                      <span className="turnover-video-duration">GitHub Repository</span>
                    </div>
                  </a>
                )}
              </div>

              {/* Slider Navigation Arrows */}
              <div className="turnover-project-nav-row">
                <span className="turnover-counter-text">
                  0{activeIndex + 1} <span className="text-[#8A92A0]">/ 0{featuredProjects.length}</span>
                </span>
                <div className="turnover-arrow-group">
                  <button
                    onClick={handlePrev}
                    className="turnover-arrow-btn"
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="turnover-arrow-btn"
                    aria-label="Next project"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Link to Full Portfolio */}
        <div className="turnover-projects-footer">
          <button
            onClick={() => router.push('/projects')}
            className="turnover-explore-all-btn"
          >
            <span>Explore All 15+ Production Builds</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
