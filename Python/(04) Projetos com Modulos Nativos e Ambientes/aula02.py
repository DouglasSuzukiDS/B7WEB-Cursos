# Aula 02 - Explorando o módulo OS para automações
import os

print(os.getcwd())  # Mostra o diretório atual

os.mkdir('past') # Cria uma nova pasta chamada

os.removedirs('past') # Remove a pasta

# os.unlink('arquivo.txt') # Deleta o arquivo arquivo

lista = os.listdir('venv') # Lista os arquivos e pastas do diretório atual
# print(lista) 

#os.rename('ARQ', 'NewName') # Renomeia o arquivo ou pasta

print(os.path.join('venv', 'Scripts')) # Junta caminhos de forma correta indepentende do SO

for arquivo in lista:
   print(arquivo)