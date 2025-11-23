"use client";

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { AppContext } from '@/context/AppContext';

// Variante para secciones (Fade-in-up sutil)
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

export const Diagnosis = () => {
  const { t } = useLanguage();
  const appContext = useContext(AppContext);
  
  if (!appContext) {
    // Handle the case where context is not yet available.
    // This can happen during server-side rendering or if the provider is missing.
    // You might want to return a loader or null.
    return null;
  }

  const { onArticleOpen } = appContext;

  const articles = [
    {
      id: "article1_content",
      label: t.diagnosis.article1_Label,
      title: t.diagnosis.article1_Title,
      description: t.diagnosis.article1_Desc
    },
    {
      id: "article2_content",
      label: t.diagnosis.article2_Label,
      title: t.diagnosis.article2_Title,
      description: t.diagnosis.article2_Desc
    },
    {
      id: "article3_content",
      label: t.diagnosis.article3_Label,
      title: t.diagnosis.article3_Title,
      description: t.diagnosis.article3_Desc
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="diagnostico"
      className="bg-gray-50 py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-inter">
            {t.diagnosis.title}
          </h2>
          <p className="mt-6 text-lg text-gray-700 font-inter">
            {t.diagnosis.desc}
          </p>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {articles.map((article, index) => (
            <motion.button
              key={article.id}
              onClick={() => onArticleOpen(article.id)}
              className="block w-full text-left bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200 ease-in-out group"
              variants={itemVariants}
            >
              <p className="font-roboto-mono text-xs font-semibold text-[#007BFF] uppercase tracking-wider">
                {article.label}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 font-inter">
                {article.title}
              </h3>
              <p className="mt-4 text-base text-gray-700 font-inter">
                {article.description}
              </p>
              <p className="mt-5 text-sm font-medium text-gray-900 group-hover:text-[#007BFF] transition-colors duration-150 ease-in-out font-inter">
                {t.diagnosis.articleCta} <span className="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
