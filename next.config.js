/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    optimizeImages: true,
    domains: ['elnagahtravels.com', 'backend.elnagahtravels.com'],
  },
}

module.exports = nextConfig
