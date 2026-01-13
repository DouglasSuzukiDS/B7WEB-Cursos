# Aula 13 - Estrutura básica de um projeto Python - Parte 02

# Criando o arquivo requirements.txt (Dependencias dos arquivos)
   # pip freeze > requirements.txt

# py -m venv venv (Criando o ambiente virtual)
# venv\Scripts\activate (Ativando o ambiente virtual no Windows)

# pip install -r requirements.txt

from utils import dar_oi, somar

dar_oi('Nick')

print(somar(10, 5))