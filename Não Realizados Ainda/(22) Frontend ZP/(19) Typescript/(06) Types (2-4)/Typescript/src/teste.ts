// (06) Types (2/4)
// tsc NomeArquivo.ts => Compila o arquivo 


let info: [string, number, string]
info = ['Kaido', 68, 'Uo Uo no Mi']

// ENUM => Basicamente é uma estrutura que define valores específicos, caso não definidos ficam contando infinitamente, que serve para o programador verificar cada item inserido. 
enum Status { // Automaticamente seria do tipo number
   Agardando,
   Pago, 
   Cancelado
}

let meuStatus = Status.Cancelado