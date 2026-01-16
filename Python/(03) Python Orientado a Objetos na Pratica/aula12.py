# Aula 12 - Principio da segregação de interfaces
# ISP - Interface Segregation Principle

from abc import ABC, abstractmethod

class UsuarioBase(ABC):
   @abstractmethod
   def login(self):
      pass

   def logout(self):
      pass

   def alterar_senha(self):
      pass

class AdminBase(UsuarioBase):
   def cadastrar_usuario(self):
      pass

class Usuario(UsuarioBase):
   def login(self): pass # Implementar

   def logout(self): pass # Implementar

   def alterar_senha(self): pass # Implementar

class Admin(AdminBase):
   def login(self): pass

   def logout(self): pass

   def alterar_senha(self): pass

   def cadastrar_usuario(self): pass