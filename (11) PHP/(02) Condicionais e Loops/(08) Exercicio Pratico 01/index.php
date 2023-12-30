<?php
   // Ex: Utilizar loops para gerar 10x o - em 10 linhas

   $char = '-';

   for($lines = 0; $lines < 10; $lines++) {
      for($c = 0; $c < 10; $c++) {
         echo $char;
      }

      echo "<br/>";
   }