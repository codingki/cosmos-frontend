// @ts-check
/// <reference types="@project/types/vercel" />
/// <reference path="./env.d.ts" />

const { withSuperjson } = require("next-superjson");
const withTranspileModules = require("next-transpile-modules");
const packageJson = require("./package.json");

/** @type {import("next").NextConfig} */
let nextConfig = {
  eslint: {
    dirs: ["config", "hooks", "lib", "pages", "store", "ui", "utils"],
    ignoreDuringBuilds: Boolean(process.env.VERCEL),
  },
  headers: async () => [],
  reactStrictMode: true,
  redirects: async () => [],
  rewrites: async () => [],
  swcMinify: false,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: Boolean(process.env.VERCEL),
  },
  webpack: (config, { dev, webpack }) => {
    config.plugins.push(new webpack.DefinePlugin({ __DEV__: dev, __PROD__: !dev }));
    return config;
  },
};

nextConfig = withSuperjson()(nextConfig);

const localModules = Object.keys(packageJson.dependencies).filter((dep) => dep.startsWith("@project/"));
nextConfig = withTranspileModules(localModules)(nextConfig);

module.exports = nextConfig;
