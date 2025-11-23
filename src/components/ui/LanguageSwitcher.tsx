"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown } from 'lucide-react'; // Import ChevronDown icon

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const languages: ('es' | 'en' | 'pt')[] = ['es', 'en', 'pt'];
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: 'es' | 'en' | 'pt') => {
    setLanguage(lang);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {language.toUpperCase()}
          <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {dropdownOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  language === lang
                    ? 'bg-blue-50 text-blue-700 font-bold'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
                role="menuitem"
                tabIndex={-1}
                id={`menu-item-${lang}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
