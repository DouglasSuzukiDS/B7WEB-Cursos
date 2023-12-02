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
   i18n: {
      locales: [ 'en', 'pt' ],
      defaultLocale: 'en',
      localeDetection: false,
      /*domains: [
         { domain: 'meusite.com', default: 'en' },
         { domain: 'meusite.com.brb', default: 'pt' }
      ]*/
   }
}

module.exports = nextConfig
