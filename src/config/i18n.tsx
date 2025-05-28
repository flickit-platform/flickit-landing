import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en";
import fa from "./translations/fa";

export const resources = {
  en: {
    translation: en,
  },
  fa: {
    translation: fa,
  },
};

let storedLanguage = "en";

if (typeof window !== "undefined") {
  storedLanguage = localStorage.getItem("lang") ?? "en";
}
i18n.use(initReactI18next).init({
  resources,
  lng: storedLanguage,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

if (typeof window !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    localStorage.setItem("lang", lng);
    document.cookie = `NEXT_LOCALE=${lng}; max-age=31536000; path=/`;
  });
}
