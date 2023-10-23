// (07) Contextual Typing em Funções Anonimas
// Contextual Typing => Seria a identificação automática do tipo de dado pelo codigo
let names = ['Kaido', 'Shanks', 'Roger', 'BigMom', 90]

names.forEach(function(nome) {
   if(typeof nome === 'string') {
      console.log(nome.toUpperCase())
   } else {
      console.log(nome)
   }
})

// tsc NomeArquivo.ts = Compila e converte o arquivo

// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta

// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro