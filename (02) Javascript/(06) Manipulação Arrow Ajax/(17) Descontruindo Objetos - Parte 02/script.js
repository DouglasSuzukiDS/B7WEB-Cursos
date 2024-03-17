let pessoa = {
   nome: 'Kaido',
   sobrenome: 'A criatura',
   idade: 90,
   social: {
      facebook: 'FB - Kaido Yonkou',
      //instagram: 'Insta - Kaido Yonkou'
      instagram: {
         url: '@kaido',
         seguidores: 1000
      }
   },
   nomeCompleto: function() {
      return `${this.nome} ${this.sobrenome}`
   }
}

/*let { facebook, instagram } = pessoa.social
console.log(facebook, instagram)*/

/*let { nome, idade, social: { instagram } } = pessoa
console.log(nome, idade, instagram) */

/* let { nome, idade, social: { instagram: { url: instagram, seguidores } } } = pessoa
console.log(nome, idade, instagram, seguidores)*/

/*let { nome, idade, social: { instagram } } = pessoa
console.log(nome, idade, instagram)*/

/*function pegarNomeCompleto(obj) {
   // return obj.nome + ' ' + obj.sobrenome

   let nome = obj.nome
   let sobrenome = obj.sobrenome
   return `${nome} ${sobrenome}`
}*/

function pegarNomeCompleto({ nome, sobrenome = 'Silva', social: { instagram: { url: instagram } } }) {
   return `${nome} ${sobrenome} (Siga em ${instagram})`
}

console.log(pegarNomeCompleto(pessoa))
