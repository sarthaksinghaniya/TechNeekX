'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  suffix?: string;
  className?: string;
}

const AnimatedCounter = ({ from, to, suffix = "", className = "" }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { 
    stiffness: 100, 
    damping: 30
  });
  
  const displayValue = useTransform(springValue, (value) => Math.round(value));

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, to, motionValue]);

  return (
    <span ref={ref} className={`font-bold text-gradient ${className}`}>
      <motion.span>{displayValue}</motion.span>{suffix}
    </span>
  );
};

export default AnimatedCounter;
