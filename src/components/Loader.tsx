'use client';

import { m, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <m.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="dark fixed inset-0 z-50 flex items-center justify-center bg-[#030508]"
        >
          <div className="relative">
            {/* Animated subtle tech glow blobs */}
            <m.div
              className="absolute inset-0 w-32 h-32 bg-blue-600/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <m.div
              className="absolute inset-0 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
                delay: 1,
              }}
            />

            {/* Logo container */}
            <m.div
              className="relative z-10 flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Logo */}
              <m.div
                className="w-16 h-16 mb-4 rounded-xl overflow-hidden"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src="/logo.webp"
                  alt="TechNeekX Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  priority
                />
              </m.div>

              {/* Brand name */}
              <m.h1
                className="text-2xl font-bold text-white mb-2"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                  TechNeekX
                </span>
              </m.h1>

              {/* Loading dots */}
              <div className="flex space-x-2">
                {[0, 1, 2].map((index) => (
                  <m.div
                    key={index}
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </div>
            </m.div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
