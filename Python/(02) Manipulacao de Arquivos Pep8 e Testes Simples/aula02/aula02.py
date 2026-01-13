# Aula 02 - Escrita e Sobrescrita de arquivos

lista = ['Nick', 'Roger', 'Shanks']

'''arquivo = open('lista.txt', 'w') 

# arquivo.write('teste\n')
# arquivo.write('teste2\n')
arquivo.writelines([f'{nome}\n' for nome in lista])'''

arquivo = open('lista.txt', 'a')
arquivo.write('Zoro\n')
arquivo.write('Sanji\n')

arquivo.close()