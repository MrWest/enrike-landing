"use client";

import React, { useMemo, useState, Suspense } from 'react';

// Context
import { AppContext } from '@/context/AppContext';
import { useAnimation } from '@/components/home/AnimationContext';

// Layout Components
import { Footer } from '@/components/layout/Footer';

// Home Sections
import { Hero } from '@/components/home/Hero';
import { Solution } from '@/components/home/Solution';
import { Proof } from '@/components/home/Proof';
import { Diagnosis } from '@/components/home/Diagnosis';
import { Intervention } from '@/components/home/Intervention';
import IntroPreloader from '@/components/home/preloader-animation';

// Modal Components - Changed to React.lazy
const FaqModal = React.lazy(() => import('@/components/popups/FaqModal').then(module => ({ default: module.FaqModal })));
const VideoDemoModal = React.lazy(() => import('@/components/popups/VideoDemoModal').then(module => ({ default: module.VideoDemoModal })));
const ArticleModal = React.lazy(() => import('@/components/popups/ArticleModal').then(module => ({ default: module.ArticleModal })));
const ContactModal = React.lazy(() => import('@/components/popups/ContactModal').then(module => ({ default: module.ContactModal })));

export default function Home() {
  const { isPreloaderComplete, setPreloaderComplete } = useAnimation();
  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [videoDemoModalOpen, setVideoDemoModalOpen] = useState(false);
  const [articleModalKey, setArticleModalKey] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenArticle = (articleKey: string) => setArticleModalKey(articleKey);
  const handleCloseArticle = () => setArticleModalKey(null);

  const appContextValue = useMemo(() => ({
    onArticleOpen: handleOpenArticle,
  }), []);

  if (!isPreloaderComplete) {
    return <IntroPreloader onComplete={() => setPreloaderComplete(true)} />;
  }

  return (
    <AppContext.Provider value={appContextValue}>
      <div className="bg-white antialiased">
        <main>
          <Hero />
          <Solution onFaqOpen={() => setFaqModalOpen(true)} />
          <Proof onVideoDemoOpen={() => setVideoDemoModalOpen(true)} />
          <Diagnosis />
          <Intervention onContactOpen={() => setContactModalOpen(true)} />
        </main>
        <Footer />
      </div>

      {/* Wrapped modals with Suspense */}
      <Suspense fallback={null}>
        {/*
          Accessibility Note: FaqModal has received initial accessibility improvements (ARIA, Esc key, basic focus).
          Please ensure VideoDemoModal, ArticleModal, and ContactModal also implement
          full accessibility handling (focus management, Esc key close, ARIA attributes, background scroll locking).
        */}
        <FaqModal isOpen={faqModalOpen} onClose={() => setFaqModalOpen(false)} />
        <VideoDemoModal isOpen={videoDemoModalOpen} onClose={() => setVideoDemoModalOpen(false)} />
        <ArticleModal isOpen={!!articleModalKey} onClose={handleCloseArticle} articleKey={articleModalKey} />
        <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      </Suspense>
    </AppContext.Provider>
  );
}
