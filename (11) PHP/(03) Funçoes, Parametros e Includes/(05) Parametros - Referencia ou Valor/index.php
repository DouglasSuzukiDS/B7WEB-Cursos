<?php
   function somar($n1, $n2, &$total) {
      // &$VAR => Seria como um state do React, onde o valor se refete em todos os lugares que a utilizam
      $total = $n1 + $n2;
   }

   $x = 3;
   $y = 2;
   $soma = 0;

   somar($x, $y, $soma);

   // echo "Total: $soma <br/>";

   $lista = [4, 9, 2];
   sort($lista);

   print_r($lista);