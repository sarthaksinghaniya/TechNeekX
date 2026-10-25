'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ShieldCheck,
  Trophy,
  Users,
  Sparkles,
  Code2,
  Crown,
  HeartHandshake,
  Flame,
  Linkedin,
  Github,
  Mail,
  ExternalLink,
  X,
  Check,
  ArrowRight,
  Quote,
  Compass,
  Award
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import Image from 'next/image';
import girlsData from '../../../data/data.json';
import '@/styles/GirlsInTechPage.css';

// Icon Map for dynamic icons in stats and pillars
const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldCheck,
  Trophy,
  Users,
  Sparkles,
  Code2,
  Crown,
  HeartHandshake,
  Flame,
  Compass,
  Award
};

interface Trailblazer {
  id: string;
  name: string;
  role: string;
  domain: string;
  image: string;
  alt: string;
  bio: string;
  quote: string;
  achievements: string[];
  superpowers: string[];
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
    cta?: string;
  };
  badge: string;
}

interface Milestone {
  id: string;
  title: string;
  category: string;
  date: string;
  impact: string;
  description: string;
  image: string;
  alt: string;
  leadBy: string;
  tag: string;
}

export default function GirlsInTechPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedProfile, setSelectedProfile] = useState<Trailblazer | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const {
    meta,
    stats = [],
    feministPillars = [],
    trailblazers = [],
    milestones = [],
    feministManifesto,
    ctaSection
  } = girlsData;

  // Filter milestones based on active category
  const filteredMilestones = milestones.filter((item: Milestone) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Operations' && item.category.includes('Operations')) return true;
    if (activeTab === 'Design' && item.category.includes('Design')) return true;
    if (activeTab === 'AI & Tech' && (item.category.includes('AI') || item.category.includes('Engineering') || item.category.includes('Hackathon'))) return true;
    if (activeTab === 'Mentorship & Media' && (item.category.includes('Mentorship') || item.category.includes('Media') || item.category.includes('Inclusion'))) return true;
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15,
      },
    },
  };

  const tabs = ['All', 'Operations', 'Design', 'AI & Tech', 'Mentorship & Media'];

  return (
    <>
      <Loader />
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="git-page-container"
        id="main-content"
      >
        {/* Ambient Gradient Background Blobs */}
        <div className="git-page-bg-blob git-blob-1" aria-hidden="true" />
        <div className="git-page-bg-blob git-blob-2" aria-hidden="true" />
        <div className="git-page-bg-blob git-blob-3" aria-hidden="true" />

        <div className="git-page-content-wrapper">
          {/* Breadcrumb Navigation */}
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4"
          >
            <button
              onClick={() => router.push('/')}
              className="git-back-btn"
              aria-label="Navigate back to TechNeekX home page"
            >
              <ChevronLeft size={16} aria-hidden="true" />
              <span>Back to Home</span>
            </button>
          </motion.nav>

          {/* Page Hero Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="git-page-header"
          >
            <span className="git-badge">{meta.badge}</span>
            <h1 className="git-page-title">
              Girls in <span className="git-page-title-gradient">TechNeekX</span>
            </h1>
            <p className="git-page-description">
              {meta.description}
            </p>
          </motion.header>

          {/* Inspirational Feminism Quote Banner */}
          <motion.aside
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="git-hero-quote-box"
            aria-label="Core Inspiration Quote"
          >
            <p className="git-hero-quote-text">{meta.quote}</p>
            <span className="git-hero-quote-author">— {meta.quoteAuthor}</span>
          </motion.aside>

          {/* Key Community Metrics & Stats */}
          <section className="git-stats-section" aria-label="Impact and Representation Statistics">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="git-stats-grid"
            >
              {stats.map((stat: any, idx: number) => {
                const IconComponent = stat.icon && iconMap[stat.icon] ? iconMap[stat.icon] : Sparkles;
                return (
                  <motion.div
                    key={`stat-${idx}`}
                    variants={itemVariants}
                    className="git-stat-card"
                  >
                    <div className="git-stat-icon-wrapper" aria-hidden="true">
                      <IconComponent size={24} />
                    </div>
                    <div className="git-stat-value">{stat.value}</div>
                    <h2 className="git-stat-label">{stat.label}</h2>
                    <p className="git-stat-subtext">{stat.subtext}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>

          {/* Section Divider */}
          <div className="git-section-divider" aria-hidden="true">
            <div className="git-divider-line" />
            <span className="git-divider-star">✦</span>
            <div className="git-divider-line" />
          </div>

          {/* Feminist Pillars Section */}
          <section className="git-pillars-section" aria-labelledby="pillars-heading">
            <div className="git-section-header">
              <span className="git-section-badge">Core Ideology</span>
              <h2 id="pillars-heading" className="git-section-title">Why We Champion Feminism</h2>
              <p className="git-section-subtitle">
                Feminism in TechNeekX is not an afterthought; it is our foundation. We believe in autonomous ownership, merit-based growth, and building sisterhood in engineering.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              className="git-pillars-grid"
            >
              {feministPillars.map((pillar: any) => {
                const PillarIcon = pillar.icon && iconMap[pillar.icon] ? iconMap[pillar.icon] : Sparkles;
                return (
                  <motion.article
                    key={pillar.id}
                    variants={itemVariants}
                    className="git-pillar-card"
                  >
                    <div className={`git-pillar-icon-box bg-gradient-to-br ${pillar.gradient}`} aria-hidden="true">
                      <PillarIcon size={26} />
                    </div>
                    <span className="git-pillar-tagline">{pillar.tagline}</span>
                    <h3 className="git-pillar-title">{pillar.title}</h3>
                    <p className="git-pillar-desc">{pillar.description}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </section>

          {/* Section Divider */}
          <div className="git-section-divider" aria-hidden="true">
            <div className="git-divider-line" />
            <span className="git-divider-star">✦</span>
            <div className="git-divider-line" />
          </div>

          {/* Trailblazers (Female Leaders & Builders) */}
          <section className="git-trailblazers-section" aria-labelledby="trailblazers-heading">
            <div className="git-section-header">
              <span className="git-section-badge">Pillars of Excellence</span>
              <h2 id="trailblazers-heading" className="git-section-title">The Women Leading TechNeekX</h2>
              <p className="git-section-subtitle">
                Meet the builders, researchers, and directors turning bold ambitions into production code, vibrant communities, and national hackathon victories.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="git-trailblazers-grid"
            >
              {trailblazers.map((member: Trailblazer) => (
                <motion.article
                  key={member.id}
                  variants={itemVariants}
                  className="git-profile-card"
                >
                  {/* Photo Container */}
                  <figure className="git-profile-image-wrap">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="git-profile-image"
                      priority={false}
                    />
                    <div className="git-profile-badge-overlay">
                      {member.badge}
                    </div>
                    <div className="git-profile-gradient-overlay">
                      <figcaption className="git-profile-overlay-domain">
                        {member.domain}
                      </figcaption>
                    </div>
                  </figure>

                  {/* Body Content */}
                  <div className="git-profile-body">
                    <h3 className="git-profile-name">{member.name}</h3>
                    <p className="git-profile-role">{member.role}</p>

                    <blockquote className="git-profile-quote">
                      "{member.quote}"
                    </blockquote>

                    {/* Superpowers Pills */}
                    <div className="git-profile-superpowers" aria-label="Key Technical Superpowers">
                      {member.superpowers.map((power, pIdx) => (
                        <span key={pIdx} className="git-superpower-tag">
                          {power}
                        </span>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <footer className="git-profile-footer">
                      <div className="git-profile-socials">
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="git-social-btn"
                            aria-label={`${member.name}'s LinkedIn Profile`}
                          >
                            <Linkedin size={15} />
                          </a>
                        )}
                        {member.socials.github && (
                          <a
                            href={member.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="git-social-btn"
                            aria-label={`${member.name}'s GitHub Profile`}
                          >
                            <Github size={15} />
                          </a>
                        )}
                        {member.socials.email && (
                          <a
                            href={`mailto:${member.socials.email}`}
                            className="git-social-btn"
                            aria-label={`Send an email to ${member.name}`}
                          >
                            <Mail size={15} />
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => setSelectedProfile(member)}
                        className="git-details-trigger-btn"
                        aria-label={`View full achievements and story of ${member.name}`}
                      >
                        <span>Full Story</span>
                        <ArrowRight size={14} aria-hidden="true" />
                      </button>
                    </footer>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </section>

          {/* Section Divider */}
          <div className="git-section-divider" aria-hidden="true">
            <div className="git-divider-line" />
            <span className="git-divider-star">✦</span>
            <div className="git-divider-line" />
          </div>

          {/* Milestones & Achievements Section */}
          <section className="git-milestones-section" aria-labelledby="milestones-heading">
            <div className="git-section-header">
              <span className="git-section-badge">Proven Track Record</span>
              <h2 id="milestones-heading" className="git-section-title">What They Have Achieved</h2>
              <p className="git-section-subtitle">
                From 491-participant hackathons to AI coding sprints, design championships, and university-wide mentorship labs.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="git-tabs-nav" role="tablist" aria-label="Filter milestones by domain">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`git-tab-btn ${activeTab === tab ? 'active' : ''}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Milestones Cards Grid */}
            <motion.div
              layout
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="git-milestones-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredMilestones.map((item: Milestone) => (
                  <motion.article
                    layout
                    key={item.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="git-milestone-card"
                  >
                    <figure className="git-milestone-image-wrap">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="git-milestone-image"
                      />
                      <span className="git-milestone-tag-overlay">{item.tag}</span>
                      <span className="git-milestone-date-overlay">{item.date}</span>
                    </figure>

                    <div className="git-milestone-body">
                      <span className="git-milestone-impact">{item.impact}</span>
                      <h3 className="git-milestone-title">{item.title}</h3>
                      <p className="git-milestone-desc">{item.description}</p>

                      <div className="git-milestone-lead">
                        <Award size={14} className="text-pink-500" aria-hidden="true" />
                        <span>Led by <strong className="git-milestone-lead-name">{item.leadBy}</strong></span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* Feminist Tech Manifesto Section */}
          {feministManifesto && (
            <section className="git-manifesto-box" aria-labelledby="manifesto-heading">
              <div className="git-manifesto-header">
                <span className="git-section-badge">Declaration of Equality</span>
                <h2 id="manifesto-heading" className="git-section-title">{feministManifesto.title}</h2>
                <p className="git-manifesto-lead">{feministManifesto.lead}</p>
              </div>

              <div className="git-manifesto-grid">
                {feministManifesto.points.map((point: any, idx: number) => (
                  <div key={idx} className="git-manifesto-point">
                    <div className="git-manifesto-bullet" aria-hidden="true">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="git-manifesto-point-title">{point.title}</h3>
                      <p className="git-manifesto-point-desc">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Call to Action Section */}
          {ctaSection && (
            <section className="git-cta-section" aria-labelledby="cta-heading">
              {/* Subtle wings watermark behind CTA */}
              <Image
                src="/about/tnx-wings.webp"
                alt="TechNeekX Wings Watermark Icon"
                width={360}
                height={360}
                className="git-cta-watermark"
                aria-hidden="true"
              />
              <span className="git-cta-badge">Step Forward</span>
              <h2 id="cta-heading" className="git-cta-title">{ctaSection.title}</h2>
              <p className="git-cta-subtitle">{ctaSection.subtitle}</p>

              <div className="git-cta-btn-group">
                <button
                  onClick={() => router.push(ctaSection.primaryBtnLink)}
                  className="git-btn-primary"
                  aria-label="Join TechNeekX Community"
                >
                  <span>{ctaSection.primaryBtnText}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
                <a
                  href={ctaSection.secondaryBtnLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="git-btn-secondary"
                  aria-label="Connect with TechNeekX on WhatsApp"
                >
                  <span>{ctaSection.secondaryBtnText}</span>
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </section>
          )}
        </div>

        {/* Profile Detail Modal */}
        <AnimatePresence>
          {selectedProfile && (
            <div className="git-modal-wrapper" role="dialog" aria-modal="true" aria-labelledby="modal-profile-name">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProfile(null)}
                className="git-modal-backdrop"
                aria-hidden="true"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 25 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="git-modal-content"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="git-modal-close-btn"
                  aria-label="Close modal dialog"
                >
                  <X size={20} />
                </button>

                {/* Hero Header */}
                <div className="git-modal-hero">
                  <div className="git-modal-hero-image-wrap">
                    <Image
                      src={selectedProfile.image}
                      alt={selectedProfile.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="git-modal-hero-info">
                    <h2 id="modal-profile-name" className="git-modal-title">{selectedProfile.name}</h2>
                    <p className="git-modal-role">{selectedProfile.role} • {selectedProfile.domain}</p>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="git-modal-body">
                  <h3 className="git-modal-section-title">About & Mission</h3>
                  <p className="git-modal-bio">{selectedProfile.bio}</p>

                  <h3 className="git-modal-section-title">Key Achievements & Impact</h3>
                  <ul className="git-modal-achievements-list">
                    {selectedProfile.achievements.map((item, idx) => (
                      <li key={idx} className="git-modal-achievement-item">
                        <Check size={18} className="git-modal-check-icon" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions & Links */}
                  <div className="git-modal-actions">
                    {selectedProfile.socials.cta && (
                      <a
                        href={selectedProfile.socials.cta}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="git-btn-primary text-xs py-2 px-4"
                      >
                        <span>View Portfolio / Project</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {selectedProfile.socials.linkedin && (
                      <a
                        href={selectedProfile.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="git-btn-secondary text-xs py-2 px-4 text-slate-800 border-slate-300 hover:bg-slate-100"
                      >
                        <Linkedin size={14} />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {selectedProfile.socials.github && (
                      <a
                        href={selectedProfile.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="git-btn-secondary text-xs py-2 px-4 text-slate-800 border-slate-300 hover:bg-slate-100"
                      >
                        <Github size={14} />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <Footer />
      </motion.main>
    </>
  );
}
