'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronLeft, 
  ExternalLink, 
  Plus, 
  Handshake,
  Image as ImageIcon 
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import partnersData from '../../../data/community_partners.json';
import { openTeamForm, FORM_CONFIG } from '@/config/teamForms';
import '@/styles/PartnersPage.css';

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
  const [activeTab, setActiveTab] = useState<'all' | 'collaboration' | 'technology'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="partners-page-container">
        <div className="partners-page-content-wrapper">
          <div className="partners-page-header">
            <span className="partners-page-badge">COMMUNITY</span>
            <h1 className="partners-page-title">Our Partners</h1>
            <p className="partners-page-description">Loading community partners...</p>
          </div>
        </div>
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  // Filter partners based on active tab and search query
  const filteredPartners = (partnersData as Partner[]).filter((partner) => {
    // Determine effective badge (fall back to "Community Partner" if not explicitly specified)
    const effectiveBadge = partner.badge || 'Community Partner';

    // Tab filter
    if (activeTab === 'collaboration') {
      if (effectiveBadge !== 'Collaboration Partner') return false;
    } else if (activeTab === 'technology') {
      if (effectiveBadge !== 'Technology Partner') return false;
    }

    // Search query filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const nameMatch = partner.name.toLowerCase().includes(query);
      const roleMatch = partner.role.toLowerCase().includes(query);
      const descMatch = partner.description?.toLowerCase().includes(query) || false;
      const expMatch = partner.expertise.some(exp => exp.toLowerCase().includes(query));
      return nameMatch || roleMatch || descMatch || expMatch;
    }

    return true;
  });

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

  const tabs = [
    { id: 'all', label: 'All Partners' },
    { id: 'collaboration', label: 'Collaboration' },
    { id: 'technology', label: 'Technology' }
  ];

  return (
    <>
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
          <div className="partners-page-header">
            <span className="partners-page-badge">Ecosystem</span>
            <h1 className="partners-page-title">Community Partners</h1>
            <p className="partners-page-description">
              Collaborating with outstanding student forums, technology leaders, and innovation hubs to fuel growth and create impact.
            </p>
          </div>

          {/* Search & Tabs Row */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
            {/* Tabs */}
            <div className="partners-tabs-container mb-0 w-auto">
              <div className="partners-tabs-list">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`partners-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="partners-tab-active-bg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search partners, expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent text-sm transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Grid Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="partners-cards-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredPartners.map((partner) => (
                <motion.div
                  layout
                  key={partner.name}
                  variants={cardVariants}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="partner-page-card"
                >
                  {/* Hover background gradient */}
                  <div className={`partner-page-card-hover-bg bg-gradient-to-br ${partner.gradient}`} />
                  
                  {/* Avatar */}
                  <div className="partner-page-avatar-container">
                    <div className="partner-page-avatar">
                      {partner.avatar ? (
                        <img src={partner.avatar} alt={partner.name} />
                      ) : (
                        <div className={`partner-page-initials-fallback bg-gradient-to-r ${partner.gradient}`}>
                          {getInitials(partner.name)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="partner-page-card-details">
                    <h3 className="partner-page-name">{partner.name}</h3>
                    <span className="partner-page-role">{partner.role}</span>
                    
                    <span className="partner-page-badge">
                      {partner.badge || 'Community Partner'}
                    </span>

                    {partner.description && (
                      <p className="partner-page-desc">{partner.description}</p>
                    )}

                    {/* Expertise Tags */}
                    {partner.expertise && partner.expertise.length > 0 && (
                      <div className="partner-page-expertise-row">
                        {partner.expertise.map((tag) => (
                          <span key={tag} className="partner-page-expertise-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* External Link */}
                    {partner.link && (
                      <a 
                        href={partner.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="partner-page-link-btn"
                      >
                        <span>Learn More</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Become a Partner CTA Card (only show if not searching or filtering heavily) */}
              {searchQuery.trim() === '' && activeTab === 'all' && (
                <motion.div
                  layout
                  variants={cardVariants}
                  className="partner-page-card partner-cta-card"
                >
                  <div className="partner-cta-icon-wrapper">
                    <Handshake size={32} />
                  </div>
                  <h3 className="partner-cta-title">Collaborate with Us</h3>
                  <p className="partner-cta-desc">
                    Partner with TechNeekX to host hackathons, share technical content, or support developer growth.
                  </p>
                  
                  <button 
                    onClick={() => openTeamForm('partner')}
                    className="partner-cta-btn"
                  >
                    Become a Partner
                  </button>
                  
                  <span className="partner-cta-estimate">
                    {FORM_CONFIG.partner.timeEstimate}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PartnersPage;
