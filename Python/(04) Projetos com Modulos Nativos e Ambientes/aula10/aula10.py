# Aula 10 - Projeto 03 - Simulador de sorteio simples
import os
import random

with open('lista.txt', 'r') as lista:
   linhas = lista.readlines()
   sorteado = random.choice(linhas).strip()

   print(f'O sorteado foi: {sorteado}')