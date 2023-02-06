/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    loader: 'akamai',
    path: '/',
  }
}

module.exports = nextConfig
