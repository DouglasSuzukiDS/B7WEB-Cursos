# Aula 23 - Entendendo os Contrutores

class Product:
   def __init__(self, name, price):
      self.name = name
      self.price = price

   def resumir(self):
      print(f"{self.name}, custa R$ {self.price}")

p1 = Product("CD do Linkin Park", 20)
p2 = Product("DVD de System of a Down", 40)

p1.resumir()
p2.resumir()