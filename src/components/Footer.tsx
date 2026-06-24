'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, Twitter, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/teamtechneekx', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/techneekx/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/thetechneekx?igsh=MXZ6Yjgyd3VnN250NA==', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/techneekx', label: 'Twitter' },
    { icon: Mail, href: 'mailto:teamtechneekx@gmail.com', label: 'Email' },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "What We Do", href: "#what-we-do" },
        { name: "Projects", href: "#projects" },
        { name: "Community", href: "#community" },
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
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Open Source", href: "#" },
        { name: "Careers", href: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Code of Conduct", href: "#" },
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10">
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
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 overflow-hidden rounded-lg">
                  <img 
                    src="/file_0000000067647206a22ff5daad754190.png" 
                    alt="TechNeekX Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gradient">
                  TechNeekX
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-white/70 mb-6 leading-relaxed max-w-sm">
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
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"
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
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
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
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          {/* Copyright */}
          <div className="text-white/60 text-sm mb-4 md:mb-0 flex items-center">
            © 2025 TechNeekX. Made with 
            <Heart className="w-4 h-4 mx-1 text-red-400" fill="currentColor" />
            by our community.
          </div>
          
          {/* Back to Top Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="glass px-4 py-2 rounded-xl text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm"
          >
            Back to top
            <ArrowUp size={16} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
