'use client';

import { motion } from 'framer-motion';
import { Trophy, Code, Award, Globe, TrendingUp, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { stats as globalStats } from '@/constants/stats';
import AnimatedCounter from '@/components/AnimatedCounter';

const SocialProof = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [counters, setCounters] = useState({
    hackathons: 0,
    ranking: 0,
    products: 0,
    recognition: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animated counter effect
  useEffect(() => {
    const targetValues = {
      hackathons: globalStats.hackathonsNumber,
      ranking: 2,
      products: globalStats.aiProductsNumber,
      recognition: 1
    };

    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCounters({
          hackathons: Math.floor(targetValues.hackathons * easeOutQuart),
          ranking: Math.floor(targetValues.ranking * easeOutQuart),
          products: Math.floor(targetValues.products * easeOutQuart),
          recognition: Math.floor(targetValues.recognition * easeOutQuart)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targetValues);
        }
      }, stepDuration);
    };

    // Trigger animation when component comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounters();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('social-proof');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated]);

  const stats = [
    {
      icon: Trophy,
      value: counters.hackathons,
      suffix: "+",
      label: "Hackathons",
      description: "National & International",
      color: "from-yellow-400 to-orange-500",
      delay: 0.1
    },
    {
      icon: Award,
      value: counters.ranking,
      suffix: "",
      label: "National Ranking",
      description: "Top 2 in India",
      color: "from-purple-400 to-pink-500",
      delay: 0.2
    },
    {
      icon: Code,
      value: counters.products,
      suffix: "+",
      label: "AI Products",
      description: "Built & Launched",
      color: "from-blue-400 to-cyan-500",
      delay: 0.3
    },
    {
      icon: Globe,
      value: counters.recognition,
      suffix: "",
      label: "International",
      description: "Recognition",
      color: "from-green-400 to-teal-500",
      delay: 0.4
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="social-proof" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 top-10 left-10"
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
          className="gradient-blob w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 bottom-10 right-10"
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6 heading-premium"
          >
            Proven
            <span className="text-gradient"> Excellence</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium"
          >
            Our track record speaks for itself. We consistently deliver results and build 
            solutions that make a real impact in the tech ecosystem.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="card-hover card-tilt rounded-2xl p-6 text-center group relative overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0`}
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
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center glow relative z-10`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              {/* Animated Value */}
              <motion.div 
                className={`text-3xl sm:text-4xl font-bold text-gradient mb-2 relative z-10`}
                animate={{ 
                  scale: hoveredCard === index ? 1.05 : 1 
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-block min-w-[3ch]">
                  {stat.value}{stat.suffix}
                </span>
              </motion.div>
              
              {/* Label */}
              <motion.div 
                className="text-white/90 text-sm sm:text-base font-bold mb-1 relative z-10"
                animate={{ 
                  y: hoveredCard === index ? -2 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                {stat.label}
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-white/60 text-xs relative z-10"
                animate={{ 
                  y: hoveredCard === index ? -2 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                {stat.description}
              </motion.p>

              {/* Hover effect decoration */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0`}
                animate={{ 
                  opacity: hoveredCard === index ? 0.2 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              {/* Subtle border glow */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2"
                style={{
                  borderColor: `rgba(${stat.color.includes('yellow') ? '250,204,21' : 
                                       stat.color.includes('purple') ? '168,85,247' : 
                                       stat.color.includes('blue') ? '59,130,246' : '34,197,94'}, 0)`
                }}
                animate={{ 
                  borderColor: hoveredCard === index ? 
                    `rgba(${stat.color.includes('yellow') ? '250,204,21' : 
                           stat.color.includes('purple') ? '168,85,247' : 
                           stat.color.includes('blue') ? '59,130,246' : '34,197,94'}, 0.5)` : 
                    `rgba(${stat.color.includes('yellow') ? '250,204,21' : 
                           stat.color.includes('purple') ? '168,85,247' : 
                           stat.color.includes('blue') ? '59,130,246' : '34,197,94'}, 0)`
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional trust indicators */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div 
            variants={itemVariants}
            className="glass rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              {[
                { icon: TrendingUp, text: "35% Growth Rate", color: "text-green-400" },
                { icon: Users, text: "500+ Builders", color: "text-blue-400" },
                { icon: Code, text: "50+ Projects", color: "text-purple-400" }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
