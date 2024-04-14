export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "https://test.flickit.org"
    : process.env.BASE_URL;
export const REDIRECT_URL =
  BASE_URL === "https://test.flickit.org"
    ? "https://app.test.flickit.org"
    : "https://app.flickit.org";
