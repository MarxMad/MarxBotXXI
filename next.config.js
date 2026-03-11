/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/linea-tiempo', destination: '/historia', permanent: true },
    ]
  },
}

module.exports = nextConfig
