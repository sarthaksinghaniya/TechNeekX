'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Instagram, Mail, ExternalLink, Cpu, Activity } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import data from '../constants/data.json';
import '../styles/Hero.css';
import { openTeamForm } from '@/config/teamForms';

const iconMap: { [key: string]: any } = {
  Github: Github,
  Linkedin: Linkedin,
  Instagram: Instagram,
  Mail: Mail,
  Whatsapp: FaWhatsapp,
};

const Hero = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="hero-enterprise-section">
      {/* Editorial Background Grid Texture */}
      <div className="hero-enterprise-grid-bg editorial-grid editorial-grid-mask" />

      <div className="hero-enterprise-container">
        <motion.div
          className="hero-enterprise-split"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Headline & Value Proposition */}
          <div className="hero-left-col">
            <motion.div variants={itemVariants} className="hero-badge-wrap">
              <span className="badge-enterprise-accent">
                <span className="hero-pulse-dot" />
                Enterprise AI Studio &amp; Builder Ecosystem
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title-main">
              Engineering Autonomous Systems &amp;{' '}
              <span className="hero-title-highlight">Production-Ready AI.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-subtitle-text">
              TechNeekX unites student developers, software architects, and AI researchers to build, deploy, and scale high-impact software while competing at premier national hackathons.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-actions-row">
              <button
                onClick={() => router.push('/join')}
                className="btn-pill-primary"
              >
                <span>Join TechNeekX</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => openTeamForm('partner')}
                className="btn-pill-secondary"
              >
                <span>Partner with Us</span>
                <ExternalLink size={14} className="text-[#626873]" />
              </button>
            </motion.div>

            {/* Social Links Row */}
            <motion.div variants={itemVariants} className="hero-social-pill-group">
              {data.socialLinks.map((social, idx) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-pill"
                    aria-label={social.label}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {IconComponent && <IconComponent size={16} />}
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Stats Ribbon */}
            <motion.div variants={itemVariants} className="hero-stats-ribbon">
              <div className="hero-stat-item">
                <span className="hero-stat-value">2,500+</span>
                <span className="hero-stat-desc">Community Builders</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-value">10+</span>
                <span className="hero-stat-desc">AI &amp; Robotics Projects</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-value">30+</span>
                <span className="hero-stat-desc">Hackathons &amp; Events</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Rounded AI Visual Panel */}
          <motion.div
            variants={itemVariants}
            className="hero-visual-panel-wrapper"
          >
            <div className="hero-visual-panel">
              <div className="relative w-full h-[460px] sm:h-[500px] overflow-hidden bg-[#F1F3F6]">
                <Image
                  src="/hero/enterprise-ai.jpg"
                  alt="TechNeekX Autonomous AI & Robotics Architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Card */}
                <div className="hero-floating-card-top">
                  <Activity size={14} className="text-[#0062FF]" />
                  <span className="text-xs font-semibold text-[#111318] tracking-tight">
                    Active Deployment • AI Studio
                  </span>
                </div>

                {/* Floating Bottom Card */}
                <div className="hero-floating-card-bottom">
                  <div className="flex items-center gap-2 mb-1">
                    <Cpu size={14} className="text-[#0062FF]" />
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Autonomous Intelligence
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A0A8B4] leading-tight m-0">
                    PyTorch • Next.js • Computer Vision • LangChain
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
