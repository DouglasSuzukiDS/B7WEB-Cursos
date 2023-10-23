// (17) Webpack - Carregando Imagens

import $ from 'jquery'
import './css/style.css'
import CameraGalerry from './images/camera1.png'

// npx webpack => Roda o webpack
// npx webpack --config webpack.config.js => Apos o arquivo do Webpack estar configurado
// npm run build => Depois de configurar o script no package.json

$(function() {
   //alert('Funcionando')

   $('#botao').on('click', function() {
      $('h1').html('Hello World alterado')

      $(this).addClass('botao')

      $('#imagem').attr('src', CameraGalerry)
   })
})