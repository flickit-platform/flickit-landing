import { getRedirectUrl } from "./constants";

export const NEXT_PUBLIC_LOCAL_BASE_URL =
  process.env.NEXT_PUBLIC_LOCAL_BASE_URL ?? getRedirectUrl();
export const NEXT_PUBLIC_SSO_URL = NEXT_PUBLIC_LOCAL_BASE_URL + "accounts";
