<?php
   // $nome = 'Nick';

   $nomeCompleto = $nome ?? 'Visitante';
   // $nomeCompleto .= isset($sobrenome) ? $sobrenome : '';
   $nomeCompleto .= $sobrenome ?? ''; // Apenas se não existir

   echo $nomeCompleto;
