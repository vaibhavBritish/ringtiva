import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ringtivassests.blob.core.windows.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
