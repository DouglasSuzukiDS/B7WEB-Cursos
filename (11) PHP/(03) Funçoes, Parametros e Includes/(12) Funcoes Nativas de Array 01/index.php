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

   print_r($dobrados);