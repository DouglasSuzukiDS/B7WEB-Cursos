from django.db import models

# Create your models here.

class Tarefa(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(blank=True)
    concluida = models.BooleanField(default=False)
    criada_em = models.DateTimeField(auto_now_add=True)

    def __str__(self): # Seria uma definicao do que sera exibido quando chamarmos o objeto
        return self.titulo