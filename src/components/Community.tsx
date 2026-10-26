'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Cpu,
  Terminal,
  Trophy,
  ArrowRight,
  Github,
  Users,
  ChevronRight,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import '../styles/Community.css';

interface SquadCard {
  id: string;
  guildNumber: string;
  title: string;
  tagline: string;
  description: string;
  techTags: string[];
  icon: any;
  iconBg: string;
  iconColor: string;
  href: string;
}

const squadCards: SquadCard[] = [
  {
    id: 'squad-ai',
    guildNumber: 'GUILD 01 • DEPLOYMENT READY',
    title: 'Autonomous AI & Neural Systems',
    tagline: 'LLMs, Computer Vision & Agentic Workflows',
    description: 'Engineering high-throughput LLM pipelines, autonomous computer vision agents, and fine-tuned edge models using PyTorch & LangChain.',
    techTags: ['PyTorch', 'LangChain', 'OpenCV', 'Agentic Workflows'],
    icon: Sparkles,
    iconBg: 'rgba(0, 98, 255, 0.1)',
    iconColor: '#0062FF',
    href: '/projects',
  },
  {
    id: 'squad-robotics',
    guildNumber: 'GUILD 02 • EMBEDDED SYSTEMS',
    title: 'Robotics & Hardware Co-Design',
    tagline: 'Autonomous Rovers & Sensor Telemetry',
    description: 'Architecting ROS2 navigation stacks, microcontroller telemetry, and real-time hardware-software integration for autonomous robotics.',
    techTags: ['ROS2', 'ESP32', 'Sensor Fusion', 'Motor Telemetry'],
    icon: Cpu,
    iconBg: 'rgba(0, 240, 255, 0.1)',
    iconColor: '#00D2FF',
    href: '/projects',
  },
  {
    id: 'squad-oss',
    guildNumber: 'GUILD 03 • PRODUCTION CODE',
    title: 'Open Source & Infrastructure',
    tagline: 'High-Scale Backends & Public Repositories',
    description: 'Shipping public GitHub repositories, developer CLI tools, and distributed cloud microservices that scale under heavy traffic.',
    techTags: ['Next.js', 'FastAPI', 'Cloud Infra', 'Docker & CI/CD'],
    icon: Terminal,
    iconBg: 'rgba(16, 185, 129, 0.1)',
    iconColor: '#10B981',
    href: 'https://github.com/teamtechneekx',
  },
  {
    id: 'squad-hackathon',
    guildNumber: 'GUILD 04 • PREMIER PODIUMS',
    title: 'National Hackathon Command',
    tagline: '24h Sprints & Top 4 National Ranking',
    description: 'Elite competitive squads engineering under intense timed constraints across Smart India Hackathon, TRAE, and Kalpathon.',
    techTags: ['80+ Hackathons', 'Rank #4', 'Podium Finishes'],
    icon: Trophy,
    iconBg: 'rgba(255, 170, 0, 0.1)',
    iconColor: '#FF9500',
    href: '/events',
  },
];

const Community = () => {
  const router = useRouter();

  const handleCardClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      router.push(href);
    }
  };

  return (
    <section id="community" className="turnover-community-section" aria-label="TechNeekX Builder Squads">
      {/* Background ambient lighting */}
      <div className="turnover-ambient-glow turnover-glow-blue community-glow-1" />
      <div className="turnover-ambient-glow turnover-glow-cyan community-glow-2" />

      <div className="turnover-community-container">
        
        {/* Section Header */}
        <div className="turnover-community-header">
          <div className="turnover-badge-pill">
            <span className="turnover-badge-dot" />
            <span className="turnover-badge-text">Collaborative Ecosystem &amp; Builder Guilds</span>
          </div>

          <h2 className="turnover-community-title">
            A High-Octane <br />
            <span className="turnover-heading-highlight">Builder Ecosystem</span>
          </h2>

          <p className="turnover-community-subtitle">
            We organize 2,500+ student developers into focused engineering guilds.
            Whether training neural networks, designing autonomous hardware, or competing at national hackathons,
            you build alongside domain specialists.
          </p>
        </div>

        {/* 2-Column Split: Info & Stats (Left) + 4 Squad Cards Grid (Right) */}
        <div className="turnover-community-grid-layout">
          
          {/* LEFT: Ecosystem Narrative & Community Stats */}
          <div className="turnover-community-info-col">
            <div className="turnover-community-manifesto-card">
              <span className="manifesto-tag">OPERATING MODEL</span>
              <h3 className="manifesto-title">Autonomous Squads, Shared DNA</h3>
              <p className="manifesto-desc">
                Traditional college clubs are hierarchical and slow. TechNeekX operates like a modern technology studio:
                small, autonomous engineering pods that ship real software every week and compete on weekends.
              </p>

              <div className="manifesto-perks">
                <div className="perk-item">
                  <CheckCircle2 size={16} className="text-[#0062FF] shrink-0" />
                  <span>No filler assignments — 100% production code and hackathon builds</span>
                </div>
                <div className="perk-item">
                  <CheckCircle2 size={16} className="text-[#0062FF] shrink-0" />
                  <span>Direct architectural guidance from national hackathon winners</span>
                </div>
                <div className="perk-item">
                  <CheckCircle2 size={16} className="text-[#0062FF] shrink-0" />
                  <span>Verified credentials, team sponsorships, and national ranking</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="turnover-community-actions">
                <button
                  onClick={() => router.push('/join')}
                  className="turnover-btn-primary"
                >
                  <span>Join A Builder Guild</span>
                  <ArrowRight size={16} className="turnover-btn-icon" />
                </button>

                <a
                  href="https://github.com/teamtechneekx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="turnover-btn-video"
                >
                  <div className="turnover-play-icon-wrap">
                    <Github size={15} />
                  </div>
                  <div className="turnover-video-text-wrap">
                    <span className="turnover-video-title">Explore GitHub</span>
                    <span className="turnover-video-duration">Public Repos</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: 4 Interactive Domain Guild Cards */}
          <div className="turnover-community-cards-col">
            <div className="turnover-squads-grid">
              {squadCards.map((squad) => {
                const Icon = squad.icon;
                return (
                  <div
                    key={squad.id}
                    onClick={() => handleCardClick(squad.href)}
                    className="turnover-squad-card"
                    role="button"
                    tabIndex={0}
                    aria-label={`Explore ${squad.title}`}
                  >
                    <div className="turnover-squad-card-top">
                      <span className="turnover-squad-guild-num">{squad.guildNumber}</span>
                      <div
                        className="turnover-squad-icon-box"
                        style={{ backgroundColor: squad.iconBg, color: squad.iconColor }}
                      >
                        <Icon size={18} />
                      </div>
                    </div>

                    <h3 className="turnover-squad-title">{squad.title}</h3>
                    <p className="turnover-squad-desc">{squad.description}</p>

                    <div className="turnover-squad-tech-row">
                      {squad.techTags.map((tech) => (
                        <span key={tech} className="turnover-squad-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="turnover-squad-card-arrow">
                      <span className="text-xs font-semibold text-[#626873] group-hover:text-[#111318]">Explore Guild</span>
                      <ChevronRight size={14} className="text-[#0062FF]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Community;
