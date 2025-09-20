"use client";

import { useEffect, useState } from "react";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(lang);
    document.cookie = `NEXT_LOCALE=${lang}; max-age=31536000; path=/`;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

    i18n.on("languageChanged", (lng: any) => {
      localStorage.setItem("lang", lng);
      document.cookie = `NEXT_LOCALE=${lng}; max-age=31536000; path=/`;
      document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
    });

    setReady(true);
  }, []);

  if (!ready) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
