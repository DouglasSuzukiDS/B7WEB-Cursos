# Aula 09 - Explorando os módulos OS e PATHLIB - Parte 02
'''import pathlib

teste_folder = pathlib.Path('teste')

if teste_folder.exists() == False:
   teste_folder.mkdir()
   print('Pasta criada com sucesso!')
else:
   teste_folder.rmdir()
   print('A pasta deleteada com sucesso!')'''

from pathlib import Path

pasta = Path('pasta')
pasta.mkdir()