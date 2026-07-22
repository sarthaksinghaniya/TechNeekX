'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import '../styles/Gallery.css';

type GalleryImage = {
  src: string;
  caption: string;
  featured?: boolean;
};

const galleryImages: GalleryImage[] = [
  { src: '/gallery/main.webp', caption: 'Highlights from TechNeekX', featured: true },
  { src: '/gallery/IMG_0150.JPG.webp', caption: 'Late-night building energy', featured: true },
  { src: '/gallery/IMG_0143.JPG.webp', caption: 'First hackathon smiles' },
  { src: '/gallery/IMG_0144.JPG.webp', caption: 'Live debugging on stage' },
  { src: '/gallery/image1.webp', caption: 'Community deep-dives' },
  { src: '/gallery/image2.webp', caption: 'Product design sketches' },
  { src: '/gallery/gal5.webp', caption: 'Brainstorm wall' },
  { src: '/gallery/IMG-2.jpg.webp', caption: 'Celebrating the ship', featured: true },
  { src: '/gallery/judge.webp', caption: 'Judging the finalist demos' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 3.43.28 PM.webp', caption: 'Core team sync before stage' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 3.43.29 PM.webp', caption: 'Backstage checklist' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.51 PM.webp', caption: 'Crowd settling in' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.52 PM.webp', caption: 'Session kick-off energy' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.55 PM (1).webp', caption: 'Mentors on the floor' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.55 PM.webp', caption: 'Builders presenting' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.56 PM (1).webp', caption: 'Live feedback moments' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.56 PM.webp', caption: 'Evening wrap-up applause' },
  { src: '/gallery/IMG_0683.JPG.webp', caption: 'Team collaboration moment' },
  { src: '/gallery/IMG_0697.JPG.webp', caption: 'Award ceremony highlights', featured: true },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 8.37.27 PM.webp', caption: 'Evening setup preparation' },
  { src: '/gallery/WhatsApp Image 2026-04-09 at 8.19.57 PM.webp', caption: 'Community gathering' },
  { src: '/gallery/WhatsApp Image 2026-04-09 at 8.20.03 PM.webp', caption: 'Team celebration' },
  { src: '/gallery/WhatsApp Image 2026-04-09 at 8.20.07 PM.webp', caption: 'Presentation in progress' },
  { src: '/gallery/WhatsApp Image 2026-04-09 at 8.20.09 PM.webp', caption: 'Audience engagement' },
  { src: '/gallery/WhatsApp Image 2026-04-09 at 8.43.18 PM.webp', caption: 'Networking session' },
  { src: '/gallery/WhatsApp Image 2026-04-09 at 8.43.50 PM.webp', caption: 'Event wrap-up moments' },
];

const Gallery = () => {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  // Screen size detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitial(false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const goNext = () => {
    setActive((prev) => (prev + 1) % galleryImages.length);
  };

  const goPrev = () => {
    setActive((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Helper to calculate circular shortest distance to center card
  const getRelativeOffset = (index: number) => {
    const length = galleryImages.length;
    let diff = index - active;
    while (diff > length / 2) diff -= length;
    while (diff < -length / 2) diff += length;
    return diff;
  };

  const handleCardClick = (index: number) => {
    const offset = getRelativeOffset(index);
    if (offset !== 0) {
      setActive(index);
    }
  };



  return (
    <section id="gallery" className="gallery-section">
      {/* Background decoration blur blobs */}
      <div className="gallery-bg-blob gallery-blob-1" />
      <div className="gallery-bg-blob gallery-blob-2" />

      <div className="gallery-container">
        <div className="gallery-grid">
          {/* Left Column: Heading and Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="gallery-left"
          >
            <span className="gallery-subtitle">Our memorable moments</span>
            <h2 className="gallery-title">Have a Peek</h2>
            <p className="gallery-description">
              A glimpse into our builder culture. Late-night sprints, intense hackathons, and community meetups where we build, deploy, and ship the future of AI.
            </p>
            <Link 
              href="/gallery" 
              className="gallery-cta"
            >
              <span>View Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right Column: 3D Coverflow Carousel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="gallery-right"
          >
            <motion.div
              className="gallery-carousel-wrapper"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(event, info) => {
                const swipeThreshold = 50;
                if (info.offset.x < -swipeThreshold) {
                  goNext();
                } else if (info.offset.x > swipeThreshold) {
                  goPrev();
                }
              }}
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              {galleryImages.map((image, index) => {
                const offset = getRelativeOffset(index);
                const absOffset = Math.abs(offset);
                
                // Only render or show elements within 2 steps from center
                const isVisible = absOffset <= 2;
                if (!isVisible) return null;

                // Dynamic 3D calculations for Coverflow positioning
                let xValue = 0;
                let zValue = 0;
                let rotateYValue = 0;
                let scaleValue = 0.7;

                if (offset === 0) {
                  xValue = 0;
                  zValue = 50;
                  rotateYValue = 0;
                  scaleValue = 1;
                } else if (offset === -1) {
                  xValue = isMobile ? -75 : -140;
                  zValue = -80;
                  rotateYValue = 35;
                  scaleValue = 0.85;
                } else if (offset === 1) {
                  xValue = isMobile ? 75 : 140;
                  zValue = -80;
                  rotateYValue = -35;
                  scaleValue = 0.85;
                } else if (offset === -2) {
                  xValue = isMobile ? -140 : -250;
                  zValue = -160;
                  rotateYValue = 45;
                  scaleValue = 0.7;
                } else if (offset === 2) {
                  xValue = isMobile ? 140 : 250;
                  zValue = -160;
                  rotateYValue = -45;
                  scaleValue = 0.7;
                }

                return (
                  <motion.div
                    key={index}
                    className={`gallery-carousel-card ${offset === 0 ? 'active' : ''}`}
                    onClick={() => handleCardClick(index)}
                    style={{
                      zIndex: 10 - absOffset,
                      pointerEvents: isVisible ? 'auto' : 'none',
                    }}
                    animate={{
                      x: xValue,
                      z: zValue,
                      rotateY: rotateYValue,
                      scale: scaleValue,
                    }}
                    transition={
                      isInitial
                        ? { duration: 0 }
                        : {
                            type: 'spring',
                            stiffness: 300,
                            damping: 28,
                          }
                    }
                  >
                    <div className="gallery-image-container">
                      <Image
                        src={image.src}
                        alt={image.caption}
                        fill
                        sizes="(max-width: 640px) 200px, 300px"
                        className="gallery-img"
                        priority={absOffset === 0}
                      />
                      <div className="gallery-overlay" />
                    </div>
                    {offset === 0 && (
                      <div className="gallery-caption-wrapper">
                        <p className="gallery-caption">{image.caption}</p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Gallery;
