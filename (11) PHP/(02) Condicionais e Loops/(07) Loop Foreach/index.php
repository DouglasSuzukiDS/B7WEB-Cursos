<?php
   $ingredientes = ['açucar', 'farinha', 'ovo', 'leite', 'fermento'];

   /*foreach($ingredientes as $ingrediente) {
      echo "Item: $ingrediente <br/>";
   }*/

   // print_r($ingredientes); // Exibe a posição e o item

   echo "<h2>Ingredientes<h2/>";
   foreach($ingredientes as $chave => $valor) {
      // echo "Item $chave: $valor <br/>";
      $chave++;
      echo "Item $chave: $valor <br/>";
   }

   echo "<ul>";

   foreach($ingredientes as $chave => $valor) {
      // echo "Item $chave: $valor <br/>";
      echo "<li>$valor</li>";
   }

   echo "</ul>";