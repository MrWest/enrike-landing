"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { PlayCircle } from 'lucide-react';

type ProofProps = {
  onVideoDemoOpen: () => void;
};

// Variante para secciones (Fade-in-up sutil)
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

export const Proof = ({ onVideoDemoOpen }: ProofProps) => {
  const { t } = useLanguage();

  const hybridCases = [
    {
      title: t.proof.case1_Title,
      context: t.proof.case1_Desc,
      stack: t.proof.case1_Stack
    },
    {
      title: t.proof.case2_Title,
      context: t.proof.case2_Desc,
      stack: t.proof.case2_Stack
    }
  ];

  return (
    <motion.section
      id="metodologia"
      className="bg-white py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.proof.title}
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            {t.proof.desc}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {hybridCases.map((caseItem, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
              {/* Parte 1: Caso de Estudio */}
              <div className="p-6 flex-grow">
                <h4 className="text-xl font-semibold text-gray-900">
                  {caseItem.title}
                </h4>
                <p className="mt-4 text-base text-gray-700">
                  {caseItem.context}
                </p>
                <p className="mt-4 font-roboto-mono text-sm text-gray-500">
                  {caseItem.stack}
                </p>
              </div>
              
              {/* Parte 2: Prueba Técnica (Video Placeholder) */}
                            <button
                              className="p-8 bg-gray-900 cursor-pointer group relative flex flex-col items-center justify-center text-center min-h-[150px] transition-colors duration-200 ease-in-out hover:bg-gray-800"
                              onClick={onVideoDemoOpen}
                              aria-label={t.proof.videoCtaTitle}
                            >
                              <div className="text-center">
                                <PlayCircle className="w-12 h-12 text-white/60 transition-all duration-200 ease-in-out group-hover:text-white group-hover:scale-110 mx-auto" />
                                <h5 className="mt-4 text-base font-semibold text-white">
                                  {t.proof.videoCtaTitle}
                                </h5>
                                <p className="mt-1 text-sm text-gray-300">
                                  {t.proof.videoCtaSubtitle}
                                </p>
                              </div>
                            </button>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
