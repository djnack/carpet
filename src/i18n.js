import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import EN from './Lang/EN.json';
import FA from './Lang/FA.json';

const resources = {
    en: {
        translation: EN
    },
    fa: {
        translation: FA
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'en',
        // lng: 'fa', // default language
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;