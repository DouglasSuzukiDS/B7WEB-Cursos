# Aula 25 - Herança e reutilização de código

class Pessoa: 
   def __init__(self, nome, idade):
      self.nome = nome
      self.idade = idade

   def oi(self):
      print(f'Oi, meu nome é {self.nome} e tenho {self.idade} anos.')
   
class Funcionario(Pessoa):
   def __init__(self, nome, idade, salario):
      super().__init__(nome, idade)
      self.salario = salario
   
   def exibir_salario(self):
      print(f'O salário de {self.nome} é {self.salario}.')

f1 = Funcionario('Nick', 20, 3000)
f1.oi()
f1.exibir_salario()