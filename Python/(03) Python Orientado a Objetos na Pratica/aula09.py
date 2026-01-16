# Aula 09 - Aberto para extensao, fechado pra modificação (OCP)
# OCP = Open/Closed Principle

from abc import ABC, abstractmethod
   
class Frete(ABC):
   @abstractmethod
   def calcular(self, distancia):
      pass

class FreteSedex(Frete):
   def calcular(self, distancia):
      return distancia * 2.5
   
class FreteComum(Frete):
   def calcular(self, distancia):
      return distancia * 1.5

class FreteSedex10(Frete):
   def calcular(self, distancia):
      return distancia * 5

class FreteSedexIntergalatico(Frete):
   def calcular(self, distancia):
      return distancia * 150
   
# Implementação
def calcular_frete(tipo: Frete, distancia):
   return tipo.calcular(distancia)

print(calcular_frete(FreteComum(), 12))
print(calcular_frete(FreteSedex(), 12))
print(calcular_frete(FreteSedex10(), 12))
print(calcular_frete(FreteSedexIntergalatico(), 12))