/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [],
  },
  output: "standalone",
};

module.exports = nextConfig;
