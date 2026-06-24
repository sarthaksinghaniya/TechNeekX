'use client';

import { motion } from 'framer-motion';
import { Users, Star, TrendingUp, Award, Code, Rocket } from 'lucide-react';
import { useState } from 'react';
import { stats } from '@/constants/stats';
import AnimatedCounter from '@/components/AnimatedCounter';

const BuilderWall = () => {
  const [hoveredBuilder, setHoveredBuilder] = useState<number | null>(null);

  const builders = [
    {
      name: "Sarthak Singhaniya",
      role: "Founder & CEO",
      avatar: "/sarthak.jpeg",
      joined: "Started TechNeekX",
      achievements: [
        <AnimatedCounter key="hackathons" from={0} to={stats.hackathonsNumber} suffix="+ Hackathons" />, 
        "AI Products", 
        "Tech Leadership",
        "International Awardee"
      ],
      status: "active",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Nikhil Yadav",
      role: "CCO & UIUX Designer",
      avatar: "/nikhil.jpeg",
      joined: "1 Year ago",
      achievements: ["Canva Expert", "UI/UX", "Creative Mind"],
      status: "active",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Anshuman Soni",
      role: "CMO & Media Lead",
      avatar: "/image.png",
      joined: "4 Months ago",
      achievements: [],
      status: "active",
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Hardik Talwar",
      role: "CBO & Frontend Developer",
      avatar: "/hardik.jpeg",
      joined: "1 Year ago",
      achievements: ["React Expert", "UI/UX", "Creative Mind"],
      status: "active",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Team ByteQuest",
      role: "Hackathon Team",
      avatar: null,
      joined: "2 months ago",
      achievements: ["Hospital AI", "National Finalists", "Innovation Award"],
      status: "active",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Arjun Verma",
      role: "DevOps Engineer",
      avatar: null,
      joined: "2 weeks ago",
      achievements: ["Docker Expert", "CI/CD", "Cloud Architecture"],
      status: "active",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "Palak Mishra",
      role: "AIML Engineer",
      avatar: null,
      joined: "1 month ago",
      achievements: ["Machine Learning", "NLP Expert", "AI Research"],
      status: "active",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      name: "Arpita Sharma",
      role: "AIML Specialist",
      avatar: null,
      joined: "2 weeks ago",
      achievements: ["Deep Learning", "Computer Vision", "AI Models"],
      status: "active",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "Shivam Singh",
      role: "Frontend Developer",
      avatar: null,
      joined: "3 weeks ago",
      achievements: ["React Expert", "TypeScript Pro", "UI/UX Design"],
      status: "active",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Arnav Tripathi",
      role: "Robotics Engineer",
      avatar: null,
      joined: "1 month ago",
      achievements: ["ROS Expert", "Embedded Systems", "AI Robotics"],
      status: "active",
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Tanishq Shukla",
      role: "DNA Researcher",
      avatar: null,
      joined: "2 weeks ago",
      achievements: ["Genomics", "Bioinformatics", "DNA Analysis"],
      status: "active",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Anand Kumar Singh",
      role: "Frontend Developer",
      avatar: null,
      joined: "1 month ago",
      achievements: ["React Native", "Mobile Dev", "JavaScript Pro"],
      status: "active",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      name: "Saksham Prajapati",
      role: "Backend Developer",
      avatar: null,
      joined: "3 weeks ago",
      achievements: ["Node.js", "MongoDB", "API Design"],
      status: "active",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Aman Singh",
      role: "Frontend Developer",
      avatar: null,
      joined: "2 months ago",
      achievements: ["Vue.js", "CSS Expert", "Web Design"],
      status: "active",
      gradient: "from-teal-500 to-green-500"
    },
    {
      name: "Aishwarya Pandey",
      role: "AIML Engineer",
      avatar: null,
      joined: "1 month ago",
      achievements: ["TensorFlow", "PyTorch", "ML Research"],
      status: "active",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Anoop Tripathi",
      role: "Full Stack Developer",
      avatar: null,
      joined: "3 weeks ago",
      achievements: ["MERN Stack", "GraphQL", "Cloud Dev"],
      status: "active",
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "Harshita",
      role: "Backend Developer",
      avatar: null,
      joined: "1 month ago",
      achievements: ["Python", "Django", "PostgreSQL"],
      status: "active",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "Sandeep Gupta",
      role: "DNA Researcher",
      avatar: null,
      joined: "2 weeks ago",
      achievements: ["Genomics", "Bioinformatics", "DNA Sequencing"],
      status: "active",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      name: "Pranshu Dutta Shukla",
      role: "AIML Specialist",
      avatar: null,
      joined: "1 month ago",
      achievements: ["Computer Vision", "NLP", "Deep Learning"],
      status: "active",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "Ananya Shukla",
      role: "Frontend Developer",
      avatar: null,
      joined: "3 weeks ago",
      achievements: ["React", "Next.js", "UI/UX"],
      status: "active",
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Ankit Kumar",
      role: "Backend Developer",
      avatar: null,
      joined: "2 months ago",
      achievements: ["Java", "Spring Boot", "Microservices"],
      status: "active",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "You?",
      role: "Next Builder",
      avatar: null,
      joined: "Join now",
      achievements: ["Your Journey", "Your Impact", "Your Growth"],
      status: "recruiting",
      gradient: "from-gray-500 to-gray-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.08,
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
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 top-10 right-10"
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
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/15 to-green-500/15 bottom-10 left-10"
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
          {/* Icon */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 mb-8 glow"
          >
            <Users className="w-8 h-8 text-white" />
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 heading-premium"
          >
            Builders Joining
            <br />
            <span className="text-gradient">TechNeekX</span>
          </motion.h2>
          
          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium"
          >
            Real people. Real growth. Real impact.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 text-white/60 mt-8"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Growing Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Elite Talent</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium">Proven Results</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Builder Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {builders.map((builder, index) => (
            <motion.div
              key={builder.name}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              onHoverStart={() => setHoveredBuilder(index)}
              onHoverEnd={() => setHoveredBuilder(null)}
              className="card-hover rounded-2xl p-6 text-center relative overflow-hidden"
            >
              {/* Status Indicator */}
              <motion.div
                className={`absolute top-3 right-3 w-2 h-2 rounded-full ${
                  builder.status === 'active' ? 'bg-green-400' : 'bg-orange-400'
                }`}
                animate={{ 
                  scale: hoveredBuilder === index ? 1.5 : 1,
                  opacity: hoveredBuilder === index ? 1 : 0.7
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              {/* Avatar */}
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                }}
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${builder.gradient} flex items-center justify-center glow relative z-10`}
              >
                {builder.avatar ? (
                  <img
                    src={builder.avatar}
                    alt={builder.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <Users className="w-8 h-8 text-white" />
                )}
              </motion.div>
              
              {/* Name */}
              <motion.h3 
                className="text-lg font-bold text-white mb-1 relative z-10"
                animate={{ 
                  scale: hoveredBuilder === index ? 1.05 : 1 
                }}
                transition={{ duration: 0.3 }}
              >
                {builder.name}
              </motion.h3>
              
              {/* Role */}
              <motion.p 
                className="text-white/60 text-sm mb-2 relative z-10"
                animate={{ 
                  y: hoveredBuilder === index ? -2 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                {builder.role}
              </motion.p>

              {/* Joined */}
              <motion.p 
                className="text-white/40 text-xs mb-3 relative z-10"
              >
                {builder.joined}
              </motion.p>

              {/* Achievements */}
              <div className="space-y-1 relative z-10">
                {builder.achievements.slice(0, 2).map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    className="text-white/60 text-xs"
                    animate={{ 
                      x: hoveredBuilder === index ? 2 : 0,
                      transition: { delay: idx * 0.05 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {achievement}
                  </motion.div>
                ))}
              </div>

              {/* Hover effect decoration */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${builder.gradient} opacity-0`}
                animate={{ 
                  opacity: hoveredBuilder === index ? 0.1 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              {/* Special effect for "You?" */}
              {builder.name === "You?" && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-500/20 to-gray-700/20 rounded-2xl"
                  animate={{ 
                    opacity: hoveredBuilder === index ? 1 : 0.8 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ 
                      scale: hoveredBuilder === index ? 1.1 : 1 
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <Rocket className="w-8 h-8 text-white/60 mx-auto mb-2" />
                    <p className="text-white/60 text-sm font-medium">Be Next</p>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Action Proof */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-400 font-semibold text-sm">ACTIVE COMMUNITY</span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
            <p className="text-white/80 text-sm mb-4">
              New builders joining weekly • Active collaboration in progress
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
            >
              Join the Builder Wall
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuilderWall;
