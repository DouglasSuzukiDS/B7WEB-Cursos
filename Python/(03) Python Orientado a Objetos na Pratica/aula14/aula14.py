# Aula 14 - Organizando o projeto em arquivos
from notif_email import NotificadorEmail
from notif_sms import NotificadorSMS
from notif_log import NotificadorLog
from notif_zap import NotificadorWhatsApp
from gerenciador import GerenciadorDeNotificacoes

email = NotificadorEmail()
sms = NotificadorSMS()
log = NotificadorLog()
zap = NotificadorWhatsApp()

gerenciador = GerenciadorDeNotificacoes([email, sms, log, zap])
gerenciador.enviar_todos( 'Mensagem enviada com sucesso.')