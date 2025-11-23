"use client";

import React, { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { X } from 'lucide-react';

type VideoDemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const VideoDemoModal = ({ isOpen, onClose }: VideoDemoModalProps) => {
  const { t } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          onKeyDown={handleTabKeyPress}
        >
          {/* Fondo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Contenido del Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] } }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: "easeIn" } }}
            className="relative bg-black w-full max-w-4xl rounded-lg shadow-xl overflow-hidden aspect-video"
            tabIndex={-1}
          >
            <h2 id="video-modal-title" className="sr-only">{t.videoModal.title}</h2>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-3 right-3 z-10 text-white/70 hover:text-white transition-colors duration-150 ease-in-out bg-black/30 rounded-full p-1"
              aria-label={t.common.close}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
              <p className="text-white font-['Inter'] text-lg">
                [{t.videoModal.title}]
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
