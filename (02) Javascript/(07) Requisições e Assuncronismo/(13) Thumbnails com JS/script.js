// (13) Thumbnails com JS

async function mostrar() {
   let imagem = document.getElementById('imagem').files[0]
   
   // console.log(imagem)

   let img = document.createElement('img')
   img.src = URL.createObjectURL(imagem)
   img.width = 200

   document.getElementById('area').appendChild(img)
}
