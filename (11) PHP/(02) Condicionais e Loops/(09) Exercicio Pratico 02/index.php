<?php
   // Ex: Utilizar loops para gerar 20 linhas, onde cada linha tera numero de - correspondente ao numero da linha 

   $char = '-';

   for($lines = 1; $lines < 20; $lines++) {
      for($c = 0; $c <= $lines; $c++) {
         echo $char;
      }

      echo "<br/>";
   }