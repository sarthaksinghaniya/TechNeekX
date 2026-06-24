'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, Lightbulb, Target, ArrowRight } from 'lucide-react';
import { FORM_CONFIG } from '@/config/teamForms';
import { useRouter } from 'next/navigation';

const Community = () => {
  const router = useRouter();
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We believe in pushing boundaries and creating solutions that matter."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our strength lies in our diverse community of creators and builders."
    },
    {
      icon: Target,
      title: "Impact Focused",
      description: "Every project we undertake aims to make a meaningful difference."
    },
    {
      icon: Rocket,
      title: "Future Ready",
      description: "We're building tomorrow's solutions with today's cutting-edge technology."
    }
  ];

  return (
    <section id="community" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 top-10 left-10" style={{ animationDelay: '1s' }}></div>
        <div className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 bottom-10 right-10" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            We Are Not Just A
            <span className="text-gradient"> Community</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl sm:text-3xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed mb-8">
            We are builders of the next tech generation.
          </p>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Together, we're shaping the future of technology through collaboration, 
            innovation, and a shared passion for creating solutions that transform lives.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="card-hover rounded-2xl p-6 text-center group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center glow"
              >
                <value.icon className="w-7 h-7 text-white" />
              </motion.div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                {value.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-white/70">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <div className="text-white/70">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">20+</div>
              <div className="text-white/70">Hackathon Finalist</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-white/70">Hackathon Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">5+</div>
              <div className="text-white/70">Event Experience</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/join')}
            className="btn-primary flex items-center gap-2 mx-auto text-lg px-8 py-4"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
