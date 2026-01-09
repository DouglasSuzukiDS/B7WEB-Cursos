# Aula 22 - Criando Classes, Atributos e Metodos

class Product:
   def resumir(self):
      print(f"{self.name}, custa R$ {self.price}")

p1 = Product()
p1.name = "CD do Linkin Park"
p1.price = 20

p2 = Product()
p2.name = "DVD de System of a Down"
p2.price = 40

p1.resumir()
p2.resumir()