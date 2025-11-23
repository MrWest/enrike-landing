"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext'; 

export const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="bg-white flex items-center hero-min-height-responsive">
      {/*
        Animation Performance Note: Review Framer Motion animations in this component
        on various devices to ensure they are fluid and do not cause jank.
        Adjust animation properties (duration, ease, stagger) if performance issues are observed.
      */}
      {/*
        Responsive Design Note:
        Thoroughly test the responsiveness of this Hero section on various mobile and tablet screen sizes.
        Ensure text sizes, spacing, button layouts, and overall element positioning adapt gracefully
        using Tailwind's responsive utility classes (e.g., sm:, md:, lg:).
      */}
      <motion.div
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.p
          className="font-roboto-mono text-sm font-medium text-gray-500 tracking-wide uppercase"
          variants={itemVariants}
        >
          {t.hero.kicker}
        </motion.p>
        <motion.h1
          className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-snug sm:leading-snug"
          variants={itemVariants}
        >
          {t.hero.headline}
        </motion.h1>
        <motion.p
          className="mt-6 text-lg leading-8 text-gray-700"
          variants={itemVariants}
        >
          {t.hero.subheadline}
        </motion.p>
        <motion.div
          className="mt-10 flex items-center justify-center space-x-6"
          variants={itemVariants}
        >
          <a
            href="#proceso"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#007BFF] border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-all duration-150 ease-in-out hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#metodologia"
            className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150 ease-in-out group"
          >
            {t.hero.ctaSecondary} <span className="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
