import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // TEMPORARY DIAGNOSTIC: serve raw from /public, bypass /_next/image optimizer.
    // Remove this line once we confirm images render correctly.
    unoptimized: true,
  },
};

export default nextConfig;
