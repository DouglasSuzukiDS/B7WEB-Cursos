from django.shortcuts import render
from .forms import TarefaForm

def home(request):
   return render(request, 'tarefas/home.html')

def add (request):
   form = TarefaForm()
   return render(request, 'tarefas/adicionar.html', {'form': form})