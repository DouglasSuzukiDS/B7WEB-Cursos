# Aula 24 - Encapsulamento e Getter/Setter

class Product:
   def __init__(self, name, price):
      self._name = name
      self._price = price
   
   def get_name(self):
      return self._name

   def set_name(self, new_name):
      self._name = new_name
   
   def get_price(self):
      return self._price
   
   def set_price(self, new_price):
      self._price = float(new_price)
      
p1 = Product("CD do Linkin Park", 20)
p2 = Product("DVD de System of a Down", 40)

p1.set_name("CD do Linkin Park - Edição Especial")
print(p1.get_name())

p1.set_price(30)
print(f'O produto {p1.get_name()} agora custa R$ {p2.get_price()}')