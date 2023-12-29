<?php
   /* // Fazer esse código funcionar
      $lista = [
      'nome' => 'Nick',
      'idade' => 30,
      'atributos' => [
         'forca' => 60,
         'agilidade' => 80,
         'destreza' => 50,
      ],
      vida = 1000
      poder = 928
   ];*/ 

   $lista = [
      'nome' => 'Nick',
      'idade' => 30,
      'atributos' => [
         'forca' => 60,
         'agilidade' => 80,
         'destreza' => 50,
      ],
      'vida' => 1000,
      'poder' => 928
   ];

   echo "Nome: $lista[nome] <br/>";
   echo "Força: {$lista['atributos']['forca']}<br/>";
   echo "Vida: $lista[vida] <br/>";
