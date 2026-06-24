'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, ExternalLink, Star, TrendingUp, Award, Code, Palette, Zap } from 'lucide-react';

const EventsOrganized = () => {
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

  const events = [
    {
      id: 'frame-by-frame',
      name: 'Frame by Frame',
      type: 'Media / Creative',
      location: 'BBD University',
      description: 'Hands-on media event focused on photography, reels, and content creation',
      participants: '100+',
      tagline: 'Creativity meets execution',
      icon: Palette,
      gradient: 'from-purple-500 to-pink-500',
      featured: false
    },
    {
      id: 'pitch-night-edition',
      name: 'PITCH NIGHT EDITION',
      type: 'Mini Event • Online',
      description: 'Prompt engineering-focused online pitch night for 30 participants to showcase AI-driven ideas.',
      participants: '30',
      tagline: 'Prompt. Pitch. Propel.',
      icon: Zap,
      gradient: 'from-indigo-500 to-blue-500',
      featured: false
    },
    {
      id: 'innvedx-hackathon',
      name: 'InnVedX Code Hackathon',
      type: 'Hackathon',
      description: 'Large-scale coding hackathon with real-world problem solving',
      participants: '491',
      teams: '100+',
      tagline: 'Built at scale',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      featured: true,
      cta: {
        text: 'View Participant Projects',
        link: 'https://github.com/topics/innvedxhackathon'
      }
    },
    {
      id: 'vibe-designing',
      name: 'Vibe Designing',
      type: 'Design Event',
      description: 'UI/UX and creative design-focused competition',
      participants: '100+',
      teams: '50+',
      tagline: 'Design. Build. Express.',
      icon: Palette,
      gradient: 'from-green-500 to-teal-500',
      featured: false
    },
    {
      id: 'kalpathon-2',
      name: 'Kalpathon 2.0',
      type: 'Hackathon',
      description: '24-hour intensive coding competition with real challenges',
      participants: '250+',
      teams: '80+',
      tagline: 'Code. Compete. Conquer.',
      icon: Trophy,
      gradient: 'from-orange-500 to-red-500',
      featured: false,
      cta: {
        text: 'View Participant Projects',
        link: 'https://github.com/topics/kalpathonhackathon'
      }
    }
  ];

  return (
    <section className="px-4 sm:px-6 py-14 md:py-20 max-w-6xl mx-auto">
      <div className="text-left mb-12">
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4"
        >
          Events We've Organized
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-base text-slate-600 max-w-2xl"
        >
          We don't just plan — we execute at scale. Real events with real impact.
        </motion.p>
      </div>

      {/* Events Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            variants={itemVariants}
            whileHover={{ 
              y: -3,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}
            className={`p-5 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-all duration-300 ${
              event.featured ? 'ring-2 ring-blue-500 ring-offset-2' : ''
            }`}
          >
            {/* Event Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${event.gradient} flex items-center justify-center`}>
                <event.icon className="w-6 h-6 text-white" />
              </div>
              {event.featured && (
                <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                  Featured
                </div>
              )}
            </div>

            {/* Event Content */}
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  {event.name}
                </h3>
                <p className="text-sm text-slate-600">
                  {event.type}
                </p>
              </div>

              <p className="text-sm text-slate-600">
                {event.description}
              </p>

              {/* Event Stats */}
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {event.participants}
                </div>
                {event.teams && (
                  <div className="flex items-center gap-1">
                    <Trophy className="w-3 h-3" />
                    {event.teams} teams
                  </div>
                )}
              </div>

              {/* Tagline */}
              <p className="text-xs font-medium text-slate-700 italic">
                "{event.tagline}"
              </p>

              {/* CTA Button */}
              {event.cta && (
                <motion.a
                  href={event.cta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 bg-gradient-to-r ${event.gradient} text-white text-sm font-medium rounded-lg text-center w-full sm:w-auto shadow-sm hover:shadow-md transition-shadow`}
                >
                  {event.cta.text}
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EventsOrganized;
