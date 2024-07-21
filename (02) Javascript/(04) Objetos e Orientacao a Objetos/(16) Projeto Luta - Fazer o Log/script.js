// (16) Projeto Luta - Fazer o Log

let log = new Log(document.querySelector('.log'))

let char = new Sorcerer('Nick')
let monster = new LittleMonster()

const stage = new Stage(
   char,
   monster,
   document.querySelector('#char'),
   document.querySelector('#monster'),
   log
)

stage.start()