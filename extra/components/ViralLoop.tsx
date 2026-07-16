'use client';

import { motion } from 'framer-motion';
import { Users, Share2, Copy } from 'lucide-react';
import { useState } from 'react';
import { openTeamForm, FORM_CONFIG, TEAM_FORMS } from '@/config/teamForms';
import { useRouter } from 'next/navigation';

const ViralLoop = () => {
  const router = useRouter();
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  // Copy invite link
  const copyInviteLink = async () => {
    const memberFormLink = TEAM_FORMS.member;
    
    try {
      await navigator.clipboard.writeText(memberFormLink);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
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
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-green-500/15 to-blue-500/15 top-10 right-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 bottom-10 left-10"
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
          {/* Share Icon */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 mb-8 glow"
          >
            <Share2 className="w-8 h-8 text-white" />
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 heading-premium"
          >
            Join Our
            <br />
            <span className="text-gradient"> Community</span>
          </motion.h2>
          
          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium mb-12"
          >
            Become part of our innovative builder ecosystem. Collaborate, learn, and grow together.
          </motion.p>

          {/* Benefits */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="card-hover rounded-2xl p-6 text-center glass"
            >
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Collaborate</h4>
              <p className="text-white/60 text-sm">Work with talented builders</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="card-hover rounded-2xl p-6 text-center glass"
            >
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Learn Together</h4>
              <p className="text-white/60 text-sm">Share knowledge and skills</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="card-hover rounded-2xl p-6 text-center glass"
            >
              <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Grow Together</h4>
              <p className="text-white/60 text-sm">Build your network and skills</p>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push('/join')}
              className="btn-primary flex items-center gap-2"
            >
              <Users className="w-5 h-5" style={{ color: '#ffffff' }} />
              Join as Member
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={copyInviteLink}
              className="btn-secondary flex items-center gap-2"
            >
              <Copy className="w-5 h-5" />
              {showCopySuccess ? 'Member Form Link Copied!' : 'Copy Member Form Link'}
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-6"
          >
            <p className="text-white/60 text-sm">
              {FORM_CONFIG.member.trustIndicator}
            </p>
            <p className="text-white/40 text-xs mt-1">
              {FORM_CONFIG.member.timeEstimate}
            </p>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            variants={itemVariants}
            className="text-white/60 text-sm mt-8"
          >
            Members get priority access to exclusive opportunities and resources
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ViralLoop;
