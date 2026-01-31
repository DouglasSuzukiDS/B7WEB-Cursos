from django.shortcuts import render, redirect
from .forms import TarefaForm

def home(request):
   return render(request, 'tarefas/home.html')

def add (request):
   if(request.method == 'POST'):
      form = TarefaForm(request.POST)

      if form.is_valid():
         form.save()
         return redirect('home')
   else:
      form = TarefaForm()

   return render(request, 'tarefas/adicionar.html', {'form': form})