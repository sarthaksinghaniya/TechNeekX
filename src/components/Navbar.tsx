'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, Menu, X, ArrowRight } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and listen for Escape when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Projects', href: '/projects' },
    { name: 'Events', href: '/events' },
    { name: 'GIT', href: '/girls-in-techneekx' },
    { name: 'Partners', href: '/partners' },
    { name: 'Team', href: '/team' },
    { name: 'Journey', href: '/journey' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/teamtechneekx', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/techneekx/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/thetechneekx', label: 'Instagram' },
    { icon: Mail, href: 'mailto:teamtechneekx@gmail.com', label: 'Email' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/')) {
      router.push(href);
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      return;
    }
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
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  const isActiveLink = (href: string) => {
    if (href.startsWith('/')) {
      return pathname === href || pathname === `${href}/`;
    }
    return false;
  };

  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="scroll-progress fixed top-0 left-0 right-0 h-[2px] bg-[#0062FF] origin-left z-[1000] pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      <header className={`tx-navbar ${isScrolled ? 'tx-scrolled' : ''}`}>
        <div className="tx-navbar-wrap">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('/')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="tx-logo-area"
            aria-label="TechNeekX Home"
          >
            <div className="tx-logo-img-container">
              <Image
                src="/logo.webp"
                alt="TechNeekX Logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <div className="tx-logo-text-group">
              <span className="tx-logo-text">
                TechNeek<span className="tx-logo-x">X</span>
              </span>
              <span className="tx-logo-subtitle">BUILD • INNOVATE • INSPIRE</span>
            </div>
          </motion.button>

          {/* Desktop Navigation Center Dock */}
          <div className="tx-nav-group">
            <nav className="tx-nav-dock" aria-label="Main Navigation">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`tx-nav-item ${isActiveLink(item.href) ? 'tx-active' : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/join')}
              className="tx-btn-cta"
            >
              <span>Join Us</span>
              <ArrowRight size={14} />
            </motion.button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="tx-mobile-toggle"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
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
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="tx-drawer-backdrop">
              <motion.div
                className="tx-drawer-overlay"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />

              <motion.aside
                ref={mobileMenuRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 280, damping: 32 }}
                className="tx-drawer-content"
                aria-label="Mobile Navigation"
              >
                <div className="tx-drawer-header">
                  <div className="tx-drawer-logo">
                    <div className="tx-logo-img-container">
                      <Image
                        src="/logo.webp"
                        alt="TechNeekX Logo"
                        fill
                        sizes="40px"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="tx-logo-text-group">
                      <span className="tx-drawer-logo-text">
                        TechNeek<span className="tx-logo-x">X</span>
                      </span>
                      <span className="tx-logo-subtitle">BUILD • INNOVATE • INSPIRE</span>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="tx-drawer-close"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </motion.button>
                </div>

                <div className="tx-drawer-body">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.04 }}
                      className={`tx-drawer-nav-btn ${isActiveLink(item.href) ? 'tx-active-drawer' : ''}`}
                    >
                      <span>{item.name}</span>
                      {isActiveLink(item.href) ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111318]" />
                      ) : (
                        <ArrowRight size={14} className="text-[#8A92A0]" />
                      )}
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
                        <social.icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      router.push('/join');
                    }}
                    className="tx-drawer-cta"
                  >
                    <span>Join TechNeekX</span>
                    <ArrowRight size={15} />
                  </motion.button>
                </div>
              </motion.aside>
            </div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
