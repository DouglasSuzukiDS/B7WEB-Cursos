from modificador import Notificador

class NotificadorLog(Notificador):
   def enviar(self, mensagem):
      with open('log.txt', 'a') as file:
         file.write(f'[LOG] {mensagem}\n')
