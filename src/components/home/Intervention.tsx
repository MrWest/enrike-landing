"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle, AlertTriangle } from 'lucide-react';

// Variante para secciones (Fade-in-up sutil)
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

export const Intervention = ({ onContactOpen }: { onContactOpen: () => void }) => {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('submitting');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdkbpknn", {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <motion.section
      id="intervencion"
      className="bg-white py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-inter">
            {t.intervention.title}
          </h2>
          <p className="mt-6 text-lg text-gray-700 font-inter">
            {t.intervention.desc}
          </p>
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            {formStatus === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center p-12 bg-green-50 border-2 border-green-200 rounded-lg"
              >
                <CheckCircle className="w-12 h-12 mx-auto text-green-500" />
                <h3 className="mt-4 text-2xl font-semibold text-gray-900">¡Intervención Solicitada!</h3>
                <p className="mt-2 text-gray-700">He recibido su solicitud. Revisaré su caso y me pondré en contacto con usted en breve para confirmar los siguientes pasos.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: 20 }}
                onSubmit={handleSubmit}
                className="relative"
              >
                {formStatus === 'submitting' && (
                  <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-inter">
                      {t.intervention.formEmail}
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-inter px-3 py-2"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 font-inter">
                      {t.intervention.formRole}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="role"
                        id="role"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-inter px-3 py-2"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="stack" className="block text-sm font-medium text-gray-700 font-inter">
                      {t.intervention.formStack}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="stack"
                        id="stack"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-inter px-3 py-2"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="blocker" className="block text-sm font-medium text-gray-700 font-inter">
                      {t.intervention.formBlocker}
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="blocker"
                        name="blocker"
                        rows={4}
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-inter px-3 py-2"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#007BFF] border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-all duration-150 ease-in-out hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-inter disabled:opacity-50"
                    aria-label={t.intervention.formCtaPrimary}
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : t.intervention.formCtaPrimary}
                  </button>
                  {formStatus === 'error' && (
                    <p className="mt-4 text-sm text-red-600 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      {t.intervention.formError}
                    </p>
                  )}
                </div>
                <p className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={onContactOpen}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150 ease-in-out font-inter"
                    aria-label={t.intervention.formCtaSecondary}
                  >
                    {t.intervention.formCtaSecondary}
                  </button>
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};
