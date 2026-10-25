'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRouter } from 'next/navigation';
import * as LucideIcons from 'lucide-react';
import { journey } from '@/constants/journey';
import '../styles/RealJourney.css';

const RealJourney = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const [pathD, setPathD] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Track scroll progress across the journey container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 65%']
  });

  // Smooth out the scroll progress for connector animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Dynamically compute the curved Bézier path between consecutive cards
  const updateConnector = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    setSvgDimensions({ width, height });

    const mobileCheck = window.innerWidth <= 768;
    setIsMobile(mobileCheck);

    const points: { x: number; y: number }[] = [];

    cardRefs.current.forEach((cardEl) => {
      if (!cardEl) return;
      const row = cardEl.parentElement;
      const rowTop = row ? row.offsetTop : 0;
      const cardLeft = cardEl.offsetLeft;
      const cardWidth = cardEl.offsetWidth;

      // Anchor calculation: on mobile aligns with pin at 36px; on desktop centers on the card
      const anchorX = mobileCheck ? cardLeft + 36 : cardLeft + cardWidth / 2;
      const anchorY = rowTop; // Top edge where the pin is located

      points.push({ x: anchorX, y: anchorY });
    });

    if (points.length < 2) {
      setPathD('');
      return;
    }

    // Build the cubic Bézier S-curves
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;

      // Cubic Bézier curve between p1 and p2:
      // Control points create a smooth, continuous S-curve flow alternating between cards
      const cp1x = p1.x + dx * 0.5;
      const cp1y = p1.y + dy * 0.15;
      const cp2x = p1.x + dx * 0.5;
      const cp2y = p2.y - dy * 0.15;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }

    setPathD(d);
  }, []);

  // Update path on mount, resize, and layout settlement
  useEffect(() => {
    updateConnector();

    const timer = setTimeout(updateConnector, 150);

    const container = containerRef.current;
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && container) {
      resizeObserver = new ResizeObserver(() => {
        updateConnector();
      });
      resizeObserver.observe(container);
    }

    window.addEventListener('resize', updateConnector);
    return () => {
      clearTimeout(timer);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', updateConnector);
    };
  }, [updateConnector]);

  const rowVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: ({ isCardRight, isMobile }: { isCardRight: boolean; isMobile: boolean }) => ({
      opacity: 0,
      x: isMobile ? 25 : isCardRight ? 50 : -50
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Helper to construct CSS linear-gradient background from Tailwind "from-X to-Y" classes
  const getGradientStyle = (gradientString: string) => {
    if (!gradientString) return { background: 'linear-gradient(135deg, #7c3aed, #ff0080)' };
    const parts = gradientString.split(' ');
    const fromClass = parts.find(p => p.startsWith('from-'))?.replace('from-', '') || 'purple-500';
    const toClass = parts.find(p => p.startsWith('to-'))?.replace('to-', '') || 'pink-500';

    const colorMap: Record<string, string> = {
      'indigo-500': '#6366f1',
      'purple-500': '#7c3aed',
      'pink-500': '#ff0080',
      'red-500': '#ef4444',
      'blue-500': '#0062ff',
      'cyan-500': '#06b6d4',
      'green-500': '#22c55e',
      'emerald-500': '#10b981',
      'teal-500': '#14b8a6',
      'orange-500': '#f97316',
      'violet-500': '#8b5cf6',
      'rose-500': '#f43f5e',
      'yellow-500': '#eab308'
    };

    const fromColor = colorMap[fromClass] || '#7c3aed';
    const toColor = colorMap[toClass] || '#ff0080';

    return {
      background: `linear-gradient(135deg, ${fromColor}, ${toColor})`
    };
  };

  return (
    <section className="real-journey-section">
      {/* Background decoration blur blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="real-journey-container">
        {/* Back to Home Link */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-8 bg-transparent border-none cursor-pointer"
        >
          <LucideIcons.ChevronLeft size={16} />
          Back to Home
        </motion.button>

        {/* Premium Header matching Homepage Design System */}
        <div className="text-center mb-16">
          <span className="tnx-section-label">
            OUR <span style={{ textTransform: 'none' }}>TechNeekX</span> JOURNEY
          </span>
          <h1 className="tnx-main-heading mx-auto">
            Our Journey
          </h1>
          <p className="tnx-body-text mx-auto text-center">
            Consistently shipping, hacking, and building since 28th August 2025.
            Every milestone in our path is backed by execution, learning, and collaboration.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="real-timeline-wrapper" ref={containerRef}>
          {/* Flowing Curved Connecting Path (behind cards, z-index: 1) */}
          <svg
            className="real-journey-svg-connector"
            width={svgDimensions.width || '100%'}
            height={svgDimensions.height || '100%'}
            viewBox={`0 0 ${svgDimensions.width || 800} ${svgDimensions.height || 1200}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ff0080" />
              </linearGradient>
            </defs>

            {/* Subtle dashed background guide path */}
            {pathD && (
              <path
                d={pathD}
                stroke="rgba(124, 58, 237, 0.2)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
                fill="none"
              />
            )}

            {/* Scroll-driven illuminated gradient dashed progress path */}
            {pathD && (
              <motion.path
                d={pathD}
                stroke="url(#journeyGradient)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
                fill="none"
                style={{ pathLength: smoothProgress }}
              />
            )}
          </svg>

          {/* Timeline Items */}
          <div className="real-timeline-items">
            {journey.map((milestone, idx) => {
              const IconComponent = milestone.icon;

              // Alternating Card Arrangement:
              // Card 1 (idx 0): Left side
              // Card 2 (idx 1): Right side
              // Card 3 (idx 2): Left side
              // Card 4 (idx 3): Right side...
              const isCardLeft = idx % 2 === 0;
              const isCardRight = !isCardLeft;

              return (
                <motion.div
                  key={idx}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: isMobile ? 0.15 : 0.3 }}
                  className={`real-milestone-row ${isCardRight ? 'align-right' : 'align-left'}`}
                >
                  {/* Milestone Card */}
                  <motion.div
                    ref={(el) => { cardRefs.current[idx] = el; }}
                    variants={cardVariants}
                    custom={{ isCardRight, isMobile }}
                    className="real-card"
                  >
                    {/* Top Center Pin / Milestone Node */}
                    <div className={`real-card-pin ${milestone.status}`}>
                      <div className="real-card-pin-inner" />
                    </div>

                    {/* Content */}
                    <div className="real-card-content">
                      {/* Date Header matching reference step style */}
                      <div className="real-card-date-badge">
                        <span className="real-card-date">
                          {milestone.date}
                        </span>
                      </div>

                      <div className="real-card-header">
                        <div className="real-card-title-group">
                          <div className="real-card-icon-box" style={getGradientStyle(milestone.gradient)}>
                            <IconComponent size={16} className="text-white" />
                          </div>
                          <h4 className="real-card-title">{milestone.title}</h4>
                        </div>
                      </div>

                      <p className="real-card-description">
                        {milestone.description}
                      </p>

                      <div className="flex items-center gap-3 mt-4">
                        <span className={`real-status-badge ${milestone.status}`}>
                          {milestone.status === 'now' ? 'In Progress' : 'Completed'}
                        </span>

                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/5 border border-purple-500/10 text-purple-600 text-[10px] font-semibold">
                          <LucideIcons.Zap size={10} />
                          <span>{milestone.impact}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-block bg-white/50 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto border border-slate-200/60 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              JOURNEY IN PROGRESS
            </h3>
            <p className="text-slate-600">
              Every milestone is backed by real execution, learning, and consistency.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default RealJourney;
