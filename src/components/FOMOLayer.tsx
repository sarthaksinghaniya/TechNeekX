'use client';

import { motion } from 'framer-motion';
import { Users, Activity, TrendingUp, Clock, ArrowRight, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FORM_CONFIG } from '@/config/teamForms';
import { useRouter } from 'next/navigation';

const FOMOLayer = () => {
  const [activeTicker, setActiveTicker] = useState(0);
  const router = useRouter();

  const activityMessages = [
    "🚀 3 new builders joined this week",
    "🏆 Won 1 national hackathons this month",
    "🤝 New collaboration with AI startup",
    "📈 40% growth in active projects",
    "🌟 Featured in tech community spotlight"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTicker((prev) => (prev + 1) % activityMessages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-orange-500/15 to-red-500/15 top-10 right-10"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 bottom-10 left-10"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Limited Access Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
          >
            <Lock className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-semibold text-sm">Limited Access</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 heading-premium"
          >
            Applications Open for
            <br />
            <span className="text-gradient">Core Team</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-orange-400">— Limited Slots</span>
          </motion.h2>
          
          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium mb-8"
          >
            Selective Entry • High Impact • Real Ownership
          </motion.p>

          {/* Early Stage Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8"
          >
            <Clock className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Early Stage — Join Before We Scale</span>
          </motion.div>
        </motion.div>

        {/* Activity Signals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="card-hover rounded-2xl p-6 text-center glass"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 glow mx-auto"
            >
              <Users className="w-7 h-7 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">Growing Community</h3>
            <p className="text-white/60">Elite builders joining daily</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="card-hover rounded-2xl p-6 text-center glass"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mb-4 glow mx-auto"
            >
              <Activity className="w-7 h-7 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">Active Projects</h3>
            <p className="text-white/60">Multiple in development</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="card-hover rounded-2xl p-6 text-center glass"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 glow mx-auto"
            >
              <TrendingUp className="w-7 h-7 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">New Collaborations</h3>
            <p className="text-white/60">Coming soon</p>
          </motion.div>
        </motion.div>

        {/* Live Activity Ticker */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-400 font-semibold text-sm">LIVE ACTIVITY</span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
            
            <motion.div
              key={activeTicker}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white/80 text-lg"
            >
              {activityMessages[activeTicker]}
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push('/join')}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              Join as Member
              <ArrowRight size={20} />
            </motion.button>
            <div className="text-center mt-4">
              <p className="text-white/60 text-sm">
                {FORM_CONFIG.member.trustIndicator}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {FORM_CONFIG.member.timeEstimate}
              </p>
            </div>
            
            <motion.div
              variants={itemVariants}
              className="mt-4 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>Applications reviewed weekly</span>
                <span className="text-white/40">•</span>
                <span>Active onboarding in progress</span>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FOMOLayer;
