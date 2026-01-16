# Aula 05 - Compisição vs Herança? Quando usar cada um

# Herança
'''class Animal:
   def fazer_som(self):
      print('Algum som')

class Cachorro(Animal):
   pass

dog = Cachorro()
dog.fazer_som() '''

class Motor:
   def ligar(self):
      print('Ligando')
   
class Carro:
   def __init__(self):
      self.motor = Motor()
   
   def ligar(self):
      self.motor.ligar()

# Herança => Todo carro é um motor = Aclopado
# Composicao => Todo carro tem um motor = Desaclopado

fiat = Carro()
fiat.ligar()