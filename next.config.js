/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['robohash.org', 'i.pravatar.cc'],
  },
};

module.exports = nextConfig;
