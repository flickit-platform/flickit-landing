/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reloadOnPrerender: process.env.NODE_ENV === "development",
  fallbackLng: "fa",
  async redirects() {
    return [{ source: "/", destination: "/fa", permanent: false }];
  },
};

module.exports = nextConfig;
