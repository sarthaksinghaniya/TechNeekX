'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, ExternalLink, Star, TrendingUp, Award, Code, Palette, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import eventsData from '../../data/events.json';

interface OrganizedEvent {
  id: string;
  name: string;
  type: string;
  location?: string;
  description: string;
  participants: string;
  teams?: string;
  tagline: string;
  icon: string;
  gradient: string;
  featured: boolean;
  cta?: {
    text: string;
    link: string;
  };
  showInOrganized?: boolean;
  organizedOrder?: number;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Palette,
  Zap,
  Code,
  Trophy
};

const EventsOrganized = () => {
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

  const events = (eventsData as OrganizedEvent[])
    .filter((e) => e.showInOrganized)
    .sort((a, b) => (a.organizedOrder || 0) - (b.organizedOrder || 0));

  return (
    <section className="px-4 sm:px-8 py-16 md:py-28 max-w-6xl mx-auto">
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
        {events.map((event) => {
          const IconComponent = iconMap[event.icon] || Calendar;
          return (
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
                  <IconComponent className="w-6 h-6 text-white" />
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
                  <motion.button
                    onClick={() => {
                      if (event.cta?.text.toLowerCase().includes('detail') || !event.cta?.link) {
                        router.push('/events');
                      } else {
                        window.open(event.cta.link, '_blank');
                      }
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-2 bg-gradient-to-r ${event.gradient} text-white text-sm font-medium rounded-lg text-center w-full sm:w-auto border-none cursor-pointer shadow-sm hover:shadow-md transition-shadow`}
                  >
                    {event.cta.text}
                  </motion.button>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default EventsOrganized;
