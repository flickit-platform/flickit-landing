"use client";
import { useEffect, useState } from "react";
import { getKc } from "@/lib/keycloak";

export function useKcAuth() {
  const kc = getKc();
  const [authed, setAuthed] = useState(Boolean(kc.authenticated));
  const [username, setUsername] = useState<string | undefined>(
    kc.tokenParsed?.preferred_username as string | undefined
  );

  useEffect(() => {
    const update = () => {
      setAuthed(Boolean(kc.authenticated));
      setUsername(kc.tokenParsed?.preferred_username as string | undefined);
    };
    kc.onAuthSuccess = update;
    kc.onAuthLogout = update;
    kc.onAuthRefreshSuccess = update;
    kc.onTokenExpired = async () => {
      try { await kc.updateToken(30); } finally { update(); }
    };

    update();

    return () => {
      kc.onAuthSuccess = undefined;
      kc.onAuthLogout = undefined;
      kc.onAuthRefreshSuccess = undefined;
      kc.onTokenExpired = undefined;
    };
  }, [kc]);

  return { authed, username, kc };
}
