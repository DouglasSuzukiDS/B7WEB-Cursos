# Aula 12 - Projeto 04 - CLI que simula uma calculadora de operações básicas

# py main.py --op soma/sub/div/multi --num1 15 --num2 2
import argparse

parser = argparse.ArgumentParser(description="CLI de Calculadora")
parser.add_argument('--op', help='Operação a ser feita (soma, sub, div, multi)', required=True)
parser.add_argument('--num1', type=int, help='Número 1 da conta')
parser.add_argument('--num2', type=int, help='Número 2 da conta')
args = parser.parse_args()

result = 0

if args.op == 'soma':
   result = args.num1 + args.num2
elif args.op == 'sub':
   result = args.num1 - args.num2
elif args.op == 'div':
   if args.num2 == 0:
      print('Não pode dividir por zero.')
      exit()
   
   result = args.num1 / args.num2
elif args.op == 'multi':
   result = args.num1 * args.num2
else:
   print('Operação inexistente.')
   exit()

print(f'Resultado: {result}')