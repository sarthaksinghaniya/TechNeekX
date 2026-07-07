'use client';

import React from 'react';
import { Linkedin, Github, Mail, Globe, CheckCircle2 } from 'lucide-react';

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

const TeamPageCard: React.FC<TeamPageCardProps> = ({ member, isFlipped, onFlip }) => {
  return (
    <div
      className={`team-card-wrapper ${isFlipped ? 'flipped' : ''}`}
      onClick={onFlip}
    >
      <div className="team-card-inner">
        {/* Card Front face */}
        <div className="team-card-front">
          <div className="team-card-hover-bg" />
          <div className="team-image-container">
            <img
              src={member.image}
              alt={member.name}
              className="team-member-img"
              loading="lazy"
            />
          </div>

          <div className="team-details-front">
            <div className="team-name-wrapper">
              <h3 className="team-name">{member.name}</h3>
              <CheckCircle2 size={18} className="team-check-badge" />
            </div>
            <p className="team-role">{member.designation}</p>
          </div>

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
                  <Linkedin size={14} />
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
                  <Github size={14} />
                </a>
              )}
              {member.socials.email && (
                <a
                  href={`mailto:${member.socials.email}`}
                  className="team-social-icon"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Mail size={14} />
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
                <Globe size={12} />
              </a>
            )}
          </div>
          <span className="team-view-bio-link">Tap to view details</span>
        </div>

        {/* Card Back face */}
        <div className="team-card-back">
          <div className="team-card-hover-bg" />
          <div className="team-details-back">
            <h3 className="team-name-back">{member.name}</h3>
            <p className="team-role-back">{member.designation}</p>
            <div className="team-divider-back" />
            <p className="team-desc-back">{member.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPageCard;
