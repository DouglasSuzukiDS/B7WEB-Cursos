function digitou(e) {
   // console.log('Você digitou')
   // console.log(e)
   if(e.keyCode == 13 && e.ctrlKey == true) { // Enter
      let texto = document.getElementById('campo').value

      console.log(texto)
   }
}
