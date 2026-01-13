# Aula 06 - Tratamento de exceções com try, except, else e finally

try:
   # arquivo = open('teste.txt', 'r')
   numero = int(input('Digite um número: '))
   print(f'Você digitou o número {numero}')
except FileNotFoundError:
   print('O arquivo não foi encontrado.')
except ValueError:
   print('Você não digitou um número válido.')
except Exception:
   print('Deu problema aqui.')
finally:
   print('Terminal a execução.')