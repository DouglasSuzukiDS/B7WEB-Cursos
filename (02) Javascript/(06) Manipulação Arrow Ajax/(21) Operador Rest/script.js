/*function adicionar(...numeros) { // Recebe todos os parametros informados
   console.log(numeros)
}

adicionar(5, 6, 7)*/

function adicionar(nomes, ...novosNomes) {
   let novoConjunto = [
      ...nomes,
      ...novosNomes
   ]

   return novoConjunto
}

let nomes = ['Kaido', 'BigMom']

let outros = adicionar(nomes, 'Shanks', 'Shirohige', 'Kurohige')

console.log(outros)

