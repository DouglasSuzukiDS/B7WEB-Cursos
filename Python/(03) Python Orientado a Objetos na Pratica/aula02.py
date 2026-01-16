# Aula 02 - AProfundando o encapsulamento

class Conta:
   def __init__(self):
      self._saldo = 0

   @property
   def saldo(self):
      return self._saldo
   
   def depositar(self, valor):
      self._saldo += float(valor)
   
   def sacar(self, valor):
      if(self._saldo >= valor):
         self._saldo -= float(valor)
         return True
      else:
         return False

c1 = Conta()
c1.depositar(200)

qt = input("Quanto deseja sacar? ") 

if c1.sacar(float(qt)) == True:
   print("Saque realizado com sucesso")
else:
   print("Saldo insuficiente")

print(c1.saldo)