'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import '../styles/FounderNote.css';

const FounderNote = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="founder-note" className="founder-note-section">
      <div className="founder-glow-backdrop" />

      <div className="founder-note-container">
        {/* Paper card with initial animation and slight tilt toward left when in focus */}
        <motion.div
          className="founder-note-paper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Top row with badge & quote icon */}
          <div className="founder-top-row">
            <span className="founder-studio-badge">
              <Sparkles size={12} className="text-[#0062FF]" />
              FOUNDER MANIFESTO
            </span>
            <div className="founder-quote-symbol">
              <Quote size={18} />
            </div>
          </div>

          {/* Note Title */}
          <h2 className="founder-note-heading">Dear Future Innovator,</h2>

          {/* Note Content */}
          <div className="founder-note-body">
            <p>
              The world is moving faster than ever. Standard education isn&apos;t keeping up. The old paths are crumbling.
            </p>
            <p className="founder-note-accent">
              The truth is:
            </p>
            <p>
              No one knows exactly what the future looks like. But we know who will build it.
            </p>
            <p>
              At <strong>TechNeekX</strong>, we aren&apos;t just a community; we are an engine. An engine that turns raw potential into shipping products. We believe that the most valuable thing we can do is help each other create.
            </p>
            <p>
              We are here to make sense of this new era, one line of code at a time.
            </p>
            <p>
              Welcome to TechNeekX. Let&apos;s build the future we want to live in.
            </p>
          </div>

          {/* Background Watermark */}
          <div className="founder-note-watermark">
            <Image src="/about/tnx-wings.webp" alt="Watermark" width={480} height={480} />
          </div>

          {/* Signature & Avatar */}
          <div className="founder-note-signature">
            <div className="founder-profile-lockup">
              <div className="founder-avatar-wrapper">
                <Image
                  src="/sarthak.webp"
                  alt="Sarthak Singhaniya"
                  fill
                  sizes="52px"
                  className="object-cover"
                />
              </div>
              <div className="founder-meta">
                <div className="founder-name-row">
                  <a
                    href="https://sarthaksinghaniya.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Sarthak Singhaniya Portfolio"
                  >
                    <h4 className="founder-name">
                      Sarthak Singhaniya
                    </h4>
                  </a>
                  <span title="Verified Founder" className="flex items-center">
                    <ShieldCheck size={16} className="text-[#0062FF]" />
                  </span>
                </div>
                <span className="founder-role">Founder &amp; CEO, TechNeekX (TNX)</span>
              </div>
            </div>

            <a
              href="https://sarthaksinghaniya.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="founder-portfolio-link"
            >
              <span>Explore Founder Portfolio</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderNote;
