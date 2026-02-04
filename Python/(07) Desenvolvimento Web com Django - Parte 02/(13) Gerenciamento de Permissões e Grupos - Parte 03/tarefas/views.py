from django.shortcuts import render, redirect, get_object_or_404
from .forms import TarefaForm
from .models import Tarefa
from django.contrib.auth.decorators import login_required, permission_required

@login_required # Garante que o usuario esteja logado para acessar a view
def home(request):
   lista = Tarefa.objects.select_related('usuario', 'usuario__perfil').prefetch_related('etiquetas').all() # Faz uma consulta no DB para trazer todas as tarefas ja com o nome de usuario e o perfil

   if request.user.has_perm('tarefas.can_view_all_tarefa'):
      lista = lista.all()
   else: 
      lista = lista.filter(usuario=request.user)

   for tarefa in lista:
      tarefa.etiquetas_lista = list(tarefa.etiquetas.all())
   
   return render(request, 'tarefas/home.html', {'tarefas': lista})

@permission_required('tarefas.add_tarefa') # Garante que o usuario tenha a permissao para adicionar tarefas
def add (request):
   if(request.method == 'POST'):
      form = TarefaForm(request.POST)

      if form.is_valid():
         tarefa= form.save(commit=False) # Evita que o form salve automaticamente no DB
         
         tarefa.usuario = request.user # Atribui o usuario logado a tarefa

         tarefa.save() # Salva a tarefa

         form.save_m2m() # Salva as relacoes ManyToMany do form
         return redirect('home')
   else:
      form = TarefaForm()

   return render(request, 'tarefas/adicionar.html', {'form': form})

def tarefa(request, id):
   tarefa = get_object_or_404(Tarefa, id=id)
   etiquetas = tarefa.etiquetas.all()

   return render(request, 'tarefas/tarefa.html', {'tarefa': tarefa})