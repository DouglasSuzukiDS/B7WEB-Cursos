# Aula 14 - Automatizando tarefas com schedule e time
import schedule
import time

# py -m venv venv => Cria o ambiente virtual
# Windows: venv\Scripts\activate
# pip install -r requirements.txt
# pip freeze > requirements.txt

def dizer_oi():
   print('Opa, tudo bem?')

#schedule.every(3).seconds.do(dizer_oi)
schedule.every(1).hour.do(dizer_oi)
schedule.every().day.at("00:18").do(dizer_oi)
schedule.every().day.at("12:18").do(dizer_oi)

while True:
   schedule.run_pending()
   time.sleep(1)