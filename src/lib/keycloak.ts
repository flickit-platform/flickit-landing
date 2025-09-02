import { NEXT_PUBLIC_LOCAL_BASE_URL } from "@/utils/env";
import "client-only";
import Keycloak, { KeycloakConfig, KeycloakInitOptions } from "keycloak-js";

const config: any = {
  url: NEXT_PUBLIC_LOCAL_BASE_URL + "accounts",
  realm: process.env.NEXT_PUBLIC_SSO_REALM!,
  clientId: process.env.NEXT_PUBLIC_SSO_CLIENT_ID!,
};

declare global {
  // eslint-disable-next-line no-var
  var __kc__: any | undefined;
  // eslint-disable-next-line no-var
  var __kc_init_promise__: Promise<boolean> | undefined;
}

export function getKc(): any {
  return (globalThis.__kc__ ??= new Keycloak(config));
}

export function ensureKcInit(opts: any): Promise<boolean> {
  return (globalThis.__kc_init_promise__ ??= getKc().init(opts));
}

export const auth = {
  isAuthenticated: () => Boolean(getKc().authenticated),
  username: () => getKc().tokenParsed?.preferred_username as string | undefined,
  token: () => getKc().token,
  login: (opts?: Parameters<any["login"]>[0]) => getKc().login(opts),
  logout: (opts?: Parameters<any["logout"]>[0]) => getKc().logout(opts),
};
