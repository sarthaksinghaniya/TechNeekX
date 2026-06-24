'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react';

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

const Gallery = () => {
  const orderedImages = useMemo(() => galleryImages, []);
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Screen size detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % orderedImages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying, orderedImages.length]);

  const goNext = () => {
    setActive((prev) => (prev + 1) % orderedImages.length);
  };

  const goPrev = () => {
    setActive((prev) => (prev - 1 + orderedImages.length) % orderedImages.length);
  };

  // Card dimensions: 300px width + 24px gap = 324px step
  const cardStep = isMobile ? 290 : 324;

  return (
    <section className="py-20 relative overflow-hidden bg-[#f9fafb] border-t border-slate-100">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="gradient-blob w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 top-10 right-10"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="gradient-blob w-[350px] h-[350px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 bottom-10 left-10"
          animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Column: Heading and Info (2/5 size) */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              <Camera className="w-8 h-8 text-white" />
            </motion.div>
            
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight heading-premium">
                📸 Inside <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">TechNeekX</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md">
                A glimpse into our builder culture. Late-night sprints, intense hackathons, and community meetups where we build, deploy, and ship the future of AI.
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={goPrev}
                  className="w-12 h-12 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-all hover:bg-slate-50"
                  aria-label="Previous Slide"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goNext}
                  className="w-12 h-12 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-all hover:bg-slate-50"
                  aria-label="Next Slide"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-all hover:bg-slate-50"
                  aria-label={isPlaying ? "Pause Autoplay" : "Start Autoplay"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
              </div>

              {/* Progress Tracker */}
              <div className="text-sm font-semibold tracking-wider text-slate-500">
                <span className="text-purple-600 font-bold text-lg">{String(active + 1).padStart(2, '0')}</span>
                <span className="mx-1">/</span>
                <span>{String(orderedImages.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sliding Grid of Images (3/5 size) */}
          <div className="lg:col-span-3 overflow-hidden relative">
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#f9fafb] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#f9fafb] to-transparent z-10 pointer-events-none" />

            <div className="w-full py-4 overflow-hidden" ref={sliderRef}>
              <motion.div
                className="flex gap-6"
                animate={{ x: -active * cardStep }}
                transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                style={{ width: `${orderedImages.length * cardStep}px` }}
              >
                {orderedImages.map((image, index) => {
                  const isActive = index === active;
                  return (
                    <div
                      key={image.src + index}
                      className={`relative shrink-0 rounded-3xl overflow-hidden border transition-all duration-500 select-none bg-white ${
                        isActive
                          ? 'border-purple-500/40 shadow-[0_15px_40px_rgba(168,85,247,0.15)] scale-[1.02]'
                          : 'border-slate-200/60 opacity-60 scale-95 hover:opacity-80'
                      }`}
                      style={{
                        width: `${isMobile ? 266 : 300}px`,
                        height: `${isMobile ? 332 : 375}px`
                      }}
                    >
                      {/* Image */}
                      <Image
                        src={image.src}
                        alt={image.caption}
                        fill
                        sizes="300px"
                        className="object-cover pointer-events-none"
                        priority={index === 0}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent z-10 pointer-events-none" />
                      
                      {/* Caption wrapped in .dark so text remains white */}
                      <div className="dark absolute bottom-0 left-0 right-0 p-5 z-20">
                        <p className="text-white text-sm sm:text-base font-bold leading-snug drop-shadow-md">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
