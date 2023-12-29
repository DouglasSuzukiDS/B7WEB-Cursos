<?php
  /*$nome = 'Nick';
   $sobrenome = 'SZK';
   $idade = 30;
   // $nomeCompleto = $nome.' '.$sobrenome; // Forma 01
   $frase = "$nome $sobrenome tem $idade anos"; // Forma 02

   // echo $frase; */

   /*$x = '3';
   $y = 4;
   $w = $x + $y;

   echo $w;*/

   $nome = 'Nick';
   $sobrenome = 'SZK';

   $nomeCompleto = $nome;
   $nomeCompleto .= $sobrenome; // Pega o que já tem e acrescenta o novo valor

   echo $nomeCompleto;
