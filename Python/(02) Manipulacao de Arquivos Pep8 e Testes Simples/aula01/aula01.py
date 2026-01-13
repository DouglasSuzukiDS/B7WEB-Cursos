# Aula 01 - Leitura de arquivos .txt com Open

# r => read
# w => write
# a => append
# x => create
arquivo = open('lista.txt', 'r') 

# conteudo = arquivo.read()
# print(conteudo)

linhas = arquivo.readlines()

for linha in linhas:
   print(f'Linha: {linha.strip()}') # tira os espaços em branco no começo e no final da linha
