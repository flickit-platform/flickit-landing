"use client";

import { useEffect, useMemo, useState } from "react";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Lang = "fa" | "en";
type Strategy = "url" | "cookie";

const DEFAULT_LANG: Lang = "fa"; // ← پیش‌فرضت رو اینجا تنظیم کن

function norm(v: string | null | undefined): Lang {
  const s = (v || "").toLowerCase();
  return s.startsWith("fa") ? "fa" : "en";
}

function getCookie(name: string) {
  return typeof document === "undefined"
    ? ""
    : document.cookie
        .split("; ")
        .find((row) => row.startsWith(name + "="))
        ?.split("=")[1] || "";
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; max-age=31536000; path=/; SameSite=Lax`;
}

export default function I18nProvider({
  children,
  strategy = "url",
}: {
  children: React.ReactNode;
  strategy?: Strategy;
}) {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const search = useSearchParams();
  const qs = search?.toString();

  const [ready, setReady] = useState(false);

  // زبان اولیه: اگر مسیر خالیه ("/") → همیشه DEFAULT_LANG
  const initialLang = useMemo<Lang>(() => {
    const seg = pathname.split("/")[1];
    if (!seg) return DEFAULT_LANG; // ← همین خط خواسته‌ت رو تضمین می‌کند
    if (seg === "fa" || seg === "en") return seg;

    const fromCookie = norm(getCookie("NEXT_LOCALE") || getCookie("lang"));
    if (fromCookie) return fromCookie;

    const fromLS =
      typeof window !== "undefined" ? norm(localStorage.getItem("lang") || "") : "";
    if (fromLS) return fromLS;

    return DEFAULT_LANG;
  }, [pathname]);

  const swapPrefix = (lang: Lang, path: string) => {
    const has = /^\/(fa|en)(\/|$)/.test(path);
    if (has) return path.replace(/^\/(fa|en)(?=\/|$)/, `/${lang}`);
    return `/${lang}${path === "/" ? "" : path}`;
  };

  useEffect(() => {
    // sync i18n + dir + ذخیره‌ها
    if (norm(i18n.language) !== initialLang) i18n.changeLanguage(initialLang);
    document.documentElement.dir = initialLang === "fa" ? "rtl" : "ltr";
    setCookie("NEXT_LOCALE", initialLang);
    setCookie("lang", initialLang);
    localStorage.setItem("lang", initialLang);

    // اگر URL بدون پیشوند بود، الآن به /fa (یا پیش‌فرض) بفرست
    if (strategy === "url") {
      const target =
        pathname === "/"
          ? `/${DEFAULT_LANG}${qs ? `?${qs}` : ""}`
          : swapPrefix(initialLang, pathname) + (qs ? `?${qs}` : "");
      const current = pathname + (qs ? `?${qs}` : "");
      if (target !== current) router.replace(target);
    } else {
      // فقط کوکی/LS → برای هم‌سان‌سازی SSR/meta
      // (در صورت نیاز) router.refresh();
    }

    const onLangChange = (lng: any) => {
      const next = norm(String(lng));
      document.documentElement.dir = next === "fa" ? "rtl" : "ltr";
      setCookie("NEXT_LOCALE", next);
      setCookie("lang", next);
      localStorage.setItem("lang", next);

      if (strategy === "url") {
        const target = swapPrefix(next, pathname) + (qs ? `?${qs}` : "");
        const current = pathname + (qs ? `?${qs}` : "");
        if (target !== current) router.replace(target);
        else router.refresh();
      } else {
        router.refresh();
      }
    };

    i18n.on("languageChanged", onLangChange);
    setReady(true);
    return () => i18n.off("languageChanged", onLangChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLang, pathname, qs, strategy]);

  if (!ready) return null;
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
