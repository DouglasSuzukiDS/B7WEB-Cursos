const path = require('path')

module.exports = {
   i18n: {
      locales: [ 'en', 'pt' ],
      defaultLocale: 'en',
      localeDetection: false,
      /*domains: [
         { domain: 'meusite.com', default: 'en' },
         { domain: 'meusite.com.brb', default: 'pt' }
      ]*/
      localePath: path.resolve('./public/locales')
   },
   reloadOnRrerender: process.env.NODE_ENV === 'development'
}