'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  Handshake 
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import partnersData from '../../../data/community_partners.json';
import { openTeamForm, FORM_CONFIG } from '@/config/teamForms';
import '@/styles/PartnersPage.css';
import Loader from '@/components/Loader';

interface Partner {
  name: string;
  role: string;
  avatar: string | null;
  expertise: string[];
  gradient: string;
  description?: string;
  badge?: string;
  link?: string;
}

const PartnersPage = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="partners-page-container">
        <div className="partners-page-content-wrapper">
          <div className="partners-page-header">
            <span className="partners-page-badge">Ecosystem</span>
            <h1 className="partners-page-title">Community Partners</h1>
            <p className="partners-page-description">Loading community partners...</p>
          </div>
        </div>
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <>
      <Loader/>
      <Navbar />

      <main className="partners-page-container">
        {/* Background blobs */}
        <div className="partners-page-bg-blob partners-page-blob-1" />
        <div className="partners-page-bg-blob partners-page-blob-2" />
        <div className="partners-page-bg-blob partners-page-blob-3" />

        <div className="partners-page-content-wrapper">
          {/* Back to Home Button */}
          <motion.button 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-8 bg-transparent border-none cursor-pointer"
          >
            <ChevronLeft size={16} />
            Back to Home
          </motion.button>

          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="partners-page-header"
          >
            <span className="partners-page-badge">Ecosystem</span>
            <h1 className="partners-page-title">Community Partners</h1>
            <p className="partners-page-description">
              Collaborating with outstanding student forums, technology leaders, and innovation hubs to fuel growth and create impact.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="partners-cards-grid"
          >
            <AnimatePresence mode="popLayout">
              {(partnersData as Partner[]).map((partner) => (
                <motion.div
                  layout
                  key={partner.name}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="partner-page-card"
                >
                  {/* Top Row: Logo (left) and Badge (right) */}
                  <div className="partner-card-top-row">
                    <div className="partner-logo-container">
                      {partner.avatar ? (
                        <img src={partner.avatar} alt={partner.name} className="partner-logo-img" />
                      ) : (
                        <div className={`partner-logo-fallback bg-gradient-to-r ${partner.gradient}`}>
                          {getInitials(partner.name)}
                        </div>
                      )}
                    </div>
                    
                    <span className="partner-badge-tag">
                      {partner.badge || 'Community Partner'}
                    </span>
                  </div>

                  {/* Below Logo: Title (Partner Name) */}
                  <h3 className="partner-card-title">{partner.name}</h3>

                  {/* Subheading (Partner Role) */}
                  <p className="partner-card-subheading designation-gradient">{partner.role}</p>

                  {/* Description */}
                  {partner.description && (
                    <p className="partner-card-description">{partner.description}</p>
                  )}

                  {/* Divider and Bottom Area (Full Width CTA) */}
                  <div className="partner-card-bottom-row">
                    <button 
                      onClick={() => {
                        if (partner.link) {
                          window.open(partner.link, '_blank');
                        } else {
                          openTeamForm('partner');
                        }
                      }}
                      className="partner-cta-action-btn"
                    >
                      <span>{partner.link ? 'Learn More' : 'Collaborate'}</span>
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* Become a Partner CTA Card */}
              <motion.div
                layout
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="partner-page-card partner-cta-card"
              >
                {/* Top Row: Icon (left) and Badge (right) */}
                <div className="partner-card-top-row">
                  <div className="partner-logo-container partner-cta-icon-container">
                    <Handshake size={24} className="partner-cta-icon" />
                  </div>
                  
                  <span className="partner-badge-tag partner-cta-badge-tag">
                    Join Us
                  </span>
                </div>

                {/* Below Icon: Title */}
                <h3 className="partner-card-title">Collaborate with Us</h3>

                {/* Subheading: Time Estimate */}
                <p className="partner-card-subheading designation-gradient">Est. Time: {FORM_CONFIG.partner.timeEstimate}</p>

                {/* Description */}
                <p className="partner-card-description">
                  Partner with TechNeekX to host hackathons, share technical content, or support developer growth.
                </p>

                {/* Divider and Bottom Area (Full Width CTA) */}
                <div className="partner-card-bottom-row">
                  <button 
                    onClick={() => openTeamForm('partner')}
                    className="partner-cta-action-btn"
                  >
                    <span>Become a Partner</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PartnersPage;
