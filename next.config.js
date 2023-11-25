/** @type {import('next').NextConfig} */
const { webpack } = require("next/dist/compiled/webpack/webpack");

const nextConfig = {

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          // fixes proxy-agent dependencies
          net: false,
          dns: false,
          tls: false,
          assert: false,
          // fixes next-i18next dependencies
          path: false,
          fs: false,
          // fixes mapbox dependencies
          events: false,
          // fixes sentry dependencies
          process: false,
        },
      };
    }
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, "");
      })
    );

    return config;
  },

  
  images: {
    // importした画像の型定義設定を無効にする
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "profile.yoshimoto.co.jp",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.ohtapro.co.jp",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.kdashstage.jp",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.tkma.co.jp",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.ohtapro.co.jp",
        port: "",
      },
      {
        protocol: "https",
        hostname: "grapecom.jp",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ogre.natalie.mu",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.maseki.co.jp",
        port: "",
      }
    ],
  },
};

module.exports = nextConfig;
