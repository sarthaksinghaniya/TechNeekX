'use client';

import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Play,
  Sparkles,
  Cpu,
  Trophy,
  X,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import '../styles/Hero.css';

interface FeatureCard {
  id: string;
  badgeIcon: any;
  title: string;
  description: string;
  href: string;
  iconBg: string;
  hasTrace?: boolean;
}

const featureCards: FeatureCard[] = [
  {
    id: 'card-ai',
    badgeIcon: Sparkles,
    title: 'AI & Neural Systems',
    description: 'Autonomous agents & vision pipelines',
    href: '/projects',
    iconBg: 'rgba(0, 98, 255, 0.12)',
    hasTrace: true,
  },
  {
    id: 'card-robotics',
    badgeIcon: Cpu,
    title: 'Robotics & Hardware',
    description: 'Embedded co-design & autonomous rovers',
    href: '/projects',
    iconBg: 'rgba(0, 240, 255, 0.12)',
    hasTrace: true,
  },
  {
    id: 'card-hackathons',
    badgeIcon: Trophy,
    title: 'National Hackathons',
    description: 'Top podium finishes & elite builders',
    href: '/events',
    iconBg: 'rgba(255, 170, 0, 0.12)',
    hasTrace: true,
  },
];

interface LatestWorkItem {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const latestWorkItems: LatestWorkItem[] = [
  {
    id: 1,
    badge: 'Our Latest Work',
    title: 'Autonomous Vision & ROS2 Agent',
    subtitle: 'Robotics & Computer Vision Pipeline',
    image: '/hero/techneekx-sculpt.jpg',
    href: '/projects',
  },
  {
    id: 2,
    badge: 'Featured Platform',
    title: 'SIH Ignite Discovery Engine',
    subtitle: 'National Finalist Hackathon Platform',
    image: '/sih-ignite-homepage-hero.webp',
    href: '/projects',
  },
  {
    id: 3,
    badge: 'Production AI',
    title: 'NeuroVision Edge Telemetry',
    subtitle: 'PyTorch & High-Throughput Inference',
    image: '/hero/enterprise-ai.jpg',
    href: '/projects',
  },
];

const Hero = () => {
  const router = useRouter();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  // Smooth mouse coordinates for parallax
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Dynamic Project Ticker Cycle (pauses on hover)
  useEffect(() => {
    if (isHoveringCard) return;
    const interval = setInterval(() => {
      setCurrentWorkIndex((prev) => (prev + 1) % latestWorkItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHoveringCard]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const scrollToNextSection = () => {
    const nextElem = document.getElementById('partners-section') || document.querySelector('section:nth-of-type(2)');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: 600, behavior: 'smooth' });
    }
  };

  const currentProject = latestWorkItems[currentWorkIndex];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="turnover-hero-section"
      aria-label="TechNeekX Introduction"
      style={
        {
          '--mx': mouseOffset.x.toFixed(3),
          '--my': mouseOffset.y.toFixed(3),
        } as React.CSSProperties
      }
    >
      {/* Background ambient lighting and subtle grid */}
      <div className="turnover-ambient-glow turnover-glow-blue" />
      <div className="turnover-ambient-glow turnover-glow-cyan" />
      <div className="turnover-grid-overlay" />

      <div className="turnover-hero-container">
        {/* Main 2-Column Split Composition */}
        <div className="turnover-hero-grid">
          
          {/* LEFT COLUMN: Strategic Headline, Subtitle, CTAs & Stats */}
          <div className="turnover-left-col">
            
            {/* Top Category Badge */}
            <div className="turnover-badge-pill">
              <span className="turnover-badge-dot" />
              <span className="turnover-badge-text">Creative Engineering Studio</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="turnover-hero-heading">
              We Build Systems <br />
              <span className="turnover-heading-highlight">That Stand Out</span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="turnover-hero-subtitle">
              TechNeekX is an elite builder ecosystem uniting student developers,
              software architects, and AI researchers to build, deploy, and scale
              production-ready software while competing at premier national hackathons.
            </p>

            {/* Dual Actions: Primary CTA + Video Play Button */}
            <div className="turnover-cta-group">
              <button
                onClick={() => router.push('/join')}
                className="turnover-btn-primary"
                aria-label="Join TechNeekX"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowRight size={16} className="turnover-btn-icon" />
              </button>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="turnover-btn-video"
                aria-label="Watch TechNeekX Story Video"
              >
                <div className="turnover-play-icon-wrap">
                  <Play size={13} fill="currentColor" className="translate-x-[1px]" />
                </div>
                <div className="turnover-video-text-wrap">
                  <span className="turnover-video-title">Watch Our Story</span>
                  <span className="turnover-video-duration">2 min</span>
                </div>
              </button>
            </div>

            {/* 4-Item Horizontal Stats Ribbon */}
            <div className="turnover-stats-ribbon">
              <div className="turnover-stat-cell">
                <span className="turnover-stat-number">2,500+</span>
                <span className="turnover-stat-label">Community Builders</span>
              </div>
              <div className="turnover-stat-cell">
                <span className="turnover-stat-number">80+</span>
                <span className="turnover-stat-label">Hackathons Won</span>
              </div>
              <div className="turnover-stat-cell">
                <span className="turnover-stat-number">15+</span>
                <span className="turnover-stat-label">AI &amp; Robotics Builds</span>
              </div>
              <div className="turnover-stat-cell">
                <span className="turnover-stat-number">98%</span>
                <span className="turnover-stat-label">Project Impact</span>
              </div>
            </div>

            {/* Bottom-Left Rotating Highlight Card: Dynamic "Our Latest Work" */}
            <div
              onMouseEnter={() => setIsHoveringCard(true)}
              onMouseLeave={() => setIsHoveringCard(false)}
              onClick={() => router.push(currentProject.href)}
              className="turnover-latest-card"
              role="button"
              tabIndex={0}
              aria-label={`View ${currentProject.title}`}
            >
              <div className="turnover-latest-thumb-wrap">
                <Image
                  key={currentProject.image}
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  sizes="52px"
                  className="object-cover turnover-thumb-fade"
                />
                <span className="turnover-thumb-live-badge" />
              </div>

              <div className="turnover-latest-info">
                <div className="flex items-center gap-1.5">
                  <span className="turnover-latest-tag">{currentProject.badge}</span>
                  {/* Subtle dots indicator */}
                  <span className="turnover-ticker-dots">
                    {latestWorkItems.map((_, i) => (
                      <span
                        key={i}
                        className={`turnover-ticker-dot ${i === currentWorkIndex ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentWorkIndex(i);
                        }}
                      />
                    ))}
                  </span>
                </div>
                <span className="turnover-latest-desc turnover-text-fade">
                  {currentProject.title}
                </span>
              </div>

              <div className="turnover-latest-arrow">
                <ChevronRight size={16} />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D Centerpiece Artwork & Stacked Floating Feature Cards */}
          <div className="turnover-right-col">
            <div className="turnover-sculpt-container">
              <div className="turnover-sculpt-glow-halo" />
              
              <div className="turnover-sculpt-image-wrapper">
                <Image
                  src="/hero/techneekx-sculpt.jpg"
                  alt="TechNeekX Futuristic Cybernetic AI Figure"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px"
                  className="turnover-sculpt-image"
                />
              </div>

              {/* Stacked Floating Glass Feature Cards with SVG Connector Traces */}
              <div className="turnover-floating-cards-layer">
                {featureCards.map((card, index) => {
                  const Icon = card.badgeIcon;
                  return (
                    <div
                      key={card.id}
                      onClick={() => router.push(card.href)}
                      className={`turnover-glass-card turnover-glass-card-${index + 1}`}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${card.title}`}
                    >
                      {/* Architectural Glowing SVG Connector Trace */}
                      <div className="turnover-card-trace">
                        <span className="turnover-trace-node" />
                        <span className="turnover-trace-line" />
                      </div>

                      <div
                        className="turnover-card-icon-wrap"
                        style={{ backgroundColor: card.iconBg }}
                      >
                        <Icon size={16} className="turnover-card-icon" />
                      </div>
                      <div className="turnover-card-text-block">
                        <h3 className="turnover-card-title">{card.title}</h3>
                        <p className="turnover-card-desc">{card.description}</p>
                      </div>
                      <div className="turnover-card-arrow-wrap">
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Scroll Down Indicator */}
        <button
          onClick={scrollToNextSection}
          className="turnover-scroll-indicator"
          aria-label="Scroll down to explore"
        >
          <span className="turnover-scroll-label">Scroll Down</span>
          <div className="turnover-mouse-icon">
            <span className="turnover-mouse-dot" />
          </div>
        </button>
      </div>

      {/* Interactive Story Video Modal */}
      {isVideoModalOpen && (
        <div className="turnover-modal-backdrop" onClick={() => setIsVideoModalOpen(false)}>
          <div
            className="turnover-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="turnover-modal-header">
              <div>
                <h3 className="turnover-modal-title">TechNeekX Ecosystem Reel</h3>
                <p className="turnover-modal-sub">National hackathons, engineering labs &amp; builder community</p>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="turnover-modal-close"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="turnover-modal-video-wrap">
              <video
                src="/hero/hero-loop.mp4"
                controls
                autoPlay
                playsInline
                className="turnover-modal-video"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
