import Navbar from "@/components/common/nav/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/config/theme";
import "@/assets/font/fonts.css";
import Script from "next/script";
import React from "react";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

export const metadata = {
  title: "Flickit",
  description: "Assessment platform",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    const isRTL = ['fa'].includes(locale);
  return (
    <html lang={locale}  dir={isRTL ? 'rtl' : 'ltr'}>
      <body style={{ margin: 0, background: "#F9FAFB" }}>
      <NextIntlClientProvider locale={locale}>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
        </ThemeProvider>
      </NextIntlClientProvider>
      </body>
      <Script id="clarity-script" strategy="afterInteractive">
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
            })(window, document, "clarity", "script", "${process.env.VITE_CLARITY_KEY}");
          `}
      </Script>

      <Script id="piwik-script" strategy="afterInteractive">
        {`
            (function (window, document, dataLayerName, id) {
              window[dataLayerName] = window[dataLayerName] || [];
              window[dataLayerName].push({
                start: new Date().getTime(),
                event: "stg.start",
              });
              var scripts = document.getElementsByTagName("script")[0],
                tags = document.createElement("script");
              var qP = [];
              dataLayerName !== "dataLayer" &&
                qP.push("data_layer_name=" + dataLayerName);
              var qPString = qP.length > 0 ? "?" + qP.join("&") : "";
              tags.async = true;
              tags.src =
                "https://flickit.containers.piwik.pro/" + id + ".js" + qPString;
              scripts.parentNode.insertBefore(tags, scripts);
              !(function (a, n, i) {
                a[n] = a[n] || {};
                for (var c = 0; c < i.length; c++)
                  !(function (i) {
                    (a[n][i] = a[n][i] || {})(a[n][i].api =
                      a[n][i].api ||
                      function () {
                        var a = [].slice.call(arguments, 0);
                        "string" == typeof a[0] &&
                          window[dataLayerName].push({
                            event: n + "." + i + ":" + a[0],
                            parameters: [].slice.call(arguments, 1),
                          });
                      });
                  })(i[c]);
              })(window, "ppms", ["tm", "cm"]);
            })(window, document, "dataLayer", "${process.env.VITE_PIWIK_KEY}");
          `}
      </Script>
    </html>
  );
}
