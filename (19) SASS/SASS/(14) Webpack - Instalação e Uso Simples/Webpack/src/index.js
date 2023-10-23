// (13) Webpack - Instalação e Uso Simples

import $ from 'jquery'

//npx webpack => Roda o webpack

$(function() {
   //alert('Funcionando')

   $('#botao').on('click', function() {
      $('h1').html('Hello World alterado')
   })
})