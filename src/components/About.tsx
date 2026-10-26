'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Trophy,
  Users,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Flame
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import data from '../constants/data.json';
import '../styles/About.css';

interface StatCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const StatCounter = ({ target, duration = 2000, suffix = '' }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    if (target === 0) return;

    let rafId: number;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(target * eased));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [hasAnimated, target, duration]);

  return (
    <span ref={elementRef} className="about-stat-number">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const About = () => {
  const router = useRouter();
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const studioImages = [
    {
      src: '/gallery/IMG-2.jpg.webp',
      title: 'TRAE Re:Vibe Hackathon',
      location: 'GeeksforGeeks Office, Noida',
    },
    {
      src: '/gallery/IMG_0150.JPG.webp',
      title: 'Kalpathon 2.0 Winners',
      location: 'National Podium Finish',
    },
    {
      src: '/gallery/gal5.webp',
      title: 'InnVedX Hackathon Coding Sprint',
      location: 'BBD University, Lucknow',
    },
  ];

  // Auto-cycle through the 3 hero photos every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % studioImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [studioImages.length]);

  const activePhoto = studioImages[currentImageIdx];

  const pillars = [
    {
      icon: Terminal,
      title: 'Shipping Over Theorizing',
      desc: 'We replace textbook assignments with production AI systems, distributed microservices, and live client architectures.',
      iconBg: 'rgba(0, 98, 255, 0.1)',
      iconColor: '#0062FF',
    },
    {
      icon: Flame,
      title: 'Premier Hackathon DNA',
      desc: 'Our squads build against strict 24-hour constraints, securing podiums across Smart India Hackathon, TRAE, and Kalpathon.',
      iconBg: 'rgba(255, 170, 0, 0.1)',
      iconColor: '#FF9500',
    },
    {
      icon: Sparkles,
      title: 'Architectural Co-Design',
      desc: 'Student developers build alongside seasoned software architects, computer vision researchers, and technical founders.',
      iconBg: 'rgba(0, 240, 255, 0.1)',
      iconColor: '#00D2FF',
    },
  ];

  return (
    <section id="about" className="turnover-about-section" aria-label="About TechNeekX">
      {/* Ambient background glows */}
      <div className="turnover-ambient-glow turnover-glow-blue about-glow-1" />
      <div className="turnover-ambient-glow turnover-glow-cyan about-glow-2" />

      <div className="turnover-about-container">
        
        {/* Section Header */}
        <div className="turnover-about-header">
          <div className="turnover-badge-pill">
            <span className="turnover-badge-dot" />
            <span className="turnover-badge-text">Studio Mission &amp; Builder Philosophy</span>
          </div>

          <h2 className="turnover-about-title">
            We Build Real Software. <br />
            <span className="turnover-heading-highlight">Not Just Slide Decks.</span>
          </h2>

          <p className="turnover-about-subtitle">
            TechNeekX was founded to solve a critical gap: universities teach syntax, but industry requires shipping.
            We unite student developers to engineer production AI, win national competitions, and launch real products.
          </p>
        </div>

        {/* 2-Column Studio Showcase */}
        <div className="turnover-about-grid">
          
          {/* LEFT: Multi-Layer Studio Frame with Floating Glass Badges */}
          <div className="turnover-about-visual-col">
            <div className="turnover-about-frame">
              
              {/* Photo Viewport */}
              <div className="turnover-about-image-wrap">
                <Image
                  key={activePhoto.src}
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 580px"
                  className="turnover-about-img turnover-thumb-fade"
                  priority
                />
                <div className="turnover-about-overlay" />
              </div>

              {/* Photo Caption Strip */}
              <div className="turnover-about-caption-strip">
                <div>
                  <span className="turnover-caption-title">{activePhoto.title}</span>
                  <span className="turnover-caption-loc">{activePhoto.location}</span>
                </div>
                <div className="turnover-photo-pills">
                  {studioImages.map((_, i) => (
                    <span
                      key={i}
                      className={`turnover-photo-dot ${i === currentImageIdx ? 'active' : ''}`}
                      onClick={() => setCurrentImageIdx(i)}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Glass Badge 1 (Top-Left) */}
              <div className="turnover-about-badge-top">
                <Users size={15} className="text-[#0062FF]" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A92A0]">Ecosystem</span>
                  <span className="text-xs font-bold text-[#111318]">2,500+ Active Builders</span>
                </div>
              </div>

              {/* Floating Glass Badge 2 (Bottom-Right) */}
              <div className="turnover-about-badge-bottom">
                <Trophy size={15} className="text-[#FF9500]" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A92A0]">National Podiums</span>
                  <span className="text-xs font-bold text-[#111318]">Rank #4 • 80+ Hackathons</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: 3 Philosophy Pillars & Counter Ribbon */}
          <div className="turnover-about-details-col">
            
            {/* 3 Pillars */}
            <div className="turnover-pillars-list">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="turnover-pillar-card">
                    <div
                      className="turnover-pillar-icon-box"
                      style={{ backgroundColor: pillar.iconBg, color: pillar.iconColor }}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="turnover-pillar-content">
                      <h3 className="turnover-pillar-title">{pillar.title}</h3>
                      <p className="turnover-pillar-desc">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live KPI Counting Ribbon */}
            <div className="turnover-about-stats-ribbon">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="turnover-about-stat-box">
                  <StatCounter target={stat.value} suffix={stat.suffix} />
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Dual CTA Actions */}
            <div className="turnover-about-actions">
              <button
                onClick={() => router.push('/journey')}
                className="turnover-btn-primary"
              >
                <span>Discover Our Journey</span>
                <ArrowRight size={16} className="turnover-btn-icon" />
              </button>

              <button
                onClick={() => router.push('/team')}
                className="turnover-btn-video"
              >
                <div className="turnover-play-icon-wrap">
                  <Users size={14} />
                </div>
                <div className="turnover-video-text-wrap">
                  <span className="turnover-video-title">Meet The Squad</span>
                  <span className="turnover-video-duration">Core Team &amp; Leads</span>
                </div>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
