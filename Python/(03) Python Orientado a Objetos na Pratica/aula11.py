# Aula 11 - Inversão de dependência e injeção de dependência
# DIP - Dependency Inversion Principle
# Injeção de dependência

from abc import ABC, abstractmethod

class Enviador(ABC):
   @abstractmethod
   def enviar(self, email):
      pass

class EnviadorEmail(Enviador):
   def enviar(self, email):
      print('E-mail enviado com sucesso.')

class EnviadorSMS(Enviador):
   def enviar(self, email):
      print('SMS enviado com sucesso.')

class CadastroUsuario:
   def __init__(self, enviador: Enviador):
      self.enviado = enviador

   def cadastrar(self, nome, email):
      # Processo para salvar o usuário
      self.enviado.enviar(email)

# Implementação
enviador = EnviadorEmail()
cadastro = CadastroUsuario(enviador)

cadastro.cadastrar('Nick', 'nick@email.com')