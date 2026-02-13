import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/landing2',
  images: { unoptimized: true },
};

export default nextConfig;
