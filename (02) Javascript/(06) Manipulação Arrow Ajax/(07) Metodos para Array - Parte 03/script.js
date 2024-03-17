let lista = [45, 4, 9, 16, 25]
let lista2 = []

//let res = lista.toString()
//let res = lista.join('-') // Une a string com a separação 

//let res = lista.indexOf('Corante') // Retorna a posição, se nao existir ele retorna -1

//lista.pop() // Remove o ultimo elemento
//lista.shift() // Remove o primeiro elemento
//lista.push('Prato') // Insere no final
//lista.unshift('') // Insere no inicio

//lista[ lista.length ] = 'Liquidificador' // Insere na posição

//lista.splice(1, 1) // (Elemento, Quantidade) Revome o intem e quantidade

//let res = lista.concat(lista2)

//lista.sort()
//lista.reverse()

/*lista2 = lista.map(function(item) { // Executa para cada elemento
   return item * 2 
})*/

/*lista2 = lista.filter(function(item) { // Retorna true ou false
   if(item < 20 ){
      return true
   } else {
      return false
   }
})*/

/*lista2 = lista.every(function(item) { // Verifica se todos os elementos atendem a condição
   if(item > 20) {
      return true
   } else {
      return false
   }
})*/

lista2 = lista.some(function(item) { // Verifica se pelos 1 atende a condição
   if(item > 20) {
      return true
   } else {
      return false
   }
})


let res = lista2

console.log(res)