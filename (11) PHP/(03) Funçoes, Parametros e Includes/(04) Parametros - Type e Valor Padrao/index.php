<?php
   function somar(int $n1, int $n2, int $n3 = 0) {
      $total = $n1 + $n2 + $n3;

      return $total;
   }

   $soma = somar(10, 5);

   echo "Total: $soma <br/>";

   $x = somar(1, 3);
   $y = somar(5, 3, 2);
   $z = somar($x, $y);

   echo "O valor de Z é $z";