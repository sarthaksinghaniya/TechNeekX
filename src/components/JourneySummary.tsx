'use client';

import { motion } from 'framer-motion';
import { Award, Zap, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { journey } from '@/constants/journey';

export default function JourneySummary() {
  const router = useRouter();
  
  // Show only the 3 most recent milestones
  const recentMilestones = journey.slice(-3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-20 relative bg-[#f9fafb] overflow-hidden border-t border-slate-100">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <Award className="w-7 h-7 text-white" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight heading-premium">
            🚀 Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Consistently shipping, hacking, and building since August 2025. Here is a snapshot of our latest milestones.
          </p>
        </motion.div>

        {/* Compact Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {recentMilestones.map((milestone, idx) => (
            <motion.div
              key={milestone.title + idx}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white border border-slate-200/60 rounded-3xl p-6 hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-600 text-sm font-semibold">{milestone.date}</span>
                  {milestone.status === 'now' ? (
                    <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-600 text-[10px] font-bold rounded-full border border-cyan-500/20">NOW</span>
                  ) : (
                    <span className="px-2 py-0.5 bg-green-500/10 text-green-600 text-[10px] font-medium rounded-full border border-green-500/20">COMPLETED</span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-950 mb-2">{milestone.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{milestone.description}</p>
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600">
                  <Zap className="w-3.5 h-3.5 text-purple-600" />
                  <span className="text-xs font-semibold">{milestone.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Journey CTA */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push('/journey')}
            className="btn-primary inline-flex items-center gap-2"
          >
            Explore Full Timeline
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
