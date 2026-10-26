'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, CheckCircle2, Clock, Calendar, Sparkles, Trophy, Rocket, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { journey, Milestone } from '@/constants/journey';
import '../styles/JourneySummary.css';

const JourneySummary = () => {
  const router = useRouter();

  // Show the 4 most recent milestones for a fuller, more impressive timeline
  const recentMilestones = journey.slice(-4);
  const [activeIdx, setActiveIdx] = useState<number>(recentMilestones.length - 1);

  return (
    <section id="journey" className="journey-section-turnover">
      {/* Background ambient lighting */}
      <div className="journey-glow-bg" />

      <div className="tnx-container relative z-10">
        <div className="journey-layout-turnover">
          {/* Left Column: Title, Metric Blueprint & Direct Drawer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="journey-info-turnover"
          >
            <div className="journey-badge-row">
              <span className="badge-turnover">
                <span className="badge-radar-dot" />
                EXECUTION ROADMAP
              </span>
            </div>

            <h2 className="journey-heading-turnover">
              Our Journey &amp;{' '}
              <span className="text-gradient-turnover">Verified Milestones</span>
            </h2>

            <p className="journey-lead-turnover">
              Consistently shipping, hacking, and deploying production code since August 2025. Every milestone is marked by open-source repos, hackathon podiums, and scalable community growth.
            </p>

            {/* Quick Metrics Matrix */}
            <div className="journey-stats-matrix">
              <div className="journey-stat-card">
                <div className="journey-stat-num">9+</div>
                <div className="journey-stat-lbl">Sprints Logged</div>
              </div>
              <div className="journey-stat-card">
                <div className="journey-stat-num">100%</div>
                <div className="journey-stat-lbl">Roadmap Velocity</div>
              </div>
              <div className="journey-stat-card">
                <div className="journey-stat-num">2.5K+</div>
                <div className="journey-stat-lbl">Active Network</div>
              </div>
            </div>

            {/* CTA to complete page */}
            <div className="journey-cta-wrap">
              <button
                onClick={() => router.push('/journey')}
                className="btn-turnover-primary"
              >
                <span>Explore Full 2025–2026 Timeline</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Connected Timeline Cards */}
          <div className="journey-timeline-turnover">
            {/* Glowing progress rail */}
            <div className="journey-rail-turnover" />

            <div className="journey-cards-stream">
              {recentMilestones.map((milestone, idx) => {
                const isActivePhase = milestone.status === 'now';
                const isSelected = activeIdx === idx;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`journey-card-wrap-turnover ${isSelected ? 'selected' : ''}`}
                    onMouseEnter={() => setActiveIdx(idx)}
                  >
                    {/* Glowing Node on Rail */}
                    <div className={`journey-node-turnover ${isActivePhase ? 'active-pulse' : ''}`}>
                      <div className="journey-node-inner" />
                    </div>

                    {/* Timeline Glass Card */}
                    <div className="journey-glass-card">
                      {/* Card Header: Date & Status */}
                      <div className="journey-card-meta-bar">
                        <div className="journey-date-tag">
                          <Calendar size={13} className="text-[#0062FF]" />
                          <span>{milestone.date}</span>
                        </div>

                        <div className={`journey-status-pill ${isActivePhase ? 'status-active' : 'status-done'}`}>
                          {isActivePhase ? (
                            <>
                              <span className="pulse-ping" />
                              <span>Active Phase</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 size={12} className="text-[#0062FF]" />
                              <span>Achieved</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="journey-item-title">{milestone.title}</h3>
                      <p className="journey-item-desc">{milestone.description}</p>

                      {/* Impact Pill */}
                      {milestone.impact && (
                        <div className="journey-item-impact">
                          <Zap size={12} className="text-[#0062FF]" />
                          <span><strong>Impact:</strong> {milestone.impact}</span>
                        </div>
                      )}
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

export default JourneySummary;
