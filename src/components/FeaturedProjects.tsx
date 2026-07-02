'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
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

const FeaturedProjects = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Filter projects to only show featured ones
  const featuredProjects = (projectsData as Project[]).filter(
    (project) => project.isFeatured
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent layout shifts during initial SSR hydration
  if (!isMounted) {
    return (
      <section id="featured-projects" className="featured-projects-section">
        <div className="featured-projects-blob featured-projects-blob-1" />
        <div className="featured-projects-blob featured-projects-blob-2" />
        <div className="featured-projects-container">
          <div className="featured-projects-layout">
            <div className="featured-projects-content">
              <span className="featured-projects-subtitle-badge">PORTFOLIO</span>
              <h2 className="featured-projects-title">Featured Projects</h2>
              <div className="featured-projects-title-line" />
              <p className="featured-projects-subtitle">
                A handpicked collection of our most impactful production-ready applications, solving real-world challenges with AI and modern software engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="featured-projects" className="featured-projects-section">
      {/* Decorative Blobs */}
      <div className="featured-projects-blob featured-projects-blob-1" />
      <div className="featured-projects-blob featured-projects-blob-2" />

      <div className="featured-projects-container">
        <div className="featured-projects-layout">
          
          {/* Left Side: Drag Carousel Deck */}
          <div className="featured-projects-deck-wrapper">
            <div className="featured-projects-grid mobile-carousel-deck">
              {featuredProjects.map((project, index) => {
                const IconComponent = (LucideIcons as any)[project.icon || 'Cpu'] || LucideIcons.Cpu;
                
                // Calculate relative index for stack animation
                const relativeIndex = (index - activeIndex + featuredProjects.length) % featuredProjects.length;

                let xOffset = 0;
                let scale = 1;
                let rotate = 0;
                let opacity = 1;
                let zIndex = 10;
                let pointerEvents: 'auto' | 'none' = 'auto';

                if (relativeIndex === 0) {
                  xOffset = 0;
                  scale = 1;
                  rotate = 0;
                  opacity = 1;
                  zIndex = 10;
                  pointerEvents = 'auto';
                } else if (relativeIndex === 1) {
                  xOffset = -20;
                  scale = 0.94;
                  rotate = -3;
                  opacity = 0.75;
                  zIndex = 9;
                  pointerEvents = 'none';
                } else if (relativeIndex === 2) {
                  xOffset = -40;
                  scale = 0.88;
                  rotate = -6;
                  opacity = 0.45;
                  zIndex = 8;
                  pointerEvents = 'none';
                } else {
                  xOffset = -60;
                  scale = 0.82;
                  rotate = -9;
                  opacity = 0;
                  zIndex = 0;
                  pointerEvents = 'none';
                }

                return (
                  <motion.div
                    key={project.id}
                    className="featured-project-card"
                    style={{ pointerEvents }}
                    animate={{
                      x: xOffset,
                      scale: scale,
                      rotate: rotate,
                      opacity: opacity,
                      zIndex: zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 26
                    }}
                    drag={relativeIndex === 0 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={(event, info) => {
                      if (info.offset.x < -100) {
                        setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
                      } else if (info.offset.x > 100) {
                        setActiveIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
                      }
                    }}
                  >
                    {/* Card Header: Badges (left) and App Icon (right) */}
                    

                    {/* Title */}
                    <div className="flex items-center justify-between">
                      <h3 className="featured-project-card-title">{project.title}</h3>
                      <div className="featured-card-header">
                      <div 
                        className="featured-card-app-icon-wrapper" 
                        style={getGradientStyle(project.color)}
                      >
                        <IconComponent size={24} className="featured-card-app-icon" />
                      </div>
                    </div>
                    </div>

                    {/* Subtitle / Category */}
                    <div className="featured-project-card-subtitle">{project.category}</div>

                    {/* Description */}
                    <p className="featured-project-card-description">{project.description}</p>

                    {/* Tech Stack Tags */}
                    <div className="featured-card-tech-stack">
                      {project.techStack?.slice(0, 3).map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions Row */}
                    <div className="featured-card-actions">
                      <a
                        href={project.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn-visit-site ${!project.link ? 'disabled' : ''}`}
                        onClick={(e) => !project.link && e.preventDefault()}
                      >
                        <span>Visit Site</span>
                        <LucideIcons.ArrowRight size={16} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-code"
                      >
                        <span>Code</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Typographic Content */}
          <div className="featured-projects-content">
            <span className="featured-projects-subtitle-badge">PORTFOLIO</span>
            <h2 className="featured-projects-title">Featured Projects</h2>
            <div className="featured-projects-title-line" />
            <p className="featured-projects-subtitle">
              A handpicked collection of our most impactful production-ready applications, solving real-world challenges with AI and modern software engineering.
            </p>
            <div className="featured-projects-cta-wrapper">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push('/projects')}
                className="featured-projects-cta"
              >
                View Projects
                <LucideIcons.ArrowRight size={16} />
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
