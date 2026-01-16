# Aula 10 - Principio da substituição de Liskov
# LSP - Liskov Substitution Principle

from abc import ABC, abstractmethod

class Exportador(ABC):
   @abstractmethod
   def exportar(self, dados):
      pass

class ExportadorCSV(Exportador):
   def exportar(self, dados):
      print("Exportando o CSV:", dados)

class ExportadorPDF(Exportador):
   def exportar(self, dados):
      print("Exportando o PDF:", dados)

# Implementação
def exportar_dados(exportador: Exportador, dados):
   exportador.exportar(dados)

exportar_dados(ExportadorPDF(), "abc")