export const getRedirectUrl = (): string => {
  // Check if window is defined (to avoid error during server-side rendering)
  if (typeof window !== "undefined") {
    const baseUrl = window.location.hostname;

    // Check if the base URL contains "test."
    if (baseUrl.includes("test.")||baseUrl.includes("localhost")) {
      return "https://app.test.flickit.org";
    } else {
      return "https://app.flickit.org";
    }
  } else {
    // Fallback value for server-side rendering
    return "https://app.flickit.org";
  }
};
