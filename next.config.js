/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_APP_NAME: process.env.AUTH0_APP_NAME,
    AUTH0_UX_MODE: process.env.AUTH0_UX_MODE,
    GOOGLE_VERIFIER_ID: process.env.GOOGLE_VERIFIER_ID,
    EMAIL_VERIFIER_ID: process.env.EMAIL_VERIFIER_ID,
    WEB3_AUTH_CLIENT_ID: process.env.WEB3_AUTH_CLIENT_ID,
    WEB3_AUTH_LOGGING: process.env.WEB3_AUTH_LOGGING,
    WEB3_AUTH_NETWORK: process.env.WEB3_AUTH_NETWORK,
  },
  reactStrictMode: true,
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"],
  //   });

  //   return config;
  // },
};

module.exports = nextConfig;
