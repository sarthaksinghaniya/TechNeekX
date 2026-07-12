'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  Calendar, 
  ArrowRight, 
  ExternalLink, 
  Search, 
  Palette, 
  Zap, 
  Code, 
  Trophy, 
  Cpu, 
  Sparkles, 
  Brain, 
  Image as ImageIcon,
  ChevronLeft,
  X
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import eventsData from '../../../data/events.json';
import '@/styles/EventsPage.css';
import Loader from '@/components/Loader';

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
  date?: string; // YYYY-MM-DD format
  description?: string;
  tagline?: string;
  icon?: string;
  gradient?: string;
  cta?: {
    text: string;
    link: string;
  };
  registration?: string; // registration link
}

// Icon mapper for events
const iconMap: Record<string, React.ComponentType<any>> = {
  Palette,
  Zap,
  Code,
  Trophy,
  Cpu,
  Sparkles,
  Brain
};

const EventsPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'current' | 'upcoming' | 'previous'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [today, setToday] = useState('2026-07-03'); // User's local workspace date as baseline
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    setIsMounted(true);
    // Dynamically fetch today's date in local YYYY-MM-DD format to match system time
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    setToday(`${year}-${month}-${day}`);
  }, []);

  if (!isMounted) {
    return (
      <div className="events-page-container">
        <div className="events-page-content-wrapper">
          <div className="events-page-header">
            <span className="events-page-badge">MILSTONES & CALENDAR</span>
            <h1 className="events-page-title">TechNeekX Events</h1>
            <p className="events-page-description">Loading events calendar...</p>
          </div>
        </div>
      </div>
    );
  }

  // Helper to normalize dates (handles formats like "2026-7-24" by padding single digits to "2026-07-24")
  const normalizeDateStr = (str?: string) => {
    if (!str) return '';
    const parts = str.split('-');
    if (parts.length === 3) {
      const y = parts[0];
      const m = parts[1].padStart(2, '0');
      const d = parts[2].padStart(2, '0');
      return `${y}-${m}-${d}`;
    }
    return str;
  };

  // Determine event status programmatically
  const getEventStatus = (eventDateStr?: string) => {
    if (!eventDateStr) return 'previous'; // Default fallback for old events without date
    
    const normDate = normalizeDateStr(eventDateStr);
    if (normDate === today) {
      return 'current';
    } else if (normDate > today) {
      return 'upcoming';
    } else {
      return 'previous';
    }
  };

  const getStatusLabel = (status: 'current' | 'upcoming' | 'previous') => {
    switch (status) {
      case 'current':
        return 'Active Now';
      case 'upcoming':
        return 'Upcoming';
      case 'previous':
        return 'Completed';
    }
  };

  const getFormattedDate = (dateStr?: string) => {
    if (!dateStr) return 'Date TBA';
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Filter events based on active tab and search query
  const filteredEvents = (eventsData as Event[]).filter((event) => {
    const status = getEventStatus(event.date);
    
    // Tab filter
    if (activeTab !== 'all' && status !== activeTab) {
      return false;
    }
    
    // Search query filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const nameMatch = event.name.toLowerCase().includes(query);
      const locationMatch = event.location.toLowerCase().includes(query);
      const typeMatch = event.type.toLowerCase().includes(query);
      const descMatch = event.description?.toLowerCase().includes(query) || false;
      return nameMatch || locationMatch || typeMatch || descMatch;
    }
    
    return true;
  });

  // Sort events so current/upcoming appear first
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = a.date || '0000-00-00';
    const dateB = b.date || '0000-00-00';
    
    const normA = normalizeDateStr(dateA);
    const normB = normalizeDateStr(dateB);
    
    // Deciding order: We want upcoming closest to today first, then current, then previous (most recent first)
    if (normA > today && normB > today) {
      return normA.localeCompare(normB); // Ascending for future (closest first)
    }
    return normB.localeCompare(normA); // Descending for past (newest first)
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
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15
      }
    }
  };

  const tabs = [
    { id: 'all', label: 'All Events' },
    { id: 'current', label: 'Active Now' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'previous', label: 'Completed' }
  ];

  return (
    <>
      <Loader/>
      <Navbar />

      <main className="events-page-container">
        {/* Background blobs */}
        <div className="events-page-bg-blob events-page-blob-1" />
        <div className="events-page-bg-blob events-page-blob-2" />
        <div className="events-page-bg-blob events-page-blob-3" />

        <div className="events-page-content-wrapper">
          {/* Back to Home Link */}
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
            className="events-page-header"
          >
            <span className="events-page-badge">Milestones & Calendar</span>
            <h1 className="events-page-title">Community Events</h1>
            <p className="events-page-description">
              Explore our journey of high-impact hackathons, development workshops, community meetups, and creative showcases.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10">
            {/* Tabs */}
            <div className="events-tabs-container mb-0 w-auto">
              <div className="events-tabs-list">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`events-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="events-tab-active-bg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search events, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent text-sm transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Events Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="events-cards-grid"
          >
            <AnimatePresence mode="popLayout">
              {sortedEvents.length > 0 ? (
                sortedEvents.map((event) => {
                  const status = getEventStatus(event.date);
                  const IconComponent = event.icon ? iconMap[event.icon] : null;

                  return (
                    <motion.div
                      layout
                      key={event.id}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.15 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="event-page-card"
                      onClick={() => setSelectedEvent(event)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Image Header with Badge Overlay */}
                      <div className="event-page-image-container">
                        {event.image ? (
                          <img 
                            src={event.image} 
                            alt={event.name} 
                            className="event-page-image" 
                          />
                        ) : (
                          <div className={`event-page-image-placeholder bg-gradient-to-br ${event.gradient || 'from-slate-800 to-slate-900'}`}>
                            {IconComponent ? (
                              <IconComponent size={40} className="text-white/40" />
                            ) : (
                              <ImageIcon size={40} className="text-white/40" />
                            )}
                          </div>
                        )}
                        
                        {/* Overlay Badges */}
                        <div className="event-page-overlay-badges">
                          <span className="event-page-type-tag">{event.type}</span>
                          <span className={`event-page-status-badge event-status-${status}`}>
                            <span className="event-status-dot" />
                            {getStatusLabel(status)}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="event-page-card-body">
                        <span className="event-page-card-date">
                          {getFormattedDate(event.date)}
                        </span>
                        <h3 className="event-page-card-title">{event.name}</h3>

                        {/* Location and Venue info */}
                        <div className="event-page-meta-item mb-4">
                          <MapPin size={15} />
                          <span>{event.location}</span>
                        </div>

                        {/* Stats Badges */}
                        <div className="event-page-stats-pill-row mt-auto">
                          <div className="event-page-pill-badge registrations">
                            <span>{event.registrations}</span> Registrations
                          </div>
                          <div className="event-page-pill-badge">
                            <Users size={12} />
                            <span>{event.attendees}</span> Attendees
                          </div>
                        </div>

                        {/* Card CTA Actions */}
                        {event.cta && (
                          <div className="event-page-card-actions">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation(); // prevent modal opening duplicate
                                if (event.cta?.text.toLowerCase().includes('detail')) {
                                  setSelectedEvent(event);
                                } else if (event.cta?.link) {
                                  window.open(event.cta.link, '_blank');
                                }
                              }}
                              className="event-page-btn-action event-page-btn-hero"
                            >
                              <span>{event.cta.text}</span>
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full"
                >
                  <div className="events-empty-state">
                    <Search className="mx-auto text-slate-300" size={48} />
                    <h3 className="events-empty-title">No events found</h3>
                    <p className="events-empty-desc">
                      We couldn't find any events matching your search or filter criteria. Try adjusting your query or tab selection.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Details Modal Pop-up */}
        <AnimatePresence>
          {selectedEvent && (
            <div className="event-modal-overlay-wrapper">
              {/* Backdrop blur overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedEvent(null)}
                className="event-modal-backdrop"
              />

              {/* Modal panel container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 25 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="event-modal-content"
              >
                {/* Close button icon */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="event-modal-close-btn"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* Modal image panel */}
                <div className="event-modal-image-container">
                  {selectedEvent.image ? (
                    <img 
                      src={selectedEvent.image} 
                      alt={selectedEvent.name} 
                      className="event-modal-image" 
                    />
                  ) : (
                    <div className={`event-modal-image-placeholder bg-gradient-to-br ${selectedEvent.gradient || 'from-slate-800 to-slate-900'}`}>
                      {selectedEvent.icon && iconMap[selectedEvent.icon] ? (
                        (() => {
                          const ModalIcon = iconMap[selectedEvent.icon];
                          return <ModalIcon size={56} className="text-white/40" />;
                        })()
                      ) : (
                        <ImageIcon size={56} className="text-white/40" />
                      )}
                    </div>
                  )}

                  {/* Overlay Badges */}
                  <div className="event-modal-overlay-badges">
                    <span className="event-page-type-tag">{selectedEvent.type}</span>
                    <span className={`event-page-status-badge event-status-${getEventStatus(selectedEvent.date)}`}>
                      <span className="event-status-dot" />
                      {getStatusLabel(getEventStatus(selectedEvent.date))}
                    </span>
                  </div>
                </div>

                {/* Modal information content */}
                <div className="event-modal-body">
                  <span className="event-modal-date">
                    {getFormattedDate(selectedEvent.date)}
                  </span>
                  
                  <h2 className="event-modal-title">
                    {selectedEvent.name}
                  </h2>

                  {/* Tagline */}
                  {selectedEvent.tagline && (
                    <p className="event-modal-tagline">
                      "{selectedEvent.tagline}"
                    </p>
                  )}

                  {/* Description */}
                  {selectedEvent.description && (
                    <p className="event-modal-description">
                      {selectedEvent.description}
                    </p>
                  )}

                  {/* Location/Venue */}
                  <div className="event-modal-meta-item">
                    <MapPin size={18} />
                    <span>Venue: {selectedEvent.location}</span>
                  </div>

                  {/* Registration/Attendees Stats badges */}
                  <div className="event-modal-stats-row">
                    <div className="event-modal-stat-badge registrations">
                      Registrations: <span>{selectedEvent.registrations}</span>
                    </div>
                    <div className="event-modal-stat-badge attendees">
                      <Users size={14} />
                      Attendees: <span>{selectedEvent.attendees}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  {selectedEvent.cta && !selectedEvent.cta.text.toLowerCase().includes('detail') && selectedEvent.cta.link && (
                    <div className="event-modal-actions">
                      <button 
                        onClick={() => window.open(selectedEvent.cta!.link, '_blank')}
                        className="event-page-btn-action event-page-btn-hero"
                      >
                        <span>{selectedEvent.cta.text}</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
};

export default EventsPage;
