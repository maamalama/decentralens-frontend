/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@lens-protocol'],
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
  env:{
    BACKEND_URL: process.env.BACKEND_URL,
    APP_URL: process.env.APP_URL,
  }
}

module.exports = nextConfig
