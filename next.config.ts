import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
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

export default nextConfig;
