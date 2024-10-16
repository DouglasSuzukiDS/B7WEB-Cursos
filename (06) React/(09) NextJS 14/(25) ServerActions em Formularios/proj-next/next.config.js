/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         { hostname: 'www.google.com.br' }
      ]
   }
}

module.exports = nextConfig
