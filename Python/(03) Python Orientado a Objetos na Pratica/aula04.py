# Aula 04 - Métodos de classe e métodos estáticos

class Modificador:
   @staticmethod
   def maiusculo(valor):
      return valor.upper()

class Produto:
   def __init__(self, nome, _preco):
      self.nome = nome
      self._preco = float(_preco)

   @property
   def preco(self):
      return self._preco

   @preco.setter
   def preco(self, novo_preco):
      if novo_preco > 0:
         self._preco = float(novo_preco)

'''nome_do_produto = Modificador.maiusculo(
   input('Digite o nome do produto: ')
)
p1 = Produto(nome_do_produto, 100)
p1.preco = 10

print(f'Nome: {p1.nome} - R$: {p1.preco}')'''

class Usuario:
   usuarios = []

   def __init__(self, nome):
      self.nome = nome
      Usuario.usuarios.append(self.nome)
   
   def dar_oi(self):
      print(f'Oi, eu sou {self.nome}')
   
   @classmethod
   def total_usuarios(cls):
      return len(cls.usuarios)

usuario1 = Usuario('Nick')
usuario1.dar_oi()
usuario2 = Usuario('Shanks')
usuario3 = Usuario('Luffy')

print(Usuario.total_usuarios())