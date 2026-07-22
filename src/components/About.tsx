'use client';

import { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
// Let's use clean imports
import data from '../constants/data.json';
import Image from 'next/image';
import '../styles/About.css';

const MotionImage = m.create(Image);

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
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    if (target === 0) return;

    let rafId: number;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
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
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.20,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 1,
      ease: [0.22, 1, 0.36, 1], // easeOutQuart
    },
  },
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
          const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
          const next = [...prev];
          next[blockToUpdate] = randomIndex;
          return next;
        });
      }, 3000);
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
    <m.div
      ref={wrapperRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="about-mosaic-wrapper"
    >
      <div className="about-photo-layout">
        {/* Photo 1: Left/Middle */}
        <m.div
          variants={cardVariants}
          className="about-photo-card about-photo-card-1"
        >
          <AnimatePresence mode="wait">
            <MotionImage
              key={activeIndices[0]}
              src={images[activeIndices[0]].src}
              alt={images[activeIndices[0]].title}
              fill
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="about-photo-img object-cover"
            />
          </AnimatePresence>
        </m.div>

        {/* Photo 2: Top Right */}
        <m.div
          variants={cardVariants}
          className="about-photo-card about-photo-card-2"
        >
          <AnimatePresence mode="wait">
            <MotionImage
              key={activeIndices[1]}
              src={images[activeIndices[1]].src}
              alt={images[activeIndices[1]].title}
              fill
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="about-photo-img object-cover"
            />
          </AnimatePresence>
        </m.div>

        {/* Photo 3: Bottom Center */}
        <m.div
          variants={cardVariants}
          className="about-photo-card about-photo-card-3"
        >
          <AnimatePresence mode="wait">
            <MotionImage
              key={activeIndices[2]}
              src={images[activeIndices[2]].src}
              alt={images[activeIndices[2]].title}
              fill
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="about-photo-img object-cover"
            />
          </AnimatePresence>
        </m.div>

        {/* Photo 4: Small Middle-Right */}
        <m.div
          variants={cardVariants}
          className="about-photo-card about-photo-card-4"
        >
          <AnimatePresence mode="wait">
            <MotionImage
              key={activeIndices[3]}
              src={images[activeIndices[3]].src}
              alt={images[activeIndices[3]].title}
              fill
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="about-photo-img object-cover"
            />
          </AnimatePresence>
        </m.div>
      </div>
    </m.div>
  );
};

const About = () => {
  const images = data.carouselImages;

  return (
    <section id="about" className="tnx-section-alt">
      {/* Background blur blobs */}
      <div className="about-bg-blob about-blob-1" />
      <div className="about-bg-blob about-blob-2" />

      <div className="tnx-container">
        <div className="tnx-grid-layout-swapped">

          {/* Left Column: Overlapping 4-Photo Layout */}
          <AboutMosaic images={images} />

          {/* Right Column: Intro & Stats */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-content"
          >
            <div className="about-watermark">
              <Image src="/about/tnx-wings.webp" alt="Watermark" width={500} height={500} />
            </div>

            <span className="tnx-section-label">
              ABOUT <span style={{ textTransform: 'none' }}>TechNeekX</span>
            </span>
            <h2 className="tnx-main-heading">{data.aboutTitle}</h2>

            <p className="tnx-body-text" style={{ marginBottom: '32px' }}>
              {data.aboutDescription1} <br /><br />
              {data.aboutDescription2}
            </p>

            <div className="about-stats-grid">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="about-stat-card">
                  <span className="tnx-stat-number">
                    <StatCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="tnx-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default About;
