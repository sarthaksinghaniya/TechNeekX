'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Users, Trophy, Brain, Handshake, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const LiveActivityFeed = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  const activities = [
    {
      icon: Users,
      message: "New builder joined TechNeekX",
      emoji: "🚀",
      time: "2 minutes ago",
      type: "join"
    },
    {
      icon: Brain,
      message: "New AI project in progress",
      emoji: "💡",
      time: "5 minutes ago",
      type: "project"
    },
    {
      icon: Trophy,
      message: "Hackathon participation ongoing",
      emoji: "🏆",
      time: "8 minutes ago",
      type: "hackathon"
    },
    {
      icon: Handshake,
      message: "New collaboration initiated",
      emoji: "🤝",
      time: "12 minutes ago",
      type: "collaboration"
    },
    {
      icon: Activity,
      message: "Team formation in progress",
      emoji: "🔥",
      time: "15 minutes ago",
      type: "team"
    },
    {
      icon: Users,
      message: "New core team application received",
      emoji: "⭐",
      time: "18 minutes ago",
      type: "application"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentActivity((prev) => (prev + 1) % activities.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'join': return 'from-green-500 to-teal-500';
      case 'project': return 'from-blue-500 to-purple-500';
      case 'hackathon': return 'from-yellow-500 to-orange-500';
      case 'collaboration': return 'from-purple-500 to-pink-500';
      case 'team': return 'from-red-500 to-orange-500';
      case 'application': return 'from-indigo-500 to-purple-600';
      default: return 'from-gray-500 to-gray-700';
    }
  };

  if (isDismissed) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="fixed bottom-4 right-4 z-50 max-w-sm"
    >
      <motion.div
        variants={itemVariants}
        className="glass rounded-2xl p-4 backdrop-blur-xl border border-white/10"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-green-400 font-semibold text-xs">LIVE ACTIVITY</span>
          </div>
          <button 
            onClick={() => setIsDismissed(true)} 
            className="text-white/60 hover:text-white transition-colors duration-200 focus:outline-none"
            aria-label="Dismiss activity feed"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Activity Content */}
        <motion.div
          key={currentActivity}
          initial={{ opacity: 0, x: 20 }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
          className="space-y-2"
        >
          <div className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${getActivityColor(activities[currentActivity].type)} flex items-center justify-center flex-shrink-0`}>
              {React.createElement(activities[currentActivity].icon, { className: "w-4 h-4 text-white" })}
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">
                {activities[currentActivity].emoji} {activities[currentActivity].message}
              </p>
              <p className="text-white/60 text-xs">{activities[currentActivity].time}</p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-3 pt-3 border-t border-white/10">
          <p className="text-white/60 text-xs text-center">
            Real-time updates from TechNeekX
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LiveActivityFeed;
