# Aula 06 - Polimorfismo e sobreposição de métodos

class Pagamento:
   def pagar(self, valor):
      print(f'Pagando R$ {valor}')

class PagamentoPromessa(Pagamento):
   pass

class PagamentoCartao(Pagamento):
   def pagar(self, valor):
      print(f'Pagando no cartão R$ {valor}')

class PagamentoPix(Pagamento):
   def pagar(self, valor):
      print(f'Pagando no pix R$ {valor}')

def realizar_pagamento(meio: Pagamento, valor):
   meio.pagar(valor)

promessa = PagamentoPromessa()
cartao = PagamentoCartao()
pix = PagamentoPix()

realizar_pagamento(promessa, 100)
realizar_pagamento(cartao, 150)
realizar_pagamento(pix, 200)