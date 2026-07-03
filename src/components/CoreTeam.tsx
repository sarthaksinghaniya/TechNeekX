'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, Palette, Code, ExternalLink, Award, Target, ArrowRight, UserPlus, Mail, Phone, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import { stats } from '@/constants/stats';
import AnimatedCounter from '@/components/AnimatedCounter';
import { openTeamForm, FORM_CONFIG } from '@/config/teamForms';
import teamData from '../../data/team.json';

const CoreTeam = () => {
  const { founder, members } = teamData;

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
      <div className="absolute inset-0">
        <motion.div
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 top-10 left-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 bottom-10 right-10"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 heading-premium"
          >
            Meet the Builders
            <br />
            <span className="text-gradient">Behind TechNeekX</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium"
          >
            A small, high-impact team building the future of AI and innovation.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {/* Founder Spotlight */}
          <motion.div
            id="founder-details"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass rounded-3xl p-8 border-2 border-orange-500/30 relative overflow-hidden card-hover"
          >
            <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-semibold rounded-bl-2xl">
              {founder.badge}
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="relative w-48 h-48 mx-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full rounded-2xl overflow-hidden glow relative"
                  >
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{founder.name}</h3>
                <p className="text-white/70 text-lg mb-4">{founder.role}</p>
                <p className="text-white/80 text-lg mb-6 italic">
                  "{founder.tagline}"
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 glass rounded-full text-white/70 text-xs">
                    <AnimatedCounter from={0} to={stats.hackathonsNumber} suffix="+ Hackathons" />
                  </span>
                  {founder.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 glass rounded-full text-xs ${skill === 'International Awardee'
                          ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 font-semibold'
                          : 'text-white/70'
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Founder Contact Information */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-white/60" />
                    <a href={`mailto:${founder.contact.email}`} className="text-white/60 hover:text-white text-sm transition-colors">
                      {founder.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-white/60" />
                    <a href={`tel:${founder.contact.phone}`} className="text-white/60 hover:text-white text-sm transition-colors">
                      {founder.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={founder.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.contact.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      Portfolio
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={founder.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    Connect on LinkedIn
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={founder.contact.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center gap-2"
                  >
                    View Portfolio
                    <ArrowRight size={16} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Team Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6"
          >
            {members.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -6, scale: member.role.includes('Chief') ? 1.05 : 1.02 }}
                className={`w-full p-5 rounded-2xl bg-white/70 backdrop-blur-md shadow-md flex flex-col items-center text-center space-y-2 border ${member.role.includes('Chief') ? 'border-pink-200' : 'border-white/60'
                  }`}
              >
                <div className="relative w-20 h-20 mb-3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-slate-500">{member.role}</p>

                <div className="flex items-center justify-center gap-3 mt-1">
                  <a
                    href={member.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white/80 border border-white/60 flex items-center justify-center text-slate-600 hover:text-slate-800 shadow-sm transition"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white/80 border border-white/60 flex items-center justify-center text-slate-600 hover:text-slate-800 shadow-sm transition"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.contact.email}`}
                    className="w-9 h-9 rounded-full bg-white/80 border border-white/60 flex items-center justify-center text-slate-600 hover:text-slate-800 shadow-sm transition"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Open Slot Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="w-full p-5 rounded-2xl bg-white/70 backdrop-blur-md shadow-md flex flex-col items-center text-center space-y-2 border border-pink-200"
            >
              <div className="relative w-20 h-20 mb-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white">
                <UserPlus className="w-10 h-10" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">You?</h3>
              <p className="text-sm text-slate-500">Core Team Position</p>
            </motion.div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Join the Core Team</h3>
            <p className="text-sm text-slate-600 mb-6">Limited positions • High ownership • Real impact</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openTeamForm('coreTeam')}
                className="btn-primary"
              >
                Apply for Core Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const founderSection = document.getElementById('founder-details');
                  if (founderSection) {
                    founderSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center'
                    });
                  }
                }}
                className="btn-secondary"
              >
                Talk to Founder
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
