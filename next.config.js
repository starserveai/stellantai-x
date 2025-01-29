/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  webpack: (config, { dev, isServer }) => {
    // Enable source maps in development and production
    if (!dev && !isServer) {
      config.devtool = 'source-map';
    }
    return config;
  },
  // Optimize build output
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true
}

module.exports = nextConfig
