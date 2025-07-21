/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "en",
  },
  env: {
    NEXT_PUBLIC_LOCAL_BASE_URL: process.env.NEXT_PUBLIC_LOCAL_BASE_URL,
  },
};

module.exports = nextConfig;
