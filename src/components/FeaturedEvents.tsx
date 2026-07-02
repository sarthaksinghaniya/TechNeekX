'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
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
}

const FeaturedEvents = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Only display featured events
  const featuredEvents = (eventsData as Event[]).filter((e) => e.isFeatured);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent layout shifts during initial SSR hydration
  if (!isMounted) {
    return (
      <section id="featured-events" className="featured-events-section">
        <div className="events-bg-blob events-blob-1" />
        <div className="events-bg-blob events-blob-2" />
        <div className="events-container">
          <div className="events-layout">
            <div className="events-content">
              <span className="events-subtitle-badge">MILESTONES</span>
              <h2 className="events-title">Featured Events</h2>
              <div className="events-title-line" />
              <p className="events-description">
                Bringing the developer community together through high-impact hackathons, workshops, and meetups.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="featured-events" className="featured-events-section">
      {/* Decorative Blobs */}
      <div className="events-bg-blob events-blob-1" />
      <div className="events-bg-blob events-blob-2" />

      <div className="events-container">
        <div className="events-layout">
          
          {/* Left Side: Typographic Content */}
          <div className="events-content">
            <span className="events-subtitle-badge">MILESTONES</span>
            <h2 className="events-title">Featured Events</h2>
            <div className="events-title-line" />
            <p className="events-description">
              Bringing the developer community together through high-impact hackathons, workshops, and meetups.
            </p>
            <div className="events-cta-wrapper">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push('/events')}
                className="events-cta"
              >
                Explore Events
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>

          {/* Right Side: Drag Carousel Deck */}
          <div className="events-deck-wrapper">
            <div className="events-grid mobile-carousel-deck">
              {featuredEvents.map((event, index) => {
                // Calculate relative index for stack animation
                const relativeIndex = (index - activeIndex + featuredEvents.length) % featuredEvents.length;

                let xOffset = 0;
                let scale = 1;
                let rotate = 0;
                let opacity = 1;
                let zIndex = 10;
                let pointerEvents: 'auto' | 'none' = 'auto';

                if (relativeIndex === 0) {
                  xOffset = 0;
                  scale = 1;
                  rotate = 0;
                  opacity = 1;
                  zIndex = 10;
                  pointerEvents = 'auto';
                } else if (relativeIndex === 1) {
                  xOffset = -20;
                  scale = 0.94;
                  rotate = -3;
                  opacity = 0.75;
                  zIndex = 9;
                  pointerEvents = 'none';
                } else if (relativeIndex === 2) {
                  xOffset = -40;
                  scale = 0.88;
                  rotate = -6;
                  opacity = 0.45;
                  zIndex = 8;
                  pointerEvents = 'none';
                } else {
                  xOffset = -60;
                  scale = 0.82;
                  rotate = -9;
                  opacity = 0;
                  zIndex = 0;
                  pointerEvents = 'none';
                }

                return (
                  <motion.div
                    key={event.id}
                    className={`event-card theme-${event.cardTheme}`}
                    style={{ pointerEvents }}
                    animate={{
                      x: xOffset,
                      scale: scale,
                      rotate: rotate,
                      opacity: opacity,
                      zIndex: zIndex,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 26,
                    }}
                    drag={relativeIndex === 0 ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={(e, info) => {
                      if (info.offset.x < -100) {
                        setActiveIndex((prev) => (prev + 1) % featuredEvents.length);
                      } else if (info.offset.x > 100) {
                        setActiveIndex((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length);
                      }
                    }}
                  >
                    {/* Event Name Header */}
                    <div className="event-card-header">
                      <h3 className="event-name">{event.name}</h3>
                    </div>

                    {/* Event Image & Overlay Badges */}
                    <div className="event-image-container">
                      <img src={event.image} alt={event.name} className="event-image" />
                      <div className="event-badges-overlay">
                        <div className="event-stat-badge">
                          <span className="badge-value">{event.registrations}</span>
                          <span className="badge-label"> Registrations</span>
                        </div>
                        <div className="event-stat-badge">
                          <span className="badge-value">{event.attendees}</span>
                          <span className="badge-label"> Attendees</span>
                        </div>
                      </div>
                    </div>

                    {/* Event Footer Location Badge */}
                    <div className="event-card-footer">
                      <div className="event-location-badge">
                        <MapPin size={16} className="location-pin-icon" />
                        <span className="location-text">{event.location}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
