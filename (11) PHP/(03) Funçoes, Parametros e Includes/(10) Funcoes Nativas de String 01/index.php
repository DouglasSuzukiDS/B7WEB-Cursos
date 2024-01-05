<?php
   $nome = '  Nick  ';
   // echo trim($nome); // Remove os espaços

   $nomeSujo = '  Nick  ';
   $nomeLimpo = trim($nomeSujo);

   echo "Nome sujo: ".strlen($nomeSujo)."<br/>";
   echo "Nome limpo: ".strlen($nomeLimpo)."<br/>";

   echo strtolower($nome)."<br/>"; // Deixa em minusculo
   echo strtoupper($nome)."<br/>"; // Deixa em maiuculo

   $nomeAlterado = str_replace('ck', 'ckie', $nome); // Procura o termo, e substitui pelo termo expecificado na variavel informada
   echo "$nomeAlterado<br/>";

   $nomeCompleto = "Nick SZK";
   $nome2 = substr($nomeCompleto, 0, 3); // Pega uma parte da string. Com numero negativos pega do final
   echo "$nome2<br/>";
