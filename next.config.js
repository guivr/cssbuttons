module.exports = {
  reactStrictMode: true,
  env: {
    REACT_APP_GA_ENV: process.env.REACT_APP_GA_ENV,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    return config;
  },
};
