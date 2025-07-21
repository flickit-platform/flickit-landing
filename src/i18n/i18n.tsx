import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en";
import fa from "./translations/fa";

export const resources = {
  en: { translation: en },
  fa: { translation: fa },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fa",
    lng: "fa",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

export default i18n;
