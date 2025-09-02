"use client";

import { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";
import { NEXT_PUBLIC_LOCAL_BASE_URL } from "@/utils/env";

// ---------- singleton + idempotent init ----------
declare global {
  // eslint-disable-next-line no-var
  var __kc__: any;
  // eslint-disable-next-line no-var
  var __kc_init_promise__: Promise<boolean> | undefined;
}

const kcConfig = {
  url: NEXT_PUBLIC_LOCAL_BASE_URL + "accounts",
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
  const [ready, setReady] = useState(false);

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
      .catch(() => {})
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

  if (!ready) return null;
  return <>{children}</>;
}
