# Aula 13 - Projeto: Notificador com SOLID total

from abc import ABC, abstractmethod

class Notificador(ABC):
   @abstractmethod
   def enviar(self, mensagem):
      pass

class NotificadorEmail(Notificador):
   def enviar(self, mensagem):
      print(f'[EMAIL] {mensagem}')

class NotificadorSMS(Notificador):
   def enviar(self, mensagem):
      print(f'[SMS] {mensagem}')

class NotificadorLog(Notificador):
   def enviar(self, mensagem):
      with open('log.txt', 'a') as file:
         file.write(f'[LOG] {mensagem}\n')

class NotificadorWhatsApp(Notificador):
   def enviar(self, mensagem):
      print(f'[WHATSAPP] {mensagem}')

class GerenciadorDeNotificacoes:
   def __init__(self, notificadores: list[Notificador]):
      self.notificadores = notificadores

   def enviar_todos(self, mensagem):
      for notificador in self.notificadores:
         notificador.enviar(mensagem)

email = NotificadorEmail()
sms = NotificadorSMS()
log = NotificadorLog()
zap = NotificadorWhatsApp()

gerenciador = GerenciadorDeNotificacoes([email, sms, log, zap])
gerenciador.enviar_todos( 'Mensagem enviada com sucesso.')