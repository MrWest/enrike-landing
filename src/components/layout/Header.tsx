"use client";

import React, { useState, useEffect, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useSection } from '@/context/SectionContext';
import { useAnimation } from '@/components/home/AnimationContext';
import { Menu, X, Globe, ChevronDown } from 'lucide-react'; // Added ChevronDown

type HeaderProps = {};

export const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languagePopupOpen, setLanguagePopupOpen] = useState(false);

  const { t, language, setLanguage } = useLanguage(); // Destructure language and setLanguage
  const { activeSection } = useSection();
  const { isPreloaderComplete } = useAnimation();

  const availableLanguages: ('es' | 'en' | 'pt')[] = ['es', 'en', 'pt']; // Define available languages

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
        if (languagePopupOpen) {
          setLanguagePopupOpen(false);
        }
      }
    };

    if (mobileMenuOpen || languagePopupOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen, languagePopupOpen]);

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
    setLanguagePopupOpen(false);
  };

  const navLinks = [
    { id: 'hero', name: t.header.inicio },
    { id: 'proceso', name: t.header.proceso },
    { id: 'metodologia', name: t.header.metodologia },
  ];

  return (
    <motion.header
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={isPreloaderComplete ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeIn' }}
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200'
          : 'bg-white border-b border-transparent'
      }`}
    >
      {/* Comments remain */}
      {/*
        Optimization Note: Checked for 'overflow-scroll' class on this header component and its children.
        No direct application of 'overflow-scroll' was found. If added in the future, ensure its intentional use.
        Also, no GitHub link was found in the Header component to be removed as per the optimization plan.
      */}
      {/*
        Animation Performance Note: Review Framer Motion animations in this component
        on various devices to ensure they are fluid and do not cause jank.
        Adjust animation properties (duration, ease) if performance issues are observed.
      */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side: Language Selector Trigger (Mobile) / Placeholder (Desktop) */}
          <div className="flex items-center">
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 flex items-center space-x-1" // Adjusted classes
              onClick={() => setLanguagePopupOpen(!languagePopupOpen)}
              aria-label="Toggle language selector"
            >
              <span className="uppercase font-medium">{language}</span> {/* Display active language */}
              <ChevronDown className="h-4 w-4" /> {/* Dropdown icon */}
            </button>
            {/* Placeholder for branding/logo on desktop, or just empty space */}
            <div className="hidden lg:flex items-center space-x-1">
              {availableLanguages.map((langOption, index) => (
                <React.Fragment key={langOption}>
                  <button
                    onClick={() => setLanguage(langOption)}
                    className={`px-2 py-1 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out ${
                      language === langOption
                        ? 'bg-blue-50 text-[#007BFF] font-bold'
                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    aria-label={`Select language ${langOption.toUpperCase()}`}
                  >
                    {langOption.toUpperCase()}
                  </button>
                  {index < availableLanguages.length - 1 && (
                    <span className="h-4 w-px bg-gray-300" aria-hidden="true"></span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNavLinkClick}
                className={`text-sm font-medium transition-colors duration-150 ease-in-out ${
                  activeSection === link.id
                    ? 'text-[#007BFF]'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#intervencion"
              onClick={handleNavLinkClick}
              className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#007BFF] border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-all duration-150 ease-in-out hover:shadow-md active:scale-[0.98] focus:outline-none ${
                activeSection === 'intervencion'
                  ? 'ring-2 ring-offset-2 ring-blue-500'
                  : 'focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              }`}
            >
              {t.header.intervencion}
            </a>
          </div>

          {/* Right side: Hamburger Menu (Mobile) */}
          <div className="flex items-center lg:hidden">
            <button
              className="p-2 rounded-md text-[#007BFF] hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" // Changed color
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 top-16 bg-white z-40 lg:hidden overflow-y-auto" // top-16 to be below header
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={handleNavLinkClick}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === link.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#intervencion"
                onClick={handleNavLinkClick}
                className="block w-full text-center px-3 py-2 rounded-md text-base font-semibold text-white bg-[#007BFF] border border-transparent shadow-sm hover:bg-blue-700 transition-all duration-150 ease-in-out mt-4"
              >
                {t.header.intervencion}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Language Popup Overlay */}
      <AnimatePresence>
        {languagePopupOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 top-16 bg-white z-40 lg:hidden overflow-y-auto p-4" // Added p-4 for consistency
          >
            <div className="flex justify-between items-center pb-4 border-b border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{t.header.selectLanguage}</h3>
              <button
                onClick={() => setLanguagePopupOpen(false)}
                className="p-2 rounded-md text-[#007BFF] hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" // Changed color
                aria-label={t.common.close}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-2"> {/* Vertical list of languages */}
              {availableLanguages.map((langOption) => (
                <button
                  key={langOption}
                  onClick={() => {
                    setLanguage(langOption);
                    setLanguagePopupOpen(false); // Close popup after selection
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    language === langOption
                      ? 'bg-blue-50 text-[#007BFF] font-bold' // Accent color for active
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {langOption.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
});

Header.displayName = "Header";
