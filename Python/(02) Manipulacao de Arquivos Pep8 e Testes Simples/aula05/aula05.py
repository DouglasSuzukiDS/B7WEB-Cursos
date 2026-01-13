# Aula 05 - Convertendo o projeto em OOP

# Projeto: Cadastro de lista de compras
# Regras:
# - Ler e exibir a lista
# - Abrir a possibilidade de você adicionar um novo item nessa lista 

class List:
   def __init__(self, name):
      self._filename = f'{name}.txt'
   
   def get_list(self):
      list = []

      with open(self._filename, 'r') as file:
         for item in file:
            list.append(item.strip())

      return list

   def add_item(self, new_item):
      with open(self._filename, 'a') as file:
         if new_item != '':
            file.write(f'{new_item}\n')
            return True
         else:
            return False

list = List('lista')

for item in list.get_list():
   print(f'- {item}')

print('--------')

new_item = input('Digite o item novo: ')

added = list.add_item(new_item)

if added:
   print(f'O item {new_item} foi adicionado à lista.')
else:
   print('Não houve adição')