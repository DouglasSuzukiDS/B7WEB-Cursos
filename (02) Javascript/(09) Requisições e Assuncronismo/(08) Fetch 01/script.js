// (08) Fetch 01

function loadPosts() {
   document.getElementById('posts').innerHTML = 'Carregando ...'

   // fetch('https://jsonplaceholder.typicode.com/posts')
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(function(resultado) {
         // console.log(resultado)
         return resultado.json()
      })
      .then(function(json) {
         // console.log(json)
         document.getElementById('posts').innerHTML = json.length + ' posts'
      })
      .catch(function(error) {
         console.log('Erro')
      })
}
