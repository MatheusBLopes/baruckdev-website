/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.DOMAIN],
  },
}

module.exports = nextConfig
