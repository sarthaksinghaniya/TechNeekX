'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, Menu, X, ArrowRight } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      
      // Update active section based on scroll position
      const sections = ['hero', 'social-proof', 'what-we-do', 'projects', 'community'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Projects', href: '#projects-showcase' },
    { name: 'Events', href: '#events' },
    { name: 'Community', href: '#community' },
    { name: 'Team', href: '#about' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/teamtechneekx', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/techneekx/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/thetechneekx?igsh=MXZ6Yjgyd3VnN250NA==', label: 'Instagram' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=teamtechneekx.netlify.app', label: 'Email' },
  ];

  // Smooth scroll handler
  const handleNavClick = (href: string) => {
    if (pathname !== '/') {
      router.push('/' + href);
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      return;
    }
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  // Check if link is active
  const isActiveLink = (href: string) => {
    const targetId = href.replace('#', '');
    return activeSection === targetId;
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="scroll-progress"
        style={{ scaleX: useScrollProgress() }}
      />
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`tx-navbar ${isScrolled ? 'tx-scrolled' : ''}`}
      >
        <div className="tx-navbar-wrap">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('#hero')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="tx-logo-area"
          >
            <div className="tx-logo-img-container">
              <Image 
                src="/file_0000000067647206a22ff5daad754190.png" 
                alt="TechNeekX Logo" 
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <div className="tx-logo-text-group">
              <span className="tx-logo-text">TECHNEEK<span className="tx-logo-x">X</span></span>
              <span className="tx-logo-subtitle">BUILD • INNOVATE • INSPIRE</span>
            </div>
          </motion.button>

          {/* Desktop Navigation Links */}
          <div className="tx-nav-group">
            <div>
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`tx-nav-item ${isActiveLink(item.href) ? 'tx-active' : ''}`}
              >
                {item.name}
                {isActiveLink(item.href) && (
                  <motion.div
                    className="tx-nav-underline"
                    layoutId="activeUnderline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/join')}
              className="tx-btn-cta"
            >
              <span>Join TechNeekX</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>

          {/* Mobile menu hamburger toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="tx-mobile-toggle"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="tx-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="tx-drawer-overlay"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />

              <motion.div
                ref={mobileMenuRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                className="tx-drawer-content"
              >
                <div className="tx-drawer-header">
                  <div className="tx-drawer-logo">
                    <div className="tx-logo-img-container">
                      <Image
                        src="/file_0000000067647206a22ff5daad754190.png"
                        alt="TechNeekX Logo"
                        fill
                        sizes="40px"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="tx-logo-text-group">
                      <span className="tx-drawer-logo-text">TECHNEEK<b className="tx-logo-x">X</b></span>
                      <span className="tx-logo-subtitle tx-drawer-logo-subtitle">BUILD • INNOVATE • INSPIRE</span>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="tx-drawer-close"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <div className="tx-drawer-body">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.05 }}
                      className={`tx-drawer-nav-btn ${isActiveLink(item.href) ? 'tx-active-drawer' : ''}`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                <div className="tx-drawer-footer">
                  <div className="tx-drawer-socials">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="tx-drawer-social-link"
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      router.push('/join');
                    }}
                    className="tx-drawer-cta"
                  >
                    <span>Join TechNeekX</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

// Helper hook for scroll progress
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent / 100);
    };
    
    window.addEventListener('scroll', updateProgress);
    updateProgress();
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);
  
  return progress;
}

export default Navbar;
