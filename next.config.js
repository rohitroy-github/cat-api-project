/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn2.thecatapi.com", "26.media.tumblr.com"],
  },
};

module.exports = nextConfig;
