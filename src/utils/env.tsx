export const getEnv = (key: keyof ImportMetaEnv, fallback = ""): string => {
  if (typeof import.meta !== "undefined" && import.meta.env) {
    return import.meta.env[key] || fallback;
  }
  return fallback;
};

// Specific exports for each variable
export const NEXT_PUBLIC_LOCAL_BASE_URL = getEnv(
  "NEXT_PUBLIC_LOCAL_BASE_URL",
  "https://app.flickit.org/"
);
