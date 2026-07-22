'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      <div className="founder-note-container">

        {/* Paper card with initial animation and slight tilt toward left when in focus */}
        <motion.div
          className="founder-note-paper"
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: isMobile ? 0 : -2 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 15,
            duration: 0.8
          }}
        >


          {/* Note Title */}
          <h2 className="founder-note-heading">Dear Future Innovator,</h2>

          {/* Note Content */}
          <div className="founder-note-body">
            <p>
              The world is moving faster than ever. Standard education isn't keeping up. The old paths are crumbling.
            </p>
            <p className="founder-note-accent">
              The truth is:
            </p>
            <p>
              No one knows exactly what the future looks like. But we know who will build it.
            </p>
            <p>
              At <strong>TechNeekX</strong>, we aren't just a community; we are an engine. An engine that turns raw potential into shipping products. We believe that the most valuable thing we can do is help each other create.
            </p>
            <p>
              We are here to make sense of this new era, one line of code at a time.
            </p>
            <p>
              Welcome to TechNeekX. Let's build the future we want to live in.
            </p>
          </div>

          {/* Background Watermark */}
          <div className="founder-note-watermark">
            <Image src="/about/tnx-wings.webp" alt="Watermark" width={500} height={500} />
          </div>

          {/* Signature & Avatar */}
          <div className="founder-note-signature">
            <div className="founder-avatar-wrapper">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200/80 shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                <Image
                  src="/sarthak.webp"
                  alt="Sarthak Singhaniya"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="founder-meta">
              <h4 className="founder-name bg-gradient-to-r from-[#0062ff] to-[#ff0080] bg-clip-text text-transparent !text-transparent">
                Sarthak Singhaniya
              </h4>
              <span className="founder-role">Founder & CEO, TechNeekX</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default FounderNote;
