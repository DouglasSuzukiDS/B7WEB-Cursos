// (09) Fetch 02

function loadPosts() {
   document.getElementById('posts').innerHTML = 'Carregando ...'

   fetch('https://jsonplaceholder.typicode.com/posts')
   // fetch('https://jsonplaceholder.typicode.com/users')
      .then(function(resultado) {
         // console.log(resultado)
         return resultado.json()
      })
      .then(function(json) {
         // console.log(json)

         montarBlog(json)

         // document.getElementById('posts').innerHTML = json.length + ' posts'
      })
      .catch(function(error) {
         console.log('Erro')
      })
}

function montarBlog(lista) {
   let html = ''

   for(let i in lista) {
      html += '<h3>' + lista[i].title + '</h3>'
      html += lista[i].body
      html += '<hr />'
   }

   document.getElementById('posts').innerHTML = html
}
