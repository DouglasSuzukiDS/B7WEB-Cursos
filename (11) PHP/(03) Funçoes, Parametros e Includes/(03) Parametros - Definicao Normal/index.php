<?php
   function somar($n1, $n2) {
      $total = $n1 + $n2;

      return $total;
   }

   $soma = somar(10, 5);

   echo "Total: $soma <br/>";

   $x = somar(1, 3);
   $y = somar(5, 3);
   $z = somar($x, $y);

   echo "O valor de Z é $z";