'use client';

import { motion } from 'framer-motion';
import { Award, Users, Code, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const TrustElements = () => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const trustPoints = [
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Consistently top-ranked in national hackathons with multiple AI product launches.",
      gradient: "from-blue-500 to-purple-500",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Expert Leadership",
      description: (
        <>
          Founded by{" "}
          <a href="#team" className="text-purple-400 hover:text-purple-300 font-semibold underline decoration-dotted transition-colors">
            passionate engineers
          </a>{" "}
          with real experience in hackathons and AI development.
        </>
      ),
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: Code,
      title: "Technical Innovation",
      description: "Backed by real experience in building scalable AI solutions and enterprise-grade products.",
      gradient: "from-green-500 to-teal-500",
      delay: 0.3
    }
  ];

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
    <section id="trust" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 top-10 left-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/10 to-green-500/10 bottom-10 right-10"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Founder Spotlight */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 max-w-4xl mx-auto"
          >
            {/* Founder Image */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center mb-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white/20"
              >
                <img
                  src="/sarthak.jpeg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-2">Sarthak Singhaniya</h3>
                <p className="text-white/70 mb-2">Founder & CEO, TechNeekX</p>
                
                {/* Credibility Highlights */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-3 py-1 glass rounded-full text-white/70 text-xs">Hackathon Winner</span>
                  <span className="px-3 py-1 glass rounded-full text-white/70 text-xs">AI Builder</span>
                  <span className="px-3 py-1 glass rounded-full text-white/70 text-xs">Tech Leader</span>
                  <span className="px-3 py-1 glass rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-xs font-semibold">International Awardee</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" style={{ fill: 'currentColor' }} />
                  <Star className="w-4 h-4 text-yellow-400" style={{ fill: 'currentColor' }} />
                  <Star className="w-4 h-4 text-yellow-400" style={{ fill: 'currentColor' }} />
                  <Star className="w-4 h-4 text-yellow-400" style={{ fill: 'currentColor' }} />
                  <Star className="w-4 h-4 text-yellow-400" style={{ fill: 'currentColor' }} />
                </div>
              </motion.div>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-white/80 text-center max-w-2xl mx-auto mb-6"
            >
              "We're not just another tech community. We're builders who understand the challenges 
              and opportunities in the AI ecosystem because we've lived them."
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-green-400 font-semibold text-sm">Built by a builder, for builders</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Trust Points */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="card-hover card-tilt rounded-2xl p-6 text-center group relative"
            >
              {/* Animated gradient background on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0`}
                animate={{ 
                  opacity: hoveredCard === index ? 0.1 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              
              {/* Icon */}
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                }}
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${point.gradient} flex items-center justify-center mb-4 glow relative z-10`}
              >
                <point.icon className="w-7 h-7 text-white" />
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300 relative z-10"
                animate={{ 
                  scale: hoveredCard === index ? 1.05 : 1 
                }}
                transition={{ duration: 0.3 }}
              >
                {point.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                className="text-white/70 text-sm leading-relaxed relative z-10"
                animate={{ 
                  y: hoveredCard === index ? -2 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                {point.description}
              </motion.p>

              {/* Hover effect decoration */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${point.gradient} opacity-0`}
                animate={{ 
                  opacity: hoveredCard === index ? 0.2 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Credibility Line */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-bold text-white mb-3">
              Built by{" "}
              <a href="#team" className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity underline decoration-dotted">
                Passionate Engineers
              </a>
            </h3>
            <p className="text-white/70">
              Backed by real experience in hackathons, AI development, and product building.
            </p>
            <motion.div
              variants={itemVariants}
              className="mt-4 flex justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push('/join')}
                className="btn-primary flex items-center gap-2"
              >
                Join Our Mission
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open('https://www.linkedin.com/in/sarthak-singhaniya-a4ab9a323/', '_blank', 'noopener,noreferrer')}
                className="btn-secondary flex items-center gap-2"
              >
                Connect with Founder
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustElements;
