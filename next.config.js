/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      'robohash.org',
      'i.pravatar.cc',
      'localhost',
      'manage-students.vercel.app',
    ],
  },
};

module.exports = nextConfig;
