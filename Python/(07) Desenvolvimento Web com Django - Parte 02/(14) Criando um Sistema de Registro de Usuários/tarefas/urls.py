from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView, LoginView

urlpatterns = [
   path('', views.home, name='home'),
   path('adicionar', views.add, name='adicionar'),
   path('tarefa/<int:id>', views.tarefa, name='tarefa'),
   path('login/', LoginView.as_view(), name='login'),
   path('logout/', LogoutView.as_view(), name='logout'),
   path('register/', views.register, name='register'),
]