# Aula 01 - Revisao rápida - O que é Orientação a Objetos

class Pessoa:
   def __init__(self, nome):
      self.nome = nome
   
   def saudar(self):
      print(f"Olá, meu nome é {self.nome}.")

p1 = Pessoa("Nick")
p1.saudar()