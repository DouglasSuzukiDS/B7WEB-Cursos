# Aula 07 - Classes abstratas e interfaces com ABC

from abc import ABC, abstractmethod
# ABC => Abstract Base Class  
class Pagamento(ABC):
   @abstractmethod
   def pagar(self, valor):
      pass

class PagamentoPromessa(Pagamento):
   def pagar(self, valor):
      print(f'Pagando na promessa R$ {valor}')

class PagamentoCartao(Pagamento):
   def pagar(self, valor):
      print(f'Pagando no cartão R$ {valor}')

class PagamentoPix(Pagamento):
   def pagar(self, valor):
      print(f'Pagando no pix R$ {valor}')

class PagamentoBoleto(Pagamento):
   def pagar(self, valor):
      print(f'Pagando no boleto R$ {valor}')

def realizar_pagamento(meio: Pagamento, valor):
   meio.pagar(valor)

promessa = PagamentoPromessa()
cartao = PagamentoCartao()
pix = PagamentoPix()
boleto = PagamentoBoleto()

realizar_pagamento(promessa, 100)
realizar_pagamento(cartao, 150)
realizar_pagamento(pix, 200)
realizar_pagamento(boleto, 250)