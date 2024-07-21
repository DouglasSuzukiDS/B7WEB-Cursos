// (15) Projeto Luta - Criar ataques
let char = new Sorcerer('Nick')
let monster = new LittleMonster()

const stage = new Stage(
   char,
   monster,
   document.querySelector('#char'),
   document.querySelector('#monster'),
)
stage.start()