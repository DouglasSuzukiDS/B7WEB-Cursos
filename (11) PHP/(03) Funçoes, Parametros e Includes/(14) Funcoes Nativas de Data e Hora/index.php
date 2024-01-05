<?php
   // echo time(); // Exibe a tada em milisegundos
   // echo date('d/m/Y H:i:s'); // Exibe a data, no formato especificado

   $data = '2020-03-07'; // Padrao internacional
   $time = strtotime($data); // Transforma em milisegundos
   // echo $time; 

   // echo date('d/m/Y', $time); // Transforma em data 07/03/2020
   echo date('d/m/Y', strtotime($data)) // Transforma em data 07/03/2020