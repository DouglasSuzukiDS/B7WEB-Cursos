// (02) Compra de Pizza 02
const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)

pizzaJson.map((item, index) => {
   //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true) // Clona tudo que haver dentro
   // Preencher as informações e pizzaItem
   let pizzaItem = c('.models .pizza-item').cloneNode(true)

   //document.querySelector('.pizza-area').append( pizzaItem )
   c('.pizza-area').append( pizzaItem )
})