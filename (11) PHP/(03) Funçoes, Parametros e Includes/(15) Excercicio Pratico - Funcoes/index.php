<?php
   // echo time(); // Exibe a tada em milisegundos
   // echo date('d/m/Y H:i:s'); // Exibe a data, no formato especificado

   // $data = '2020-03-07'; // Padrao internacional
   // $time = strtotime($data); // Transforma em milisegundos
   // echo $time; 

   // echo date('d/m/Y', $time); // Transforma em data 07/03/2020
   // echo date('d/m/Y', strtotime($data)); // Transforma em data 07/03/2020

   // --------------------------------
   // Objetivo: Criar uma função que receba uma data e exiba o dia da semana em postuguês

   function showDate($data) {
      $time = strtotime($data); // Converte para Milisegundos
      // echo $time; 

      $daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

      $dayWeek = date('l', $time); // Pega o dia da semana
      // echo $dayWeek;

      $showPos = array_search($dayWeek, $daysWeek); // Verifica a posição do dia da semana
      // echo $showPos;

      $daysWeekPT = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado', 'Domingo'];

      $dateBR = DateTime::createFromFormat('Y-m-d', $data)->format('d/m/Y'); // Transforma a data no padrap BR

      if(in_array($dayWeek, $daysWeek)) {
         echo "$dateBR => $daysWeekPT[$showPos]";
      } else {
         echo 'Data informada de forma errada';
      }
   }

   showDate('2024-01-04');

   
