/*document.querySelector('.lista')
document.querySelector('ol.lista')
document.querySelector('#titulo').innerHTML = 'Mudando o Titulo'

document.querySelectorAll('.lista')*/

let lista = document.querySelectorAll('.lista')

for(let i in lista) {
   lista[i].style.color = '#F00'
}
