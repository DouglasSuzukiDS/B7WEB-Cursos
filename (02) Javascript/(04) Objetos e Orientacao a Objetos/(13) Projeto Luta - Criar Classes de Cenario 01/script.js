// (13) Projeto Luta - Criar classes de personagens 01
let char = new Sorcerer('Nick')
let monster = new BigMonster()

const stage = new Stage(
   char,
   monster,
   document.querySelector('#char'),
   document.querySelector('#monster'),
)
stage.start()