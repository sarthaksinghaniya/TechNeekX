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
  const activePartners = (partnersData as Partner[]).filter(partner => !partner.isCTA);
  const marqueeList = [...activePartners, ...activePartners, ...activePartners];

  return (
    <motion.section
      id="partners-marquee"
      className="partners-marquee-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="partners-marquee-header-wrap">
        <span className="badge-enterprise">
          Ecosystem Collaborators &amp; Partner Networks
        </span>
      </div>

      <div className="partners-marquee-container">
        {[0, 1].map((trackIndex) => (
          <div
            key={trackIndex}
            className="partners-marquee-content"
            aria-hidden={trackIndex === 1 ? 'true' : undefined}
          >
            {marqueeList.map((partner, index) => (
              <div
                key={`${trackIndex}-${index}`}
                className="partner-marquee-item"
                onClick={() =>
                  partner.link &&
                  window.open(partner.link, '_blank', 'noopener,noreferrer')
                }
              >
                <span className="partner-marquee-dot" />
                <span className="partner-marquee-name">{partner.name}</span>
                {partner.role && (
                  <span className="partner-marquee-role">/ {partner.role}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default PartnersMarquee;
