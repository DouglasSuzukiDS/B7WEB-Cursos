/*let numeros = [1, 2, 3, 4]

let outros = [...numeros, 5, 6, 7, 8]

console.log(outros)

let info = {
   nome: 'Linlin',
   sobrenome: 'Chalotte',
   idade: 60
}

let novaInfo = {
   ...info,
   cidade: 'Tokyo',
   estado: 'Tokyo',
   pais: 'Japão'
}

console.log(novaInfo) */

function adicionarInfo(info) {
   let novasInfo = {
      ...info,
      status: 0,
      token: 'afefe',
      data_cadastro: '....'
   }

   return novasInfo
}

console.log(adicionarInfo({ nome: 'Linlin', sobrenome: 'Charlotte' }))