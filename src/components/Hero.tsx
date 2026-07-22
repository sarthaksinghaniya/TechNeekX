'use client';

import { m } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import data from '../constants/data.json';
import '../styles/Hero.css';
import { openTeamForm } from '@/config/teamForms';

const iconMap: { [key: string]: any } = {
  Github: Github,
  Linkedin: Linkedin,
  Instagram: Instagram,
  Mail: Mail,
  Whatsapp: FaWhatsapp
};

const Hero = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="hero-frame">
      <video
        className="hero-video"
        src="/hero/hero-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero/main.webp"
        preload="metadata"
      />
      <div className="hero-overlay" />

      <m.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-text-col">
          <m.div className="hero-subtitle" variants={itemVariants}>
            We build the future
          </m.div>

          <m.h2 className="hero-heading" variants={itemVariants}>
            Empowering Innovators.<br />
            Building <span className="hero-text-gradient">Tomorrow.</span>
          </m.h2>

          <m.p className="hero-description" variants={itemVariants}>
            TechNeekX is a student-driven community where curious minds come together to learn, build, and create impact through technology.
          </m.p>

          <m.div className="hero-buttons" variants={itemVariants}>
            <m.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/join')}
              className="hero-btn-primary"
            >
              <span>Join TechNeekX</span>
              <ArrowRight size={16} />
            </m.button>

            <m.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openTeamForm('partner')}
              className="hero-btn-secondary"
            >
              PARTNER WITH US
            </m.button>
          </m.div>

          <m.div className="hero-socials" variants={itemVariants}>
            {data.socialLinks.map((social, idx) => {
              const IconComponent = iconMap[social.icon];
              return (
                <m.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {IconComponent && <IconComponent size={20} />}
                </m.a>
              );
            })}
          </m.div>

          <m.div className="hero-scroll-indicator" variants={itemVariants}>
            <div className="hero-mouse">
              <div className="hero-mouse-wheel" />
            </div>
            <span>SCROLL DOWN</span>
          </m.div>
        </div>
      </m.div>
    </div>
  );
};

export default Hero;
