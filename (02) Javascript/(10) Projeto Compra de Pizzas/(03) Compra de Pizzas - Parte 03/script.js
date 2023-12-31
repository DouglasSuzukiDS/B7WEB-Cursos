// (03) Compra de Pizza 03
const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)

pizzaJson.map((item, index) => {
   //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true) // Clona tudo que haver dentro
   // Preencher as informações e pizzaItem
   let pizzaItem = c('.models .pizza-item').cloneNode(true)

   pizzaItem.querySelector('.pizza-item--img img').src = item.img
   
   pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
   pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
   pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

   //document.querySelector('.pizza-area').append( pizzaItem )
   c('.pizza-area').append( pizzaItem )
})