from django.shortcuts import render, redirect, get_object_or_404
from .forms import TarefaForm
from .models import Tarefa

def home(request):
   lista = Tarefa.objects.all() # Faz uma consulta no DB para trazer todas as tarefas
   
   return render(request, 'tarefas/home.html', {'tarefas': lista})

def add (request):
   if(request.method == 'POST'):
      form = TarefaForm(request.POST)

      if form.is_valid():
         form.save()
         return redirect('home')
   else:
      form = TarefaForm()

   return render(request, 'tarefas/adicionar.html', {'form': form})

def tarefa(request, id):
   tarefa = get_object_or_404(Tarefa, id=id)
   etiquetas = tarefa.etiquetas.all()

   return render(request, 'tarefas/tarefa.html', {'tarefa': tarefa})