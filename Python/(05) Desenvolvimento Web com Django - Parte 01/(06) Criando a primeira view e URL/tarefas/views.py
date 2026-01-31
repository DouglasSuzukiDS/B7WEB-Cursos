from django.shortcuts import render
from django.http import HttpResponse

def home(request):
   frase = 'Hello World'
   return HttpResponse(frase)

def add (request):
   return HttpResponse('Tela de adicionar nova tarefa')