'use client';

import { motion } from 'framer-motion';
import { Brain, Trophy, Rocket, Users, ArrowRight } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & ML Innovation",
      description: "Building cutting-edge artificial intelligence and machine learning solutions that solve real-world problems and push technological boundaries.",
      features: ["Deep Learning", "NLP", "Computer Vision", "Predictive Analytics"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: Trophy,
      title: "Hackathons & Competitions",
      description: "Excelling in national and international hackathons, showcasing our ability to innovate under pressure and deliver exceptional results.",
      features: ["24-hour Sprints", "Team Collaboration", "Problem Solving", "Winning Solutions"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: Rocket,
      title: "Product Development",
      description: "Creating scalable, user-centric products from concept to deployment, focusing on clean code and exceptional user experiences.",
      features: ["Full Stack Development", "UI/UX Design", "Cloud Deployment", "Agile Methodology"],
      gradient: "from-green-500 to-teal-500",
      delay: 0.3
    },
    {
      icon: Users,
      title: "Tech Community Building",
      description: "Fostering a vibrant community of developers, designers, and innovators who collaborate, learn, and grow together.",
      features: ["Workshops", "Mentorship", "Open Source", "Knowledge Sharing"],
      gradient: "from-orange-500 to-red-500",
      delay: 0.4
    }
  ];

  return (
    <section id="what-we-do" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 top-20 right-20" style={{ animationDelay: '2s' }}></div>
        <div className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 bottom-20 left-20" style={{ animationDelay: '4s' }}></div>
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
            What We
            <span className="text-gradient"> Do</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We're not just developers - we're innovators, creators, and community builders 
            who transform ideas into reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="card-hover rounded-2xl p-6 group relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 glow`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </motion.div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                    <span className="text-white/60 text-xs">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Arrow indicator */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-300"
              >
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight size={16} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
