'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import data from '../constants/data.json';

const iconMap: { [key: string]: any } = {
  Github: Github,
  Linkedin: Linkedin,
  Instagram: Instagram,
  Mail: Mail,
  Whatsapp: FaWhatsapp
};

const FinalCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const socialLinksWithWhatsapp = [
    ...data.socialLinks,
    { icon: 'Whatsapp', href: 'https://wa.me/916387860126', label: 'WhatsApp' }
  ];

  return (
    <section className="w-full h-[45dvh] min-h-[320px] bg-[#030508] dark relative overflow-hidden flex items-center z-10">
      {/* Moving Blue & Pink Gradient Background */}
      <motion.div 
        className="absolute inset-0  mix-blend-screen pointer-events-none"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'easeInOut'
        }}
        style={{
          background: 'linear-gradient(135deg, #0062ff 0%, #ff0080 50%, #0062ff 100%)',
          backgroundSize: '400% 400%',
        }}
      />
      
      {/* Radial overlay to make it dark and minimal */}
      <div className="absolute inset-0 bg-slate-950/75 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 pointer-events-none" />

      {/* Decorative background glows with back-and-forth linear moving animation */}
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[130px] bg-[#0062ff]/10 pointer-events-none"
        animate={{
          x: [-120, 120, -120],
          y: [-40, 40, -40],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: 'easeInOut'
        }}
        style={{ top: '-10%', left: '5%' }}
      />
      <motion.div 
        className="absolute w-[450px] h-[450px] rounded-full blur-[130px] bg-[#ff0080]/10 pointer-events-none"
        animate={{
          x: [120, -120, 120],
          y: [40, -40, 40],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: 'easeInOut'
        }}
        style={{ bottom: '-10%', right: '5%' }}
      />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
        >
          {/* Left Text Column */}
          <div className="md:col-span-7 flex flex-col items-start text-left space-y-3">
            <motion.span
              variants={itemVariants}
              className="text-xs font-bold tracking-widest text-[#ff4d8d] uppercase"
            >
              Dear Future Innovator
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight"
            >
              The future is not something we wait for.<br />
              It's something we build together.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-lg"
            >
              Join TechNeekX and be part of a community that learns, builds, ships, and creates impact.
            </motion.p>

            {/* Social Links below text, matching the Hero style */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap gap-3 pt-2 items-center z-10"
            >
              {socialLinksWithWhatsapp.map((social, idx) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-all duration-300 flex items-center justify-center p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 shadow-sm hover:scale-110 active:scale-95"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {IconComponent && <IconComponent size={18} />}
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Logo Column */}
          <div className="md:col-span-5 flex justify-center md:justify-end items-center">
            <motion.div
              variants={itemVariants}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center"
            >
              {/* Outer pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-blue-500/20 shadow-[0_0_30px_rgba(0,98,255,0.1)] pointer-events-none"
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              />
              
              {/* Inner glowing background */}
              <div className="absolute inset-3 rounded-full bg-slate-950/40 backdrop-blur-sm border border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center" />

              {/* Logo container with floating animation */}
              <motion.div
                className="relative w-28 h-28 md:w-34 md:h-34 z-10"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <Image
                  src="/file_0000000067647206a22ff5daad754190.png"
                  alt="TechNeekX Crest"
                  fill
                  sizes="(max-width: 768px) 112px, 136px"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
