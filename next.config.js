/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@neondatabase/serverless'],
  images: {
    domains: ['realtyeaseai.com'],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
}

export default nextConfig