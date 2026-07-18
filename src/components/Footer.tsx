'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, Twitter, ArrowUp, Heart } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/teamtechneekx', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/techneekx/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/thetechneekx?igsh=MXZ6Yjgyd3VnN250NA==', label: 'Instagram' },
    { icon: Mail, href: 'mailto:teamtechneekx@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/916387860126', label: 'WhatsApp' },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Events", href: "/events" },
        { name: "Projects", href: "/projects" },
        { name: "Partners with us", href: "https://docs.google.com/forms/d/e/1FAIpQLSfFvcsPMtG-lAi7b31q-TMg-M3hZo0m_IYQecbRDbjFjzm3BA/viewform" },
        { name: "Join WhatsApp Community", href: "https://chat.whatsapp.com/KOlhO8eb4aHHD5iJkJneV0" },
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Email: teamtechneekx@gmail.com", href: "mailto:teamtechneekx@gmail.com" },
        { name: "Phone: 6387860126", href: "tel:6387860126" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/techneekx/" },
        { name: "Instagram", href: "https://www.instagram.com/thetechneekx?igsh=MXZ6Yjgyd3VnN250NA==" },
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#090b11] border-t border-slate-800 text-slate-400">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    src="/file_0000000067647206a22ff5daad754190.png"
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

              {/* Description */}
              <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
                Building the future of student innovation. A next-generation tech community
                empowering builders, innovators, and AI creators.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full glass-dark border border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-slate-200 font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm"
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
          className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center"
        >
          {/* Copyright */}
          <div className="text-slate-400 text-sm mb-4 md:mb-0 flex items-center">
            Copyright © 2026 TechNeekX Inc. All rights reserved.
          </div>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="glass-dark border border-white-500 px-4 py-2 rounded-xl text-slate-400  hover: transition-colors duration-200 flex items-center gap-2 text-sm cursor-pointer"
          >
            Back to top
            <ArrowUp size={16} className="text-slate-400" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
