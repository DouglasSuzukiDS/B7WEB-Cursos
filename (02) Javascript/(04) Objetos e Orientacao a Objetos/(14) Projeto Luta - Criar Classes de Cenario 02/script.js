// (14) Projeto Luta - Criar classes de personagens 02
let char = new Sorcerer('Nick')
let monster = new LittleMonster()

const stage = new Stage(
   char,
   monster,
   document.querySelector('#char'),
   document.querySelector('#monster'),
)
stage.start()