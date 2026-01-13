# Aula 04 - Projeto: Gerador de lista de comprar com persistêcnia em txt

# Projeto: Cadastro de lista de compras
# Regras:
# - Ler e exibir a lista
# - Abrir a possibilidade de você adicionar um novo item nessa lista 

# Minha resolução:
def lista_compras():
   print("=== Lista de Compras ===")
   print("1 - Ver lista de compras")
   print("2 - Adicionar item na lista de compras")
   opcao = input("Escolha uma opção: ")

   if opcao == "1":
      with open("lista.txt", "r") as arquivo:
         lista = arquivo.read()

         print("Sua lista de compras:")
         
         print(lista)
   elif opcao == "2":
      item = input("Digite o nome do item que deseja adicionar: ")

      with open("lista.txt", "a") as arquivo:
         arquivo.write(item + "\n")

      print(f"O item '{item}' foi adicionado à lista de compras.")
   else:
      print("Opção inválida.")

# lista_compras()

with open("lista.txt", 'r') as lista:
   for item in lista:
      print(f'- {item.strip()}')

print('--------')

with open("lista.txt", 'a') as lista:
   novo_item = input('Digite o item novo: ')

   if novo_item != '':
      lista.write(f'{novo_item}\n')
      print(f'O item {novo_item} foi adicionado à lista.')
   else:
      print('Você não digitou nada.')