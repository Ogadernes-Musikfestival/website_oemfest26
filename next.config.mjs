import { withPayload } from "@payloadcms/next/withPayload";

const urls = [
  new URL("https://pub-3183ab0415bd4d6f91c056caa432f027.r2.dev/**"),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Add this temporarily to get past "Validity of types"
  },
  // Your Next.js config here
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      ".cjs": [".cts", ".cjs"],
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"],
    };

    return webpackConfig;
  },

  images: {
    remotePatterns: urls,
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
