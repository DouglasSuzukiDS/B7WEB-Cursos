function alterar(titulo) {
   document.getElementById('titulo').innerHTML = titulo
   document.getElementById('campo').innerHTML = titulo
}

//alterar('Qualquer coisa')

function somar(x, y) {
   let total = x + y
   //document.getElementById('campo').innerHTML = total

   return total
}

//somar(10, 94)
let resultado = somar(10, 15)
console.log(resultado)