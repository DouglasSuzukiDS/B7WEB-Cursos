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

   $nomeCompleto = "nick szk";
   $nome2 = substr($nomeCompleto, 0, 3); // Pega uma parte da string. Com numero negativos pega do final
   echo "$nome2<br/>";

   $posicao = strpos($nomeCompleto, 'S'); // Retorna a posição
   echo "$posicao <br/>";

   if($posicao > 0) {
      echo "Tem <br/>";
   } else {
      echo "Não tem <br/>";
   }

   echo ucfirst($nomeCompleto)."<br/>"; // Transforma a primeira letra em maiusculo

   echo ucwords($nomeCompleto)."<br/>"; // Transforma a 1 palavra em maiuscula

   $nomes = explode(' ', $nomeCompleto); // Separa a string pelo termo e coloca em um array
   echo print_r($nomes)."<br/>"; 

   $numero = 12912.12;
   echo "R$: ".number_format($numero, 1, ',', '.')."<br/>"; // Formata os numero conforme o expecificado
