# Aula 03 - Usando with open: Boas praticas ao lidar com arquivos

'''with open('lista.txt', 'r') as arquivo:
   for linha in arquivo:
      print(linha.strip())'''

with open('lista.txt', 'w') as arquivo:
   arquivo.write('Luffy\n')
   arquivo.write('Usopp\n')