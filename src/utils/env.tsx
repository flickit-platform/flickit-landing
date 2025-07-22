import { getRedirectUrl } from "./constants";

export const NEXT_PUBLIC_LOCAL_BASE_URL =
  process.env.NEXT_PUBLIC_LOCAL_BASE_URL ?? getRedirectUrl();
