// (07) Compra de Pizzas - Parte 07
let modalQt = 1

const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)

// Listagem das Pizzas
pizzaJson.map((item, index) => {
   //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true) // Clona tudo que haver dentro
   // Preencher as informações e pizzaItem
   let pizzaItem = c('.models .pizza-item').cloneNode(true)

   pizzaItem.setAttribute('data-key', index)
   pizzaItem.querySelector('.pizza-item--img img').src = item.img
   
   pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
   pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
   pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

   pizzaItem.querySelector('a').addEventListener('click', (e) => {
      e.preventDefault()
      // console.log('Clicou')

      let key = e.target.closest('.pizza-item').getAttribute('data-key') // Acha o item mais proximo que tenha a classe
      // console.log('Pizza Clicada: ' + key)
      // console.log(pizzaJson[key])
      modalQt = 1
      
      c('.pizzaBig img').src = pizzaJson[key].img

      c('.pizzaInfo h1').innerHTML = pizzaJson[key].name

      c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description

      c('.pizzaInfo--actualPrice').innerHTML = `RS ${pizzaJson[key].price.toFixed(2)}`

      c('.pizzaInfo--size.selected').classList.remove('selected')

      cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
         if(sizeIndex == 2) {
            size.classList.add('selected')
         }

         size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
      })

      c('.pizzaInfo--qt').innerHTML = modalQt

      // Mostrar Modal de Quantidade 
      c('.pizzaWindowArea').style.opacity = 0
      c('.pizzaWindowArea').style.display = 'flex'
      setTimeout(() => {
         c('.pizzaWindowArea').style.opacity = 1
      }, 200)
   })

   //document.querySelector('.pizza-area').append( pizzaItem )
   c('.pizza-area').append( pizzaItem )
})

// Eventos do Modal
function closeModal() {
   c('.pizzaWindowArea').style.opacity = 0
   setTimeout(() => {
      c('.pizzaWindowArea').style.display = 'none'
   }, 500)
}


cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
   item.addEventListener('click', closeModal)
})