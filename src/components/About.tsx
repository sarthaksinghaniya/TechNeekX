'use client';

import { useState, useEffect, useRef } from 'react';
import { motion as motionImport, AnimatePresence as AnimatePresenceImport } from 'framer-motion';
// Let's use clean imports
import data from '../constants/data.json';
import '../styles/About.css';
import PartnersMarquee from './PartnersMarquee';

// Reusable animated count component using IntersectionObserver
interface StatCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const StatCounter = ({ target, duration = 2000, suffix = "" }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = target;
          if (start === end) return;

          const totalMs = duration;
          const stepTime = 16; // ~60fps
          const steps = Math.ceil(totalMs / stepTime);

          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            
            // Easing function: easeOutQuart
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const nextValue = Math.floor(end * easeOutQuart);
            
            if (currentStep >= steps) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(nextValue);
            }
          }, stepTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration, hasAnimated]);

  return (
    <span ref={elementRef} className="about-stat-value">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const About = () => {
  const images = data.carouselImages;

  // Initialize block indices to unique starting points [0, 1, 2, 3, 4]
  const [activeIndices, setActiveIndices] = useState<number[]>([0, 1, 2, 3, 4]);
  const activeBlockRef = useRef(0);

  // Staggered image rotation loop
  useEffect(() => {
    const interval = setInterval(() => {
      const blockToUpdate = activeBlockRef.current;
      activeBlockRef.current = (activeBlockRef.current + 1) % 5;

      setActiveIndices((prev) => {
        // Collect indices currently in use by the OTHER 4 blocks
        const otherIndices = prev.filter((_, idx) => idx !== blockToUpdate);
        
        // Find all indices from the 10-image pool that are NOT in use
        // and also not the current index of the block itself (to guarantee a change)
        const availableIndices = [];
        for (let i = 0; i < images.length; i++) {
          if (!otherIndices.includes(i) && i !== prev[blockToUpdate]) {
            availableIndices.push(i);
          }
        }
        
        // Pick a random available index
        const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        
        const next = [...prev];
        next[blockToUpdate] = randomIndex;
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="about-section">
      {/* Background blur blobs */}
      <div className="about-bg-blob about-blob-1" />
      <div className="about-bg-blob about-blob-2" />

      <div className="about-container">
        <div className="about-grid">
          {/* Left Column: Intro & Stats */}
          <motionImport.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-content"
          >
            <div className="about-watermark">
              <img src="/about/tnx-wings.png" alt="Watermark" />
            </div>
            <span className="about-subtitle">{data.aboutSubtitle}</span>
            <h2 className="about-title">{data.aboutTitle}</h2>
            <div className="about-title-line" />
            
            <p className="about-description">
              {data.aboutDescription1} <br /><br />
              {data.aboutDescription2}
            </p>

            <div className="about-stats-grid">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="about-stat-card">
                  <StatCounter target={stat.value} suffix={stat.suffix} />
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motionImport.div>

          {/* Right Column: Asymmetric 5-Block Image Grid */}
          <motionImport.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="about-mosaic-wrapper"
          >
            <div className="about-mosaic-grid">
              {/* Column 1: Left */}
              <div className="about-mosaic-col">
                <div className="about-mosaic-card about-card-small">
                  <AnimatePresenceImport mode="wait">
                    <motionImport.img
                      key={activeIndices[0]}
                      src={images[activeIndices[0]].src}
                      alt={images[activeIndices[0]].title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="about-mosaic-image"
                    />
                  </AnimatePresenceImport>
                </div>
                <div className="about-mosaic-card about-card-small">
                  <AnimatePresenceImport mode="wait">
                    <motionImport.img
                      key={activeIndices[1]}
                      src={images[activeIndices[1]].src}
                      alt={images[activeIndices[1]].title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="about-mosaic-image"
                    />
                  </AnimatePresenceImport>
                </div>
              </div>

              {/* Column 2: Center */}
              <div className="about-mosaic-col">
                <div className="about-mosaic-card about-card-large">
                  <AnimatePresenceImport mode="wait">
                    <motionImport.img
                      key={activeIndices[2]}
                      src={images[activeIndices[2]].src}
                      alt={images[activeIndices[2]].title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="about-mosaic-image"
                    />
                  </AnimatePresenceImport>
                </div>
              </div>

              {/* Column 3: Right */}
              <div className="about-mosaic-col">
                <div className="about-mosaic-card about-card-small">
                  <AnimatePresenceImport mode="wait">
                    <motionImport.img
                      key={activeIndices[3]}
                      src={images[activeIndices[3]].src}
                      alt={images[activeIndices[3]].title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="about-mosaic-image"
                    />
                  </AnimatePresenceImport>
                </div>
                <div className="about-mosaic-card about-card-small">
                  <AnimatePresenceImport mode="wait">
                    <motionImport.img
                      key={activeIndices[4]}
                      src={images[activeIndices[4]].src}
                      alt={images[activeIndices[4]].title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="about-mosaic-image"
                    />
                  </AnimatePresenceImport>
                </div>
              </div>
            </div>
          </motionImport.div>
        </div>
      </div>
      <PartnersMarquee />
    </section>
  );
};

export default About;
