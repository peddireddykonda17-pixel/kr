/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/kr',
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
