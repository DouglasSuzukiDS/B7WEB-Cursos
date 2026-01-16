from modificador import Notificador

class NotificadorWhatsApp(Notificador):
   def enviar(self, mensagem):
      print(f'[WHATSAPP] {mensagem}')