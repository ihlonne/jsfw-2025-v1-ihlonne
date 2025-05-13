/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.noroff.dev',
        port: '',
        pathname: '/api/online-shop/**',
      },
    ],
  },
};

module.exports = nextConfig;
