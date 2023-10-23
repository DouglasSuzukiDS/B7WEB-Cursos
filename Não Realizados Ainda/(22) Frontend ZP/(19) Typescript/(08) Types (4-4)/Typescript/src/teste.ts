// (08) Types (4/4)
// tsc NomeArquivo.ts => Compila o arquivo 

/*function bemvindo(nome: string, idade:number): string { // A função retorna uma string
   let frase = 'Olá, ' + nome + ', você tem ' + idade + ' anos'
   return frase
}*/

/*function bemvindo(nome: string, idade:number): void { // A função não tera retorno
   let frase = 'Olá, ' + nome + ', você tem ' + idade + ' anos'
   return frase // vai dar erro
}*/

function bemvindo(nome: string, idade: string | number): string { // parametro idade pode ser string ou number
   let frase = 'Olá, ' + nome + ', você tem ' + idade + ' anos'

   return frase // vai dar erro
}

console.log(bemvindo('Kaido', 68))
console.log(bemvindo('Kaido', '68'))