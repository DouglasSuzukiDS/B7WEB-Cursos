# Aula 06 - Lidando com datas e horarios com datetime - Parte 01
import datetime

agora = datetime.datetime.now()

data = agora.strftime('%d/%m/%Y %H:%M:%S')
print(data)

dt = datetime.date(2020, 1, 1)
print(dt)

dt2 = datetime.datetime.strptime('12/03/1995', '%d/%m/%Y')
print(dt2.year)