export const getEnv = (key: keyof ImportMetaEnv, fallback = ""): string => {
  if (typeof import.meta !== "undefined" && import.meta.env) {
    return import.meta.env[key] || fallback;
  }
  return fallback;
};

