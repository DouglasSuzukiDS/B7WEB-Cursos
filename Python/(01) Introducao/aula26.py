# Aula 26 -Projeto Cadastro de Clientes com OOP

# Projeto> Cadastro de clientes

# Regras:
   # - Classe Pessoa (nome e idade)
   # - Classe Cliente (email e LTV = Lifetime Value)
   # Cadastre 2 clientes diferentes em uma lista
   # Exiba a lista de todos sos clientes cadastrados 
   # Extra: Exiba a soma dos LTV de todos os clientes

class Pessoa:
   def __init__(self, nome, idade):
      self.nome = nome
      self.idade = idade

class Cliente(Pessoa):
   def __init__(self, nome, idade, email, ltv):
      super().__init__(nome, idade)
      self.email = email
      self.ltv = float(ltv)

clientes = []

c1 = Cliente('Nick', 20, 'nick@email.com', 1300)
c2 = Cliente('Amanda', 50, 'amanda@email.com', 14950)

clientes.append(c1)
clientes.append(c2)

soma_ltv = 0

for cliente in clientes:
   print(f'Nome: {cliente.nome} | Idade: {cliente.idade} | Email: {cliente.email} | LTV: {cliente.ltv}')
   soma_ltv += cliente.ltv

print('-------------')
print(f'Total dos LTVs: {soma_ltv}')