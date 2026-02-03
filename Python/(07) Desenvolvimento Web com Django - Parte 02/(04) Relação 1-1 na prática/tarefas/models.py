from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Tarefa(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(blank=True)
    concluida = models.BooleanField(default=False)
    criada_em = models.DateTimeField(auto_now_add=True)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE) # Deleta o usuario e todas as tarefas associadas a ele

    def __str__(self): # Seria uma definicao do que sera exibido quando listar os dados
        return self.titulo

class Perfil(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    tema_escuro = models.BooleanField(default=False)

    def __str__(self):
        return f'Perfil de {self.usuario.username}'