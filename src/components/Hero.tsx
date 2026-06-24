'use client';

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FORM_CONFIG } from '@/config/teamForms';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const router = useRouter();
  
  // Parallax effects
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 50]));
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, reduceMotion ? 1 : 0]));
  
  // Cursor parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      if (reduceMotion) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x: (x - 0.5) * 20, y: (y - 0.5) * 20 });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

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
    hidden: { opacity: 0, y: 40 },
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
    <section ref={heroRef} className="relative overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,141,0.05),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(124,58,237,0.06),transparent_32%),radial-gradient(circle_at_50%_70%,rgba(15,23,42,0.04),transparent_45%)]" />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-md mx-auto px-4 py-12 sm:py-16 flex flex-col items-center text-center"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex items-center justify-center mb-3" variants={itemVariants}>
          <Sparkles className="w-6 h-6 text-[var(--accent-primary)] mr-2" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            India’s Builder Operating System
          </p>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight"
        >
          Ship faster, win hackathons, and launch with TechNeekX.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-3 text-sm text-slate-600 leading-relaxed"
        >
          A student-led network giving you the playbook, partners, and community to turn ideas into launch-ready products in weeks—not months.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push('/join')}
          className="w-full mt-5 py-3 rounded-xl bg-[var(--accent-primary)] text-white font-semibold shadow-[0_12px_28px_rgba(255,77,141,0.28)]"
        >
          Start your TechNeekX journey
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
