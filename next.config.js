/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Map short paths to your actual app directory structure
      { source: '/student/:path*',   destination: '/web/app/student/:path*' },
      { source: '/teacher/:path*',   destination: '/web/app/teacher/:path*' },
      { source: '/counselor/:path*', destination: '/web/app/counselor/:path*' },

      // API routes under /web/app/api/*
      { source: '/api/:path*', destination: '/web/app/api/:path*' },

      // Optional convenience: /app -> /web/app
      { source: '/app', destination: '/web/app' },
    ];
  },
};

module.exports = nextConfig;
