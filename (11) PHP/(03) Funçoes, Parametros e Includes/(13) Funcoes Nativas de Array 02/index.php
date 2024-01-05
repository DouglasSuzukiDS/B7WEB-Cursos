<?php
   $lista = ['Nick', 'Shanks', 'Roger', 'BigMom', 'Kaido'];

   // echo 'Total: '.count($lista); // Mosta o tamanho

   $aprovados = ['Nick', 'Roger', 'Shanks']; 
   $reprovados = array_diff($lista, $aprovados); // Retorna a diferença

   // print_r($reprovados);

   $numeros = [10, 20, 24, 91, 18];
   $filtrados = array_filter($numeros, function($item) {
      if($item < 30) {
         return true;
      } else {
         return false;
      }
   });

   // print_r($filtrados);

   $dobrados = array_map(function($item) {
      return $item * 2;
   }, $numeros);

   // print_r($dobrados);

   // array_pop($numeros); // Remove o ultimo item
   // array_shift($numeros); // Remove o primeiro item 
   // print_r($numeros);

   /*if(in_array(91, $numeros)) { // Verifica se o item existe
      echo 'Existe';
   } else {
      echo 'Não existe';
   }*/

   $pos = array_search(91, $numeros); // Retorna a posição caso ele exista no array
   // echo $pos;

   // sort($numeros); // Ordena o array
   // rsort($numeros); // Ordena o array decrecente
   // asort($numeros); // Ordena sem mudar a chave da posição do item
   arsort($numeros); // Ordena mantendo a chave em ordem decrecente
   // echo "A chave 3 é: $numeros[3]";

   // print_r($numeros);

   $nomes = ['Monkey', 'D.', 'Luffy'];
   $nome = implode(' ', $nomes); // Transforma o array em string
   echo $nome;