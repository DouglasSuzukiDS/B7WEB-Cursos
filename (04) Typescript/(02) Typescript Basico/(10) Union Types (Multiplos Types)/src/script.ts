// (10) Union Types (Multiplos Types)

let idade: string | number = 90

idade = document.getElementById('idade').innerHTML

function mostrarIdade(idade: string | number) {
   // Quando se usa tipos diferentes de parametros na função, obrigatoriamente se deve fazer um if para verificar o tipo

   // console.log('Minha idade é ' + idade)
   if(typeof idade === 'string') {
      console.log(idade.toUpperCase())
   } else {
      console.log(idade)
   }
}

mostrarIdade(25)
mostrarIdade('25')

// tsc NomeArquivo.ts = Compila e converte o arquivo

// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta

// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro