let info = [ 'Charlotte Linlin', 'Charlotte', 'Linlin', '@BigMom' ]

/* let [ nomeCompleto, nome, sobrenome, instagram ] = info
console.log(nomeCompleto, nome, sobrenome, instagram) */

let [ nomeCompleto, , , instagram ] = info // Pega somentos os itens que deseja
console.log(nomeCompleto, instagram)

let [ nome, sobrenome ] = ['Trafalgar', 'Law']
console.log(nome, sobrenome)

function criar() {
   // let a = [1, 2, 3]
   // return a
   return [1, 2, 3]
}

/*let numeros = criar()
let [a, b, c] = numeros*/

let [a, b, c] = criar()
console.log(a, b,c )