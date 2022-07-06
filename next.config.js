/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.DOMAIN, process.env.BIO_PHOTO],
  },
}

module.exports = nextConfig
