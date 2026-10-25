'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import data from '../constants/data.json';

const iconMap: { [key: string]: any } = {
  Github: Github,
  Linkedin: Linkedin,
  Instagram: Instagram,
  Mail: Mail,
  Whatsapp: FaWhatsapp,
};

const FinalCTA = () => {
  return (
    <section className="w-full py-20 bg-[#F7F8FA] border-t border-[#DDE1E6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#111318] rounded-3xl p-8 sm:p-12 md:p-16 text-white overflow-hidden border border-[#232731] shadow-2xl"
        >
          {/* Subtle editorial grid pattern on dark */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Glow vignette */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0062FF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D212A] border border-[#2B303C] text-xs font-semibold uppercase tracking-wider text-[#A0A8B4] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#0062FF]" />
                Next Cohort &amp; Ecosystem
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
                The future is not something we wait for.{' '}
                <span className="text-[#0062FF]">
                  It&apos;s something we build together.
                </span>
              </h2>

              <p className="text-[#A0A8B4] text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                Join TechNeekX and be part of an elite ecosystem that designs,
                builds, and deploys high-impact autonomous AI products,
                competing at premier national hackathons.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#111318] font-semibold text-sm hover:bg-[#F1F3F6] transition-all shadow-md"
                >
                  <span>Join TechNeekX</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href="https://chat.whatsapp.com/KOlhO8eb4aHHD5iJkJneV0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D212A] border border-[#2B303C] text-white font-semibold text-sm hover:bg-[#2B303C] transition-all"
                >
                  <FaWhatsapp size={16} className="text-[#25D366]" />
                  <span>WhatsApp Community</span>
                </a>
              </div>

              {/* Social links row */}
              <div className="flex flex-wrap items-center gap-2">
                {data.socialLinks.map((social, idx) => {
                  const IconComponent = iconMap[social.icon];
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#1D212A] border border-[#2B303C] text-[#A0A8B4] hover:text-white hover:border-[#DDE1E6] flex items-center justify-center transition-all"
                      aria-label={social.label}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {IconComponent && <IconComponent size={15} />}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Right Emblem */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-[#181B22] border border-[#2B303C] p-6 flex items-center justify-center shadow-xl">
                <Image
                  src="/logo.webp"
                  alt="TechNeekX Emblem"
                  width={140}
                  height={140}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
