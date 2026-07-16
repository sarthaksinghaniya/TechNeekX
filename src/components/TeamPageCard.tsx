'use client';

import React, { useState } from 'react';
import { Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  image: string;
  designation: string;
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
    instagram?: string;
  };
  cta?: string;
  description: string;
}

// 1. Founder Card - Horizontal Centered Card (White Theme)
export const FounderCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="founder-card-container">
      <div className="founder-card-left">
        <div className="founder-image-wrapper">
          <Image src={member.image} alt={member.name} width={200} height={200} className="founder-card-img" />
        </div>
      </div>
      <div className="founder-card-right">
        <span className="founder-badge-tag">FOUNDER SPOTLIGHT</span>
        <h2 className="founder-card-name">{member.name}</h2>
        <p className="founder-card-role designation-gradient">{member.designation}</p>
        <p className="founder-card-desc">{member.description}</p>

        <div className="founder-card-footer">
          {/* Social Links */}
          <div className="founder-socials">
            {member.socials.linkedin && (
              <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="founder-social-icon">
                <Linkedin size={16} />
              </a>
            )}
            {member.socials.github && (
              <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="founder-social-icon">
                <Github size={16} />
              </a>
            )}
            {member.socials.email && (
              <a href={`mailto:${member.socials.email}`} className="founder-social-icon">
                <Mail size={16} />
              </a>
            )}
          </div>

          {/* Portfolio CTA */}
          {member.cta && member.cta !== '#' && (
            <a href={member.cta} target="_blank" rel="noopener noreferrer" className="founder-portfolio-btn">
              <span>View Portfolio</span>
              <ArrowRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper to get developer-style file extensions for student techy vibe
const getTechyTag = (role: string) => {
  const r = role.toLowerCase();
  if (r.includes('chairman')) return '[CHAIRMAN.SYS]';
  if (r.includes('president')) return '[PRESIDENT.SH]';
  if (r.includes('director')) return '[MANAGE.DIR]';
  if (r.includes('technology') || r.includes('cto')) return '[CTO.SRC]';
  if (r.includes('lead')) return '[LEAD.DEV]';
  return '[MEMBER.EXE]';
};

// 2. Official Card - White Theme with Student Techy Vibe
export const OfficialCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="official-techy-card">
      {/* Mac Terminal Header dots on top left */}
      <div className="terminal-header-dots">
        <span className="terminal-dot dot-red"></span>
        <span className="terminal-dot dot-yellow"></span>
        <span className="terminal-dot dot-green"></span>
      </div>

      {/* Techy Tag monospaced label on top right */}
      <span className="official-techy-tag">{getTechyTag(member.designation)}</span>

      {/* Profile Photo */}
      <div className="official-techy-avatar-container">
        <div className="official-techy-avatar">
          <Image src={member.image} alt={member.name} width={110} height={110} className="official-techy-img" />
        </div>
      </div>

      {/* Text Info */}
      <div className="official-techy-info">
        <h3 className="official-techy-name">{member.name}</h3>
        <p className="official-techy-role designation-gradient">{member.designation}</p>
        <p className="official-techy-desc">{member.description}</p>
      </div>

      {/* Card Footer (Socials and optional Portfolio) */}
      <div className="official-techy-footer">
        <div className="official-techy-socials">
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="techy-social-icon">
              <Linkedin size={15} />
            </a>
          )}
          {member.socials.github && (
            <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="techy-social-icon">
              <Github size={15} />
            </a>
          )}
          {member.socials.email && (
            <a href={`mailto:${member.socials.email}`} className="techy-social-icon">
              <Mail size={15} />
            </a>
          )}
        </div>

        {member.cta && member.cta !== '#' && (
          <a href={member.cta} target="_blank" rel="noopener noreferrer" className="techy-portfolio-btn">
            <span>Portfolio</span>
            <ArrowRight size={12} />
          </a>
        )}
      </div>
    </div>
  );
};

// 3. Core Team Card - White Theme with Left-Aligned Content (Image top, Name below, Designation, Truncated Desc, Socials + Portfolio)
export const CoreCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLen = 110;
  const needsTruncation = member.description && member.description.length > maxLen;
  const displayDescription = isExpanded
    ? member.description
    : (needsTruncation ? member.description.slice(0, maxLen).trim() + '...' : member.description);

  return (
    <div className="core-left-card">
      {/* Profile Photo (aligned left) */}
      <div className="core-left-avatar-container">
        <Image src={member.image} alt={member.name} width={84} height={84} className="core-left-img" />
      </div>

      {/* Content (left-aligned) */}
      <div className="core-left-content">
        <h3 className="core-left-name">{member.name}</h3>
        <p className="core-left-role designation-gradient">{member.designation}</p>
        <p className="core-left-desc">
          {displayDescription}
          {needsTruncation && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="read-more-toggle-btn"
            >
              {isExpanded ? ' Read Less' : ' Read More'}
            </button>
          )}
        </p>
      </div>

      {/* Socials & CTA footer (aligned left) */}
      <div className="core-left-footer">
        <div className="core-left-socials">
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="core-left-social-icon">
              <Linkedin size={14} />
            </a>
          )}
          {member.socials.github && (
            <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="core-left-social-icon">
              <Github size={14} />
            </a>
          )}
          {member.socials.email && (
            <a href={`mailto:${member.socials.email}`} className="core-left-social-icon">
              <Mail size={14} />
            </a>
          )}
        </div>

        {member.cta && member.cta !== '#' && (
          <a href={member.cta} target="_blank" rel="noopener noreferrer" className="core-left-portfolio-btn">
            <span>Portfolio</span>
            <ArrowRight size={12} />
          </a>
        )}
      </div>
    </div>
  );
};
