'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../constants/data.json';
import Image from 'next/image';
import '../styles/About.css';

const MotionImage = motion(Image);

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
    <span ref={elementRef} className="about-stat-value">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const AboutMosaic = ({ images }: { images: typeof data.carouselImages }) => {
  const [activeIndices, setActiveIndices] = useState<number[]>([0, 1, 2, 3]);
  const activeBlockRef = useRef(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let intervalId: NodeJS.Timeout;

    const startTimer = () => {
      intervalId = setInterval(() => {
        const blockToUpdate = activeBlockRef.current;
        activeBlockRef.current = (activeBlockRef.current + 1) % 4;

        setActiveIndices((prev) => {
          const otherIndices = prev.filter((_, idx) => idx !== blockToUpdate);
          const availableIndices = [];
          for (let i = 0; i < images.length; i++) {
            if (!otherIndices.includes(i) && i !== prev[blockToUpdate]) {
              availableIndices.push(i);
            }
          }
          if (availableIndices.length === 0) return prev;
          const randomIndex =
            availableIndices[Math.floor(Math.random() * availableIndices.length)];
          const next = [...prev];
          next[blockToUpdate] = randomIndex;
          return next;
        });
      }, 3500);
    };

    const stopTimer = () => {
      clearInterval(intervalId);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    if (!document.hidden) {
      startTimer();
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopTimer();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isInView, images.length]);

  return (
    <div ref={wrapperRef} className="about-mosaic-wrapper">
      <div className="about-photo-layout">
        <div className="about-photo-card about-photo-card-1">
          <AnimatePresence mode="wait">
            <MotionImage
              key={activeIndices[0]}
              src={images[activeIndices[0]].src}
              alt={images[activeIndices[0]].title}
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="about-photo-img"
            />
          </AnimatePresence>
        </div>

        <div className="about-photo-card about-photo-card-2">
          <AnimatePresence mode="wait">
            <MotionImage
              key={activeIndices[1]}
              src={images[activeIndices[1]].src}
              alt={images[activeIndices[1]].title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="about-photo-img"
            />
          </AnimatePresence>
        </div>

        <div className="about-photo-card about-photo-card-3">
          <AnimatePresence mode="wait">
            <MotionImage
              key={activeIndices[2]}
              src={images[activeIndices[2]].src}
              alt={images[activeIndices[2]].title}
              fill
              sizes="(max-width: 768px) 60vw, 35vw"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="about-photo-img"
            />
          </AnimatePresence>
        </div>

        <div className="about-photo-card about-photo-card-4">
          <AnimatePresence mode="wait">
            <MotionImage
              key={activeIndices[3]}
              src={images[activeIndices[3]].src}
              alt={images[activeIndices[3]].title}
              fill
              sizes="(max-width: 768px) 25vw, 15vw"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="about-photo-img"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const images = data.carouselImages;

  return (
    <section id="about" className="about-section-enterprise">
      <div className="about-container">
        <div className="about-grid-enterprise">
          {/* Left Column: Rotating 4-Photo Mosaic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutMosaic images={images} />
          </motion.div>

          {/* Right Column: Mission & Verified Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-content-col"
          >
            <div className="about-badge-wrap">
              <span className="badge-enterprise">Our Studio &amp; Mission</span>
            </div>

            <h2 className="about-title-main">{data.aboutTitle}</h2>

            <p className="about-description-text">
              {data.aboutDescription1}
              <br />
              <br />
              {data.aboutDescription2}
            </p>

            <div className="about-stats-grid-enterprise">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="about-stat-card-enterprise">
                  <StatCounter target={stat.value} suffix={stat.suffix} />
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
