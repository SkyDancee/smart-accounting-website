/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Отключаем ESLint проверки для production build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Отключаем TypeScript проверки для production build (только для срочного развертывания)
    ignoreBuildErrors: false,
  },
  images: {
    domains: ['localhost', 'vercel.app'],
  },
  env: {
    CUSTOM_KEY: 'my-value',
  },
}

module.exports = nextConfig 