let timer

function rodar() {
   timer = setTimeout(function() { // Espera pra depois executar a função
      document.querySelector('.demo').innerHTML = 'Rodou'
   }, 2000)
}

function parar() {
   clearTimeout(time)
}