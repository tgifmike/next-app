const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    experimental: {
      serverComponentsExternalPackages: ["@prisma/client", "bcrypt"],
    },
  },
};

module.exports = nextConfig;
