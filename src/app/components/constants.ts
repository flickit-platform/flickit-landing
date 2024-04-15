export const REDIRECT_URL = window?.location?.hostname.includes(
  "https://flickit.org"
)
  ? "https://app.flickit.org"
  : "https://app.test.flickit.org";

export const getRedirectUrl = (): string => {
  // Check if window is defined (to avoid error during server-side rendering)
  if (typeof window !== "undefined") {
    const baseUrl = window.location.hostname;

    // Check if the base URL contains "test."
    if (baseUrl.includes("https://flickit.org")) {
      return "https://app.flickit.org";
    } else {
      return "https://app.test.flickit.org";
    }
  } else {
    // Fallback value for server-side rendering
    return "https://app.test.flickit.org";
  }
};
