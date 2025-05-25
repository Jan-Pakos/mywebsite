// i18n.ts or i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import enTranslations from './translations/en.json';
import seTranslations from './translations/se.json';
import plTranslations from './translations/pl.json';

const resources = {
  en: {
    translation: enTranslations
  },
  se: {
    translation: seTranslations
  },
  pl: {
    translation: plTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;