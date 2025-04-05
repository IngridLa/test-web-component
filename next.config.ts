// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {  
  reactStrictMode: true,
  webpack(config:any, options:any) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'test-web-component',
        remotes: {
          "web-component": `web-component@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
      })
    );

    return config;
  },
}

module.exports = nextConfig  
