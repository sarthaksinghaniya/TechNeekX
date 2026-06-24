'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';

const FinalCTA = () => {
  const router = useRouter();
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-12 px-4 flex flex-col items-center text-center mt-12 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,77,141,0.06),transparent_35%),radial-gradient(circle_at_70%_40%,rgba(124,58,237,0.06),transparent_35%)]" />

      <div className="max-w-md mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-white/60 mb-6"
          >
            <Rocket className="w-8 h-8 text-[var(--accent-primary)]" />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold text-slate-900"
          >
            Ready to build, learn, and grow?
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-sm text-slate-600 mt-2"
          >
            Get the playbook, partners, and community to ship faster than ever. Join TechNeekX and move from idea to launch with a crew that’s building alongside you.
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push('/join')}
            className="w-full mt-5 py-3 rounded-xl bg-[var(--accent-primary)] text-white font-semibold shadow-md"
          >
            Start your TechNeekX journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
