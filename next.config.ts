import type { NextConfig } from "next";

const isPagesSubdir = process.env.GITHUB_ACTIONS === 'true' && !process.env.CUSTOM_DOMAIN;

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  ...(isPagesSubdir && {
    basePath: '/landing2',
    assetPrefix: '/landing2',
  }),
};

export default nextConfig;
