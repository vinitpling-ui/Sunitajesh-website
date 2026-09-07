import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // the repo root sits below $HOME, which also holds a package-lock.json;
  // pin the workspace root so Turbopack does not walk up to it
  turbopack: { root: __dirname },
  // /work was the old home of the case studies; keep those links alive
  async redirects() {
    return [
      { source: "/work", destination: "/portfolio", permanent: true },
      { source: "/work/:slug", destination: "/portfolio/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
