/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   async rewrites() {
    return [
      {
        source: '/journal/:path*',
        destination: 'https://voice-to-blog-947fc9.gitlab.io/:path*',
      },
      {
        source: '/journal',
        destination: 'https://voice-to-blog-947fc9.gitlab.io/',
      },
    ]
  },
}

module.exports = nextConfig
