<?php
   $bolo1 = ['açucar', 'farinha de trigo', 'ovo', 'leite', 'fermento'];
   $bolo2 = ['agua', ...$bolo1, 'corante'];

   // echo $bolo2[6]; // Mostra o item corante

   $bolo = [...$bolo1, ...$bolo2];
   print_r($bolo); // Mostra os itens e suas posições no array