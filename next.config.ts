import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTINONS === "true";
const basePath = isGithubActions ? "/my-portfolio" : "";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
