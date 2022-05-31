import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/en.json'
import am from './locales/am/am.json'

const resources = {
   en: {
      translation: en
   },
   am: {
      translation: am
   }
}

const options = {
   fallbackLng: 'en',
   resources,
   detection: {
      caches: ['cookie']
   }
}

i18n.use(LanguageDetector).use(initReactI18next).init(options)

export default i18n;