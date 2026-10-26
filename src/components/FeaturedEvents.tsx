'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  ArrowRight,
  Users,
  Trophy,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import eventsData from '../../data/events.json';
import '../styles/FeaturedEvents.css';

interface Event {
  id: string;
  name: string;
  type: string;
  location: string;
  registrations: string;
  attendees: string;
  image: string;
  cardTheme: string;
  isFeatured: boolean;
  description?: string;
  tagline?: string;
  date?: string;
  teams?: string;
  cta?: {
    text: string;
    link: string;
  };
}

const FeaturedEvents = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter for featured events with valid images
  const featuredEvents = (eventsData as Event[]).filter((e) => e.isFeatured && e.image);

  const activeEvent = featuredEvents[activeIndex] || featuredEvents[0];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredEvents.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length);
  };

  return (
    <section id="featured-events" className="turnover-events-section" aria-label="Featured Hackathons and Summits">
      {/* Background ambient lighting */}
      <div className="turnover-ambient-glow turnover-glow-blue events-glow-1" />
      <div className="turnover-ambient-glow turnover-glow-cyan events-glow-2" />

      <div className="turnover-events-container">
        
        {/* Section Header */}
        <div className="turnover-events-header">
          <div className="turnover-badge-pill">
            <span className="turnover-badge-dot" />
            <span className="turnover-badge-text">Competitive Hackathons &amp; Technical Summits</span>
          </div>

          <h2 className="turnover-events-title">
            Where Builders Compete <br />
            <span className="turnover-heading-highlight">And Ship Under Pressure</span>
          </h2>

          <p className="turnover-events-subtitle">
            From 24-hour sprint hackathons to national tech summits, TechNeekX convenes
            high-octane developers to build production software against real constraints.
          </p>

          {/* Event Switcher Dock */}
          <div className="turnover-event-switcher-dock" role="tablist" aria-label="Featured events switcher">
            {featuredEvents.map((event, idx) => {
              const isActive = idx === activeIndex;

              return (
                <button
                  key={event.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  className={`turnover-event-tab ${isActive ? 'active' : ''}`}
                >
                  <Trophy size={14} className="turnover-event-tab-icon" />
                  <span className="turnover-event-tab-name">{event.name}</span>
                  {isActive && <span className="turnover-tab-active-dot" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Event Showcase Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEvent.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="turnover-event-showcase-grid"
          >
            {/* LEFT: Live Event Photo Visual */}
            <div className="turnover-event-visual-col">
              <div className="turnover-event-visual-frame">
                <div className="turnover-event-top-bar">
                  <div className="turnover-event-location-pill">
                    <MapPin size={13} className="text-[#0062FF]" />
                    <span>{activeEvent.location || 'India'}</span>
                  </div>
                  {activeEvent.date && (
                    <div className="turnover-event-date-pill">
                      <Calendar size={13} className="text-[#626873]" />
                      <span>{activeEvent.date}</span>
                    </div>
                  )}
                </div>

                <div className="turnover-event-image-wrap">
                  <Image
                    src={activeEvent.image || '/hero/techneekx-sculpt.jpg'}
                    alt={activeEvent.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="turnover-event-img"
                    priority
                  />
                  <div className="turnover-image-overlay-vignette" />
                </div>

                {/* Floating Attendee Stats Badge */}
                <div className="turnover-event-floating-badge">
                  <Users size={15} className="text-[#0062FF]" />
                  <div className="turnover-badge-content">
                    <span className="badge-impact-label">Hackathon Turnout</span>
                    <span className="badge-impact-val">
                      {activeEvent.attendees} Attendees • {activeEvent.registrations} Registered
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Event Narrative & Metrics */}
            <div className="turnover-event-details-col">
              
              <div className="turnover-event-category-row">
                <span className="turnover-event-type-badge">
                  {activeEvent.type || 'Hackathon Sprint'}
                </span>
                {activeEvent.tagline && (
                  <span className="turnover-event-tagline">{activeEvent.tagline}</span>
                )}
              </div>

              <h3 className="turnover-event-heading">{activeEvent.name}</h3>

              <p className="turnover-event-description">
                {activeEvent.description || 'An intensive developer competition bringing together students, engineers, and founders to solve real-world industry problem statements under timed conditions.'}
              </p>

              {/* Event Metrics Ribbon */}
              <div className="turnover-event-metrics-bar">
                <div className="turnover-event-metric-box">
                  <span className="event-metric-val">{activeEvent.registrations}</span>
                  <span className="event-metric-lbl">Total Registrations</span>
                </div>
                <div className="turnover-event-metric-box">
                  <span className="event-metric-val">{activeEvent.attendees}</span>
                  <span className="event-metric-lbl">In-Person Hackers</span>
                </div>
                {activeEvent.teams && (
                  <div className="turnover-event-metric-box">
                    <span className="event-metric-val">{activeEvent.teams}</span>
                    <span className="event-metric-lbl">Competing Teams</span>
                  </div>
                )}
              </div>

              {/* Event Highlights Checklist */}
              <div className="turnover-event-highlights">
                <div className="turnover-highlight-item">
                  <Sparkles size={14} className="text-[#0062FF]" />
                  <span>Real-time code evaluation and live demos to industry mentors</span>
                </div>
                <div className="turnover-highlight-item">
                  <Trophy size={14} className="text-[#0062FF]" />
                  <span>Cash prizes, incubation support, and national hackathon ranking points</span>
                </div>
              </div>

              {/* CTA Row */}
              <div className="turnover-event-actions">
                {activeEvent.cta?.link ? (
                  <a
                    href={activeEvent.cta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="turnover-btn-primary"
                    aria-label={`View ${activeEvent.name} project showcase`}
                  >
                    <span>{activeEvent.cta.text || 'View Projects'}</span>
                    <ExternalLink size={15} className="turnover-btn-icon" />
                  </a>
                ) : (
                  <button
                    onClick={() => router.push('/events')}
                    className="turnover-btn-primary"
                  >
                    <span>Explore Event Reel</span>
                    <ArrowRight size={15} className="turnover-btn-icon" />
                  </button>
                )}

                <button
                  onClick={() => router.push('/events')}
                  className="turnover-btn-video"
                >
                  <div className="turnover-play-icon-wrap">
                    <Calendar size={14} />
                  </div>
                  <div className="turnover-video-text-wrap">
                    <span className="turnover-video-title">All Hackathons</span>
                    <span className="turnover-video-duration">Full Calendar</span>
                  </div>
                </button>
              </div>

              {/* Pagination Slider Controls */}
              <div className="turnover-event-nav-row">
                <span className="turnover-counter-text">
                  0{activeIndex + 1} <span className="text-[#8A92A0]">/ 0{featuredEvents.length}</span>
                </span>
                <div className="turnover-arrow-group">
                  <button
                    onClick={handlePrev}
                    className="turnover-arrow-btn"
                    aria-label="Previous event"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="turnover-arrow-btn"
                    aria-label="Next event"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA to Events Page */}
        <div className="turnover-events-footer">
          <button
            onClick={() => router.push('/events')}
            className="turnover-explore-all-btn"
          >
            <span>Explore Complete Events &amp; Hackathon Calendar</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedEvents;
