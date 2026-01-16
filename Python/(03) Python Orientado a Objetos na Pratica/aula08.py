# Aula 08 - O principio da responsabilidade unica (SRP)
# SRP => Single Responsability Principle

class RelatorioFinanceiro:
   def calcular_dados(self, dados):
      pass

class RelatorioArquivo:
   def salvar_relatorio(self, relatorio: RelatorioFinanceiro):
      pass

class RelatorioEnvio:
   def enviar_remail(self, relatorio: RelatorioFinanceiro):
      pass

relatorio = RelatorioFinanceiro()
relatorio_arquivo = RelatorioArquivo()
relatorio_envio = RelatorioEnvio()

relatorio_pronto = relatorio.calcular_dados('abc')
relatorio_arquivo.salvar_relatorio(relatorio_pronto)
relatorio_envio.enviar_remail(relatorio_pronto)
