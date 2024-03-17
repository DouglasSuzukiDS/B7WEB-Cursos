// (07) Promises

function pegarTemperatura() {
   return new Promise(function(resolve, reject) {
      console.log('Pegando temperatura')

      setTimeout(function() {
         resolve('40 na sombra')
      }, 2000)
   })
}

// Usando a Promise
console.log('Codigo antes')

let temp = pegarTemperatura()

console.log('Codigo durante')

temp.then(function(resultado) { // O then e executado quando se tem o resultado da promise 
   console.log('Temperatura: ' + resultado)
})

temp.catch(function(error) { // Quando a Promise der erro
   console.log('Eita, deu erro!')
})
console.log('Codigo depois')
