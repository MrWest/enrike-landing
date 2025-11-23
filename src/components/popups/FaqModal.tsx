"use client";

import React, { useEffect, useRef, useCallback } from 'react'; // Added useCallback
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { X } from 'lucide-react';

type FaqModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const FaqModal = ({ isOpen, onClose }: FaqModalProps) => {
  const { t } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null); // Ref for modal content
  const closeButtonRef = useRef<HTMLButtonElement>(null); // Ref for close button

  const faqItems = [
    { q: t.faqModal.q1, a: t.faqModal.a1 },
    { q: t.faqModal.q2, a: t.faqModal.a2 },
    { q: t.faqModal.q3, a: t.faqModal.a3 },
    { q: t.faqModal.q4, a: t.faqModal.a4 },
  ];

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

  // Focus management and scroll locking
  useEffect(() => {
    if (isOpen) {
      // Focus on the close button when modal opens
      closeButtonRef.current?.focus();

      // Lock scroll on body
      document.body.style.overflow = 'hidden';
    } else {
      // Unlock scroll on body
      document.body.style.overflow = '';
    }

    // Cleanup function to unlock scroll if component unmounts while modal is open
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Basic focus trap (can be improved with a dedicated library)
  const handleTabKeyPress = useCallback((event: React.KeyboardEvent) => {
    if (!modalRef.current || event.key !== 'Tab') return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey) { // Shift + Tab
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else { // Tab
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }, []);


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog" // ARIA role
          aria-modal="true" // ARIA modal attribute
          aria-labelledby="faq-modal-title" // Link to the modal title
          onKeyDown={handleTabKeyPress} // Add keydown listener for focus trap
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
            ref={modalRef} // Assign ref to modal content
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] } }}
            exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.3, ease: "easeIn" } }}
            className="relative bg-white w-full max-w-3xl rounded-lg shadow-xl overflow-hidden border border-gray-200"
            tabIndex={-1} // Make modal content focusable
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 id="faq-modal-title" className="text-2xl font-semibold text-gray-900 font-['Inter']">
                {t.faqModal.title}
              </h3>
              <button
                ref={closeButtonRef} // Assign ref to close button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-150 ease-in-out"
                aria-label={t.faqModal.closeButtonAriaLabel || "Close FAQ modal"} // ARIA label for close button
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index}>
                    <p className="text-base font-semibold text-gray-900 font-['Inter']">
                      {item.q}
                    </p>
                    <p className="mt-2 text-base text-gray-700 font-['Inter']">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200 text-right">
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#007BFF] border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-all duration-150 ease-in-out hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-['Inter']"
              >
                {t.faqModal.close}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
