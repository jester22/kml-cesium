/** @type {import('next').NextConfig} */
const webpack = require("webpack");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fishbase.se"],
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("cesium"),
      })
    );
    return config;
  },
};
