// (20) Webpack - Output Organizado

import $ from 'jquery'
import './css/teste.scss'
import FeedImg from './images/feed.svg'
import Botao from './components/botao/index'

// npx webpack => Roda o webpack
// npx webpack --config webpack.config.js => Apos o arquivo do Webpack estar configurado
// npm run build => Depois de configurar o script no package.json

$(function() {

   let botao = new Botao()
   botao.setTitle('Testador')
   botao.setClick(function() {
      alert('Clicou')
   })
   
   $('.area').html( botao.render() )
})