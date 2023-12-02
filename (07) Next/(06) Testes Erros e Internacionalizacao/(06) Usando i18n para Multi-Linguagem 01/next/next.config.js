const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
   headers: async() => {
      return [
         {
            source: '/api/:path*',
            headers: [
               { key: 'Access-Control-Allow-Origin', value: '*' }
            ]
         }
      ]
   },
   i18n
}

module.exports = nextConfig
