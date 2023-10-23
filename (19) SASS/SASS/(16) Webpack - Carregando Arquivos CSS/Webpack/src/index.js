// (16) Webpack - Carregando Arquivos CSS

import $ from 'jquery'
import './css/style.css'

// npx webpack => Roda o webpack
// npx webpack --config webpack.config.js => Apos o arquivo do Webpack estar configurado
// npm run build => Depois de configurar o script no package.json

$(function() {
   //alert('Funcionando')

   $('#botao').on('click', function() {
      $('h1').html('Hello World alterado')

      $(this).addClass('botao')
   })
})