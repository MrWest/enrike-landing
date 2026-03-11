"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Linkedin, Github } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="font-roboto-mono text-xs text-gray-500 space-y-4">
          <p dangerouslySetInnerHTML={{ __html: t.footer.poweredBy }} />
          <p>{t.footer.line1}</p>
          <div className="flex justify-center space-x-6">
            <a href={t.footer.linkLinkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-gray-300 text-gray-400 transition-colors duration-150 ease-in-out hover:border-[#007BFF] hover:text-[#007BFF] hover:bg-gray-100">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            {/* Optimization Note: Ensure 't.footer.linkGitHub' is defined in translations for consistency. */}
            <a href={t.footer.linkGitHub || "https://github.com"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-gray-300 text-gray-400 transition-colors duration-150 ease-in-out hover:border-[#007BFF] hover:text-[#007BFF] hover:bg-gray-100">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
          {/*
            Optimization Note: Using 'dangerouslySetInnerHTML' carries an XSS risk.
            Ensure that 't.footer.poweredBy' and 't.footer.copyright' (and any other strings used here)
            are properly sanitized before being passed to prevent malicious script injection.
            Consider using React components or simple text if the content doesn't strictly require HTML.
          */}
          <p dangerouslySetInnerHTML={{ __html: t.footer.copyright.replace('{year}', year.toString()) }} />
        </div>
      </div>
    </footer>
  );
};
