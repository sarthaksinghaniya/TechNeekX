'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowRight, Sparkles, ShieldCheck, Users } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import data from '../constants/data.json';
import '../styles/FinalCTA.css';

const iconMap: { [key: string]: any } = {
  Github: Github,
  Linkedin: Linkedin,
  Instagram: Instagram,
  Mail: Mail,
  Whatsapp: FaWhatsapp,
};

const FinalCTA = () => {
  return (
    <section className="finalcta-section-turnover">
      <div className="tnx-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="finalcta-chassis"
        >
          {/* Subtle grid background */}
          <div className="finalcta-grid-bg" />

          {/* Glowing ambient light orbs */}
          <div className="finalcta-glow-orb-1" />
          <div className="finalcta-glow-orb-2" />

          <div className="finalcta-grid-content">
            {/* Left Content Area */}
            <div className="flex flex-col items-start text-left">
              <div className="finalcta-badge-wrap">
                <span className="finalcta-status-badge">
                  <span className="badge-radar-dot" />
                  Next Cohort 2026 • Open Admissions
                </span>
              </div>

              <h2 className="finalcta-heading">
                The future is not something we wait for.{' '}
                <span className="finalcta-highlight">
                  It&apos;s something we build together.
                </span>
              </h2>

              <p className="finalcta-lead">
                Join TechNeekX and be part of an elite ecosystem that designs, builds, and deploys high-impact autonomous AI products, competing at premier national hackathons.
              </p>

              {/* Dual Pathways: Builders vs Partners */}
              <div className="finalcta-pathways w-full">
                {/* Pathway 1: For Builders */}
                <div className="pathway-card">
                  <div>
                    <div className="pathway-tag">For Builders &amp; Hackers</div>
                    <div className="pathway-title">Join The Guild</div>
                    <p className="pathway-desc">
                      Work alongside senior mentors, build AI agents, and join our national hackathon strike teams.
                    </p>
                  </div>
                  <Link href="/join" className="btn-pathway-action primary">
                    <span>Apply to Cohort</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Pathway 2: For Partners & Community */}
                <div className="pathway-card">
                  <div>
                    <div className="pathway-tag">For Studios &amp; Community</div>
                    <div className="pathway-title">WhatsApp Community</div>
                    <p className="pathway-desc">
                      Connect with 2,500+ builders, join tech talks, and explore co-building opportunities.
                    </p>
                  </div>
                  <a
                    href="https://chat.whatsapp.com/KOlhO8eb4aHHD5iJkJneV0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pathway-action secondary"
                  >
                    <FaWhatsapp size={14} className="text-[#25D366]" />
                    <span>Join WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Social Connectivity Row */}
              <div className="finalcta-social-bar">
                <span className="finalcta-social-label">Connect:</span>
                {data.socialLinks.map((social, idx) => {
                  const IconComponent = iconMap[social.icon];
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="finalcta-social-icon"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {IconComponent && <IconComponent size={16} />}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Right Side: High-Tech Emblem Showcase */}
            <div className="finalcta-emblem-showcase">
              <div className="finalcta-emblem-box">
                {/* Orbital Ring */}
                <div className="emblem-orbit-ring" />

                <Image
                  src="/logo.webp"
                  alt="TechNeekX Emblem"
                  width={150}
                  height={150}
                  className="object-contain drop-shadow-[0_10px_20px_rgba(0,98,255,0.4)]"
                />

                {/* Floating Status Pill */}
                <div className="emblem-pill-floating">
                  <ShieldCheck size={14} className="text-[#00D2FF]" />
                  <span>Verified AI Product Studio</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
