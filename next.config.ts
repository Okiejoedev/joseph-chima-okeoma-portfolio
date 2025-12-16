import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // For GitHub Pages, we need to set the base path
  // Update 'joseph-chima-okeoma-portfolio' to match your repository name
  basePath: process.env.NODE_ENV === 'production' ? '/joseph-chima-okeoma-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/joseph-chima-okeoma-portfolio' : '',
};

export default nextConfig;
