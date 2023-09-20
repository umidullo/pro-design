const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    domains: ["prodesignstudio.uz"],
  },
};

module.exports = nextConfig;
