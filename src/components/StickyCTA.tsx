'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';

const StickyCTA = () => {
  const router = useRouter();

  return (
    <>
      {/* Mobile bottom bar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.4 }}
        className="fixed bottom-4 left-0 right-0 px-4 sm:px-6 lg:px-8 z-40 md:hidden"
      >
        <div className="glass shadow-[0_10px_30px_rgba(0,0,0,0.12)] rounded-2xl border border-white/40 backdrop-blur-xl flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white shadow-md">
              <Rocket size={16} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text-primary)]">Ready to build?</p>
              <p className="text-[11px] text-[var(--text-secondary)]">Join the TechNeekX community</p>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push('/join')}
            className="btn-primary px-4 py-2 text-sm font-semibold shadow-md"
          >
            Join now
          </motion.button>
        </div>
      </motion.div>

      {/* Desktop floating */}
      <motion.button
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24, delay: 0.5 }}
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => router.push('/join')}
        className="hidden md:flex fixed right-6 bottom-6 z-40 bg-[var(--accent-primary)] text-white px-5 py-3 rounded-xl shadow-[0_12px_28px_rgba(255,77,141,0.35)] font-semibold items-center gap-2"
      >
        <Rocket size={18} />
        Start your journey
      </motion.button>
    </>
  );
};

export default StickyCTA;
