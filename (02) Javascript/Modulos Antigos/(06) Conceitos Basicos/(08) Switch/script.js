let dia = 6
let diaNome = ''

switch (dia) {
   /*case 1:
      diaNome = 'Segunda-Feira'
      break
   case 2:
      diaNome = 'Terça-Feira'
      break
   case 3:
      diaNome = 'Quarta-Feira'
      break
   case 4:
      diaNome = 'Quinta-Feira'
      break
   case 5:
      diaNome = 'Sexta-Feira'
      break
   case 6:
      diaNome = 'Sabado'
      break
   case 7: 
      diaNome = 'Domingo'
      break*/
   /*case 6:
      diaNome = 'Final de Semana'
      break*/
   case 6:
   case 7:
      diaNome = 'Final de Semana'
      break
   default: 
      diaNome = 'Dia de Semana'
      break
}

document.getElementById('dia').innerHTML= 'Hoje é: ' + diaNome