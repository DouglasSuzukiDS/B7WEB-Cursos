let pessoa = {
   nome: 'Kaido',
   sobrenome: 'A criatura',
   idade: 90,
   social: {
      facebook: 'Kaido Yonkou',
      instagram: 'Kaido Yonkou'
   },
   nomeCompleto: function() {
      return `${this.nome} ${this.sobrenome}`
   }
}

/*let nome = pessoa.nome
let sobrenome = pessoa.sobrenome
let idade = pessoa.idade*/

/*let { nome: pessoaNome, sobrenome, idade } = pessoa
console.log(pessoaNome, sobrenome, idade)*/
let { nome, sobrenome, idade = 0 } = pessoa
console.log(nome, sobrenome, idade)
