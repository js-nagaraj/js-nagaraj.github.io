import type { NextConfig } from "next";

// Static export for GitHub Pages username site at root (no basePath)
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
