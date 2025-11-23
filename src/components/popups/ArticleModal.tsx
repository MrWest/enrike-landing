import React, { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { X } from 'lucide-react';

type ArticleModalProps = {
  isOpen: boolean;
  onClose: () => void;
  articleKey: string | null;
};

export const ArticleModal = ({ isOpen, onClose, articleKey }: ArticleModalProps) => {
  const { t } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const article = articleKey ? t.diagnosis[articleKey as keyof typeof t.diagnosis] : null;

  // Type guard to ensure article is not just a string but an object with properties
  const isArticleContent = (content: any): content is typeof t.diagnosis.article1_content => {
    return content && typeof content === 'object' && 'title' in content;
  }

  const articleContent = isArticleContent(article) ? article : null;

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
      {isOpen && articleContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
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
            className="relative bg-white w-full max-w-4xl h-[90vh] flex flex-col rounded-lg shadow-xl overflow-hidden border border-gray-200"
            tabIndex={-1}
          >
            {/* Header del Modal */}
            <div className="flex-shrink-0 flex justify-between items-start p-6 border-b border-gray-200">
              <div>
                <p className="font-roboto-mono text-xs font-semibold text-[#007BFF] uppercase tracking-wider">
                  {articleContent.label}
                </p>
                <h2 id="article-modal-title" className="mt-2 text-2xl font-semibold text-gray-900 font-['Inter']">
                  {articleContent.title}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-150 ease-in-out ml-4"
                aria-label={t.common.close}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Contenido con Scroll Interno */}
            <div className="flex-grow p-8 overflow-y-auto">
              <div className="prose prose-lg max-w-none space-y-5 text-gray-700 font-['Inter']">
                {articleContent.intro.map((paragraph, i) => (
                  <p key={`intro-${i}`}>{paragraph}</p>
                ))}

                {articleContent.points.length > 0 && (
                  <div className="space-y-6 mt-6">
                    {articleContent.points.map((point, i) => (
                      <div key={`point-${i}`}>
                        <h4 className="text-xl font-semibold text-gray-900 font-['Inter']">
                          {point.title}
                        </h4>
                        <p className="mt-2">
                          <strong className="font-semibold text-gray-800">{articleContent.symptomLabel}</strong> {point.symptom}
                        </p>
                        <p className="mt-2">
                          <strong className="font-semibold text-gray-800">{articleContent.diagnosisLabel}</strong> {point.diagnosis}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                
                {articleContent.intervention.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200 space-y-5">
                    <h4 className="text-xl font-semibold text-gray-900 font-['Inter']">
                      {articleContent.interventionTitle}
                    </h4>
                    {articleContent.intervention.map((paragraph, i) => (
                      <p key={`intervention-${i}`}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Footer del Modal */}
            <div className="flex-shrink-0 p-6 bg-gray-50 border-t border-gray-200 text-right">
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-[#007BFF] border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-all duration-150 ease-in-out hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-['Inter']"
                aria-label={articleContent.close}
              >
                {articleContent.close}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
