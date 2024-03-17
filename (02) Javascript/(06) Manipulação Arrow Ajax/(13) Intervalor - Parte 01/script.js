let timer
function comecar() {
   timer = setInterval(showTime, 1000)
}

function parar() {
   clearInterval(timer)
}

function showTime() {
   let d = new Date()

   let h = d.getHours()
   let m = d.getMinutes()
   let txt = h + ' : ' + m + ' : ' + s

   document.querySelector('.demo').innerHTML = txt
}
