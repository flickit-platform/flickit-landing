export const getRedirectUrl = (): string => {
  if (typeof window === "undefined") {
    return "https://app.flickit.org/";
  }

  const baseUrl = window.location.hostname;

  const lang =
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="))
      ?.split("=")[1] ?? null;

  const query = lang ? `?lang=${encodeURIComponent(lang)}` : "";

  if (baseUrl.includes("test.") || baseUrl.includes("localhost")) {
    return `https://stage.flickit.org/${query}`;
  } else {
    return `https://app.flickit.org/${query}`;
  }
};
