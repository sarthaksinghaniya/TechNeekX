'use client';

import { motion } from 'framer-motion';
import partnersData from '../../data/community_partners.json';
import '../styles/PartnersMarquee.css';

interface Partner {
  name: string;
  role: string;
  avatar: string | null;
  expertise: string[];
  gradient: string;
  isCTA?: boolean;
  description?: string;
  badge?: string;
  link?: string;
}

const PartnersMarquee = () => {
  // Filter out CTA card, only show actual partners
  const activePartners = (partnersData as Partner[]).filter(partner => !partner.isCTA);

  // Helper to get initials
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Duplicate list to make it dense and loop seamlessly
  const marqueeList = [...activePartners, ...activePartners, ...activePartners, ...activePartners];

  return (
    <motion.section 
      id='partners-marquee'
      className="partners-marquee-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="partners-marquee-header">Our Partners</h3>
      
      <div className="partners-marquee-container">
        {[0, 1].map((trackIndex) => (
          <div 
            key={trackIndex}
            className="partners-marquee-content"
            aria-hidden={trackIndex === 1 ? "true" : undefined}
          >
            {marqueeList.map((partner, index) => (
              <div 
                key={`${trackIndex}-${index}`} 
                className="partner-marquee-item"
                onClick={() => partner.link && window.open(partner.link, '_blank', 'noopener,noreferrer')}
              >
                <span className="partner-marquee-name">{partner.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default PartnersMarquee;
