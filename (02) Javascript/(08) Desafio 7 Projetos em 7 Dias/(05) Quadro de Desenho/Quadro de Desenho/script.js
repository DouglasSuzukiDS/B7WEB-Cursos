// Initial Data
let currentColor = 'black'
let canDraw = false
let mouseX = 0
let mouseY = 0

let screen = document.querySelector('#tela')
let ctx = screen.getContext('2d')

// Events
document.querySelectorAll('.colorArea .color').forEach(item => {
   item.addEventListener('click', colorClickEvent)
})

/*
   Passo a Passo para se desenhar no canvas
   - Quando o click do mouse ABAIXAR, ative o modo desenho;
   - Quando o mouse se MOVER, se o modo desenho estiver ativo, desenhe;
   - Quando o click do mouse LEVANTAR, desative o modo desenho
*/
screen.addEventListener('mousedown', mouseDownEvent)
screen.addEventListener('mousemove', mouseMoveEvent)
screen.addEventListener('mouseup', mouseUpEvent)
document.querySelector('.clear').addEventListener('click', clearScreen)

// Functions
function colorClickEvent(e) {
   let color = e.target.getAttribute('data-color')
   // console.log(color)
   currentColor = color
   console.log(currentColor)

   document.querySelector('.color.active').classList.remove('active')
   e.target.classList.add('active')
}

function mouseDownEvent(e) {
   canDraw = true
   mouseX = e.pageX - screen.offsetLeft
   mouseY = e.pageY - screen.offsetTop
}

function mouseMoveEvent(e) {
   if(canDraw) {
      /*let pointX = e.pageX - screen.offsetLeft // Distancia X do elemento para o inicio da tela
      let pointY = e.pageY - screen.offsetTop
      // console.log(pointX, pointY)*/

     draw(e.pageX, e.pageY)
   }
}

function mouseUpEvent() {
   canDraw = false
}

function draw(x, y) {
   let pointX = x - screen.offsetLeft 
   let pointY = y - screen.offsetTop

   // Desenhar
   ctx.beginPath()
   ctx.lineWidth = 5
   ctx.lineJoin = 'round'
   ctx.moveTo(mouseX, mouseY)
   ctx.lineTo(pointX, pointY)
   ctx.closePath()
   ctx.strokeStyle = currentColor
   ctx.stroke()

   mouseX = pointX
   mouseY = pointY
}

function clearScreen() {
   ctx.setTransform(1, 0, 0, 1, 0, 0)
   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

let btnDownload = document.querySelector('#btn-download a')
btnDownload.addEventListener('click', download('img.png'))

function download() { // Com pametro seria para nomear o arquivo 
   let img = screen.toDataURL()
   // btnDownload.download = imgDownload // Dar nome ao arquivo baixado
   btnDownload.href = img
}