import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { X, CheckCircle, AlertTriangle } from 'lucide-react';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      setFormStatus('idle');
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Basic focus trap
  const handleTabKeyPress = useCallback((event: React.KeyboardEvent) => {
    if (!modalRef.current || event.key !== 'Tab') return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('submitting');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvglvpvg", {
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 md:p-16"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onKeyDown={handleTabKeyPress}
        >
          {/* Fondo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Contenido del Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] } }}
            exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.3, ease: "easeIn" } }}
            className="relative bg-white w-full max-w-2xl rounded-lg shadow-xl overflow-hidden border border-gray-200 flex flex-col"
            tabIndex={-1}
          >
            <div className="flex justify-between items-center p-6 sm:p-8 border-b border-gray-200 flex-shrink-0">
              <h2 id="contact-modal-title" className="text-xl sm:text-2xl font-semibold text-gray-900 font-['Inter']">
                {formStatus === 'success' ? t.contactModal.successTitle : t.contactModal.title}
              </h2>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-150 ease-in-out"
                aria-label={t.common.close}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-8 sm:p-16 text-center"
                >
                  <CheckCircle className="w-12 h-12 mx-auto text-green-500" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{t.contactModal.successTitle}</h3>
                  <p className="mt-2 text-gray-700">{t.contactModal.successMessage}</p>
                  <button
                    onClick={onClose}
                    className="mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#007BFF] border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-all"
                  >
                    {t.common.close}
                  </button>
                </motion.div>
              ) : (
                <form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col flex-grow"
                >
                  <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto flex-grow relative">
                    {formStatus === 'submitting' && (
                      <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
                        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t.contactModal.formName}</label>
                        <input type="text" id="name" name="name" required className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t.contactModal.formEmail}</label>
                        <input type="email" id="email" name="email" required className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">{t.contactModal.formRole}</label>
                        <input type="text" id="role" name="role" className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">{t.contactModal.formCompany}</label>
                        <input type="text" id="company" name="company" className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">{t.contactModal.formSubject}</label>
                        <textarea id="subject" name="subject" required rows={4} className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end items-center p-6 sm:p-8 bg-gray-50 border-t border-gray-200 space-x-4 flex-shrink-0">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#007BFF] border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-all duration-150 ease-in-out hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-['Inter'] disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? 'Enviando...' : t.contactModal.submit}
                    </button>
                  </div>
                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-50 border-t border-red-200">
                      <p className="text-sm text-red-600 flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        {t.intervention.formError}
                      </p>
                    </div>
                  )}
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
