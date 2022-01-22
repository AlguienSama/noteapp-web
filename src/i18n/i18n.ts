import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';

import ca from './translations/ca.json';
import en from './translations/en.json';
import es from './translations/es.json';

const resources = {
    ca,
    en,
    es,
};

export const availableLanguages = [
    {'iso': 'ca', 'lang': 'català'},
    {'iso': 'en', 'lang': 'english'},
    {'iso': 'es', 'lang': 'español'}
];

const savedLang:string | null = window.localStorage.getItem("language");
const lng:string = savedLang ? JSON.parse(savedLang) : "ca";

i18n.use(initReactI18next)
    .use(HttpApi)
    .use(LanguageDetector)
    .init({
        resources,
        defaultNS: "common",
        lng: lng
    });