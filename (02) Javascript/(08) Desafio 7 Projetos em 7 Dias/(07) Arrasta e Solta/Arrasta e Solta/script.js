/*document.querySelector('.neutralArea').addEventListener('click', (e) => {
   console.log('Target', e.target) // Retorna exatamente o elemento clicado
   console.log('currentTarget', e.currentTarget) // Retorna quem tem o evento
})*/

let areas = {
   a: null,
   b: null,
   c: null
}

document.querySelectorAll('.item').forEach(item => {
   item.addEventListener('dragstart', dragStart)
   item.addEventListener('dragend', dragEnd)
})

document.querySelectorAll('.area').forEach(area => {
   area.addEventListener('dragover', dragOver) // Quando o elemento estiver sendo movido
   area.addEventListener('dragleave', dragLeave) // Quando se sai de uma area dropavel
   area.addEventListener('drop', drop)
})

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral)
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral)
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral)

// Functions Item
function dragStart(e) {
   e.currentTarget.classList.add('dragging')
}

function dragEnd(e) {
   e.currentTarget.classList.remove('dragging')
}

// Function Area
function dragOver(e) { // Quando o elemento estiver sendo movido
   if(e.currentTarget.querySelector('.item') === null) {
      e.preventDefault()
      // console.log('Passou por Cima')
      e.currentTarget.classList.add('hover')
   }
}

function dragLeave(e) { // Quando se sai de uma area dropavel
   // console.log('Saiu de uma area dropavel')
   e.currentTarget.classList.remove('hover')
}

function drop(e) { // Quando vai ha um local e solta, depende do dragOver
   // console.log('Liberado')
   e.currentTarget.classList.remove('hover') // Para remover o hover do elemento da area dropavel

   if(e.currentTarget.querySelector('.item') === null) {
      let dragItem = document.querySelector('.item.dragging') // Item arrastado
      e.currentTarget.appendChild(dragItem)

      updateAreas()
   }
}

// Functions Neutral Area
function dragOverNeutral(e) {
   e.preventDefault()
   e.currentTarget.classList.add('hover')
}

function dragLeaveNeutral(e) {
   e.currentTarget.classList.remove('hover')
}

function dropNeutral(e) {
   e.currentTarget.classList.remove('hover')

   let dragItem = document.querySelector('.item.dragging') // item arrastado
   e.currentTarget.appendChild(dragItem)

   updateAreas()
}

// Logic Functions
function updateAreas() {
   document.querySelectorAll('.area').forEach(area => {
      let name = area.getAttribute('data-name')

      if(area.querySelector('.item') !== null) {
         areas[name] = area.querySelector('.item').innerHTML
      } else {
         areas[name] = null
      }

   })

   // console.log(areas)
   if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
      document.querySelector('.areas').classList.add('correct')
   } else {
      document.querySelector('.areas').classList.remove('correct')
   }
}
