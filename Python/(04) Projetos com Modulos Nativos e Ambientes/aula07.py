# Aula 07 - Lidando com datas e horarios com datetime - Parte 02
import datetime

data = datetime.datetime.strptime('29/03/1995', '%d/%m/%Y')

tres_dias = data + datetime.timedelta(days=3)
print(tres_dias)

data2 = datetime.datetime.strptime('04/04/1995', '%d/%m/%Y')

data_delta = data2 - data
print(f'Entre o dia {data.strftime("%d/%m")} e o dia {data2.strftime("%d/%m")} se passaram {data_delta.days} dias')