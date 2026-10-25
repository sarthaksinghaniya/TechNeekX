'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, ArrowUp, Code2, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/teamtechneekx', label: 'TechNeekX GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/techneekx/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/thetechneekx', label: 'Instagram' },
    { icon: Mail, href: 'mailto:teamtechneekx@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/916387860126', label: 'WhatsApp' },
  ];

  const footerLinks = [
    {
      title: 'Coding Profiles',
      links: [
        { name: 'TechNeekX GitHub', href: 'https://github.com/teamtechneekx', external: true },
        { name: 'Founder GitHub (Sarthak S.)', href: 'https://github.com/sarthaksinghaniya', external: true },
        { name: 'Founder Portfolio', href: 'https://sarthaksinghaniya.netlify.app', external: true },
        { name: 'AI Projects & Code', href: '/projects', external: false },
        { name: 'Builders & Leadership', href: '/team', external: false },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/#about', external: false },
        { name: 'Girls in TechNeekX', href: '/girls-in-techneekx', external: false },
        { name: 'Events & Hackathons', href: '/events', external: false },
        { name: 'Our Journey', href: '/journey', external: false },
        { name: 'Partner with Us', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfFvcsPMtG-lAi7b31q-TMg-M3hZo0m_IYQecbRDbjFjzm3BA/viewform', external: true },
        { name: 'Join WhatsApp Community', href: 'https://chat.whatsapp.com/KOlhO8eb4aHHD5iJkJneV0', external: true },
      ],
    },
    {
      title: 'Contact & Location',
      links: [
        { name: 'teamtechneekx@gmail.com', href: 'mailto:teamtechneekx@gmail.com', external: true },
        { name: '+91 6387860126', href: 'tel:6387860126', external: true },
        { name: 'Lucknow, Uttar Pradesh, India', href: 'https://maps.google.com/?q=Lucknow,Uttar+Pradesh,India', external: true },
        { name: 'LinkedIn (@techneekx)', href: 'https://www.linkedin.com/company/techneekx/', external: true },
        { name: 'Instagram (@thetechneekx)', href: 'https://www.instagram.com/thetechneekx', external: true },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#090b11] border-t border-slate-800 text-slate-400">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center gap-1 mb-4">
                <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/logo.webp"
                    alt="TechNeekX Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[18px] font-bold text-white/100 tracking-[0.04em] leading-[1.1]">
                    TechNeek<span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-[#ec4899] to-[#3b82f6] ml-[1px]">X</span>
                  </span>
                  <span className="text-[7.5px] font-semibold text-slate-400 tracking-[0.12em] mt-[1px] leading-[1]">
                    BUILD • INNOVATE • INSPIRE
                  </span>
                </div>
              </div>

              {/* Description with Aliases & Geographic Location for SEO & AI */}
              <p className="text-slate-400 mb-4 leading-relaxed max-w-sm text-sm">
                <strong className="text-white font-medium">TechNeekX</strong> (also known as <span className="text-slate-300">TNX / TechNX / GIT / techneek</span>) is a premier student-driven AI product studio and innovation ecosystem founded by <span className="text-white font-medium">Sarthak Singhaniya</span>.
              </p>

              {/* Location Badge */}
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-6">
                <MapPin size={14} className="text-pink-500 flex-shrink-0" />
                <span>Lucknow, Uttar Pradesh, India • Global Developer Network</span>
              </div>

              {/* Social & Coding Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, rotate: 4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full glass-dark border border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
                <motion.a
                  href="https://github.com/sarthaksinghaniya"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass-dark border border-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/50 transition-colors duration-200"
                  aria-label="Founder GitHub Profile"
                  title="Founder GitHub (Sarthak Singhaniya)"
                >
                  <Code2 size={18} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Footer Link Columns */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-slate-200 font-semibold mb-4 text-sm tracking-wide uppercase">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.external && link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.external && link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400"
        >
          {/* Copyright & Entity statement */}
          <div>
            <span>Copyright © 2026 TechNeekX (TNX). All rights reserved.</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span className="hidden sm:inline text-slate-500">Built with Next.js, AI Systems &amp; Youth Innovation</span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="glass-dark border border-slate-800 hover:border-slate-700 px-4 py-2 rounded-xl text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 text-xs cursor-pointer"
            aria-label="Back to top of page"
          >
            Back to top
            <ArrowUp size={14} className="text-slate-400" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
