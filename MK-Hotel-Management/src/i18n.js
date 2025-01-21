import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import the translation files
import en from './locales/en/translation.json';
import mr from './locales/mr/translation.json';
import hi from './locales/hi/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      mr: { translation: mr },
      hi: { translation: hi },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language in case the selected one is not available
    interpolation: {
      escapeValue: false, // React already escapes the values
    },
  });

export default i18n;
