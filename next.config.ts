import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/my-portfolio",
  images: { unoptimized: true },
};

export default nextConfig;
