/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'z-cdn-media.chatglm.cn',
        port: '',
        pathname: '/files/**',
      },
    ],
    domains: ['z-cdn-media.chatglm.cn'],
  },
};

module.exports = nextConfig;