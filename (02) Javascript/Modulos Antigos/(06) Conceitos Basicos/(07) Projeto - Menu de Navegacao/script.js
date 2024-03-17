function menuToggle() {
   let menuArea = document.getElementById('menu-area')
   
   // Forma 01 
   /*if(menuArea.classList.contains('menu-opened') == true) {
      menuArea.classList.remove('menu-opened')
   } else {
      menuArea.classList.add('menu-opened')
   }*/

   // Forma 02
   /*if(menuArea.style.width == '200px') {
      menuArea.style.width = '0px'
   } else {
      menuArea.style.width = '200px'
   }*/

   // Minha
   menuArea.classList.toggle('menu-opened')
}