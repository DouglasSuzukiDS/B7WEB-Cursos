<?php
   // require() = Impede a execução caso não encontrar o arquivo;
   // include() = Gera apenas um Warning mas executa o restante do codigo

   // require_onde() = Puxa o arquivo apenas uma vez, mesmo que por algum motivo vc faça a requisição + vez
   require('header.php');
   require('config.php');

   echo 'Conteudo <br/>';

   echo "Nome de usuário: $usuario";