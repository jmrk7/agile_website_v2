const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  env: {
    RECAPTCHA_SITE_KEY: "6Le1WecZAAAAAJHHNtF0A1yOx642M8M0Us5HoJn7",
    DISABLE_RECAPTCHA: true,
    SLACK_API_BASE_URL: "https://hooks.slack.com/services/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",
    FRESHSALES_API_KEY: "YnCKDaGhjVKMeZ_5V0XH2w",
    FRESHSALES_API_URL: "http://agiletestware.freshsales.io/api/leads/",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
