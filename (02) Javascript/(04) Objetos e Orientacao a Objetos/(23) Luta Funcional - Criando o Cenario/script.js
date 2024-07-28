// (22) Luta Funcional - Criando Personagens
const char = createKnight('Nick')
const monster = createLittleMonster()

stage.start(
   char, monster, document.querySelector('#char'), document.querySelector('#monster')
)