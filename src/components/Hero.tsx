'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import '../styles/Hero.css';

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
        src="/hero/download.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero/main.jpeg"
      />
      <div className="hero-overlay" />
      
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-text-col">
          <motion.div className="hero-subtitle" variants={itemVariants}>
            We build the future
          </motion.div>

          <motion.h2 className="hero-heading" variants={itemVariants}>
            Empowering Innovators.<br />
            Building <span className="hero-text-gradient">Tomorrow.</span>
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            TechNeekX is a student-driven community where curious minds come together to learn, build, and create impact through technology.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/join')}
              className="hero-btn-primary"
            >
              <span>Join TechNeekX</span>
              <ArrowRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const target = document.getElementById('projects-showcase');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="hero-btn-secondary"
            >
              Explore Our Work
            </motion.button>
          </motion.div>

          <motion.div className="hero-scroll-indicator" variants={itemVariants}>
            <div className="hero-mouse">
              <div className="hero-mouse-wheel" />
            </div>
            <span>SCROLL DOWN</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
