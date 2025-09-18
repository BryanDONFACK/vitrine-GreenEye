'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, type Language, type TranslationKey, type SpecificTranslationValue } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <K extends TranslationKey>(key: K) => SpecificTranslationValue<K>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    const browserLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';
    const initialLanguage = savedLanguage || browserLanguage;
    setLanguage(initialLanguage);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
  };

  const t = <K extends TranslationKey>(key: K): SpecificTranslationValue<K> => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Fallback: if value is undefined, return an empty array if the expected type is array, otherwise return the key string.
    if (value === undefined) {
      const dummyValue: SpecificTranslationValue<K> = Array.isArray(translations.fr[keys[0] as keyof typeof translations.fr]) ? [] as any : key as any;
      return dummyValue;
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}