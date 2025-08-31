"use client";

import { useEffect, useRef, useState } from "react";
import Keycloak, { KeycloakConfig, KeycloakInitOptions } from "keycloak-js";

// ---------- singleton + idempotent init ----------
declare global {
  // eslint-disable-next-line no-var
  var __kc__: any;
  // eslint-disable-next-line no-var
  var __kc_init_promise__: Promise<boolean> | undefined;
}

const kcConfig = {
  url: process.env.NEXT_PUBLIC_SSO_URL!,
  realm: process.env.NEXT_PUBLIC_SSO_REALM!,
  clientId: process.env.NEXT_PUBLIC_SSO_CLIENT_ID!,
};

function getKc() {
  return (globalThis.__kc__ ??= new Keycloak(kcConfig));
}

function ensureKcInit(opts: any) {
  return (globalThis.__kc_init_promise__ ??= getKc().init(opts));
}
// --------------------------------------------------

export default function KeycloakInit({
  onLoad = "check-sso",
  children,
}: {
  onLoad?: "check-sso" | "login-required";
  children: React.ReactNode;
}) {
  // اگر login-required باشد قبل از نمایش UI صبر می‌کنیم
  const [ready, setReady] = useState(onLoad === "check-sso");

  // جلوگیری از اجرای دوباره‌ی افکت در StrictMode
  const ranOnce = useRef(false);

  useEffect(() => {
    if (ranOnce.current) return;
    ranOnce.current = true;

    ensureKcInit({
      onLoad,
      pkceMethod: "S256",
      checkLoginIframe: true,
      silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
      messageReceiveTimeout: 15000,
    })
      .catch(() => {}) // حتی اگر silent SSO fail شد
      .finally(() => setReady(true));

    const t = setInterval(
      () =>
        getKc()
          .updateToken(30)
          .catch(() => {}),
      25000
    );
    return () => clearInterval(t);
  }, [onLoad]);

  if (!ready && onLoad === "login-required") return null;
  return <>{children}</>;
}
