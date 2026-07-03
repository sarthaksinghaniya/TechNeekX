'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useRouter } from 'next/navigation';
import '../styles/Community.css';

const Community = () => {
  const router = useRouter();

  const cards = [
    {
      icon: LucideIcons.Cpu,
      title: "Build",
      description: "Transforming raw ideas into production-ready software, AI products, and real-world tools that scale.",
      bgImage: "/gallery/IMG_0683.JPG.jpeg",
      color: "linear-gradient(135deg, #0062ff, #7c3aed)"
    },
    {
      icon: LucideIcons.BookOpen,
      title: "Learn",
      description: "Mastering advanced AI stacks, cloud infrastructure, and product engineering through hands-on development.",
      bgImage: "/gallery/gal5.jpeg",
      color: "linear-gradient(135deg, #7c3aed, #ff0080)"
    },
    {
      icon: LucideIcons.Users,
      title: "Collaborate",
      description: "Syncing with high-caliber designers and engineers to hack on ambitious projects and learn together.",
      bgImage: "/gallery/WhatsApp Image 2026-04-09 at 8.20.03 PM.jpeg",
      color: "linear-gradient(135deg, #0062ff, #7c3aed)"
    },
    {
      icon: LucideIcons.Rocket,
      title: "Ship",
      description: "Deploying code regularly, presenting live demos, competing in hackathons, and launching real products.",
      bgImage: "/gallery/IMG-2.jpg.jpeg",
      color: "linear-gradient(135deg, #ff0080, #7c3aed)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="community" className="tnx-section">
      {/* Background blobs */}
      <div className="community-bg-blob community-blob-1" />
      <div className="community-bg-blob community-blob-2" />

      <div className="tnx-container">
        <div className="tnx-grid-layout">
          
          {/* Left Column: Heading and Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="community-info-col"
          >
            <span className="tnx-section-label">
              OUR <span style={{ textTransform: 'none' }}>TechNeekX</span> COMMUNITY
            </span>
            <h2 className="tnx-main-heading">
              A High-Octane Builder Ecosystem
            </h2>
            <p className="tnx-body-text">
              We are not just a community. We are builders of the next tech generation. 
              Together, we shape the future of technology through intense collaboration, 
              constant shipping, and a shared passion for creating digital experiences.
            </p>
            
            <div className="community-cta-wrapper">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/join')}
                className="hero-btn-primary"
              >
                <span>Join TechNeekX</span>
                <LucideIcons.ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Grid of Premium Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="community-grid-col"
          >
            <div className="community-cards-grid">
              {cards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="tnx-premium-card community-card"
                  >
                    {/* Event Photography low-opacity background */}
                    <div 
                      className="community-card-bg-image" 
                      style={{ backgroundImage: `url(${card.bgImage})` }}
                    />
                    <div className="community-card-overlay" />

                    {/* Card Content */}
                    <div className="community-card-content">
                      <div className="flex-header mb-6">
                        <h3 className="community-card-title">{card.title}</h3>
                        <div className="community-card-icon-wrapper" style={{ background: card.color }}>
                          <IconComponent size={20} className="text-white" />
                        </div>
                      </div>

                      <p className="community-card-description">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Community;
