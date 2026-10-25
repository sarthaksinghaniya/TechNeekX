'use client';

import { motion } from 'framer-motion';
import { Cpu, BookOpen, Users, Rocket, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import '../styles/Community.css';

const Community = () => {
  const router = useRouter();

  const cards = [
    {
      icon: Cpu,
      title: 'Build',
      description:
        'Transforming raw ideas into production-ready software, AI products, and real-world tools that scale.',
      bgImage: '/gallery/IMG_0683.JPG.webp',
    },
    {
      icon: BookOpen,
      title: 'Learn',
      description:
        'Mastering advanced AI stacks, cloud infrastructure, and product engineering through hands-on development.',
      bgImage: '/gallery/gal5.webp',
    },
    {
      icon: Users,
      title: 'Collaborate',
      description:
        'Syncing with high-caliber designers and engineers to hack on ambitious projects and learn together.',
      bgImage: '/gallery/WhatsApp Image 2026-04-09 at 8.20.03 PM.webp',
    },
    {
      icon: Rocket,
      title: 'Ship',
      description:
        'Deploying code regularly, presenting live demos, competing in hackathons, and launching real products.',
      bgImage: '/gallery/IMG-2.jpg.webp',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="community" className="community-section-enterprise">
      <div className="tnx-container">
        <div className="tnx-grid-layout">
          {/* Left Column: Heading and Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="community-info-col"
          >
            <div className="mb-4">
              <span className="badge-enterprise">Collaborative Culture</span>
            </div>

            <h2 className="heading-section mb-5">
              A High-Octane Builder Ecosystem
            </h2>

            <p className="subheading-section mb-8 max-w-md">
              We are not just a community. We are builders of the next tech
              generation. Together, we shape the future of technology through
              intense collaboration, constant shipping, and a shared passion for
              creating digital experiences.
            </p>

            <button
              onClick={() => router.push('/join')}
              className="btn-pill-primary"
            >
              <span>Join the Community</span>
              <ArrowRight size={15} />
            </button>
          </motion.div>

          {/* Right Column: 2x2 Grid of Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="community-grid-col"
          >
            <div className="community-cards-grid">
              {cards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="community-card-enterprise"
                  >
                    <div
                      className="community-card-bg-image"
                      style={{ backgroundImage: `url(${card.bgImage})` }}
                    />

                    <div className="community-card-content">
                      <div className="community-card-header">
                        <h3 className="community-card-title">{card.title}</h3>
                        <div className="community-card-icon-box">
                          <IconComponent size={18} />
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
