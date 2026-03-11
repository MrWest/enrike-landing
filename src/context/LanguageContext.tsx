"use client";

import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { translations } from '@/lib/translations';

// Define the shape of the context value
type LanguageContextType = {
  language: 'es' | 'en' | 'pt';
  setLanguage: (language: 'es' | 'en' | 'pt') => void;
  t: Translation; // Use one of the languages as a template for the type
};

type Translation = typeof translations['en'];

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Provider component
type LanguageProviderProps = {
  children: ReactNode;
};

const supportedLanguages: ('es' | 'en' | 'pt')[] = ['es', 'en', 'pt'];

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<'es' | 'en' | 'pt'>('en'); // Initialize with a consistent default (e.g., 'en')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('language');
      if (storedLang && supportedLanguages.includes(storedLang as 'es' | 'en' | 'pt')) {
        setLanguageState(storedLang as 'es' | 'en' | 'pt');
        return;
      }

      // Iterate through navigator.languages for more robust detection
      const preferredBrowserLangs = navigator.languages;
      for (const langTag of preferredBrowserLangs) {
        const primaryLang = langTag.split('-')[0];
        if (supportedLanguages.includes(primaryLang as 'es' | 'en' | 'pt')) {
          setLanguageState(primaryLang as 'es' | 'en' | 'pt');
          return;
        }
      }
    }
    // If no stored language or supported browser language is found, it remains 'en' (initial state)
  }, []); // Run once on mount for initial detection

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]); // Update localStorage whenever language changes

  const setLanguage = (lang: 'es' | 'en' | 'pt') => {
    setLanguageState(lang);
  };

  const t = translations[language] as Translation;

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

