'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import '@/styles/GalleryPage.css';

type GalleryImage = {
  src: string;
  caption: string;
  featured?: boolean;
};

const galleryImages: GalleryImage[] = [
  { src: '/gallery/main.png', caption: 'Highlights from TechNeekX', featured: true },
  { src: '/gallery/IMG_0150.JPG.jpeg', caption: 'Late-night building energy', featured: true },
  { src: '/gallery/IMG_0143.JPG.jpeg', caption: 'First hackathon smiles' },
  { src: '/gallery/IMG_0144.JPG.jpeg', caption: 'Live debugging on stage' },
  { src: '/gallery/image1.png', caption: 'Community deep-dives' },
  { src: '/gallery/image2.png', caption: 'Product design sketches' },
  { src: '/gallery/gal5.jpeg', caption: 'Brainstorm wall' },
  { src: '/gallery/IMG-2.jpg.jpeg', caption: 'Celebrating the ship', featured: true },
  { src: '/gallery/judge.jpeg', caption: 'Judging the finalist demos' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 3.43.28 PM.jpeg', caption: 'Core team sync before stage' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 3.43.29 PM.jpeg', caption: 'Backstage checklist' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.51 PM.jpeg', caption: 'Crowd settling in' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.52 PM.jpeg', caption: 'Session kick-off energy' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.55 PM (1).jpeg', caption: 'Mentors on the floor' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.55 PM.jpeg', caption: 'Builders presenting' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.56 PM (1).jpeg', caption: 'Live feedback moments' },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 6.42.56 PM.jpeg', caption: 'Evening wrap-up applause' },
  { src: '/gallery/IMG_0683.JPG.jpeg', caption: 'Team collaboration moment' },
  { src: '/gallery/IMG_0697.JPG.jpeg', caption: 'Award ceremony highlights', featured: true },
  { src: '/gallery/WhatsApp Image 2026-04-06 at 8.37.27 PM.jpeg', caption: 'Evening setup preparation' },
  { src: '/gallery/WhatsApp Image 2026-04-09 at 8.19.57 PM.jpeg', caption: 'Community gathering' },
  { src: '/gallery/WhatsApp Image 2026-04-09 at 8.20.03 PM.jpeg', caption: 'Team celebration' },
  { src: '/gallery/WhatsApp Image 2026-04-09 at 8.20.07 PM.jpeg', caption: 'Presentation in progress' },
  { src: '/gallery/WhatsApp Image 2026-04-09 at 8.20.09 PM.jpeg', caption: 'Audience engagement' },
  { src: '/gallery/WhatsApp Image 2026-04-09 at 8.43.18 PM.jpeg', caption: 'Networking session' },
  { src: '/gallery/WhatsApp Image 2026-04-09 at 8.43.50 PM.jpeg', caption: 'Event wrap-up moments' },
];

// Scroll Progress Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div 
      className="scroll-progress" 
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default function GalleryPage() {
  const router = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  if (!isMounted) {
    return (
      <div className="gallery-page-container">
        <div className="gallery-page-content-wrapper">
          <div className="gallery-page-header">
            <span className="gallery-page-badge">MEMORIES</span>
            <h1 className="gallery-page-title">TechNeekX Gallery</h1>
            <p className="gallery-page-description">Loading gallery...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="gallery-page"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="gallery-page-container"
      >
        <ScrollProgress />
        <Loader />
        <Navbar />

        <div className="gallery-page-content-wrapper">
          {/* Back to Home Link */}
          <motion.button 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-8 bg-transparent border-none cursor-pointer"
          >
            <ChevronLeft size={16} />
            Back to Home
          </motion.button>

          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="gallery-page-header"
          >
            <span className="gallery-page-badge">Moments</span>
            <h1 className="gallery-page-title">Our Gallery</h1>
            <p className="gallery-page-description">
              A comprehensive visual timeline of our builders culture. Late-night sprints, intense hackathons, stage presentations, and community celebrations.
            </p>
          </motion.div>

          {/* Collage (Masonry Style columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-6 space-y-3 sm:space-y-6 py-6 pb-12"
          >
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100/60 bg-white"
              >
                <img 
                  src={image.src} 
                  alt={image.caption}
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                
                {/* Overlay Caption on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-2xl">
                  <p className="text-white text-xs font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <Footer />

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="gallery-lightbox-overlay"
              onClick={() => setSelectedImageIndex(null)}
            >
              {/* Close Button */}
              <button 
                className="gallery-lightbox-close-btn"
                onClick={() => setSelectedImageIndex(null)}
              >
                <X size={16} />
                <span>Close</span>
              </button>

              {/* Navigation Left */}
              <button 
                className="gallery-lightbox-nav-btn left"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                <ArrowLeft size={20} />
              </button>

              {/* Image Container */}
              <div 
                className="gallery-lightbox-img-container"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={galleryImages[selectedImageIndex].src} 
                  alt={galleryImages[selectedImageIndex].caption}
                  className="gallery-lightbox-img"
                />
              </div>

              {/* Navigation Right */}
              <button 
                className="gallery-lightbox-nav-btn right"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ArrowRight size={20} />
              </button>

              {/* Caption & Counter */}
              <div 
                className="flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="gallery-lightbox-caption">
                  {galleryImages[selectedImageIndex].caption}
                </p>
                <span className="gallery-lightbox-counter">
                  {selectedImageIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>
    </AnimatePresence>
  );
}
