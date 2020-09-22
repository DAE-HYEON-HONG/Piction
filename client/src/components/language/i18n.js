import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './en.json';
import translationKo from './ko.json';

const resource = {
    ko: {
        translation: translationKo,
    },
    en: {
        translation: translationEn,
    }
};

i18n
  .use(initReactI18next)
  .init({
      resources: resource,
      lng: "ko",
      fallbackLng: "ko",
      debug: false,
      keySeparator: false,
      interpolation: {
          escapeValue: false,
      },
  });

export default i18n;