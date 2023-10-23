/*let scrollTop = document.querySelector('.texto').scrollTop 
console.log(scrollTop)

let scrollLeft = document.querySelector('.texto').scrollLeft 
console.log(scrollLeft)

// Faz o scroll ir pra cima
let scrollTo = document.querySelector('.texto').scrollTo(0,0)
console.log(scrollTo)

// Scroll da tela
let scrollY = window.scrollY
let windowScrollTo = window.scrollTo(0, 0)
// console.log(scrollY)
// console.log(windowScrollTo)*/

/*function subirTela() {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
   })
}*/


function subirTela() {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
   })
}

function decidirBotaoScroll() {
   if(window.scrollY === 0) {
      // Ocultar o botao
      document.querySelector('.scrollbutton').style.display = 'none'
   } else {
      // Mostrar o botao
      document.querySelector('.scrollbutton').style.display = 'block'
   }
}

// Forma 01
// setInterval(decidirBotaoScroll, 1000)

// Forma 02
window.addEventListener('scroll', decidirBotaoScroll)
