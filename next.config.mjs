/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "turnkeytix-website-images.s3.amazonaws.com",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "turnkey-uat-backend.s3.us-east-1.amazonaws.com",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "turnkey-prod-backend.s3.us-east-1.amazonaws.com",
    //   },
    //   { protocol: "https", hostname: "uat.turnkeytix.com" },
    //   { protocol: "https", hostname: "turnkeytix.com" },
    //   { protocol: "https", hostname: "event.turnkeytix.com" },
    //   { protocol: "https", hostname: "turnkey-uat-backend.s3.amazonaws.com" },
    //   { protocol: "https", hostname: "turnkey-prod-backend.s3.amazonaws.com" },
      { protocol: "http", hostname: "${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3000" },
    ],
    // unoptimized: true,
  },
};

export default nextConfig;
