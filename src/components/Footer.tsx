'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, ArrowUp, Code2, MapPin, Globe } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/teamtechneekx', label: 'TechNeekX GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/techneekx/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/thetechneekx', label: 'Instagram' },
    { icon: Mail, href: 'mailto:teamtechneekx@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/916387860126', label: 'WhatsApp' },
  ];

  const productLinks = [
    { name: 'AI Projects & Code', href: '/projects', external: false },
    { name: 'Events & Hackathons', href: '/events', external: false },
    { name: 'Girls in TechNeekX', href: '/girls-in-techneekx', external: false },
    { name: 'Our Journey', href: '/journey', external: false },
    { name: 'Photo Gallery', href: '/gallery', external: false },
  ];

  const companyLinks = [
    { name: 'About TechNeekX', href: '/#about', external: false },
    { name: 'Builders & Leadership', href: '/team', external: false },
    { name: 'Join TechNeekX', href: '/join', external: false },
    {
      name: 'Partner with Us',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSfFvcsPMtG-lAi7b31q-TMg-M3hZo0m_IYQecbRDbjFjzm3BA/viewform',
      external: true,
    },
    {
      name: 'Join WhatsApp Community',
      href: 'https://chat.whatsapp.com/KOlhO8eb4aHHD5iJkJneV0',
      external: true,
    },
  ];

  const contactLinks = [
    { name: 'teamtechneekx@gmail.com', href: 'mailto:teamtechneekx@gmail.com', external: true },
    { name: '+91 6387860126', href: 'tel:6387860126', external: true },
    { name: 'Founder Portfolio (Sarthak S.)', href: 'https://sarthaksinghaniya.netlify.app', external: true },
    { name: 'Privacy Policy', href: '/privacy', external: false },
    { name: 'Terms & Conditions', href: '/terms', external: false },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#111318] border-t border-[#232731] text-[#8A92A0]">
      {/* Subtle hairline gradient top edge */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#0062FF]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Section (2 columns on lg) */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 relative rounded-full overflow-hidden border border-[#232731] bg-[#181B22] flex-shrink-0">
                  <Image
                    src="/logo.webp"
                    alt="TechNeekX Logo"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[17px] font-bold text-white tracking-tight leading-none">
                    TechNeek<span className="text-[#0062FF]">X</span>
                  </span>
                  <span className="text-[8px] font-semibold text-[#8A92A0] tracking-[0.16em] mt-0.5 uppercase">
                    BUILD • INNOVATE • INSPIRE
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#8A92A0] mb-5 leading-relaxed text-sm max-w-sm">
                <strong className="text-white font-medium">TechNeekX</strong> (TNX) is a premier AI product studio and technology ecosystem founded by <span className="text-white font-medium">Sarthak Singhaniya</span>, building scalable software, intelligent autonomous tools, and next-generation engineering communities.
              </p>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-xs text-[#8A92A0] mb-6">
                <MapPin size={14} className="text-[#0062FF] flex-shrink-0" />
                <span>Lucknow, Uttar Pradesh, India • Global Network</span>
              </div>

              {/* Social and Coding Links */}
              <div className="flex flex-wrap items-center gap-2.5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-9 h-9 rounded-full bg-[#181B22] border border-[#232731] flex items-center justify-center text-[#8A92A0] hover:text-white hover:border-[#DDE1E6] hover:bg-[#232731] transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
                <motion.a
                  href="https://github.com/sarthaksinghaniya"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-9 h-9 rounded-full bg-[#181B22] border border-[#232731] flex items-center justify-center text-[#8A92A0] hover:text-[#0062FF] hover:border-[#0062FF]/50 hover:bg-[#232731] transition-all duration-200"
                  aria-label="Founder GitHub Profile"
                  title="Founder GitHub (Sarthak Singhaniya)"
                >
                  <Code2 size={16} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Column 1: Products */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase">
              Products &amp; Code
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8A92A0] hover:text-white transition-colors duration-150 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company & Community */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase">
              Studio &amp; Community
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#8A92A0] hover:text-white transition-colors duration-150 block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-[#8A92A0] hover:text-white transition-colors duration-150 block"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase">
              Contact &amp; Connect
            </h4>
            <ul className="space-y-2.5">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-[#8A92A0] hover:text-white transition-colors duration-150 block truncate"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-[#8A92A0] hover:text-white transition-colors duration-150 block"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-14 pt-8 border-t border-[#232731] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8A92A0]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© 2026 TechNeekX (TNX). Engineered with precision.</span>
            <span className="text-[#323846]">•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#323846]">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>

          {/* Back to Top Pill Button */}
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#181B22] border border-[#232731] text-[#8A92A0] hover:text-white hover:border-[#DDE1E6] transition-all text-xs cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
