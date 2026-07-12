'use client';

import React, { useRef } from 'react';
import { Linkedin, Github, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

interface TeamMember {
  name: string;
  image: string;
  designation: string;
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
  cta?: string;
  description: string;
}

interface TeamPageCardProps {
  member: TeamMember;
  isFlipped: boolean;
  onFlip: () => void;
}

const getRoleBadge = (role: string) => {
  const r = role.toLowerCase();
  if (r.includes('founder')) return 'FOUNDER';
  if (r.includes('chairman')) return 'CHAIRMAN';
  if (r.includes('president')) return 'PRESIDENT';
  if (r.includes('managing director') || r.includes('md')) return 'MD';
  if (r.includes('cto') || r.includes('technology officer')) return 'CTO';
  if (r.includes('director')) return 'DIRECTOR';
  if (r.includes('lead')) return 'LEAD';
  return 'MEMBER';
};

const TeamPageCard: React.FC<TeamPageCardProps> = ({ member, isFlipped, onFlip }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      className={`team-card-wrapper ${isFlipped ? 'flipped' : ''}`}
      onClick={onFlip}
      onMouseMove={handleMouseMove}
    >
      <div className="team-card-inner">
        {/* Card Front face */}
        <div className="team-card-front">
          {/* Custom Cursor follow radial glow */}
          <div className="team-card-cursor-glow" />

          {/* 1. Image (occupies exactly 60% height, full width) */}
          <div className="team-image-container">
            <img
              src={member.image}
              alt={member.name}
              className="team-member-img"
              loading="lazy"
            />
            {/* Badge overlay on top right */}
            <span className="team-card-role-badge">
              {getRoleBadge(member.designation)}
            </span>
          </div>

          {/* Wrapper for text & actions to have side padding */}
          <div className="team-card-body-front">
            {/* 2. Details (Name & Designation) */}
            <div className="team-details-front">
              <div className="team-name-wrapper">
                <h3 className="team-name">{member.name}</h3>
                <CheckCircle2 size={18} className="team-check-badge" />
              </div>
              <p className="team-role">{member.designation}</p>
            </div>

            {/* 3. Action Row (Socials on left, Portfolio on right) */}
            <div className="team-actions-row">
              <div className="team-social-links">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-icon"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={15} />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-icon"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={15} />
                  </a>
                )}
                {member.socials.email && (
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="team-social-icon"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Mail size={15} />
                  </a>
                )}
              </div>

              {member.cta && member.cta !== '#' && (
                <a
                  href={member.cta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-portfolio-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Portfolio</span>
                  <ArrowRight size={13} className="team-portfolio-arrow" />
                </a>
              )}
            </div>

            {/* 4. Flip Hint Discoverability */}
            <span className="team-view-bio-link">Tap to flip & view bio</span>
          </div>
        </div>

        {/* Card Back face */}
        <div className="team-card-back">
          <div className="team-card-cursor-glow" />
          <div className="team-details-back">
            <h3 className="team-name-back">{member.name}</h3>
            <p className="team-role-back">{member.designation}</p>
            <div className="team-divider-back" />
            <p className="team-desc-back">{member.description}</p>
            <span className="team-flip-prompt-back">Tap to flip front</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPageCard;
