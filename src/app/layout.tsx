import Navbar from "@/components/common/nav/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/config/theme";
import "@/assets/font/fonts.css";
import { cookies } from "next/headers";
import Script from "next/script";
import React from "react";
import { ToastContainer } from "react-toastify";
import { toastDefaultConfig } from "@/config/toastConfigs";
import { farsiFontFamily, primaryFontFamily } from "@/utils/fonts";
import I18nProvider from "@/i18n/I18nProvider";
import KeycloakInit from "@/components/KeycloakInit";

export async function generateMetadata() {
  const lang = cookies().get("lang")?.value || "en";
  const isFa = lang === "fa";
  const siteUrl =
    process.env.NEXT_PUBLIC_LOCAL_BASE_URL?.replace(/\/+$/, "") ||
    "http://flickit.org";

  const titleEn = "Flickit";
  const descEn =
    "Identify and resolve your software systems’ issues and drive their growth with assessment kits crafted by seasoned experts.";
  const titleFa = "فلیکیت";
  const descFa =
    "کیفیت نرم‌افزار را شفاف ببینید و با کیت‌های ارزیابیِ کارشناسانه، مسیر بهبود را ساده و قابل اقدام کنید.";

  const title = isFa ? titleFa : titleEn;
  const description = isFa ? descFa : descEn;
  const url = isFa ? `${siteUrl}/fa/` : `${siteUrl}/`;

  return {
    metadataBase: new URL(siteUrl),
    applicationName: "Flickit",
    title: {
      default: title,
      template: isFa ? "%s | فلیکیت" : "%s | Flickit",
    },
    description,
    keywords: isFa
      ? [
          "فلیکیت",
          "ارزیابی کیفیت نرم‌افزار",
          "کیت ارزیابی",
          "کیفیت نرم‌افزار",
          "شاخص‌های کیفیت",
          "DevOps",
          "QA",
          "بلوغ نرم‌افزار",
        ]
      : [
          "Flickit",
          "software quality assessment",
          "assessment kits",
          "software quality",
          "engineering teams",
          "QA",
          "DevOps",
          "software maturity",
        ],
    alternates: {
      canonical: isFa ? "/fa/" : "/",
      languages: {
        "en-US": "/",
        "fa-IR": "/fa/",
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: "Flickit",
      title,
      description,
      locale: isFa ? "fa_IR" : "en_US",
      images: [`${siteUrl}/og-cover.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/og-cover.jpg`],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
    themeColor: "#0b0f19",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = cookies().get("lang")?.value || "en";
  const dir = lang === "fa" ? "rtl" : "ltr";

  const siteUrl =
    process.env.NEXT_PUBLIC_LOCAL_BASE_URL?.replace(/\/+$/, "") ||
    "http://flickit.org/";

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Flickit",
    url: siteUrl + "/",
    logo: "/logo.svg",
    sameAs: ["https://www.linkedin.com/showcase/flickit-platform/"],
  };
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl + "/",
    name: "Flickit",
    inLanguage: lang === "fa" ? "fa-IR" : "en-US",
  };

  return (
    <html lang={lang} dir={dir}>
      <body style={{ margin: 0, background: "#F9FAFB" }}>
        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />

        <I18nProvider>
          <ThemeProvider theme={theme}>
            <KeycloakInit onLoad="check-sso">
              <Navbar />
              {children}
            </KeycloakInit>
            <ToastContainer
              {...toastDefaultConfig}
              toastStyle={{
                fontFamily: lang === "fa" ? farsiFontFamily : primaryFontFamily,
                direction: dir,
                textAlign: lang === "fa" ? "right" : "left",
              }}
            />
          </ThemeProvider>
        </I18nProvider>

        <Script id="perf-helpers" strategy="afterInteractive">
          {`
            window.__idle = function(fn){
              if ('requestIdleCallback' in window) {
                requestIdleCallback(fn, { timeout: 4000 });
              } else {
                setTimeout(fn, 1500);
              }
            };
          `}
        </Script>

        <Script id="piwik-paq" strategy="afterInteractive">
          {`window._paq = window._paq || []; window._paq.push(["disableCookies"]);`}
        </Script>

        <Script id="clarity-script" strategy="lazyOnload">
          {`
            (function (c, l, a, r, i, t, y) {
              c[a] = c[a] || function () {
                (c[a].q = c[a].q ?? []).push(arguments);
              };
              const scriptElement = l.createElement(r);
              scriptElement.async = 1;
              scriptElement.src = "https://www.clarity.ms/tag/" + i;
              const firstScriptElement = l.getElementsByTagName(r)[0];
              firstScriptElement.parentNode.insertBefore(
                scriptElement,
                firstScriptElement,
              );
              window.clarity("consent");
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_KEY}");
          `}
        </Script>

        <Script id="piwik-script" strategy="lazyOnload">
          {`
            window.__idle(function(){
              (function (window, document, dataLayerName, id) {
                window[dataLayerName] = window[dataLayerName] || [];
                window[dataLayerName].push({ start: new Date().getTime(), event: "stg.start" });
                var first = document.getElementsByTagName("script")[0], tag = document.createElement("script");
                var qP = [];
                if (dataLayerName !== "dataLayer") qP.push("data_layer_name=" + dataLayerName);
                var qPString = qP.length ? "?" + qP.join("&") : "";
                tag.async = true; tag.src = "https://flickit.containers.piwik.pro/" + id + ".js" + qPString;
                first.parentNode.insertBefore(tag, first);
                !(function (a, n, i) {
                  a[n] = a[n] || {};
                  for (var c = 0; c < i.length; c++)
                    !(function (i) {
                      (a[n][i] = a[n][i] || {}).api = a[n][i].api || function () {
                        var args = [].slice.call(arguments, 0);
                        if (typeof args[0] === "string")
                          window[dataLayerName].push({ event: n + "." + i + ":" + args[0], parameters: [].slice.call(arguments, 1) });
                      };
                    })(i[c]);
                })(window, "ppms", ["tm", "cm"]);
              })(window, document, "dataLayer", "${process.env.NEXT_PUBLIC_PIWIK_KEY}");
            });
          `}
        </Script>
      </body>
    </html>
  );
}
