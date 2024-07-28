// (24) Luta Funcional - Criando ataques
const char = createKnight('Nick')
const monster = createLittleMonster()

stage.start(
   char, monster, document.querySelector('#char'), document.querySelector('#monster')
)

const log = {
   list: [],

   addMessage(msg) {
      this.list.push(msg),
      this.render()
   },

   render() {
      const logEl = document.querySelector('.log')
      logEl.innerHTML = ''

      for(let i in this.list) {
         logEl.innerHTML += `<li>${this.list[i]}</li>`
      }
   }

}