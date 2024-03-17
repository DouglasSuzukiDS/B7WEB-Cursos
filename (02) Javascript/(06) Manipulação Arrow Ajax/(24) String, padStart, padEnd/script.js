let telefone = '5'

//console.log( telefone.padEnd(9, '*') ) // padEnd = Informa quantos caracteres no minimo a string deve conter, caso não tenha, ela completa APOS a string passada com o caractere informado

//console.log( telefone.padStart(9, '-') ) // padStart = Informa quantos caracteres no minimo a string deve conter, caso não tenha, ela completa NO COMEÇO da string passada com o caractere informado

let cartao = '1234123412341234'

/*let lastDigits = cartao.slice(-4) // 4 ultimos numeros
//console.log(lastDigits)

let cartaoMascarado = lastDigits.padStart(16, '*')*/

let lastDigits = cartao.slice(0, 3)
let cartaoMascarado = lastDigits.padEnd(16, '*')

console.log('Este é seu cartão? ' + cartaoMascarado)