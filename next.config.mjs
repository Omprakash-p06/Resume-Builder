/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow cross-origin requests from local network during development
  allowedDevOrigins: [
    'http://192.168.0.105',
    'http://192.168.0.105:3000',
    'http://localhost:3000',
    'http://localhost',
  ],
}

export default nextConfig
