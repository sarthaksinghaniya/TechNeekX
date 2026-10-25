'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { journey } from '@/constants/journey';
import '../styles/JourneySummary.css';

const JourneySummary = () => {
  const router = useRouter();

  // Show only the 3 most recent milestones from the original data
  const recentMilestones = journey.slice(-3);

  return (
    <section id="journey" className="journey-section-enterprise">
      <div className="tnx-container">
        <div className="journey-layout-enterprise">
          {/* Left Column: Title & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="journey-info-col-enterprise"
          >
            <div className="mb-4">
              <span className="badge-enterprise">Continuous Execution</span>
            </div>

            <h2 className="heading-section mb-5">Our Journey &amp; Milestones</h2>

            <p className="subheading-section mb-8 max-w-md">
              Consistently shipping, hacking, and building since August 2025. We
              track our growth through verifiable milestones: national
              hackathons, high-scale community initiatives, and production AI
              deployments.
            </p>

            <button
              onClick={() => router.push('/journey')}
              className="btn-pill-primary"
            >
              <span>Explore Complete Timeline</span>
              <ArrowRight size={15} />
            </button>
          </motion.div>

          {/* Right Column: Clean Enterprise Timeline */}
          <div className="journey-timeline-wrapper-enterprise">
            <div className="journey-line-enterprise" />

            <div className="journey-timeline-items-enterprise">
              {recentMilestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="journey-card-item-enterprise"
                >
                  <div className="journey-dot-enterprise" />

                  <div className="journey-card-box-enterprise">
                    <div className="journey-card-top-enterprise">
                      <span className="journey-date-badge-enterprise">
                        {milestone.date}
                      </span>
                      <span className="journey-status-pill-enterprise flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-[#0062FF]" />
                        <span>
                          {milestone.status === 'now'
                            ? 'Active Phase'
                            : 'Achieved'}
                        </span>
                      </span>
                    </div>

                    <h3 className="journey-title-enterprise">
                      {milestone.title}
                    </h3>

                    <p className="journey-desc-enterprise">
                      {milestone.description}
                    </p>

                    {milestone.impact && (
                      <div className="journey-impact-enterprise">
                        <Zap size={11} className="text-[#0062FF]" />
                        <span>{milestone.impact}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySummary;
