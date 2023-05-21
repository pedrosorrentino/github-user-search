/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avataaars.io",
      },
    ],
  },
}

module.exports = nextConfig
