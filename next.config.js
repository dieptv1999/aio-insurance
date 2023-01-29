const { i18n } = require('./i18n.config')

/** @type {import('next').NextConfig} */
module.exports = {
  i18n,
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: [/url/] },
      use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
    });

    return config;
  }
}
