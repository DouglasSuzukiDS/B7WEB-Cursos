# Aula 11 - Lidando com argumentos de linha de comando com sys e argparse
import sys
import argparse

parser = argparse.ArgumentParser(description="Script de teste")
parser.add_argument('--nome', default='Ninguém', help='Nome da pessoa')
parser.add_argument('--idade', type=int, default=1, help='Idade da pessoa')
args = parser.parse_args()

print(f'Opa {args.nome}, você tem {args.idade} anos!')

# Exemplo de uso:
# py main.py --nome Nick --idade 20
# py main.py --help => Mostra a lista de argumentos disponíveis