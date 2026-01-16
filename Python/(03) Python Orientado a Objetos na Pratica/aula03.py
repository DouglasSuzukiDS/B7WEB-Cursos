# Aula 03 - Encapsulamento com Setter

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

p1 = Produto('Mouse XYZ', 100)
p1.preco = 10

print(f'Nome: {p1.nome} - R$: {p1.preco}')