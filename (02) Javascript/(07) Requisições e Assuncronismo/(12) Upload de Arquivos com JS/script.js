// (12) Upload de Arquivos com JS

async function enviar() {
   let arquivo = document.getElementById('arquivo').files[0]

   let body = new FormData()
   body.append('title', 'Blabla')
   body.append('arquivo', arquivo)

   let req = await fetch('https:blablabla.com.br/upload', {
      method: 'POST',
      body: body,
      headers: {
         'Content-Type': 'multipart/form-data'
      }
   })
   // console.log(arquivo)
}
