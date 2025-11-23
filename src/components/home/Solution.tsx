"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { BrainCircuit, Wrench } from 'lucide-react';

type SolutionProps = {
  onFaqOpen: () => void;
};



export const Solution = ({ onFaqOpen }: SolutionProps) => {
  const { t } = useLanguage();

  return (
    <section // Changed from motion.section
      id="proceso"
      className="bg-gray-50 py-24 sm:py-32"
      // Removed initial, whileInView, viewport, and variants props
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.solution.title}
          </h2>
        </div>

        {/* PASO 1: EL FILTRO */}
        <div className="max-w-3xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900">
            {t.solution.step1Title}
          </h3>
          <p className="mt-4 text-base text-gray-700">
            {t.solution.step1Desc}
          </p>
          <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
            {t.solution.step1Deliverables.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-2xl font-bold font-roboto-mono text-gray-900">
            {t.solution.step1Price}
          </p>
          <button
            onClick={onFaqOpen}
            className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150 ease-in-out group"
          >
            {t.solution.step1FaqCta} <span className="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {/* PASO 2: LA BIFURCACIÓN */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            {t.solution.step2Title}
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            {t.solution.step2Desc}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Tarjeta A: Retainer de Sistema */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col">
            <div className="flex-grow">
              <div className="flex justify-center mb-6">
                <span className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                  <BrainCircuit className="w-8 h-8 text-[#007BFF]" />
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 text-center">
                {t.solution.cardA_Title}
              </h4>
              <p className="mt-2 font-roboto-mono text-sm text-gray-500 text-center">
                {t.solution.cardA_Audience}
              </p>
              <p className="mt-5 text-base text-gray-700">
                {t.solution.cardA_Desc}
              </p>
            </div>
            <p className="mt-6 text-2xl font-bold font-roboto-mono text-gray-900 text-center">
              {t.solution.cardA_Price}
            </p>
          </div>

          {/* Tarjeta B: Retainer de Ejecución */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col">
            <div className="flex-grow">
              <div className="flex justify-center mb-6">
                <span className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
                  <Wrench className="w-8 h-8 text-gray-600" />
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 text-center">
                {t.solution.cardB_Title}
              </h4>
              <p className="mt-2 font-roboto-mono text-sm text-gray-500 text-center">
                {t.solution.cardB_Audience}
              </p>
              <p className="mt-5 text-base text-gray-700">
                {t.solution.cardB_Desc}
              </p>
            </div>
            <p className="mt-6 text-2xl font-bold font-roboto-mono text-gray-900 text-center">
              {t.solution.cardB_Price}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
