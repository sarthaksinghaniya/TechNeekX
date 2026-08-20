'use client';

import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle2, Rocket } from 'lucide-react';
import '../styles/RecruitmentModal.css';

const RECRUITMENT_FORM_URL = 'https://forms.gle/3RVngAv93Cj5oBVd7';
const STORAGE_KEY = 'techneekx_recruitment_modal_dismissed';

export default function RecruitmentModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if modal was already dismissed in this session
    const isDismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!isDismissed) {
      // Show modal after initial loader completes and hero renders (~1s delay)
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem(STORAGE_KEY, 'true');
  };

  const handleApplyClick = () => {
    window.open(RECRUITMENT_FORM_URL, '_blank', 'noopener,noreferrer');
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="recruitment-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={handleClose}
        >
          <m.div
            className="recruitment-modal-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="recruitment-modal-title"
          >
            {/* Ambient Background Glows */}
            <div className="recruitment-modal-glow-1" />
            <div className="recruitment-modal-glow-2" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="recruitment-modal-close"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Live Indicator Badge */}
            <div className="recruitment-badge-pill">
              <span className="recruitment-pulse-dot">
                <span className="recruitment-pulse-ring" />
              </span>
              <span>Applications Live • 2026</span>
            </div>

            {/* Title & Description */}
            <h2 id="recruitment-modal-title" className="recruitment-modal-title">
              Member Recruitment is{' '}
              <span className="recruitment-title-gradient">Live! 🚀</span>
            </h2>

            <p className="recruitment-modal-desc">
              Join the TechNeekX community of innovators, builders, and creators.
              Collaborate on cutting-edge projects, connect with industry mentors, and
              accelerate your tech journey.
            </p>

            {/* Feature Highlights */}
            <div className="recruitment-perks-list">
              <div className="recruitment-perk-item">
                <span className="recruitment-perk-icon">
                  <Rocket size={13} />
                </span>
                <span>Work on high-impact, real-world tech projects</span>
              </div>
              <div className="recruitment-perk-item">
                <span className="recruitment-perk-icon">
                  <Sparkles size={13} />
                </span>
                <span>Exclusive workshops, hackathons & mentorship</span>
              </div>
              <div className="recruitment-perk-item">
                <span className="recruitment-perk-icon">
                  <CheckCircle2 size={13} />
                </span>
                <span>Direct networking with industry professionals</span>
              </div>
            </div>

            {/* Actions */}
            <div className="recruitment-modal-actions">
              <button
                onClick={handleApplyClick}
                className="recruitment-cta-btn"
              >
                <span>Fill Google Application Form</span>
                <ExternalLink size={16} />
              </button>

              <button
                onClick={handleClose}
                className="recruitment-dismiss-btn"
              >
                Maybe later
              </button>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
