from django.contrib import admin
# from . import models
from .models import Tarefa
# Register your models here.

class TarefaAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'descricao', 'criada_em') # Definindo colunas que serao exibidas na lista

admin.site.register(Tarefa, TarefaAdmin) # Cadastrando o model no admin