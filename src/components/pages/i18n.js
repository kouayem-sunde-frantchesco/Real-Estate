import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      'Paramètres': 'Paramètres',
      'Langue': 'Langue',
      'Thème': 'Thème',
      'Passer en mode sombre': 'Passer en mode sombre',
      'Passer en mode clair': 'Passer en mode clair',
    },
  },
  en: {
    translation: {
      'Paramètres': 'Settings',
      'Langue': 'Language',
      'Thème': 'Theme',
      'Passer en mode sombre': 'Switch to dark mode',
      'Passer en mode clair': 'Switch to light mode',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
});

export default i18n;
