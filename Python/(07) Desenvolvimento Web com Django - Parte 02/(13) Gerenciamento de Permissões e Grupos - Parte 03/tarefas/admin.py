from django.contrib import admin
# from . import models
from .models import Etiqueta, Perfil, Tarefa
# Register your models here.

# Tarefa
class TarefaAdmin(admin.ModelAdmin):
    list_display = [ 'titulo', 'descricao', 'criada_em'] # Definindo colunas que serao exibidas na lista

admin.site.register(Tarefa, TarefaAdmin) # Cadastrando o model no admin

# Etiqueta
class EtiquetaAdmin(admin.ModelAdmin):
    list_display = ['nome', 'cor']

admin.site.register(Etiqueta, EtiquetaAdmin)

# Perfil
class PerfilAdmin(admin.ModelAdmin):
    list_display = ['bio', 'tema_escuro']

admin.site.register(Perfil, PerfilAdmin)
